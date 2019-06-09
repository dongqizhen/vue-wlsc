<template>
  <div class="productInfoBox">
    <div class="productInfo">
      <div
        class="itemProduct"
        v-for="product in data.goodsList"
        :key="product.id"
      >
        <span><img :src="product.list_pic_url"/></span>
        <span>{{ product.goods_name }}</span>
        <span>{{ product.retail_price }}</span>
        <span>{{ product.number }}</span>
      </div>
    </div>
    <div class="actualPrice">￥{{ data.actual_price }}</div>
    <div class="operating">
      <div class="lookPay" @click="addModal">
        {{
          data.order_status == 1
            ? isShowInfo.isDetail
              ? "--"
              : ""
            : data.isPayProve == 0
            ? isShowInfo.isMerchant
              ? isShowInfo.isDetail
                ? "--"
                : ""
              : "提交支付证明"
            : "查看支付证明"
        }}
      </div>
      <div
        class="sure"
        @click="confirmDelivery(data.id)"
        v-if="
          data.order_status == 2 &&
            isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        确认发货
      </div>
      <div
        class="sure"
        @click="confirmReceipt(data.id)"
        v-if="
          data.order_status == 3 &&
            !isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        确认收货
      </div>
      <div
        class="sure"
        @click="confirmOrder(data.id)"
        v-if="
          data.order_status == 1 &&
            isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        确认接单
      </div>
      <div
        class="sure"
        @click="commentModal"
        v-if="
          (data.order_status == 4 || data.order_status == 5) &&
            !isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        评价
      </div>
      <div
        class="sure"
        @click="confirmReceiptOrReturn"
        v-if="
          data.order_status == 6 &&
            isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        确认收货/已退货
      </div>
      <div
        class="sure"
        @click="lookComment"
        v-if="
          data.order_status == 5 &&
            isShowInfo.isMerchant &&
            !isShowInfo.isDetail
        "
      >
        查看评价
      </div>
      <div class="lookOrderDetail" v-if="!isShowInfo.isDetail">
        <router-link :to="`orderDetail/${data.order_sn}`">
          查看订单详情
        </router-link>
      </div>
      <div
        class="lookOrderDetail"
        v-if="
          !isShowInfo.isDetail &&
            !isShowInfo.isMerchant &&
            (data.order_status == 1 || data.order_status == 2)
        "
        @click="cancelOrder(data.id)"
      >
        取消订单
      </div>
      <div
        class="deleteOrder"
        v-if="
          !isShowInfo.isDetail &&
            (data.order_status == 5 || data.order_status == 7)
        "
        @click="deleteModal(data.order_sn)"
      >
        删除
      </div>
    </div>
    <pay-img-modal
      :Visible="visible"
      :type="type"
      :imgUrl="data.payProve"
    ></pay-img-modal>
    <confirm-delivery
      :Visible="sureVisible"
      :type="type"
      :orderId="orderId"
      v-on:returnValue="getReturnStatus"
    ></confirm-delivery>
    <submit-comment
      :Visible="commentVisible"
      :type="type"
      :data="data.goodsList"
    ></submit-comment>
    <submit-pay :Visible="payVisible" :type="type"></submit-pay>
    <delete-order
      :Visible="deleteVisible"
      :type="type"
      :deleteObj="deleteObj"
    ></delete-order>
  </div>
</template>
<script>
  import payImgModal from "../../modal/payImgModal";
  import confirmDelivery from "../../modal/confirmDelivery";
  import submitComment from "../../modal/submitComment";
  import submitPay from "../../modal/submitPayImg";
  import deleteOrder from "../../modal/deleteOrderModal";

  import { mapState } from "vuex";
  import { _getData } from "../../../config/getData";
  export default {
    data() {
      return {
        visible: false,
        sureVisible: false,
        commentVisible: false,
        payVisible: false,
        deleteVisible: false,
        type: "",
        deleteObj: {
          isOrder: true,
          deleteId: ""
        },
        orderId: -1
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
      confirmOrder(orderId) {
        console.log(orderId);
        _getData("/order/updateOrderStatus", {
          orderId: orderId,
          orderStatus: "connect",
          payProve: ""
        }).then(data => {
          console.log(data);
          this.$emit("returnValue", 2); //2表示已经接单，进入待发货状态
        });
      },
      cancelOrder(orderId) {
        _getData("/order/updateOrderStatus", {
          orderId: orderId,
          orderStatus: "cancel",
          payProve: ""
        }).then(data => {
          console.log(data);
          this.$emit("returnValue", 7); //2表示已经接单，进入待发货状态
        });
      },
      getReturnStatus(val) {
        console.log(val);
        this.$emit("returnValue", val);
      },
      confirmReceipt(orderId) {
        _getData("/order/updateOrderStatus", {
          orderId: orderId,
          orderStatus: "affirm",
          payProve: ""
        }).then(data => {
          console.log(data);
          this.$emit("returnValue", 4); //2表示已经接单，进入待发货状态
        });
      },
      confirmReceiptOrReturn() {},
      lookComment() {},
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
      confirmDelivery(id) {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.sureVisible = true;
        this.orderId = id;
      },
      commentModal() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.commentVisible = true;
      },
      deleteModal(id) {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.deleteVisible = true;
        this.deleteObj.deleteId = id;
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
  @import "../../../assets/scss/_commonScss";
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
      padding-top: 10px;
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
