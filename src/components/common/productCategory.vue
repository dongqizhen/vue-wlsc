<template>
  <div class="product-category">
    <div class="product">
      <div class="commonWidth">
        <h2>
          <span class="title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconchanpinfenlei"></use>
            </svg>
            产品分类
          </span>
          <span class="btn" @click="handleClick" v-if="isShow">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconguanlichangyongfenlei"></use>
            </svg>
            管理常用分类
          </span>
        </h2>
        <div class="product_container">
          <div class="swiper-container nav_slide">
            <div class="swiper-wrapper">
              <!-- <div
                class="swiper-slide"
                @click="navHandleClick()"
                v-if="isLogin"
              >
                常用分类
              </div> -->
              <div
                class="swiper-slide"
                v-for="(item, i) in navArr"
                :key="item.id"
                :class="i == defaultsVal && 'active'"
                @click="navHandleClick(item.id, i, $event)"
              >
                {{ item.name }}
              </div>

              <div class="bar"><i></i></div>
            </div>
          </div>
          <div class="swiper-container page">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul v-if="canSkip">
                  <router-link
                    :to="{
                      path: '/lookingProduct/oneOfBrandClassificne',
                      query: {
                        nav_index: 1,
                        categoryId: item.id,
                        categoryName: item.name
                      }
                    }"
                    tag="li"
                    v-for="item in pageArr"
                    :key="item.id"
                  >
                    <a target="_blank">{{ item.name }}</a>
                  </router-link>
                </ul>
                <ul v-else>
                  <li
                    v-for="item in pageArr"
                    :key="item.id"
                    @click="categoryClick(item)"
                  >
                    <a>{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <common-categories-modal-vue
          :Visible="visible"
          v-on:success="success"
        ></common-categories-modal-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import CommonCategoriesModalVue from "../modal/CommonCategoriesModal.vue";
  import { _getData } from "../../config/getData";
  import { mapState, mapMutations } from "vuex";
  import _ from "lodash";

  export default {
    data() {
      return {
        visible: false, //控制modal层弹出
        defaultsVal: 0, //默认高亮nav下标
        isShow: true, //是否显示管理常用分类按钮
        navArr: [],
        pageArr: []
      };
    },
    props: {
      canSkip: {
        //是否可以跳转页面
        type: Boolean,
        default: true
      }
    },
    components: {
      CommonCategoriesModalVue
    },
    methods: {
      //点击某一类
      categoryClick(item) {
        this.$emit("categoryClick", item, this.navArr[this.defaultsVal]);
      },
      //控制弹出层显示
      handleClick() {
        this.visible = true;
      },
      success() {
        this.getCommonCategory();
      },
      //获取常用分类
      async getCommonCategory() {
        _getData("ucatalog/list", {}).then(data => {
          console.log("data", data);
          this.pageArr = data.userCategoryList;
        });
      },
      //点击nav
      navHandleClick(id, i, e) {
        //点击nav
        if (id) {
          this.isShow = false;
          this.pageArr = this.navArr[i].subCategoryList;
        } else {
          this.isShow = true;
          this.getCommonCategory();
        }
        this.defaultsVal = i;
      }
    },
    computed: {
      ...mapState(["isLogin"])
    },
    created() {
      //如果登录 则显示常用分类
      if (this.isLogin) {
        this.navArr.push({
          name: "常用分类",
          id: ""
        });
      }
    },
    mounted() {
      this.getCommonCategory();
      _getData("catalog/listAll", {})
        .then(data => {
          console.log(data);
          this.navArr = [...this.navArr, ...data.currentCategory];
        })
        .then(() => {
          this.$nextTick().then(() => {
            new Swiper(".product-category .swiper-container.nav_slide", {
              slidesPerView: "auto",
              // freeMode: true,
              direction: "horizontal",
              slideToClickedSlide: true,
              on: {
                init: function() {
                  this.navSlideWidth = this.slides[0].clientWidth; //导航字数需要统一,每个导航宽度一致

                  this.bar = this.$el.find(".bar");

                  this.bar.transition(300);
                  this.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

                  this.clientWidth = parseInt(this.$wrapperEl[0].clientWidth); //Nav的可视宽度

                  this.navWidth = this.navSlideWidth * this.slides.length;
                },
                touchStart: function() {
                  this.updateSlides();
                  this.updateSize();
                },
                tap: function(e) {
                  //console.log(this);
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
        });
    },
    watch: {
      navArr(newVal, oldVal) {
        console.log(555555555, newVal, oldVal);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  %h2 {
    height: 42px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    span {
      display: flex;
      align-items: center;
    }
    span.title {
      font-weight: 600;
      font-size: 16px;
      color: #333333;
      line-height: 16px;

      .icon {
        width: 19px;
        height: 13px;
        margin-right: 7px;
      }
    }
    span.btn {
      font-size: 14px;
      color: #999999;
      line-height: 14px;
      cursor: pointer;
      .icon {
        width: 13px;
        height: 14px;
        margin-right: 5px;
        margin-top: 1px;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .product {
    margin-bottom: 25px;
    .commonWidth {
      h2 {
        @extend %h2;
      }
      .product_container {
        background: #ffffff;
        box-shadow: $base-box-shadow;
        .swiper-container.nav_slide {
          height: 63px;
          border-bottom: 0.5px solid #ccc;
          // overflow-y: auto;
          .swiper-wrapper {
            position: relative;
            height: 62px;

            .swiper-slide {
              width: 180px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              font-weight: 600;
              font-size: 18px;
              color: #666;
              &.active {
                color: $theme-color;
              }
              &:hover {
                color: $theme-color;
              }
            }
            .bar {
              position: absolute;
              height: 3px;
              width: 180px;
              background: $theme-color;
              bottom: -0.5px;
              i {
                display: flex;
                position: absolute;
                bottom: 1px;
                width: 0px;
                left: 50%;
                margin-left: -5.5px;
                height: 0px;
                border-left: 5.5px solid transparent;
                border-right: 5.5px solid transparent;

                border-bottom: 6px solid $theme-color;
              }
            }
          }
        }
        .page {
          //min-height: 200px;
          ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 20px 20px;
            padding-bottom: 0;
            li {
              font-size: 13px;
              color: #666666;
              margin-bottom: 20px;
              margin-right: 30px;
              cursor: pointer;
              a {
                color: #666666;
                text-decoration: none;
                &:hover {
                  color: $theme-color;
                }
              }
            }
          }
        }
      }
    }
  }
</style>