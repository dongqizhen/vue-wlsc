<template>
  <div class="orderDetail">
    <common-title title="订单详情"></common-title>
    <div class="orderContainer">
      <order-title :isShowInfo="isShowInfo" :data="data"></order-title>
      <delivery-info :data="data"></delivery-info>
      <div class="shopInfo">
        <div class="shopName"><img src="" alt="" />{{ data.shopName }}</div>
        <div class="phone">联系方式：{{ data.workPhone }}</div>
      </div>
      <list-title :titleArr="titleArr"></list-title>
      <order-item-product
        :data="data"
        :isShowInfo="isShowInfo"
      ></order-item-product>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import orderTitle from "../../../../components/common/order/orderTitle";
  import deliveryInfo from "../../../../components/common/order/deliveryInformation";
  import listTitle from "../../../../components/common/listTitle";
  import orderItemProduct from "../../../../components/common/order/orderItemProduct";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        titleArr: ["产品图片", "产品名称", "单价", "数量", "实付金额", "操作"],
        isShowInfo: {
          isDetail: true,
          isShow: false,
          isTrue: false,
          isOrder: true,
          current: 0,
          isMerchant: false
        },
        data: {}
      };
    },
    methods: {},
    mounted() {
      _getData("/order/orderDetails", { id: this.$route.params.id }).then(
        data => {
          console.log("获取订单详情：", data);
          this.data = data;
        }
      );
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
    padding: 4px 20px 20px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 100px;
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
      .shopInfo {
        height: 40px;
        margin-top: 12px;
        background: rgba(245, 166, 35, 0.05);
        border: $border-style;
        padding-left: 22px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #333333;
        .shopName {
          margin-right: 40px;
          img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 4px;
          }
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
