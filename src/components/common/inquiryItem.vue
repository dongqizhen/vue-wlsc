<template>
  <div class="inquiryItem">
    <order-title
      :isOrder="isOrder"
      :checkedList="checkedList"
      v-on:getChecked="getChecked"
      :data="data"
      :isTrue="isTrue"
      :isShowInfo="isShowInfo"
    ></order-title>
    <div class="inquiryProduct">
      <div class="leftInfoBox">
        <inquiry-product-item
          v-for="item in data.list"
          :key="item.id"
          :itemData="item"
          :isShowInfo="isShowInfo"
        ></inquiry-product-item>
      </div>
      <div class="operating">
        <div>
          <router-link to="inquiryOrderDetail">查看详情</router-link>
        </div>
        <div @click="deleteInquiryOrder(data.enquirySn)">删除询价单</div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  import inquiryProductItem from "./inquiryProductItem";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return { isOrder: false, isTrue: true };
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      checkedList: {
        type: Array,
        required: true
      },
      isShowInfo: {
        type: Object
      }
    },
    methods: {
      getChecked(val) {
        this.$emit("getChecked", val);
      },
      deleteInquiryOrder(enquirySn) {
        // _getData("").then(data => {
        //   console.log(data);
        // });
      }
    },
    components: {
      orderTitle,
      inquiryProductItem
    }
  };
</script>
<style lang="scss" scoped>
  .inquiryProduct {
    display: flex;
    border: 1px solid #ddd;
    border-top: none;
    margin-bottom: 10px;
    .leftInfoBox {
      flex: 1;
      /deep/.inquiryProductItem {
        border: none;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border-bottom: none;
        }
        span {
          font-size: 12px;
          color: #666;
          margin-right: 30px;
          &:nth-child(1) {
            width: 70px;
            margin-left: 46px;
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
          &:nth-child(4) {
            width: 60px;
          }
          &:nth-child(5) {
            width: 113px;
          }
          &:nth-child(6) {
            flex: 1;
          }
        }
      }
    }
    .operating {
      width: 96px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #ddd;
      color: #333;
      font-size: 12px;
      div {
        margin-bottom: 10px;
        cursor: pointer;
        a {
          color: #333;
          &:hover {
            color: #f10215;
          }
        }
        &:hover {
          color: #f10215;
        }
      }
    }
  }
</style>
