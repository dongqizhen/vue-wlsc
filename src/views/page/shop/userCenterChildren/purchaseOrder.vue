<template>
  <div class="messageCenter">
    <common-title title="选购单"></common-title>
    <div class="listContainer">
      <list-title :titleArr="titleArr"></list-title>
      <div class="listContent">
        <purchase-order-item></purchase-order-item>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
          <div slot="right-box">
            <div
              v-bind:class="['remark', checkedList.length > 0 ? 'active' : '']"
              @click="remarkRead"
            >
              一键获取报价
            </div>
          </div>
        </check-all>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import checkAll from "../../../../components/common/checkAll";
  import listTitle from "../../../../components/common/listTitle";
  import purchaseOrderItem from "../../../../components/common/purchaseOrderItem";
  export default {
    data() {
      return {
        data: [
          {
            id: 1,
            title: "卖家申请店铺审核通过提示",
            createOn: "2018-11-18",
            introduce:
              "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
          },
          {
            id: 2,
            title: "卖家申请店铺审核未通过提示",
            createOn: "2018-11-19",
            introduce:
              "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
          }
        ],
        checkAll: false,
        checkedList: [],
        titleArr: [
          "产品图片",
          "产品名称",
          "品牌型号",
          "单价",
          "数量",
          "小计",
          "操作"
        ]
      };
    },
    methods: {
      isCheckAllMethod(val) {
        if (val) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      remarkRead() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
        }
      }
    },
    components: {
      commonTitle,
      checkAll,
      listTitle,
      purchaseOrderItem
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .messageCenter {
    min-height: 666px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 110px;
    .listContainer {
      margin-top: 12px;
      .listContent {
        margin-top: 24px;
      }
      .tfooter {
        .remark {
          padding: 0 22px;
          height: 42px;
          background-color: #ccc;
          color: #fff;
          font-size: 14px;
          line-height: 42px;
          text-align: center;
          font-weight: 600;
          cursor: pointer;
          &.active {
            background-image: linear-gradient(90deg, #f10000 0%, #ff4e1a 100%);
          }
        }
      }
    }
  }
</style>
