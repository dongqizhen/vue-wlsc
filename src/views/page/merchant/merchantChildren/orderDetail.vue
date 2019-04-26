<template>
  <div class="orderDetail">
    <common-title title="订单详情"></common-title>
    <div class="orderContainer">
      <order-title :isOrder="true"></order-title>
      <delivery-info></delivery-info>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import orderTitle from "../../../../components/common/orderTitle";
  import deliveryInfo from "../../../../components/common/deliveryInformation";
  export default {
    data() {
      return {};
    },
    components: {
      commonTitle,
      orderTitle,
      deliveryInfo
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .orderDetail {
    min-height: 609px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    .orderContainer {
      /deep/.orderTitle {
        margin: 9px 0 12px;
        .common {
          font-size: 14px;
        }
        .checkedBox {
          display: none;
        }
      }
    }
  }
</style>
