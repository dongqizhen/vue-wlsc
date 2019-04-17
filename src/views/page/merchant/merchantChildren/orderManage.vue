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
              <order-title></order-title>
              <div class="productInfoBox">
                <div class="productInfo">
                  <div class="itemProduct">
                    <span>
                      <img
                        src="http://file.haoyigong.com/server/upload/1533522814856.jpg"
                      />
                    </span>
                    <span>John Brown</span>
                    <span>￥1000</span>
                    <span>12</span>
                  </div>
                  <div class="itemProduct">
                    <span>
                      <img
                        src="http://file.haoyigong.com/server/upload/1554081863934.jpg"
                      />
                    </span>
                    <span>John Brown</span>
                    <span>￥1000</span>
                    <span>12</span>
                  </div>
                </div>
                <div class="actualPrice">￥2600.00</div>
                <div class="operating">
                  <div class="lookPay">查看支付证明</div>
                  <div class="sure">确认发货</div>
                  <div class="lookOrderDetail">查看订单详情</div>
                  <div class="deleteOrder">删除订单</div>
                </div>
              </div>
              <div class="shippingAddress">
                <div class="left-box">收货地址</div>
                <div class="right-box">
                  <div>
                    <span>收货人：李先生</span>
                    <span>联系方式：18611110000</span>
                  </div>
                  <div>收货地址：北京市顺义区天竺保税区</div>
                </div>
              </div>
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
  import orderTitle from "../../../../components/common/orderTitle";
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
      orderTitle,
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
              .productInfoBox {
                display: flex;
                border: $border-style;
                border-top: none;
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
                      @extend %span;
                    }
                  }
                }
                .actualPrice {
                  width: 190px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-left: $border-style;
                }
                .operating {
                  width: 175px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  border-left: $border-style;
                }
              }
              .shippingAddress {
                display: flex;
                border: $border-style;
                border-top: none;
                color: #333333;
                font-size: 12px;
                .left-box {
                  width: 93px;
                  height: 83px;
                  line-height: 83px;
                  text-align: center;
                  border-right: $border-style;
                  font-weight: 600;
                }
                .right-box {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  padding-left: 17px;

                  div {
                    &:first-child {
                      margin-bottom: 8px;
                      span {
                        margin-right: 38px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .tfooter {
          .checkedAllBox {
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #dddddd;
            .left-box {
              span {
                &:first-child {
                  width: 34px;
                  margin-right: 12px;
                  padding-left: 20px;
                }
                &:nth-child(3) {
                  margin-right: 40px;
                  padding-left: 42px;
                }
                i {
                  font-style: normal;
                  color: $theme-color;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
            .right-box {
              button {
                width: 76px;
                height: 42px;
                line-height: 42px;
                border: 0;
                outline: none;
                background-color: transparent;
                color: #fff;
                text-align: center;
                cursor: pointer;
                &.shelf {
                  background-color: $theme-color;
                }
                &.obtained {
                  background-color: #f5a623;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

