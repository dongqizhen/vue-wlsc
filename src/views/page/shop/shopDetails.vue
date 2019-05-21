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
            <shop-left-side-vue></shop-left-side-vue>
          </div>
          <div class="right">
            <shop-nav-vue :navArr="['默认', '按销量', '按好评']"></shop-nav-vue>
            <ul class="shopItem">
              <product-item-vue
                v-for="item in arr"
                :key="item"
              ></product-item-vue>
            </ul>
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
        arr: [1, 2, 3, 4, 5],
        routes: [],
        categoryId: "", //分类id
        shopdetails: ""
      };
    },
    mixins: [mixin],
    created() {
      this.routes = [
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
      ];
    },
    methods: {
      categoryClick(item) {
        console.log(item);
        this.categoryId = item.id;
      }
    },
    mounted() {
      _getData("/goods/getGoods", {
        storeId: this.$route.query.shopId,
        attributeCategoryId: "",
        currentPage: 1,
        countPerPage: 6,
        sort: "createOn",
        order: "asc"
      }).then(data => {
        console.log("产品列表", data);
      });
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
      }
      .shop {
        width: 236px;
        margin-left: 40px;
      }
    }
  }
</style>