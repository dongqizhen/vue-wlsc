<template>
  <div class="orderManage">
    <manage-number-nav :navArr="tabs"></manage-number-nav>
    <div class="orderContainer">
      <filter-search></filter-search>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="tbody">
          <ul>
            <li v-for="item in data" :key="item.id">
              <order-item
                :data="item"
                :checkedList="checkedList"
                v-on:getChecked="getChecked"
              ></order-item>
            </li>
          </ul>
        </div>
        <div class="tfooter">
          <checkAll
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
          ></checkAll>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  import orderItem from "../../../../components/common/orderItem";
  import checkAll from "../../../../components/common/checkAll";
  import listTitle from "../../../../components/common/listTitle";
  import filterSearch from "../../../../components/common/filterSearch";
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
        checkedList: [],
        checkAll: false,
        tabs: [
          {
            id: 1,
            name: "全部订单",
            amount: 6
          },
          {
            id: 2,
            name: "待接单",
            amount: 1
          },
          {
            id: 3,
            name: "待发货",
            amount: 1
          },
          {
            id: 4,
            name: "待收货",
            amount: 1
          },
          {
            id: 5,
            name: "待评价",
            amount: 1
          },
          {
            id: 6,
            name: "已完成",
            amount: 1
          },
          {
            id: 7,
            name: "待发货",
            amount: 1
          }
        ],
        titleArr: ["产品图片", "产品名称", "单价", "数量", "实付金额", "操作"]
      };
    },
    methods: {
      getChecked(val) {
        if (typeof val == "object") {
          this.checkedList = val;
        } else {
          if (_.indexOf(this.checkedList, val) != -1) {
            this.checkedList = _.without(this.checkedList, val);
          }
        }
        if (this.checkedList.length == this.data.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
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
      }
    },
    components: {
      manageNumberNav,
      orderItem,
      checkAll,
      listTitle,
      filterSearch
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .orderManage {
    padding: 0 20px;
    background-color: #fff;
    min-height: 693px;
    box-shadow: $base-box-shadow;
    .orderContainer {
      margin-top: 24px;
      .listContent {
        /deep/.listTitle {
          margin-bottom: 12px;
          ul {
            li {
              &:nth-child(2) {
                width: 197px;
              }
              &:nth-child(5) {
                width: 190px;
                margin-right: 0;
                justify-content: center;
              }
              &:nth-child(6) {
                width: 175px;
                margin-right: 0;
                justify-content: center;
              }
            }
          }
        }
        .tbody {
          ul {
            li {
              margin-bottom: 12px;
              /deep/.itemProduct {
                span {
                  &:first-child {
                    margin-left: 46px;
                  }
                  &:nth-child(2) {
                    width: 197px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

