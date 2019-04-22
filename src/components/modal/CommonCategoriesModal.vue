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
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li v-for="(item, i) in myArray2" :key="`key-${i}`">
                <span>
                  {{ item }}
                  <i>
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
              >
                {{ item }}
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
            <li v-for="(item, i) in myArray" :key="i">
              <span>
                {{ item }}
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

  let myArray = [
    "迈瑞",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦"
  ];

  let myArray2 = ["主电缆", "激光手术设备", "医用激光光纤"];

  let myArr = ["电子超声", "临床检验", "试验仪器", "医学影像"];

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
        myArray,
        myArray2,
        myArr
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
    components: {
      modal,
      draggable
    },
    methods: {
      handleOk() {
        this.visible = false;
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