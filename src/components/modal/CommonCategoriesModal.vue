<template>
  <div class="Common-Categories-Modal">
    <modal :isShow="visible" :options="options">
      <div slot="content">
        <div class="common_brand">
          <h2>常用分类<span>鼠标拖拽可排序，点击“x”取消</span></h2>
          <draggable
            class="list-group"
            v-model="myArray2"
            v-bind="dragOptions"
            @start="drag = true"
            @end="end"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li v-for="(item, i) in myArray2" :key="`key-${i}`">
                <span>
                  {{ item.name }}
                  <i @click="delHandleClick(item)">
                    <svg class="icon" aria-hidden="true">
                      <use
                        xlink:href="#iconguanlichangyongfenleiquxiaochahao"
                      ></use>
                    </svg>
                  </i>
                </span>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="all_brand">
          <h2>全部分类<span>点击即可设为常用分类</span></h2>
          <div class="word_nav swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, i) in myArr"
                :key="`item-${i}`"
                @click="getSecond(item.id)"
              >
                {{ item.name }}
              </div>
              <div class="bar"><i></i></div>
            </div>
          </div>

          <!-- <draggable
            v-model="myArray"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            > -->
          <ul class="common">
            <li
              v-for="item in myArray"
              :key="item.id"
              @click="handleClick(item)"
            >
              <span>
                {{ item.name }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanlichangyongfenleijiahao"></use>
                  </svg>
                </i>
              </span>
            </li>
          </ul>

          <!-- </transition-group>
          </draggable> -->
        </div>
        <a-button
          key="submit"
          type="primary"
          @click="handleOk"
          :loading="false"
        >
          完成
        </a-button>
      </div>
    </modal>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  import modal from "./modal.vue";
  import Swiper from "swiper";
  import { _getData } from "../../config/getData";
  import _ from "lodash";

  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "管理常用分类",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand commonType",
          centered: false
        },
        drag: false,
        myArray: [], //二级分类
        myArray2: [], //常用分类
        myArr: [] //一级分类
      };
    },
    props: {
      Visible: {
        type: Boolean,
        default: false
      }
    },
    updated() {
      this.$nextTick().then(() => {
        new Swiper(".swiper-container.word_nav", {
          slidesPerView: "auto",
          // freeMode: true,
          direction: "horizontal",
          slideToClickedSlide: true,
          touchRatio: 0,
          on: {
            init: function() {
              if (this.slides[0] == undefined) return;
              this.navSlideWidth = this.slides[0].clientWidth; //导航字数需要统一,每个导航宽度一致

              this.bar = this.$el.find(".bar");

              this.bar.transition(300);
              this.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

              this.clientWidth = parseInt(this.$wrapperEl[0].clientWidth); //Nav的可视宽度

              this.navWidth = this.navSlideWidth * this.slides.length;
            },
            touchStart: function() {
              this.updateSlides();
            },
            tap: function(e) {
              console.log(this);
              if (this.clickedIndex == undefined) return;
              // mySwiper.slideTo(this.clickIndex, 0);
              const activeSlidePosition = this.slides[this.clickedIndex]
                .offsetLeft;

              this.bar.transform("translateX(" + activeSlidePosition + "px)");

              // console.log(this.slides[this.clickedIndex]);
              // this.slides[this.clickedIndex].classList.add("active");
              //导航居中
              // let navActiveSlideLeft = this.slides[this.clickedIndex].offsetLeft; //activeSlide距左边的距离
              this.setTransition(300);

              if (this.navWidth <= this.clientWidth) {
                this.setTranslate(0);
                return;
              }

              if (
                activeSlidePosition <
                (this.clientWidth - parseInt(this.navSlideWidth)) / 2
              ) {
                this.setTranslate(0);
              } else if (
                activeSlidePosition >
                this.navWidth -
                  (parseInt(this.navSlideWidth) + this.clientWidth) / 2
              ) {
                this.setTranslate(this.clientWidth - this.navWidth);
              } else {
                this.setTranslate(
                  (this.clientWidth - parseInt(this.navSlideWidth)) / 2 -
                    activeSlidePosition +
                    parseInt(this.marginLeft)
                );
              }
            }
          }
        });
      });
    },
    mounted() {
      //获取常用分类
      _getData("ucatalog/list", {}).then(data => {
        console.log("data", data);
        this.myArray2 = data.userCategoryList;
      });
      //获取一级分类
      _getData("catalog/first", {})
        .then(data => {
          console.log("data", data);
          this.myArr = data.categoryList;
        })
        .then(() => {
          this.getSecond(this.myArr[0].id);
        });
    },
    components: {
      modal,
      draggable
    },
    methods: {
      end(e) {
        this.drag = false;
        this.saveCategory();
      },
      handleOk() {
        this.visible = false;
      },
      //删除常用品牌
      delHandleClick(item) {
        this.myArray2 = _.without(this.myArray2, item);
        console.log(this.myArray2);
        this.saveCategory();
      },
      handleClick(item) {
        console.log(item);
        let commonArr = _.intersectionBy(this.myArray2, [item], "name");
        if (commonArr.length) {
          this.$message.warning("已添加至常用分类", 1);
          return;
        } else {
          this.myArray2.push(item);
        }
        this.saveCategory();
      },
      //保存常用分类
      async saveCategory() {
        return await _getData("ucatalog/custom", {
          categoryStr: _.join(_.map(this.myArray2, "id"), ",")
        }).then(data => {
          this.$emit("success");
        });
      },

      async getSecond(id) {
        //获取二级分类
        await _getData("catalog/second", {
          id
        }).then(data => {
          this.myArray = data.subCategory;
        });
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    },
    watch: {
      Visible(newVal) {
        this.visible = newVal;
      },
      visible(newVal) {
        if (!newVal) {
          this.$parent.visible = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>