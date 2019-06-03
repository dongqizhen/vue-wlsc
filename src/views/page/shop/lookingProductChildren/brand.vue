<template>
  <div class="brand">
    <breadcrumb-vue :routes="routes"></breadcrumb-vue>
    <recommends-tab-vue
      :tabs="tabs"
      v-on:tabClick="tabClick"
      v-if="tabs.length"
    >
      <a-button slot="btn">
        <router-link
          :to="{
            path: '/comparisonOfParameters',
            query: {
              nav_index: $route.query.nav_index,
              modelId: $route.query.modelId,
              categoryId: $route.query.categoryId,
              categoryName: $route.query.categoryName
            }
          }"
          target="_blank"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconcanshuduibi"></use>
          </svg>
          参数对比
        </router-link>
      </a-button>
    </recommends-tab-vue>
    <div class="main-content">
      <div class="left">
        <shop-nav-vue
          :navArr="['按首字母排序', '按点击量排序']"
          v-on:tabClick="shopTabClick"
        ></shop-nav-vue>
        <div v-if="!isLoading">
          <div v-if="arr.length">
            <ul v-if="defaultVal == 0">
              <model-item-vue
                v-for="item in arr"
                :key="item.id"
                :item="item"
              ></model-item-vue>
            </ul>
            <ul class="recommend_article" v-if="defaultVal == 1">
              <article-item-vue
                v-for="item in arr"
                :key="item.id"
                :item="item"
              ></article-item-vue>
            </ul>
            <ul class="recommond_video" v-if="defaultVal == 2">
              <video-item-vue
                v-for="item in arr"
                :key="item.id"
                :item="item"
              ></video-item-vue>
            </ul>
            <ul class="recommond_case" v-if="defaultVal == 3">
              <case-item-vue
                v-for="item in arr"
                :key="item.id"
                :item="item"
              ></case-item-vue>
            </ul>
            <!-- <pagination :data=""></pagination> -->
          </div>
          <no-data v-else></no-data>
        </div>

        <loading-vue v-else></loading-vue>
      </div>
      <div class="right">
        <brand-card-vue></brand-card-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import shopNavVue from "../../../../components/common/shopNav.vue";
  import modelItemVue from "../../../../components/common/item/modelItem.vue";
  import brandCardVue from "../../../../components/common/brandCard.vue";
  import recommendsTabVue from "../../../../components/common/recommendsTab.vue";
  import breadcrumbVue from "../../../../components/common/breadcrumb.vue";
  import { _getData } from "../../../../config/getData";
  import loadingVue from "../../../../components/common/loading.vue";
  import videoItemVue from "../../../../components/common/item/videoItem.vue";
  import articleItemVue from "../../../../components/common/item/articleItem.vue";
  import caseItemVue from "../../../../components/common/item/caseItem.vue";
  import pagination from "../../../../components/common/pagination";

  export default {
    data() {
      return {
        arr: [],
        articleList: [],
        caseList: [],
        videoList: [],
        routes: [],
        defaultVal: 0,
        sort: 1,
        tabs: [],
        isLoading: true
      };
    },
    components: {
      shopNavVue,
      modelItemVue,
      brandCardVue,
      recommendsTabVue,
      breadcrumbVue,
      loadingVue,
      videoItemVue,
      articleItemVue,
      caseItemVue,
      pagination
    },
    methods: {
      shopTabClick(key, val) {
        this.sort = key ? 0 : 1;
        this.getList();
      },
      tabClick(i) {
        this.defaultVal = i;
        this.getList();
      },

      async getList() {
        this.arr = [];
        switch (this.defaultVal) {
          case 0:
            return await this.getModelList();
          case 1:
            return await this.getArticleList();

          case 2:
            return await this.getVideoList();

          case 3:
            return await this.getCaseList();
        }
      },
      async getModelList() {
        this.isLoading = true;
        return await _getData("brandmodel/list", {
          categoryId: this.$route.query.categoryId,
          brandId: this.$route.query.brandId,
          sortOrder: this.sort
        })
          .then(data => {
            console.log(data);
            this.arr = data.brandModelList;
          })
          .then(() => {
            //this.$nextTick().then(() => {});
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          });
      },
      //获取文章列表
      async getArticleList() {
        this.isLoading = true;
        return await _getData(
          `${this.$API_URL.HYGLOGINURL}/server/article!request.action`,
          {
            method: "getListWithShoping",
            version: "3.0.0",
            deviceId: "",
            source: "",
            params: {
              currentPage: 1,
              countPerPage: 20,
              classifyId: this.$route.query.brandId,
              sortType: this.sort,
              sortFlag: 1
            }
          }
        )
          .then(data => {
            this.arr = data.data.result.articlelist;
          })
          .then(() => {
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          });
      },
      //获取视频列表
      async getVideoList() {
        this.isLoading = true;
        return await _getData(
          `${this.$API_URL.HYGPROURL}/server_pro/video!request.action`,
          {
            method: "getListWithShoping",
            version: "",
            deviceId: "",
            source: "",
            params: {
              currentPage: 1,
              countPerPage: 20,
              vBigCategoryId: "",
              vCategoryId: this.$route.query.categoryId,
              sortType: this.sort,
              sortFlag: 1
            }
          }
        )
          .then(data => {
            this.arr = data.data.result.videolist;
          })
          .then(() => {
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          });
      },
      //获取维修宝列表
      async getCaseList() {
        this.isLoading = true;
        return await _getData(
          `${this.$API_URL.HYGPROURL}/server_pro/maintenance!request.action`,
          {
            method: "getListWithShoping",
            version: "3.0.0",
            deviceId: "",
            source: "",
            params: {
              currentPage: 1,
              countPerPage: 20,
              mCatogoryId: this.$route.query.categoryId,
              mBrandId: this.$route.query.brandId,
              sortType: this.sort,
              sortFlag: 1,
              searchType: 0
            }
          }
        )
          .then(data => {
            this.arr = data.data.result.articlelist;
          })
          .then(() => {
            setTimeout(() => {
              this.isLoading = false;
            }, 300);
          });
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log(to, from);
      next(vm => {
        console.log(vm);
        vm.routes =
          vm.$route.query.nav_index == 2 //找品牌
            ? [
                {
                  name: "首页",
                  path: "/"
                },
                {
                  name: "找品牌",
                  path:
                    "/lookingProduct/oneOfBrandClassificne?nav_index=" +
                    vm.$route.query.nav_index
                },
                {
                  name: vm.$route.query.brandName,
                  path:
                    "/lookingProduct?nav_index=" +
                    vm.$route.query.nav_index +
                    "&brandId=" +
                    vm.$route.query.brandId +
                    "&brandName=" +
                    vm.$route.query.brandName
                },
                {
                  name: "超声手术设备",
                  path: "/lookingProduct/brand"
                }
              ]
            : [
                //找产品
                {
                  name: "首页",
                  path: "/"
                },
                {
                  name: "找产品",
                  path: "/lookingProduct?nav_index=" + vm.$route.query.nav_index
                },
                {
                  name: vm.$route.query.categoryName,
                  path:
                    "/lookingProduct/oneOfBrandClassificne?nav_index=" +
                    vm.$route.query.nav_index +
                    "&categoryId=" +
                    vm.$route.query.categoryId +
                    "&categoryName=" +
                    vm.$route.query.categoryName
                },
                {
                  name: vm.$route.query.brandName,
                  path: to.fullPath
                }
              ];
      });
    },
    mounted() {
      this.getList();
    },
    created() {
      _getData("brandmodel/count", {
        categoryId: this.$route.query.categoryId,
        brandId: this.$route.query.brandId
      }).then(data => {
        console.log("数量", data);
        this.tabs = [
          `型号列表(${data.count || 0})`,
          `文章(${data.articleNum || 0})`,
          `视频(${data.videoNum || 0})`,
          `案例(${data.maintenanceNum || 0})`
        ];
      });
      // this.routes =
      //   this.$route.query.nav_index == 2
      //     ? [
      //         {
      //           name: "首页",
      //           path: "/"
      //         },
      //         {
      //           name: "找品牌",
      //           path:
      //             "/lookingProduct/oneOfBrandClassificne?nav_index=" +
      //             this.$route.query.nav_index
      //         },
      //         {
      //           name: "松下",
      //           path: "/lookingProduct?nav_index=" + this.$route.query.nav_index
      //         },
      //         {
      //           name: "超声手术设备",
      //           path: "/lookingProduct/brand"
      //         }
      //       ]
      //     : [
      //         {
      //           name: "首页",
      //           path: "/"
      //         },
      //         {
      //           name: "找产品",
      //           path: "/lookingProduct?nav_index=" + this.$route.query.nav_index
      //         },
      //         {
      //           name: this.$route.query.categoryName,
      //           path:
      //             "/lookingProduct/oneOfBrandClassificne?nav_index=" +
      //             this.$route.query.nav_index
      //         },
      //         {
      //           name: this.$route.query.brandName,
      //           path:
      //             "/lookingProduct/brand?nav_index=" + this.$route.query.nav_index
      //         }
      //       ];
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss.scss";
  .brand {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /deep/ .swiper-container {
      width: $content-left;
      margin-left: 0;
      margin-bottom: 20px;
      margin-top: 4px;
      overflow: initial;
      .ant-btn-default {
        height: 40px;
        width: 120px;
        background: #ffffff;
        border: 1px solid #f5a623;
        color: #f5a623;
        font-size: 16px;
        font-weight: 500;
        line-height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        position: absolute;
        right: 0;
        top: -2.5px;
        a {
          display: flex;
          align-items: center;
          line-height: 38px;
          .icon {
            height: 15px;
            width: 15px;
            margin-right: 5px;
            margin-top: 1px;
          }
        }
        &:hover {
          opacity: 0.7;
        }
        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 38px;
        }
        .icon {
          height: 15px;
          width: 15px;
          margin-right: 5px;
          margin-top: 1px;
        }
      }
    }
    .main-content {
      display: flex;
      justify-content: space-between;
      .left {
        width: $content-left;
        display: flex;
        flex-direction: column;
        /deep/ .shop-nav {
          .nav {
            margin-bottom: 12px;
          }
        }
        /deep/ .recommend_tabs {
          margin-bottom: 20px;
          margin-top: 4px;
        }
        /deep/ .no-data {
          height: 600px;
          background: #ffffff;
        }
        ul {
        }
      }
      .right {
        width: 236px;
      }
    }
  }
</style>