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
                <div class="left">
                  <ul
                    class="recommend_article"
                    v-if="recommend_tabs_index == 1"
                  >
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
                </div>
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

  export default {
    data() {
      return {
        routes: [],
        recommend_tabs_index: 0, //推荐nav标识
        nav: ["型号(65)", "文章(65)", "视频(65)", "案例(65)"]
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
      videoItem
    },
    methods: {
      categoryClick(item) {
        console.log(item);
        this.categoryId = item.id;
      },
      tabClick(i) {
        this.recommend_tabs_index = i;
      }
    },
    created() {
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
        .left {
          width: 187px;
          margin-right: 30px;
          background: #fff;
          box-shadow: $base-box-shadow;
          height: auto;
          //position: absolute;
          align-self: flex-start;
        }
        .right {
          width: $content-left;
          display: flex;
          flex-direction: column;
          /deep/ .recommend_tabs {
            margin: 0;
            margin-bottom: 24px;
          }
        }
      }
    }
  }
</style>