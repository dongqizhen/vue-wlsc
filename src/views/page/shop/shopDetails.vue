<template>
  <div class="shop-details">
    <Header></Header>
    <search></search>
    <Nav :defaultNav="defaultNav"></Nav>
    <div class="container">
      <div class="commonWidth">
        <breadcrumb-vue></breadcrumb-vue>
        <product-category-vue></product-category-vue>
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
            <shop-card-vue></shop-card-vue>
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

  export default {
    data() {
      return { arr: [1, 2, 3, 4, 5] };
    },
    mixins: [mixin],
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
    },
    created() {}
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
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