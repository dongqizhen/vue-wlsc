<template>
  <div class="orderItem">
    <order-title></order-title>
    <div class="productInfoBox">
      <div class="productInfo">
        <div
          class="itemProduct"
          v-for="product in productArr"
          :key="product.id"
        >
          <span><img :src="product.imgUrl"/></span>
          <span>{{ product.name }}</span>
          <span>{{ product.price }}</span>
          <span>{{ product.amount }}</span>
        </div>
      </div>
      <div class="actualPrice">￥2600.00</div>
      <div class="operating">
        <div class="lookPay">查看支付证明</div>
        <div class="sure">确认发货</div>
        <div class="lookOrderDetail">查看订单详情</div>
        <div class="deleteOrder">删除订单</div>
      </div>
    </div>
    <div class="shippingAddress">
      <div class="left-box">收货地址</div>
      <div class="right-box">
        <div>
          <span>收货人：李先生</span>
          <span>联系方式：18611110000</span>
        </div>
        <div>收货地址：北京市顺义区天竺保税区</div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  export default {
    data() {
      return {
        productArr: [
          {
            id: 1,
            imgUrl: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
            name: "John Brown",
            price: "￥1000",
            amount: 12
          },
          {
            id: 2,
            imgUrl: "http://file.haoyigong.com/server/upload/1554081863934.jpg",
            name: "John test",
            price: "￥1000",
            amount: 11
          },
          {
            id: 3,
            imgUrl: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
            name: "John Brown",
            price: "￥1000",
            amount: 10
          }
        ]
      };
    },
    components: {
      orderTitle
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .orderItem {
    %span {
      &:first-child {
        width: 70px;
        margin-left: 46px;
        margin-right: 12px;
        img {
          width: 70px;
          height: 70px;
        }
      }
      &:nth-child(2) {
        width: 185px;
        margin-right: 56px;
      }
      &:nth-child(3) {
        width: 98px;
        margin-right: 30px;
      }
      &:nth-child(4) {
        width: 98px;
      }
    }
    .productInfoBox {
      display: flex;
      border: $border-style;
      border-top: none;
      .productInfo {
        width: 598px;
        .itemProduct {
          display: flex;
          height: 90px;
          padding-top: 10px;
          border-bottom: $border-style;
          &:last-child {
            border-bottom: none;
          }
          span {
            @extend %span;
          }
        }
      }
      .actualPrice {
        width: 190px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: $border-style;
      }
      .operating {
        width: 175px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: $border-style;
      }
    }
    .shippingAddress {
      display: flex;
      border: $border-style;
      border-top: none;
      color: #333333;
      font-size: 12px;
      .left-box {
        width: 93px;
        height: 83px;
        line-height: 83px;
        text-align: center;
        border-right: $border-style;
        font-weight: 600;
      }
      .right-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 17px;

        div {
          &:first-child {
            margin-bottom: 8px;
            span {
              margin-right: 38px;
            }
          }
        }
      }
    }
  }
</style>
