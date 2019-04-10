
<template>
  <div class="looking-shop">
    <Header></Header>
    <search></search>
    <Nav :defaultNav="defaultNav"></Nav>
    <div class="container">
      <div class="commonWidth">
        <breadcrumb-vue></breadcrumb-vue>
        <div class="select-area">
          选择销售地区：
          <span>
            <svg class="icon area" aria-hidden="true">
              <use xlink:href="#iconzhaodianpuweizhi"></use>
            </svg>
            北京西城区
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxuanweizhixialajiantou"></use>
            </svg>
          </span>
        </div>
        <product-category-vue></product-category-vue>
        <div class="main-content">
          <div class="left">
            <shop-left-side-vue></shop-left-side-vue>
          </div>
          <div class="right">
            <shop-nav-vue
              :navArr="['推荐', '按点击量', '按好评']"
            ></shop-nav-vue>
            <ul class="shopItem">
              <shop-item-vue v-for="item in arr" :key="item"></shop-item-vue>
            </ul>
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
  import shopItemVue from "../../../components/common/item/shopItem.vue";
  import shopLeftSideVue from "../../../components/common/shopLeftSide.vue";
  import shopNavVue from "../../../components/common/shopNav.vue";

  import { mixin } from "../../../components/mixin/mixin";

  export default {
    data() {
      return {
        arr: [1, 2, 3, 4, 5]
      };
    },
    mixins: [mixin],
    methods: {},
    components: {
      Header,
      Footer,
      search,
      Nav,
      breadcrumbVue,
      productCategoryVue,
      shopItemVue,
      sideBar,
      shopLeftSideVue,
      shopNavVue
    },
    created() {}
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  .container {
    background: $base-background;
    .select-area {
      font-size: 14px;
      color: #999999;
      margin-top: 3px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 30px;
      span {
        font-size: 18px;
        color: #333333;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        .area {
          height: 24px;
          width: 18px;
          margin-right: 6px;
        }
        .icon:not(.area) {
          width: 12px;
          height: 6px;
          margin-left: 3px;
        }
      }
    }
    .main-content {
      display: flex;
      justify-content: flex-start;
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
        display: flex;
        flex: 1;
        flex-direction: column;

        .shopItem {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-right: -25px;
        }
      }
    }
  }
</style>