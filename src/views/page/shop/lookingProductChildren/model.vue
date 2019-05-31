<template>
  <div class="model">
    <breadcrumb-vue :routes="routes"></breadcrumb-vue>
    <div v-if="!isLoading">
      <recommends-tab-vue
        v-if="tabs.length"
        :tabs="tabs"
        v-on:tabClick="tabClick"
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
      <div class="main-content-box">
        <div class="left">
          <shop-nav-vue
            :navArr="['发布时间', '按点击量', '按好评']"
            v-on:tabClick="shopTabClick"
          ></shop-nav-vue>
          <div class="main-content">
            <div v-if="!shopIsloading">
              <ul>
                <shop-item-vue
                  v-for="item in shopList"
                  :key="item.id"
                  :item="item"
                ></shop-item-vue>
                <!-- <bid-info-item-vue /> -->
              </ul>
              <pagination-vue></pagination-vue>
            </div>
            <loading-vue v-else></loading-vue>
          </div>
        </div>
        <div class="right">
          <brand-card-vue></brand-card-vue>
        </div>
      </div>
    </div>
    <loading-vue v-else></loading-vue>
  </div>
</template>

<script>
  import shopNavVue from "../../../../components/common/shopNav.vue";
  import productItemVue from "../../../../components/common/item/productItem.vue";
  import brandCardVue from "../../../../components/common/brandCard.vue";
  import recommendsTabVue from "../../../../components/common/recommendsTab.vue";
  import paginationVue from "../../../../components/common/pagination.vue";
  import breadcrumbVue from "../../../../components/common/breadcrumb.vue";
  import { _getData, _getDataAll } from "../../../../config/getData";
  import loadingVue from "../../../../components/common/loading.vue";
  import _ from "lodash";
  import shopItemVue from "../../../../components/common/item/shopItem.vue";
  import bidInfoItemVue from "../../../../components/common/item/bidInfoItem.vue";

  export default {
    data() {
      return {
        routes: [],
        isLoading: true,
        tabs: [],
        shopList: "",
        defaultVal: 0,
        sort: "",
        shopIsloading: false
      };
    },
    components: {
      shopNavVue,
      productItemVue,
      brandCardVue,
      recommendsTabVue,
      paginationVue,
      breadcrumbVue,
      loadingVue,
      shopItemVue,
      bidInfoItemVue
    },
    methods: {
      shopTabClick(i) {
        this.getShopList(i == 0 ? "createOn" : i == 1 ? "hit" : "rate");
      },
      tabClick(i, val) {
        console.log(val);
        this.defaultVal = i;
      },
      //获取商铺列表
      async getShopList(sort = "createOn") {
        this.shopIsloading = true;
        return await _getData("queryStore", {
          modelId: this.$route.query.modelId,
          currentPage: 1,
          countPerPage: 6,
          sort,
          order: "asc"
        })
          .then(data => {
            console.log("店铺", data);
            this.shopList = data.data;
          })
          .then(() => {
            this.$nextTick().then(() => {
              this.shopIsloading = false;
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      //获取nav数量
      // _getData("goods/productCount", {
      //   modelId: this.$route.query.modelId
      // }).then(data => {
      //   this.tabs = [
      //     ..._.map(data.list, val => {
      //       return `${val.name}(${val.count})`;
      //     }),
      //     ...[
      //       `文章(${data.articleNum})`,
      //       `视频(${data.videoNum})`,
      //       `案例(${data.maintenanceNum})`
      //     ]
      //   ];
      // });
      // //获取店铺
      // _getData("queryStore", { modelId: this.$route.query.modelId })
      //   .then(data => {
      //     this.isLoading = false;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      _getDataAll([
        //获取nav数量
        _getData("goods/productCount", {
          modelId: this.$route.query.modelId
        }).then(data => {
          console.log("nav", data);
          this.tabs = [
            ..._.map(data.list, val => {
              return `${val.name}(${val.count})`;
            }),
            ...[
              `店铺(${data.sroreCount || 0})`,
              `文章(${data.articleNum || 0})`,
              `视频(${data.videoNum || 0})`,
              `案例(${data.maintenanceNum || 0})`
            ]
          ];
        }),
        //获取店铺
        this.getShopList()
      ]).then(() => {
        this.$nextTick().then(() => {
          this.isLoading = false;
        });
      });
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
                  name: vm.$route.query.categoryName,
                  path:
                    "/lookingProduct/brand?nav_index=" +
                    vm.$route.query.nav_index +
                    "&brandId=" +
                    vm.$route.query.brandId +
                    "&brandName=" +
                    vm.$route.query.brandName +
                    "&categoryId=" +
                    vm.$route.query.categoryId +
                    "&categoryName=" +
                    vm.$route.query.categoryName
                },
                {
                  name: vm.$route.query.modelName,
                  path: "/lookingProduct/model?nav_index=2"
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
                  path:
                    "/lookingProduct/brand?nav_index=" +
                    vm.$route.query.nav_index +
                    "&brandId=" +
                    vm.$route.query.brandId +
                    "&brandName=" +
                    vm.$route.query.brandName +
                    "&categoryId=" +
                    vm.$route.query.categoryId +
                    "&categoryName=" +
                    vm.$route.query.categoryName
                },
                {
                  name: vm.$route.query.modelName,
                  path: "/lookingProduct/model?nav_index=2"
                }
              ];
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .model {
    display: flex;
    flex-direction: column;
    /deep/ .swiper-container {
      //width: $content-left;
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
      margin-top: 4px;
      overflow: initial;
      /deep/ .ant-btn-default {
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
        }
      }
    }
    .main-content-box {
      display: flex;
      justify-content: space-between;
      .left {
        width: 775px;
        /deep/ .recommend_tabs {
          margin-bottom: 20px;
          margin-top: 4px;
        }
        .main-content {
          margin-right: -7.5px;
          > div > ul {
            display: flex;
            flex-wrap: wrap;
            > li {
              margin-right: 7.5px;
              margin-bottom: 10px;
            }
          }
          /deep/ .loading {
            width: $content-left;
          }
        }
      }
      .right {
        width: 236px;
      }
    }
  }
</style>