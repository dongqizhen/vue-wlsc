<template>
  <div class="productInfoBox">
    <div class="productInfo">
      <div
        class="itemProduct"
        v-for="product in data.goodsList"
        :key="product.id"
      >
        <span><img :src="product.list_pic_url"/></span>
        <span>{{ product.name }}</span>
        <span>{{ product.retail_price }}</span>
        <span>{{ product.number }}</span>
      </div>
    </div>
    <div class="actualPrice">￥{{ data.actual_price }}</div>
    <div class="operating">
      <div class="lookPay" @click="addModal">查看支付证明</div>
      <div class="sure" @click="confirmDelivery">确认发货</div>
      <div class="lookOrderDetail">
        <router-link to="orderDetail">查看订单详情</router-link>
      </div>
      <div class="deleteOrder">删除订单</div>
    </div>
    <pay-img-modal :Visible="visible" :type="type"></pay-img-modal>
    <confirm-delivery :Visible="sureVisible" :type="type"></confirm-delivery>
  </div>
</template>
<script>
  import payImgModal from "../modal/payImgModal";
  import confirmDelivery from "../modal/confirmDelivery";
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        visible: false,
        sureVisible: false,
        type: "",
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
    },
    props: {
      data: {
        type: Object
      }
    },
    methods: {
      addModal() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.visible = true;
      },
      confirmDelivery() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.sureVisible = true;
      }
    },
    computed: {
      ...mapState(["isLogin"])
    },
    components: {
      payImgModal,
      confirmDelivery
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
      font-size: 16px;
      font-weight: 600;
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
