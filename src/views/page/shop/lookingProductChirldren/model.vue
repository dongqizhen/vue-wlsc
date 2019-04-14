<template>
  <div class="model">
    <div class="left">
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

  export default {
    data() {
      return {};
    },
    components: {
      shopNavVue,
      productItemVue,
      brandCardVue
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