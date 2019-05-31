<template>
  <div class="shop-details">
    <Header></Header>
    <search></search>
    <Nav :defaultNav="defaultNav"></Nav>
    <div class="container">
      <div class="commonWidth">
        <breadcrumb-vue :routes="routes"></breadcrumb-vue>
        <product-category-vue
          :canSkip="false"
          v-on:categoryClick="categoryClick"
        ></product-category-vue>
        <div class="main-content">
          <div class="left">
            <shop-left-side-vue
              v-on:brandClick="brandClick"
            ></shop-left-side-vue>
          </div>
          <div class="right">
            <shop-nav-vue
              :navArr="['发布时间', '按价格', '按好评']"
              v-on:tabClick="tabClick"
            ></shop-nav-vue>
            <div v-if="!isLoading">
              <ul class="shopItem" v-if="arr.length">
                <product-item-vue
                  v-for="item in arr"
                  :key="item.id"
                  :list="item"
                ></product-item-vue>
              </ul>
              <no-data text="暂无数据" v-else></no-data>
            </div>
            <loading v-else></loading>
          </div>
          <div class="shop">
            <shop-card-vue
              v-if="shopdetails"
              type="introduce"
              :detail="shopdetails"
            ></shop-card-vue>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";
  import sideBar from "../../../components/sideBar/sideBar.vue";
  import breadcrumbVue from "../../../components/common/breadcrumb.vue";
  import productCategoryVue from "../../../components/common/productCategory.vue";

  import shopLeftSideVue from "../../../components/common/shopLeftSide.vue";
  import shopNavVue from "../../../components/common/shopNav.vue";
  import { mixin } from "../../../components/mixin/mixin";
  import productItemVue from "../../../components/common/item/productItem.vue";
  import shopCardVue from "../../../components/common/shopCard.vue";
  import { _getData } from "../../../config/getData";

  export default {
    data() {
      return {
        arr: [],
        routes: [],
        categoryId: "", //分类id
        shopdetails: "",
        brandId: "",
        sort: "createOn",
        isLoading: false
        //list: []
      };
    },
    mixins: [mixin],

    created() {
      this.routes = this.$route.query.nav_index
        ? [
            {
              name: "首页",
              path: "/"
            },
            {
              name: "找店铺",
              path: "/lookingShop?nav_index=3"
            },
            {
              name: this.$route.query.shopName,
              path: "#"
            }
          ]
        : [
            {
              name: "首页",
              path: "/"
            },

            {
              name: this.$route.query.shopName,
              path: "#"
            }
          ];
    },
    methods: {
      categoryClick(item) {
        console.log(item);
        this.categoryId = item.id;
        this.getGoodsList();
      },
      brandClick(item) {
        this.brandId = item.id;
        this.getGoodsList();
      },
      tabClick(i) {
        this.sort = i == 0 ? "createOn" : i == 1 ? "price" : "rate";
        this.getGoodsList();
      },
      //获取商品列表
      async getGoodsList(
        categoryId = this.categoryId,
        brandId = this.brandId,
        sort = this.sort
      ) {
        this.isLoading = true;
        return await _getData("/goods/getGoods", {
          storeId: this.$route.query.shopId,
          attributeCategoryId: "",
          currentPage: 1,
          countPerPage: 10,
          sort,
          order: "asc",
          bigCategoryId: "",
          categoryId,
          brandId
        })
          .then(data => {
            console.log("产品列表", data);
            this.arr = data.data;
          })
          .then(() => {
            this.$nextTick().then(() => {
              this.isLoading = false;
            });
          });
      }
    },
    mounted() {
      this.getGoodsList();
      _getData("/store/homeStore", {
        storeId: this.$route.query.shopId
      }).then(data => {
        console.log(2222222, data);
        this.shopdetails = data;
      });
    },
    components: {
      Header,
      Footer,
      search,
      Nav,
      breadcrumbVue,
      productCategoryVue,
      sideBar,
      shopLeftSideVue,
      shopNavVue,
      productItemVue,
      shopCardVue
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  .container {
    /deep/ .product-category {
      .product {
        h2 {
          .btn {
            display: none;
          }
        }
      }
    }
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
        width: 531px;
        display: flex;
        flex-direction: column;

        .shopItem {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-right: -25px;
          /deep/ li.product-item {
            margin-right: 24px;
            margin-bottom: 20px;
          }
        }
        /deep/ .no-data {
          height: 500px;
        }
      }
      .shop {
        width: 236px;
        margin-left: 40px;
      }
    }
  }
</style>