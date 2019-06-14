<template>
  <div class="orderManage">
    <common-title title="订单管理"></common-title>
    <manage-number-nav
      :navArr="tabs"
      v-on:tab="getOrderStatus"
      :defaultActiveKey="defaultActiveKey"
    ></manage-number-nav>
    <div class="orderContainer">
      <filter-search v-on:getSearchData="getSearchData"></filter-search>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="tbody">
          <ul v-if="data.length > 0">
            <li v-for="item in data" :key="item.id">
              <order-item
                :data="item"
                :checkedList="checkedList"
                v-on:getChecked="getChecked"
                :isShowInfo="isShowInfo"
                v-on:returnValue="getReturnStatus"
              ></order-item>
            </li>
          </ul>
          <no-data v-else text="暂无数据"></no-data>
        </div>
        <div class="tfooter">
          <checkAll
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
            v-on:isDelete="getCheckDelete"
            v-if="
              (getOrderData.orderStatus == 5 ||
                getOrderData.orderStatus == 7) &&
                data.length > 0
            "
          ></checkAll>
        </div>
      </div>
    </div>
    <pagination
      :data="paginationData"
      v-on:onPaginationChange="getPaginationChange"
      v-if="paginationData.count != 0"
    ></pagination>
  </div>
</template>
<script>
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  import orderItem from "../../../../components/common/order/orderItem";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import checkAll from "../../../../components/common/checkAll";
  import listTitle from "../../../../components/common/listTitle";
  import filterSearch from "../../../../components/common/filterSearch";
  import pagination from "../../../../components/common/pagination";
  import { _getData } from "../../../../config/getData";
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: false,
          isShow: false,
          current: 1,
          isOrder: true,
          isTrue: true,
          isMerchant: true
        },
        data: [],
        checkedList: [],
        checkAll: false,
        defaultActiveKey: 1,
        tabs: [
          {
            id: 1,
            name: "待接单",
            amount: 1
          },
          {
            id: 2,
            name: "待发货",
            amount: 1
          },
          {
            id: 3,
            name: "待收货",
            amount: 1
          },
          {
            id: 4,
            name: "待评价",
            amount: 1
          },
          {
            id: 5,
            name: "已完成",
            amount: 1
          },
          {
            id: 6,
            name: "退货",
            amount: 1
          },
          {
            id: 7,
            name: "已关闭",
            amount: 1
          }
        ],
        titleArr: ["产品图片", "产品名称", "单价", "数量", "实付金额", "操作"],
        getOrderData: {
          currentPage: "1",
          countPerPage: "10",
          storeId: "",
          name: "",
          orderStatus: 1, //类型：String  可有字段  备注：订单状态：1：待接单，2：待发货，3：待收货，4：待评价，5：已完成，6：退货，7：已关闭
          startTime: "",
          endTime: ""
        },
        paginationData: {}
      };
    },
    computed: {
      ...mapState(["userShopInfo"])
    },
    methods: {
      //批量删除
      getCheckDelete(val) {
        console.log(val);
        console.log(this.checkedList);
        //批量删除
        _getData("/order/deleteOrder", {
          ids: this.checkedList.join(","),
          flag: "shop"
        }).then(data => {
          console.log("批量删除订单：", data);
          this.$message.success("批量删除订单成功", 1);
          this.getOrderList();
          this.getOrderNumber();
        });
      },
      getSearchData(val) {
        console.log(val);
        this.getOrderData.name = val.value;
        if (val.dateRange.length > 0) {
          this.getOrderData.startTime = val.dateRange[0];
          this.getOrderData.endTime = val.dateRange[1];
        } else {
          this.getOrderData.startTime = "";
          this.getOrderData.endTime = "";
        }
        this.getOrderList();
      },
      getReturnStatus(val) {
        this.defaultActiveKey = val;
        this.getOrderStatus(val);
      },
      getOrderStatus(val) {
        console.log("获取订单状态：", val);
        this.getOrderData.orderStatus = val;
        if (val == 5 || val == 7) {
          this.isShowInfo.current = -1;
        } else {
          this.isShowInfo.current = 1;
        }
        this.getOrderList();
        this.getOrderNumber();
      },
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
      },
      getPaginationChange(val) {
        console.log(val);
        this.getOrderData.currentPage = val;
        this.getOrderList();
      },
      getOrderList() {
        this.getOrderData.storeId = this.userShopInfo.store_id;
        _getData("/order/orderList", this.getOrderData).then(data => {
          console.log("获取订单列表：", data);
          this.checkAll = false;
          this.checkedList = [];
          this.data = data.data;
          this.paginationData = data;
        });
      },
      getOrderNumber() {
        _getData("/order/orderCount", {
          param: {
            storeId: this.userShopInfo.store_id
          }
        }).then(data => {
          console.log("订单数量：：", data);
          _.map(data.data, o => {
            _.each(this.tabs, val => {
              if (o.status == val.id) {
                val.amount = o.num;
              }
            });
          });
        });
      }
    },
    mounted() {
      this.getOrderList();
      this.getOrderNumber();
    },
    components: {
      manageNumberNav,
      orderItem,
      checkAll,
      listTitle,
      filterSearch,
      commonTitle,
      pagination
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .orderManage {
    padding: 4px 20px 20px;
    background-color: #fff;
    min-height: 693px;
    box-shadow: $base-box-shadow;
    margin-bottom: 100px;
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
          /deep/.no-data {
            height: 450px;
          }
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

