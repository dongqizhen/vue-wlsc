<template>
  <div class="search">
    <Header></Header>
    <search></search>
    <Nav></Nav>
    <div class="container">
      <div class="commonWidth">
        <breadcrumb-vue :routes="routes"></breadcrumb-vue>
        <product-category-vue
          :canSkip="false"
          v-on:categoryClick="categoryClick"
        ></product-category-vue>
        <div class="main-content">
          <div class="left">
            <shop-left-side-vue></shop-left-side-vue>
          </div>
          <div class="right">
            <recommends-tab-vue
              :tabs="nav"
              v-if="nav.length"
              v-on:tabClick="tabClick"
            ></recommends-tab-vue>
            <div class="recommend_page">
              <div class="recommend_content_box">
                <div class="left" v-if="!isLoading">
                  <div v-if="recommend_tabs_index == 0">
                    <ul v-if="list.storeList && list.storeList.length">
                      <shop-item-vue
                        v-for="item in list.storeList"
                        :key="item.id"
                        :item="item"
                      ></shop-item-vue>
                    </ul>
                    <no-data
                      v-else
                      type="no-search"
                      text="暂无搜索内容"
                    ></no-data>
                  </div>
                  <div v-if="recommend_tabs_index == 1">
                    <ul v-if="list.goodList && list.goodList.length">
                      <product-item-vue
                        v-for="item in list.goodList"
                        :key="item.id"
                        :list="item"
                      ></product-item-vue>
                    </ul>
                    <no-data
                      v-else
                      type="no-search"
                      text="暂无搜索内容"
                    ></no-data>
                  </div>
                  <div v-if="recommend_tabs_index == 2">
                    <ul
                      v-if="list.modelList && list.modelList.length"
                      class="model"
                    >
                      <model-item-vue
                        v-for="item in list.modelList"
                        :key="item.id"
                        :item="item"
                      ></model-item-vue>
                    </ul>
                    <no-data
                      v-else
                      type="no-search"
                      text="暂无搜索内容"
                    ></no-data>
                  </div>
                </div>
                <loading v-else></loading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";
  import breadcrumbVue from "../../../components/common/breadcrumb.vue";
  import shopLeftSideVue from "../../../components/common/shopLeftSide.vue";
  import productCategoryVue from "../../../components/common/productCategory.vue";
  import recommendsTabVue from "../../../components/common/recommendsTab.vue";
  import articleItem from "../../../components/common/item/articleItem.vue";
  import caseItem from "../../../components/common/item/caseItem.vue";
  import videoItem from "../../../components/common/item/videoItem.vue";
  import { _getData } from "../../../config/getData";
  import shopItemVue from "../../../components/common/item/shopItem.vue";
  import productItemVue from "../../../components/common/item/productItem.vue";
  import modelItemVue from "../../../components/common/item/modelItem.vue";

  export default {
    data() {
      return {
        routes: [],
        recommend_tabs_index: 0, //推荐nav标识
        nav: ["店铺", "产品", "型号"],
        list: "",
        isLoading: false
      };
    },
    components: {
      Header,
      Footer,
      search,
      Nav,
      breadcrumbVue,
      shopLeftSideVue,
      productCategoryVue,
      recommendsTabVue,
      articleItem,
      caseItem,
      videoItem,
      shopItemVue,
      productItemVue,
      modelItemVue
    },
    mounted() {
      this.getSearchList(this.$route.query.val);
    },

    methods: {
      categoryClick(item) {
        console.log(item);
        this.categoryId = item.id;
      },
      tabClick(i) {
        this.recommend_tabs_index = i;
      },
      async getSearchList(val) {
        this.isLoading = true;
        return await _getData("common/search", {
          name: val
        })
          .then(data => {
            console.log("搜索内容", data);
            this.list = data;
          })
          .then(() => {
            this.$nextTick().then(() => {
              this.isLoading = false;
            });
          });
      }
    },
    created() {
      console.log(this);
      this.routes = [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "搜索结果",
          path: "/search"
        }
      ];
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to, from);
      this.getSearchList(to.query.val);
      this.$children[1].value = to.query.val;
      next();
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .search {
    /deep/ .product-category {
      h2 {
        .btn {
          display: none;
        }
      }
    }
    .container {
      .main-content {
        display: flex;
        justify-content: flex-start;
        position: relative;
        > .left {
          width: 187px;
          margin-right: 30px;
          background: #fff;
          box-shadow: $base-box-shadow;
          height: auto;
          //position: absolute;
          align-self: flex-start;
        }
        > .right {
          //width: $content-left;
          display: flex;
          flex: 1;
          flex-direction: column;
          /deep/ .recommend_tabs {
            margin: 0;
            width: 100%;
            margin-bottom: 24px;
          }
          .recommend_page {
            .recommend_content_box {
              width: 100%;
              display: flex;

              .left {
                display: flex;
                width: 100%;
                > div {
                  margin-right: -25px;
                  // width: 100%;
                  display: flex;
                  > ul {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    &.model {
                      width: 807px;
                      li {
                        width: 100%;
                      }
                    }
                  }
                  /deep/ .no-data {
                    height: 500px;
                    background: #fff;
                    width: 807px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>