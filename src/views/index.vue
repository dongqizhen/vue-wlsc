<template>
  <div class="index">
    <!-- 头部 -->
    <Header />
    <!-- 搜索 -->
    <search></search>
    <!-- 头部TAB -->
    <Nav></Nav>
    <div class="container">
      <!-- 轮播图 -->
      <banner />
      <!-- 产品分类 -->
      <div class="product">
        <div class="commonWidth">
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconchanpinfenlei"></use>
              </svg>
              产品分类
            </span>
            <span class="btn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconguanlichangyongfenlei"></use>
              </svg>
              管理常用分类
            </span>
          </h2>
          <div class="product_container">
            <div class="swiper-container nav_slide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">常用分类</div>
                <div class="swiper-slide">电子超声</div>
                <div class="swiper-slide">临床检验</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
                <div class="bar"><i></i></div>
              </div>
            </div>
            <div class="swiper-container page">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <ul>
                    <li>超声手术设备</li>
                    <li>高强度超声治疗设备</li>
                    <li>超声手术设备附件</li>
                    <li>X 射线高压发生器</li>
                    <li>X射线管</li>
                    <li>X射线管组件</li>
                    <li>限束装置</li>
                    <li>高强度超声治疗设备</li>
                    <li>激光手术设备</li>
                    <li>医用激光光纤</li>
                    <li>主电缆</li>
                    <li>超声手术设备</li>
                    <li>高强度超声治疗设备</li>
                    <li>超声手术设备附件</li>
                    <li>X 射线高压发生器</li>
                    <li>X射线管</li>
                    <li>X射线管组件</li>
                    <li>限束装置</li>
                    <li>高强度超声治疗设备</li>
                    <li>激光手术设备</li>
                    <li>医用激光光纤</li>
                    <li>主电缆</li>
                  </ul>
                </div>
                <div class="swiper-slide">电子超声</div>
                <div class="swiper-slide">临床检验</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 品牌分类 -->
      <div class="brand">
        <div class="commonWidth">
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconchanpinfenlei"></use>
              </svg>
              品牌分类
            </span>
            <span class="btn" @click="handleClick">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconguanlichangyongfenlei"></use>
              </svg>
              管理常用品牌
            </span>
          </h2>
          <div class="product_container">
            <div class="swiper-container nav_slide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">常用分类</div>
                <div class="swiper-slide">电子超声</div>
                <div class="swiper-slide">临床检验</div>
                <div class="swiper-slide">实验仪器</div>

                <div class="bar"><i></i></div>
              </div>
            </div>
            <div class="swiper-container page">
              <div class="swiper-wrapper">
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐产品 -->
      <div class="recommend">
        <div class="commonWidth">
          <div class="swiper-container recommend_tabs">
            <div class="swiper-wrapper">
              <div class="swiper-slide active">推荐产品(12)</div>
              <div class="swiper-slide">推荐文章(9)</div>
              <div class="swiper-slide">推荐视频(8)</div>
              <div class="swiper-slide">推荐案例(8)</div>

              <div class="bar"></div>
            </div>
          </div>
          <div class="recommend_page">
            <ul class="floor" v-if="recommend_tabs_index == 0">
              <product-item></product-item>
            </ul>
            <div class="recommend_content_box" v-else>
              <div class="left">
                <ul class="recommend_article" v-if="recommend_tabs_index == 1">
                  <article-item></article-item>
                </ul>
                <ul class="recommond_video" v-if="recommend_tabs_index == 2">
                  <video-item></video-item>
                </ul>
                <ul class="recommond_case" v-if="recommend_tabs_index == 3">
                  <case-item></case-item>
                </ul>
                <a-button>
                  查看全部
                  <icon-font type="iconchakanquanbu" />
                </a-button>
              </div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer />
    <!-- 侧边栏 -->
    <side-bar />
    <modal :isShow="visible" :options="options">
      <div slot="content">
        <div class="common_brand">
          <h2>常用品牌<span>鼠标拖拽可排序，点击“x”取消</span></h2>
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
                <div class="img_box"></div>
                {{ item }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use
                      xlink:href="#iconguanlichangyongpinpaiquxiaochahao"
                    ></use>
                  </svg>
                </i>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="all_brand">
          <h2>全部分类<span>点击即可设为常用分类</span></h2>
          <div class="word_nav">
            <span>全部</span>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
            </ul>
            <div class="inp_box">
              <input type="text" placeholder="请输入品牌名称" />
              <span>搜索</span>
            </div>
          </div>

          <draggable
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
            >
              <li v-for="(item, i) in myArray" :key="i">
                <div class="img_box"></div>
                {{ item }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanlichangyongpinpaitianjia"></use>
                  </svg>
                </i>
              </li>
            </transition-group>
          </draggable>
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
  import Swiper from "swiper";
  import Header from "../components/header/header.vue";
  import Footer from "../components/footer/footer.vue";
  import sideBar from "../components/sideBar/sideBar.vue";
  import banner from "../components/common/banner.vue";
  import modal from "../components/common/modal.vue";
  import draggable from "vuedraggable";
  import { Icon } from "ant-design-vue";
  import caseItem from "../components/common/item/caseItem.vue";
  import articleItem from "../components/common/item/articleItem.vue";
  import videoItem from "../components/common/item/videoItem.vue";
  import productItem from "../components/common/item/productItem.vue";
  import search from "../components/common/search.vue";
  import Nav from "../components/common/nav.vue";

  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
  });
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

  let myArray2 = ["西门子", "奔腾"];

  export default {
    data() {
      return {
        visible: false, //控制modal层弹出
        options: {
          title: "管理常用品牌",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand",
          centered: true
        },
        myArray,
        myArray2,
        drag: false,
        recommend_tabs_index: 1
      };
    },
    components: {
      Header,
      Footer,
      search,
      sideBar,
      banner,
      modal,
      draggable,
      IconFont,
      caseItem,
      articleItem,
      videoItem,
      productItem,
      Nav
    },
    methods: {
      handleClick() {
        this.visible = true;
      },
      handleOk() {
        this.visible = false;
      }
    },
    mounted() {
      // console.log(Swiper);

      new Swiper(".swiper-container.nav_slide", {
        slidesPerView: "auto",
        // freeMode: true,
        direction: "horizontal",
        slideToClickedSlide: true,
        on: {
          init: function() {
            console.log(this);
            // this.marginLeft = $(this.slides.eq(0)).css("margin-left");

            this.navSlideWidth = this.slides[0].clientWidth; //导航字数需要统一,每个导航宽度一致
            console.log(this.navSlideWidth);
            /*  bar = this.$el.find('.bar')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             bar.css('width', this.navSlideWidth)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             bar.transition(tSpeed) */
            this.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

            this.clientWidth = parseInt(this.$wrapperEl.clientWidth); //Nav的可视宽度

            this.navWidth = this.navSlideWidth * this.slides.length;
            /*  for (i = 0; i < this.slides.length; i++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      this.navWidth += parseInt($(this.slides.eq(i)).outerWidth(true));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } */
            //topBar = this.$el.parents('body').find('#top') //页头
          },
          touchStart: function() {
            this.updateSlides();
          },
          tap: function(e) {
            console.log(this);
            if (this.clickedIndex == undefined) return;
            // mySwiper.slideTo(this.clickIndex, 0);

            /* $(this.slides[this.clickedIndex])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  .addClass("active")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  .siblings()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  .removeClass("active"); */
            //导航居中
            let navActiveSlideLeft = this.slides[this.clickedIndex].offsetLeft; //activeSlide距左边的距离
            this.setTransition(300);

            if (parseInt(this.navWidth) <= this.clientWidth) {
              this.setTranslate(0);
            } else {
              if (
                navActiveSlideLeft <
                (this.clientWidth - parseInt(this.navSlideWidth)) / 2
              ) {
                this.setTranslate(0);
              } else if (
                navActiveSlideLeft >
                this.navWidth -
                  (parseInt(this.navSlideWidth) + this.clientWidth) / 2
              ) {
                this.setTranslate(this.clientWidth - this.navWidth);
              } else {
                this.setTranslate(
                  (this.clientWidth - parseInt(this.navSlideWidth)) / 2 -
                    navActiveSlideLeft +
                    parseInt(this.marginLeft)
                );
              }
            }
          }
        }
      });
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
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/_commonScss";
  .index {
    .container {
      background: #f7f9fa;
      padding-bottom: 110px;

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
          font-family: PingFangSC-Medium;
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
          font-family: PingFangSC-Regular;
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
                  font-family: PingFangSC-Medium;
                  font-size: 18px;
                  color: #999999;
                }
                .bar {
                  position: absolute;
                  height: 3px;
                  width: 180px;
                  background: #f5a623;
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

                    border-bottom: 6px solid #f5a623;
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
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: #666666;
                  margin-bottom: 20px;
                  margin-right: 30px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .brand {
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
                  font-family: PingFangSC-Medium;
                  font-size: 18px;
                  color: #999999;
                }
                .bar {
                  position: absolute;
                  height: 3px;
                  width: 180px;
                  background: #f5a623;
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

                    border-bottom: 6px solid #f5a623;
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
                padding: 18px 20px;
                padding-bottom: 0;
                li {
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: #666666;
                  margin-bottom: 20px;
                  margin-right: 30px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .recommend {
        .commonWidth {
          .recommend_tabs {
            height: 35px;
            margin-bottom: 24px;
            margin-top: 40px;

            .swiper-wrapper {
              position: relative;
            }
            .swiper-slide {
              width: 116px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #666666;
              cursor: pointer;
              margin-right: 34px;
              border-radius: 16.5px;
              &.active {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: $theme-color;
                background: #fff;
              }
            }
            .bar {
              position: absolute;
              height: 35px;
              width: 116px;
              border: 1px solid $theme-color;
              border-radius: 16.5px;

              //background: #ffffff;
            }
          }
          .recommend_page {
            .floor {
            }
            .recommend_content_box {
              display: flex;
              justify-content: flex-start;
              .left {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                width: 768px;
              }
              .recommend_article {
                margin-bottom: 18px;
              }
              .recommond_video {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                margin-bottom: 14px;
              }
              .recommond_case {
                width: 100%;
                margin-bottom: 16px;
              }
              .ant-btn {
                width: 127px;
                height: 39px;
                background: #ffffff;
                border-radius: 32px;
                font-family: PingFangSC-Regular;
                //font-size: 16px;
                color: #333333;
                margin: 0 auto;

                &:hover {
                  color: $theme-color;
                  border-color: $theme-color;
                }
                &:active {
                  border-color: $theme-color;
                }
                &:focus {
                  border-color: $theme-color;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
