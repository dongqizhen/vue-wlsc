<template>
  <div class="brand">
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
</template>

<script>
  import shopNavVue from "../../../../components/common/shopNav.vue";
  import modelItemVue from "../../../../components/common/item/modelItem.vue";
  import brandCardVue from "../../../../components/common/brandCard.vue";

  export default {
    data() {
      return {
        arr: [1, 2, 3, 4, 5]
      };
    },
    components: {
      shopNavVue,
      modelItemVue,
      brandCardVue
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss.scss";
  .brand {
    display: flex;
    justify-content: space-between;
    .left {
      width: $content-left;
      /deep/ .shop-nav {
        .nav {
          margin-bottom: 12px;
        }
      }
      ul {
      }
    }
    .right {
      width: 236px;
    }
  }
</style>