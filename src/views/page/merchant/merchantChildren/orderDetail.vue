<template>
  <div class="orderDetail">
    <common-title title="订单详情"></common-title>
    <div class="orderContainer">
      <order-title :isOrder="true"></order-title>
      <delivery-info></delivery-info>
      <list-title :titleArr="titleArr"></list-title>
      <order-item-product></order-item-product>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import orderTitle from "../../../../components/common/orderTitle";
  import deliveryInfo from "../../../../components/common/deliveryInformation";
  import listTitle from "../../../../components/common/listTitle";
  import orderItemProduct from "../../../../components/common/orderItemProduct";
  export default {
    data() {
      return {
        titleArr: ["产品图片", "产品名称", "单价", "数量", "实付金额", "操作"]
      };
    },
    components: {
      commonTitle,
      orderTitle,
      deliveryInfo,
      listTitle,
      orderItemProduct
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
      /deep/.listTitle {
        margin: 12px 0;
        ul {
          li {
            &:first-child {
              margin-left: 20px;
            }
            &:nth-child(4) {
              width: 153px;
            }
            &:nth-child(5) {
              width: 190px;
              margin-right: 0;
              justify-content: center;
            }
            &:nth-child(6) {
              width: 175px;
              margin-right: 0;
              justify-content: center;
            }
          }
        }
      }
    }
  }
</style>
