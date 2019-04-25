<template>
  <div class="orderManage">
    <manage-number-nav :navArr="tabs"></manage-number-nav>
    <div class="orderContainer">
      <div class="selectInfoBox">
        <div class="selectInfo">
          <div class="common">
            <div class="left-box">关键词</div>
            <div class="right-box">
              <a-input placeholder="请输入关键词" />
            </div>
          </div>
          <div class="common">
            <div class="left-box">下单日期</div>
            <div class="right-box">
              <el-date-picker type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="selectBtn">
          <button class="search">搜索</button>
          <button class="clear">清除</button>
        </div>
      </div>
      <div class="listContent">
        <div class="thead">
          <span>产品图片</span>
          <span>产品名称</span>
          <span>单价</span>
          <span>数量</span>
          <span>实付金额</span>
          <span>操作</span>
        </div>
        <div class="tbody">
          <ul>
            <li>
              <order-item></order-item>
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
  export default {
    data() {
      return {
        data: ["1", "2", "3"],
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
      onPanelChange() {},
      onCheckAllChange() {}
    },
    components: {
      manageNumberNav,
      orderItem,
      checkAll
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
      .selectInfoBox {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        margin-bottom: 24px;
        .selectInfo {
          display: flex;
          .common {
            display: flex;
            align-items: center;
            height: 27px;
            margin-right: 30px;
            .left-box {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #333333;
              margin-right: 6px;
            }
            .right-box {
              @include placeholderStyle(12px);
              .ant-input {
                width: 121px;
                height: 27px;
              }
              .ant-select {
                margin-right: 10px;
                height: 27px;
                /deep/.ant-select-selection--single {
                  height: 100%;
                  .ant-select-selection__rendered {
                    height: 100%;
                    line-height: 27px;
                  }
                  .ant-select-selection__placeholder,
                  .ant-select-search__field__placeholder {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
        .selectBtn {
          button {
            border: 0;
            outline: none;
            background-color: transparent;
            color: #fff;
            font-size: 12px;
            margin-right: 10px;
            padding: 0 18px;
            height: 27px;
            line-height: 27px;
            cursor: pointer;
            &:last-child {
              margin-right: 0;
            }
          }
          .search {
            background-color: $theme-color;
          }
          .clear {
            background-color: #999;
          }
        }
      }
      .listContent {
        %span {
          &:first-child {
            width: 70px;
            margin-left: 46px;
            margin-right: 12px;
            img {
              width: 70px;
              height: 70px;
            }
          }
          &:nth-child(2) {
            width: 185px;
            margin-right: 56px;
          }
          &:nth-child(3) {
            width: 98px;
            margin-right: 30px;
          }
          &:nth-child(4) {
            width: 98px;
          }
        }
        .thead {
          display: flex;
          height: 40px;
          align-items: center;
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          margin-bottom: 12px;
          span {
            @extend %span;
            &:nth-child(5) {
              width: 190px;
            }
            &:nth-child(6) {
              width: 175px;
            }
          }
        }
        .tbody {
          ul {
            li {
              margin-bottom: 12px;
            }
          }
        }
      }
    }
  }
</style>

