<template>
  <div class="model">
    <recommends-tab-vue
      :tabs="[
        '整机(32)',
        '备件(12)',
        '店铺(23)',
        '文章(2)',
        '视频(43)',
        '案例(12)',
        '中标信息(2)'
      ]"
      v-on:tabClick="tabClick"
    >
      <a-button slot="btn">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconcanshuduibi"></use>
        </svg>
        参数对比
      </a-button>
    </recommends-tab-vue>
    <div class="main-content-box">
      <div class="left">
        <shop-nav-vue :navArr="['发布时间', '按价格', '按好评']"></shop-nav-vue>
        <div class="main-content">
          <ul>
            <product-item-vue></product-item-vue>
            <product-item-vue></product-item-vue>
            <product-item-vue></product-item-vue>
          </ul>
          <pagination-vue></pagination-vue>
        </div>
      </div>
      <div class="right">
        <brand-card-vue></brand-card-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import shopNavVue from "../../../../components/common/shopNav.vue";
  import productItemVue from "../../../../components/common/item/productItem.vue";
  import brandCardVue from "../../../../components/common/brandCard.vue";
  import recommendsTabVue from "../../../../components/common/recommendsTab.vue";
  import paginationVue from "../../../../components/common/pagination.vue";

  export default {
    data() {
      return {};
    },
    components: {
      shopNavVue,
      productItemVue,
      brandCardVue,
      recommendsTabVue,
      paginationVue
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        position: absolute;
        right: 0;
        top: -2.5px;
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
  }
</style>