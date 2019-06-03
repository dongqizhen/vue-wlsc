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
      <div class="lookPay" @click="addModal" v-if="data.order_status != 1">
        {{ data.isPayProve == 0 ? "提交" : "查看" }}支付证明
      </div>
      <div
        class="sure"
        @click="confirmDelivery"
        v-if="data.order_status == 3 && isShowInfo.isMerchant"
      >
        确认发货
      </div>
      <div
        class="sure"
        @click="confirmDelivery"
        v-if="data.order_status == 3 && !isShowInfo.isMerchant"
      >
        确认收货
      </div>
      <div
        class="sure"
        @click="confirmOrder(data.id)"
        v-if="data.order_status == 1 && isShowInfo.isMerchant"
      >
        确认接单
      </div>
      <div
        class="sure"
        @click="commentModal"
        v-if="
          (data.order_status == 4 || data.order_status == 5) &&
            !isShowInfo.isDetail
        "
      >
        评价
      </div>
      <div class="lookOrderDetail" v-if="!isShowInfo.isDetail">
        <router-link :to="`orderDetail/${data.order_sn}`">
          查看订单详情
        </router-link>
      </div>
      <div class="deleteOrder" v-if="!isShowInfo.isDetail" @click="deleteModal">
        删除
      </div>
    </div>
    <pay-img-modal
      :Visible="visible"
      :type="type"
      :imgUrl="data.payProve"
    ></pay-img-modal>
    <confirm-delivery :Visible="sureVisible" :type="type"></confirm-delivery>
    <submit-comment
      :Visible="commentVisible"
      :type="type"
      :data="data.goodsList"
    ></submit-comment>
    <submit-pay :Visible="payVisible" :type="type"></submit-pay>
    <delete-order :Visible="deleteVisible" :type="type"></delete-order>
  </div>
</template>
<script>
  import payImgModal from "../modal/payImgModal";
  import confirmDelivery from "../modal/confirmDelivery";
  import submitComment from "../modal/submitComment";
  import submitPay from "../modal/submitPayImg";
  import deleteOrder from "../modal/deleteOrderModal";

  import { mapState } from "vuex";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        visible: false,
        sureVisible: false,
        commentVisible: false,
        payVisible: false,
        deleteVisible: false,
        type: ""
      };
    },
    props: {
      data: {
        type: Object
      },
      isShowInfo: {
        type: Object
      }
    },
    methods: {
      confirmOrder(order_sn) {
        _getData("/order/updateOrderStatus", {
          orderId: order_sn,
          orderStatus: "connect",
          payProve: ""
        }).then(data => {
          console.log(data);
        });
      },
      addModal() {
        if (!this.isLogin) {
          this.type = "login";
        } else {
          if (this.data.isPayProve == 1) {
            this.visible = true;
          } else {
            this.payVisible = true;
          }
        }
      },
      confirmDelivery() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.sureVisible = true;
      },
      commentModal() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.commentVisible = true;
      },
      deleteModal() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.deleteVisible = true;
      }
    },
    computed: {
      ...mapState(["isLogin"])
    },
    components: {
      payImgModal,
      confirmDelivery,
      submitComment,
      submitPay,
      deleteOrder
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
      div {
        margin-bottom: 10px;
        font-size: 12px;
        color: #333;
        &:hover {
          color: $theme-color;
          cursor: pointer;
        }
        a {
          color: #333;
          &:hover {
            color: $theme-color;
          }
        }
      }
    }
  }
</style>
