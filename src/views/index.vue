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
      <brand-category-vue></brand-category-vue>
      <!-- 推荐产品 -->
      <div class="recommend">
        <div class="commonWidth">
          <recommends-tab-vue
            :tabs="nav"
            v-if="nav.length"
            v-on:tabClick="tabClick"
          ></recommends-tab-vue>
          <div class="recommend_page">
            <ul class="floor" v-if="recommend_tabs_index == 0">
              <li
                v-for="(item, i) in goodList"
                :key="item.id"
                :class="
                  i % 4 == 0
                    ? 'one'
                    : i % 4 == 1
                    ? 'two'
                    : i % 4 == 2
                    ? 'three'
                    : 'four'
                "
              >
                <h2>
                  <p>{{ i + 1 }}F {{ item.name }}</p>
                  <ul>
                    <router-link
                      tag="li"
                      :to="{
                        path: '/lookingProduct/oneOfBrandClassificne',
                        query: {
                          nav_index: 1,
                          categoryId: v.id,
                          categoryName: v.name
                        }
                      }"
                      v-for="v in item.categoryList"
                      :key="v.id"
                    >
                      <a target="_blank"> {{ v.name }}</a>
                    </router-link>

                    <!-- path: '/lookingProduct/oneOfBrandClassificne',
                      query: {
                        nav_index: 1,
                        categoryId: item.id,
                        categoryName: item.name
                      } -->
                  </ul>
                  <router-link
                    tag="span"
                    :to="{
                      path: '/lookingProduct',
                      query: {
                        nav_index: 1,
                        categoryId: item.id,
                        categoryName: item.name
                      }
                    }"
                  >
                    <a target="_blank">
                      更多
                      <svg class="icon" aria-hidden="true">
                        <use
                          :xlink:href="
                            i % 4 == 0
                              ? '#iconhuangsegengduo'
                              : i % 4 == 1
                              ? '#iconlvsegengduo'
                              : i % 4 == 2
                              ? '#iconzisegengduo'
                              : '#iconlansegengduo'
                          "
                        ></use>
                      </svg>
                    </a>
                  </router-link>
                </h2>
                <div class="content">
                  <div class="left">
                    <img :src="item.banner_url" alt="" />
                  </div>
                  <ul class="right">
                    <product-item
                      v-for="val in item.goodsList"
                      :key="val.id"
                      :list="val"
                    ></product-item>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="recommend_content_box" v-else>
              <div class="left">
                <ul class="recommend_article" v-if="recommend_tabs_index == 1">
                  <article-item
                    v-for="item in articleList"
                    :key="item.id"
                    :item="item"
                  ></article-item>
                </ul>
                <ul class="recommond_video" v-if="recommend_tabs_index == 2">
                  <video-item
                    v-for="item in videoList"
                    :key="item.id"
                    :item="item"
                  ></video-item>
                </ul>
                <ul class="recommond_case" v-if="recommend_tabs_index == 3">
                  <case-item
                    v-for="item in maintenanceList"
                    :key="item.id"
                    :item="item"
                  ></case-item>
                </ul>
                <a-button @click="skip">
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
  import { _getData } from "../config/getData";
  import brandCategoryVue from "../components/common/brandCategory.vue";

  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
  });

  export default {
    data() {
      return {
        recommend_tabs_index: 0, //推荐nav标识
        goodList: [], //产品
        articleList: [], //案列,
        videoList: [], //视频
        maintenanceList: [],
        nav: ["推荐产品(0)", "文章(0)", "视频(0)", "案例(0)"]
        // background: ["#F5A623", "#43D480", "#8880FE", "#0283FF"]
      };
    },
    mounted() {
      //获取推荐数量
      _getData("index/caseCount", {}).then(data => {
        console.log("data", data);
        this.nav = [
          `推荐产品(${data.count || 0})`,
          `文章(${data.articleNum || 0})`,
          `视频(${data.videoNum || 0})`,
          `案例(${data.maintenanceNum || 0})`
        ];
      });
      _getData("goods/homePagelist", {}).then(data => {
        console.log("推荐产品", data);
        this.goodList = data.list;
      });
      //文章
      _getData(`${this.$API_URL.HYGLOGINURL}/server/article!request.action`, {
        method: "getTopArticleListV30",
        token: "",
        userid: "",
        version: "3.0.0",
        deviceId: "",
        source: "",
        params: {
          currentPage: 1,
          countPerPage: 9
        }
      }).then(data => {
        console.log("1111", data);
        this.articleList = data.data.result.articlelist;
      });
      //案例
      _getData(
        `${this.$API_URL.HYGPROURL}/server_pro/maintenance!request.action`,
        {
          method: "getHomeRecommendListV30",
          token: "",
          userid: "",
          version: "3.0.0",
          deviceId: "",
          source: "",
          params: {}
        }
      ).then(data => {
        console.log("222", data);
        this.maintenanceList = data.data.result.maintenancelist;
      });
      //视频
      _getData(`${this.$API_URL.HYGPROURL}/server_pro/video!request.action`, {
        method: "getHomeRecommendListV30",
        token: "",
        userid: "",
        version: "3.0.0",
        deviceId: "",
        source: "",
        params: {}
      }).then(data => {
        console.log("333", data);
        this.videoList = data.data.result.videolist;
      });
    },
    components: {
      Header,
      Footer,
      search,
      sideBar,
      banner,
      IconFont,
      caseItem,
      articleItem,
      videoItem,
      productItem,
      Nav,
      productCategoryVue,
      recommendsTabVue,
      brandCategoryVue
    },
    methods: {
      tabClick(i) {
        this.recommend_tabs_index = i;
      },
      moreButtonClick() {},
      //查看全部
      skip() {
        console.log(this.recommend_tabs_index);
        switch (this.recommend_tabs_index) {
          case 1:
            window.open(
              "http://www.haoyigong.com/industryinfomation/industryInfomation_index.html"
            );
            break;
          case 2:
            window.open(
              "http://www.haoyigong.com/MicroClassroom/ClassroomList.html"
            );
            break;
          case 3:
            window.open("http://www.haoyigong.com/maintenance/repair.html");
            break;
        }
      },
      handleClick() {
        this.brandVisible = true;
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
                    // font-family: PingFangSC-Medium;
                    font-size: 18px;
                    font-weight: 600;
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
                      // font-family: PingFangSC-Regular;
                      font-size: 14px;

                      margin-right: 30px;
                      cursor: pointer;
                      a {
                        color: #333333;
                        text-decoration: none;
                        &:hover {
                          color: $theme-color;
                        }
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
                      &:hover {
                        opacity: 0.7;
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
                    img {
                      height: 100%;
                      width: 100%;
                    }
                  }
                  .right {
                    flex: 1;
                    padding-left: 17px;
                    display: flex;
                    justify-content: flex-start;
                    padding-top: 4px;
                    li {
                      margin-right: 12px;
                      &:last-child {
                        margin-right: 0;
                      }
                    }
                  }
                }
                &.two {
                  h2 {
                    p {
                      background: #43d480;
                    }
                    ul {
                      border-color: #43d480;
                    }
                    span {
                      a {
                        border-color: #43d480;
                      }
                    }
                  }
                }
                &.three {
                  h2 {
                    p {
                      background: #8880fe;
                    }
                    ul {
                      border-color: #8880fe;
                    }
                    span {
                      a {
                        border-color: #8880fe;
                      }
                    }
                  }
                }
                &.four {
                  h2 {
                    p {
                      background: #0283ff;
                    }
                    ul {
                      border-color: #0283ff;
                    }
                    span {
                      a {
                        border-color: #0283ff;
                      }
                    }
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
