<template>
  <div class="myInquiry">
    <common-title title="我的询价">
      <div slot="titleRight" class="right-box">
        <ul>
          <li :class="isShowInfo.current == 1 ? 'active' : ''" @click="tab(1)">
            报价中(1)
          </li>
          <li :class="isShowInfo.current == 2 ? 'active' : ''" @click="tab(2)">
            已报价(2)
          </li>
          <li :class="isShowInfo.current == 3 ? 'active' : ''" @click="tab(3)">
            已关闭(1)
          </li>
        </ul>
      </div>
    </common-title>
    <div class="listContainer">
      <div class="selectInfoBox">
        <div class="selectInfo">
          <div class="common productName">
            <div class="left-box">询价单号</div>
            <div class="right-box">
              <a-input
                placeholder="请输入询价单号"
                v-model="searchParams.enquirySn"
              />
            </div>
          </div>
          <div class="common productStatus">
            <div class="left-box">产品名称</div>
            <div class="right-box">
              <a-input
                placeholder="请输入产品名称"
                v-model="searchParams.goodsName"
              />
            </div>
          </div>
        </div>
        <div class="selectBtn">
          <div class="common">
            <div class="left-box">询价日期</div>
            <div class="right-box">
              <calendar-range
                v-on:getDateRange="getDateTime"
                :dateRange="dateRange"
              ></calendar-range>
            </div>
          </div>
          <a-button class="search" @click="searchData">搜索</a-button>
          <a-button class="clear" @click="clearData">清除</a-button>
        </div>
      </div>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <ul>
          <li v-for="item in data" :key="item.id">
            <inquiry-item
              :data="item"
              :checkedList="checkedList"
              v-on:getChecked="getChecked"
              :isShowInfo="isShowInfo"
              v-on:getIsDelete="getIsDelete"
            ></inquiry-item>
          </li>
        </ul>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
          v-on:isDelete="getCheckDelete"
        >
          <div slot="right-box">
            <div
              :class="['submit', checkedList.length > 0 ? 'active' : '']"
              v-if="isShowInfo.current != 1"
              @click="submitOrder"
            >
              提交订单
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
  import orderTitle from "../../../../components/common/orderTitle";
  import listTitle from "../../../../components/common/listTitle";
  import inquiryItem from "../../../../components/common/inquiryItem";
  import calendarRange from "../../../../components/common/calendarRange";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: false,
          isShow: false,
          current: 1,
          isOrder: false,
          isTrue: true
        },
        data: [],
        dateRange: [],
        checkAll: false,
        checkedList: [],
        titleArr: [
          "产品图片",
          "产品名称",
          "单价",
          "数量",
          "到货时间",
          "备注",
          "操作"
        ],
        searchParams: {
          page: 1,
          size: 10,
          status: 1,
          enquirySn: "",
          storeId: ""
        },
        products: [],
        allProducts: []
      };
    },
    methods: {
      //批量删除
      getCheckDelete(val) {
        console.log(val);
        if (val) {
          _getData("/enquiryPlus/deleteEnquiry", {
            ids: this.checkedList.join(",")
          }).then(data => {
            console.log("删除询价单：", data);
            alert("删除成功");
            this.getInquiryList();
          });
        }
      },
      //单个删除
      getIsDelete(val) {
        console.log(val);
        this.getInquiryList();
      },
      //提交订单（已报价、已关闭）
      submitOrder() {
        console.log(this.checkedList);
        if (this.checkedList.length > 0) {
          this.$router.replace({
            path: `submitOrder/${this.checkedList.join("|")}`
          });
        }
      },
      searchData() {
        console.log(this.searchParams);
        this.getInquiryList();
      },
      clearData() {
        this.searchParams.enquirySn = "";
        this.searchParams.goodsName = "";
        this.dateRange = [];
      },
      getDateTime(val) {
        console.log(val);
        this.searchParams.startTime = val[0];
        this.searchParams.endTime = val[1];
      },
      tab(tabVal) {
        this.isShowInfo.current = tabVal;
        this.searchParams.status = tabVal;
        this.getInquiryList();
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
        this.checkedList = [];
        if (val) {
          this.checkAll = true;
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
        }

        if (val) {
          // this.checkAll = true;
          // this.products = this.allProducts;
          // _.map(this.data, o => {
          //   let goodsIds = [];
          //   for (const item of o.list) {
          //     goodsIds.push(item.goods_id);
          //   }
          //   this.selectDatas.push({
          //     storeId: o.sid,
          //     goodsList: goodsIds,
          //     isCheckAll: true
          //   });
          // });
        } else {
          this.checkAll = false;
        }
      },
      getInquiryList() {
        _getData("/enquiryPlus/enquiryList", this.searchParams).then(data => {
          console.log("获取询价管理的列表：", data);
          this.checkedList = [];
          this.data = data.data;
          _.map(this.data, o => {
            for (const val of o.goodList) {
              this.allProducts.push(val.id);
            }
          });
        });
      }
    },
    mounted() {
      this.getInquiryList();
    },
    components: {
      commonTitle,
      checkAll,
      orderTitle,
      calendarRange,
      listTitle,
      inquiryItem
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .myInquiry {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px 20px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 100px;
    .common-title {
      .right-box {
        ul {
          display: flex;
          align-items: center;
          li {
            width: 76px;
            height: 27px;
            line-height: 27px;
            border: 1px solid #dddddd;
            font-size: 12px;
            color: #333;
            text-align: center;
            font-weight: normal;
            border-right: none;
            cursor: pointer;
            &:last-child {
              border-right: 1px solid #dddddd;
            }
            &.active {
              background: #ffdfaa;
              border: 1px solid #f5a623;
            }
          }
        }
      }
    }
    .listContainer {
      margin-top: 12px;
      .selectInfoBox {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        padding-bottom: 12px;
        margin-bottom: 16px;
        border-bottom: $border-style;
        .selectInfo {
          display: flex;
        }
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
              line-height: 27px;
              font-size: 12px;
            }
            /deep/.el-select {
              height: 27px;
              line-height: 27px;
              .el-input {
                .el-input__inner {
                  font-size: 12px;
                }
                .el-input__suffix {
                  .el-input__suffix-inner {
                    .el-input__icon {
                      line-height: 27px;
                    }
                  }
                }
              }
            }
          }
        }
        .selectBtn {
          display: flex;
          /deep/.ant-calendar-picker-input {
            padding: 0;
            height: 27px;
            line-height: 27px;
            .ant-calendar-range-picker-input {
              height: 100%;
            }
            .ant-calendar-picker-clear {
              right: 6px;
            }
          }
          .ant-btn {
            border: none;
            outline: none;
            background-color: transparent;
            color: #fff;
            font-size: 12px;
            margin-right: 10px;
            padding: 0 18px;
            height: 27px;
            cursor: pointer;
            &:last-child {
              margin-right: 0;
            }
          }
          .search {
            border: 1px solid #f10215;
            background-color: $theme-color;
          }
          .clear {
            background-color: #999;
          }
        }
      }
      ul {
        margin-top: 12px;
      }
      /deep/.listTitle {
        ul {
          li {
            &:nth-child(4) {
              width: 60px;
            }
            &:nth-child(6) {
              width: 166px;
            }
          }
        }
      }
      .submit {
        width: 104px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        background: #ccc;
        font-size: 600;
        font-size: 14px;
        color: #ffffff;
        &.active {
          background: #f5a623;
        }
      }
    }
  }
</style>
