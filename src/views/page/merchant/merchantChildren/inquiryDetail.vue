<template>
  <div class="inquiryOrderDetail">
    <common-title title="询价单"></common-title>
    <div class="inquiryContainer">
      <order-title
        :isShowInfo="isShowInfo"
        :data="data"
        :checkedList="checkedList"
      ></order-title>
      <div class="inquiryContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="listContent">
          <inquiry-detail-item-product
            v-for="item in data.goodList"
            :key="item.id"
            :itemData="item"
            :checkedList="checkedList"
            v-on:getChecked="getChecked"
          ></inquiry-detail-item-product>
        </div>
        <div class="list-footer">
          <check-all
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
          >
            <!-- <div slot="right-box" class="right-box">
              <button class="submit" @click="submitQuote">提交报价</button>
            </div> -->
          </check-all>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import orderTitle from "../../../../components/common/order/orderTitle";
  import listTitle from "../../../../components/common/listTitle";
  import checkAll from "../../../../components/common/checkAll";
  import inquiryDetailItemProduct from "../../../../components/common/inquiry/inquiryDetailItemProduct";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        isShowInfo: {},
        checkedList: [],
        checkAll: false,
        titleArr: [
          "产品图片",
          "产品名称",
          "品牌型号",
          "单价",
          "数量",
          "到货时间",
          "询价备注"
        ],
        data: {}
      };
    },
    methods: {
      submitQuote() {
        console.log(this.checkedList);
      },
      getChecked(val) {
        console.log(val);
        if (typeof val == "object") {
          this.checkedList = val;
        } else {
          if (_.indexOf(this.checkedList, val) != -1) {
            this.checkedList = _.without(this.checkedList, val);
          }
        }
        if (this.checkedList.length == this.data.goodList.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      isCheckAllMethod(val) {
        if (val) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data.goodList) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
        console.log(this.checkedList);
      }
    },
    mounted() {
      console.log(this.$route.query.isShowInfo);
      let isShowInfo = JSON.parse(this.$route.query.isShowInfo);
      isShowInfo.isDetail = true;
      this.isShowInfo = isShowInfo;
      console.log(this.isShowInfo);
      _getData("/enquiryPlus/enquiryDetail", {
        id: this.$route.params.id
      }).then(data => {
        console.log("获取询价单详情：", data);
        this.data = data;
      });
    },
    components: {
      commonTitle,
      orderTitle,
      listTitle,
      checkAll,
      inquiryDetailItemProduct
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .inquiryOrderDetail {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    .inquiryContainer {
      padding-top: 24px;
      /deep/.orderTitle {
        margin-bottom: 24px;
        .common {
          font-size: 14px;
        }
        .left-box {
          .checkedBox {
            display: none;
          }
        }
      }
      /deep/.listTitle {
        margin-bottom: 12px;
        ul {
          li {
            &:nth-child(4) {
              width: 98px;
            }
            &:nth-child(5) {
              width: 90px;
            }
            &:nth-child(6) {
              width: 97px;
            }
            &:nth-child(7) {
              width: 120px;
            }
          }
        }
      }
      /deep/.listContent {
        .inquiryProductItem {
          border-bottom: none;
          &:last-child {
            border-bottom: $border-style;
          }
        }
      }
      .list-footer {
        margin-top: 12px;
        .right-box {
          width: 104px;
          .submit {
            width: 104px;
            height: 42px;
            line-height: 42px;
            padding: 0 24px;
            border: 0;
            outline: none;
            color: #fff;
            font-size: 14px;
            background-color: #f5a623;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
