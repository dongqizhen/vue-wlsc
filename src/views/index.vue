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
      <product-category-vue></product-category-vue>
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
          <recommends-tab-vue
            :tabs="['推荐产品(12)', '文章(9)', '视频(8)', '案例(8)']"
            v-on:tabClick="tabClick"
          ></recommends-tab-vue>
          <div class="recommend_page">
            <ul class="floor" v-if="recommend_tabs_index == 0">
              <li>
                <h2>
                  <p>1F 电子超声</p>
                  <ul>
                    <li>心电图机</li>
                    <li>心电图工作站</li>
                    <li>心电工作站</li>
                    <li>心电工作站</li>
                  </ul>
                  <router-link
                    tag="span"
                    :to="{
                      path: '/lookingProduct/oneOfBrandClassificne',
                      query: { nav_index: 1 }
                    }"
                  >
                    <a target="_blank">
                      更多
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconhuangsegengduo"></use>
                      </svg>
                    </a>
                  </router-link>
                </h2>
                <div class="content">
                  <div class="left"></div>
                  <ul class="right">
                    <product-item></product-item>
                  </ul>
                </div>
              </li>
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
    <common-brands-modal-vue
      :brandVisible="brandVisible"
    ></common-brands-modal-vue>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import Header from "../components/header/header.vue";
  import Footer from "../components/footer/footer.vue";
  import sideBar from "../components/sideBar/sideBar.vue";
  import banner from "../components/common/banner.vue";

  import { Icon } from "ant-design-vue";
  import caseItem from "../components/common/item/caseItem.vue";
  import articleItem from "../components/common/item/articleItem.vue";
  import videoItem from "../components/common/item/videoItem.vue";
  import productItem from "../components/common/item/productItem.vue";
  import search from "../components/common/search.vue";
  import Nav from "../components/common/nav.vue";
  import productCategoryVue from "../components/common/productCategory.vue";
  import recommendsTabVue from "../components/common/recommendsTab.vue";
  import CommonBrandsModalVue from "../components/modal/CommonBrandsModal.vue";

  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
  });

  export default {
    data() {
      return {
        recommend_tabs_index: 0,
        brandVisible: false //控制modal层弹出
      };
    },
    components: {
      Header,
      Footer,
      search,
      sideBar,
      banner,
      CommonBrandsModalVue,
      IconFont,
      caseItem,
      articleItem,
      videoItem,
      productItem,
      Nav,
      productCategoryVue,
      recommendsTabVue
    },
    methods: {
      tabClick(i) {
        this.recommend_tabs_index = i;
      },
      moreButtonClick() {},
      handleClick() {
        this.brandVisible = true;
      }
    },
    mounted() {
      // console.log(Swiper);
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
                  font-weight: 600;
                  font-size: 18px;
                  color: #666;
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
          .recommend_page {
            .floor {
              > li {
                margin-bottom: 30px;
                &:last-child {
                  margin-bottom: 0;
                }
                > a {
                  text-decoration: none;

                  .content ul {
                    li {
                      &:hover {
                        > p {
                          color: $theme-color;
                        }
                      }
                    }
                  }
                }
                h2 {
                  display: flex;
                  justify-content: space-between;
                  height: 43px;
                  align-items: center;
                  p {
                    width: 224px;
                    background: #f5a623;
                    height: 100%;
                    border-radius: 20px 20px 0 0;
                    display: flex;
                    align-items: center;
                    font-family: PingFangSC-Medium;
                    font-size: 18px;
                    color: #ffffff;
                    padding-left: 27px;
                  }
                  ul {
                    display: flex;
                    justify-content: flex-end;
                    flex: 1;
                    height: 100%;
                    align-items: flex-end;
                    border-bottom: 1px solid #f5a623;
                    padding-bottom: 3px;
                    li {
                      font-family: PingFangSC-Regular;
                      font-size: 14px;
                      color: #333333;
                      margin-right: 30px;
                      cursor: pointer;
                      &:hover {
                        color: $theme-color;
                      }
                    }
                  }
                  span {
                    //font-family: PingFangSC-Regular;
                    display: flex;
                    align-items: flex-end;
                    height: 100%;
                    a {
                      font-size: 14px;
                      color: #666666;
                      display: flex;
                      align-items: flex-end;
                      cursor: pointer;
                      height: 100%;
                      text-decoration: none;
                      border-bottom: 1px solid #f5a623;
                      padding-bottom: 3px;
                      .icon {
                        margin-left: 7px;
                        margin-bottom: 3px;
                      }
                    }
                  }
                }
                .content {
                  height: 382px;
                  display: flex;
                  justify-content: flex-start;
                  .left {
                    width: 224px;
                    background: #fff;
                    box-shadow: $base-box-shadow;
                  }
                  .right {
                    flex: 1;
                    padding-left: 17px;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 4px;
                  }
                }
              }
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
