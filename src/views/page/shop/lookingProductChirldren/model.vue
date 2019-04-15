<template>
  <div class="model">
    <div class="left">
      <recommends-tab-vue
        :tabs="['推荐产品(12)', '文章(9)', '视频(8)', '案例(8)']"
        v-on:tabClick="tabClick"
      ></recommends-tab-vue>
      <shop-nav-vue :navArr="['发布时间', '按价格', '按好评']"></shop-nav-vue>
      <div class="main-content">
        <ul>
          <product-item-vue></product-item-vue>
          <product-item-vue></product-item-vue>
          <product-item-vue></product-item-vue>
        </ul>
      </div>
    </div>
    <div class="right">
      <brand-card-vue></brand-card-vue>
    </div>
  </div>
</template>

<script>
  import shopNavVue from "../../../../components/common/shopNav.vue";
  import productItemVue from "../../../../components/common/item/productItem.vue";
  import brandCardVue from "../../../../components/common/brandCard.vue";
  import recommendsTabVue from "../../../../components/common/recommendsTab.vue";

  export default {
    data() {
      return {};
    },
    components: {
      shopNavVue,
      productItemVue,
      brandCardVue,
      recommendsTabVue
    },
    methods: {
      tabClick(i) {}
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .model {
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
        ul {
          display: flex;
          flex-wrap: wrap;
          /deep/ li {
            margin-right: 7.5px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .right {
      width: 236px;
    }
  }
</style>