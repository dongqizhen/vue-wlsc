<template>
  <div class="productInfoBox">
    <div class="productInfo">
      <div class="itemProduct" v-for="product in productArr" :key="product.id">
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
      <div class="lookOrderDetail">
        <router-link to="orderDetail">查看订单详情</router-link>
      </div>
      <div class="deleteOrder">删除订单</div>
    </div>
  </div>
</template>
<script>
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
            amount: 100
          }
        ]
      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .productInfoBox {
    display: flex;
    border: $border-style;
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
          margin-right: 30px;
          &:first-child {
            width: 70px;
            margin-left: 20px;
            margin-right: 12px;
            img {
              width: 70px;
              height: 70px;
            }
          }
          &:nth-child(2) {
            width: 155px;
          }
          &:nth-child(3) {
            width: 100px;
          }
        }
      }
    }
    .actualPrice {
      width: 190px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: $border-style;
      color: $theme-color;
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
</style>
