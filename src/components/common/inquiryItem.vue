<template>
  <div class="inquiryItem">
    <order-title
      :checkedList="list"
      v-on:getChecked="getChecked"
      :data="data"
      :isShowInfo="isShowInfo"
    ></order-title>
    <div class="inquiryProduct">
      <div class="leftInfoBox">
        <inquiry-product-item
          v-for="item in data.goodList"
          :key="item.id"
          :itemData="item"
          :isShowInfo="isShowInfo"
          :checkedList="list"
          v-on:getCheckedList="getCheckedList"
        ></inquiry-product-item>
      </div>
      <div class="operating">
        <div v-if="isShowInfo.current == 1 && isShowInfo.isShop == 1">
          <router-link
            :to="{
              path: `editInquiry/${data.id}`,
              query: { isShowInfo: isShowInfo }
            }"
          >
            编辑报价
          </router-link>
        </div>
        <div v-else>
          <router-link
            :to="{
              path: `inquiryOrderDetail/${data.enquirySn}`,
              query: { isShowInfo: this.isShowInfo }
            }"
          >
            查看详情
          </router-link>
        </div>
        <div @click="deleteInquiryOrder(data.id)">删除询价单</div>
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
      return { list: this.checkedList };
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
    watch: {
      checkedList(newVal) {
        this.list = newVal;
      }
    },
    methods: {
      getCheckedList(val) {
        console.log("选择的值：", val);
        // this.list = val;
        this.list = val;
      },
      getChecked(val) {
        this.$emit("getChecked", val);
      },
      deleteInquiryOrder(id) {
        console.log(id);
        _getData("/enquiryPlus/deleteEnquiry", { ids: id }).then(data => {
          console.log("删除询价单：", data);
          this.$emit("getIsDelete", data);
        });
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
