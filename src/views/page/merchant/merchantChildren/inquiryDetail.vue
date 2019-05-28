<template>
  <div class="inquiryOrderDetail">
    <common-title title="询价单"></common-title>
    <div class="inquiryContainer">
      <order-title :isShowInfo="isShowInfo"></order-title>
      <div class="inquiryContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="listContent">
          <inquiry-product-item :isDetail="true"></inquiry-product-item>
          <inquiry-product-item :isDetail="true"></inquiry-product-item>
        </div>
        <div class="list-footer">
          <check-all
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
          >
            <div slot="right-box" class="right-box">
              <button class="submit">提交订单</button>
            </div>
          </check-all>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import orderTitle from "../../../../components/common/orderTitle";
  import listTitle from "../../../../components/common/listTitle";
  import checkAll from "../../../../components/common/checkAll";
  import inquiryProductItem from "../../../../components/common/inquiryProductItem";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: true,
          isShow: false,
          current: 1,
          isOrder: false,
          isTrue: true
        },
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
        ]
      };
    },
    methods: { onChange() {}, isCheckAllMethod() {} },
    components: {
      commonTitle,
      orderTitle,
      listTitle,
      checkAll,
      inquiryProductItem
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
