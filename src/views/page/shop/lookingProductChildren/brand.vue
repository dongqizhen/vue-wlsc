<template>
  <div class="brand">
    <breadcrumb-vue :routes="routes"></breadcrumb-vue>
    <recommends-tab-vue
      :tabs="['型号列表(4)', '文章(9)', '视频(8)', '案例(8)']"
      v-on:tabClick="tabClick"
    >
      <a-button slot="btn">
        <router-link
          :to="{
            path: '/comparisonOfParameters',
            query: { nav_index: $route.query.nav_index }
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
        <shop-nav-vue :navArr="['按首字母排序', '按点击量排序']"></shop-nav-vue>

        <ul>
          <model-item-vue v-for="item in arr" :key="item"></model-item-vue>
        </ul>
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

  export default {
    data() {
      return {
        arr: [1, 2, 3, 4, 5],
        routes: []
      };
    },
    components: {
      shopNavVue,
      modelItemVue,
      brandCardVue,
      recommendsTabVue,
      breadcrumbVue
    },

    beforeRouteEnter(to, from, next) {
      console.log(to, from);
      next(vm => {
        console.log(vm);
        vm.routes =
          vm.$route.query.nav_index == 2
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
                  name: "松下",
                  path: "/lookingProduct?nav_index=" + vm.$route.query.nav_index
                },
                {
                  name: "超声手术设备",
                  path: "/lookingProduct/brand"
                }
              ]
            : [
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
      this.getModelList();
    },
    created() {
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
    },
    methods: {
      tabClick(i) {
        console.log(i);
      },
      async getModelList(sort = 1) {
        return await _getData("api/brandmodel/list", {
          categoryId: this.$route.query.categoryId,
          brandId: this.$route.query.brandId,
          sortOrder: sort
        });
      }
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
        /deep/ .shop-nav {
          .nav {
            margin-bottom: 12px;
          }
        }
        /deep/ .recommend_tabs {
          margin-bottom: 20px;
          margin-top: 4px;
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