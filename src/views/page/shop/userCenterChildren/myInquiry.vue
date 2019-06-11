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
              :checkedList="selectDatas"
              v-on:getChecked="getChecked"
              :isShowInfo="isShowInfo"
              v-on:getIsDelete="getIsDelete"
            ></inquiry-item>
          </li>
        </ul>
      </div>
      <div class="tfooter">
        <check-all
          :amount="selectArr.length"
          :checkAll="checkAll"
          :deleteText="isShowInfo.current"
          v-on:isCheckAll="isCheckAllMethod"
          v-on:isDelete="getCheckDelete"
          :class="isShowInfo.current != 1 ? 'checkAllStyle' : ''"
        >
          <div slot="right-box" class="right-box">
            <div
              class="turnMyQuote"
              v-if="isShowInfo.current == 2"
              @click="turnMyQuote"
            >
              转为我的报价
            </div>
            <div
              class="submitOrder"
              v-if="isShowInfo.current == 2"
              @click="submitOrder"
            >
              提交订单
            </div>
            <div
              :class="['submit', products.length > 0 ? 'active' : '']"
              v-if="isShowInfo.current == 3"
              @click="getQuote"
            >
              一键获取报价
            </div>
          </div>
        </check-all>
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
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import inquiryItem from "../../../../components/common/inquiry/inquiryItem";
  import checkAll from "../../../../components/common/checkAll";
  import calendarRange from "../../../../components/common/calendarRange";
  import pagination from "../../../../components/common/pagination";
  import { _getData } from "../../../../config/getData";
  import _ from "lodash";
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
        allProducts: [],
        selectDatas: [],
        selectArr: [],
        paginationData: {}
      };
    },
    watch: {
      selectDatas(newVal) {
        console.log("监控选择的值：：：：", newVal);
      }
    },
    methods: {
      //批量删除
      getCheckDelete(val) {
        console.log(val);
        console.log(this.selectArr);
        if (this.isShowInfo.current == 1) {
          //批量关闭
          _getData("/enquiryPlus/enquiryClose", {
            ids: this.selectArr.join(",")
          }).then(data => {
            console.log("批量关闭询价单：", data);
            this.$message.success("批量关闭询价单成功", 1);
            this.getInquiryList();
          });
        }
      },
      //转为我的报价
      turnMyQuote() {
        console.log(this.selectDatas);
      },
      //一键获取报价
      getQuote() {
        console.log(this.selectDatas);
        if (this.selectDatas.length == 0) {
          this.$message.warning("请选择产品", 1);
          return;
        } else {
          let params = [];
          _.map(this.selectDatas, o => {
            let selectProducts = [];
            let storeId = "";
            _.map(this.data, item => {
              if (item.id == o.id) {
                _.map(o.goodList, value => {
                  _.map(o.productInfo, val => {
                    if (value == val.id) {
                      selectProducts.push({
                        goodsId: val.goodsId,
                        number: val.number,
                        buyerDescription: val.introduce ? val.introduce : ""
                      });
                    }
                  });
                });
                storeId = item.storeId;
              }
            });
            params.push({ storeId: storeId, goodsList: selectProducts });
          });
          console.log(params);
          console.log(this.selectDatas);
          _getData("/enquiryPlus/addEnquiry", { param: params }).then(data => {
            console.log("一键获取报价：", data);
            // if (data.data.code == 0) {
            this.isShowInfo.current = 1;
            this.searchParams.status = 1;
            this.getInquiryList();
            // }
          });
        }
      },
      getPaginationChange(val) {
        console.log(val);
        this.searchParams.page = val;
        this.getInquiryList();
      },
      //单个删除
      getIsDelete(val) {
        console.log(val);
        this.getInquiryList();
      },
      //提交订单（已报价）
      submitOrder() {
        console.log(this.products);
        if (this.products.length > 0) {
          this.$router.replace({
            path: `submitOrder/${this.products.join(",")}`
          });
        } else {
          this.$message.warning("请选择产品", 1);
          return;
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
        console.log("订单复选框做选择的值：", val);
        this.selectDatas = val;
        this.products = [];
        this.selectArr = [];
        _.map(val, o => {
          _.map(o.goodList, value => {
            this.products.push(value);
          });
        });
        if (this.products.length == this.allProducts.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        if (this.isShowInfo.current == 1) {
          _.map(val, o => {
            this.selectArr.push(o.id);
          });
        } else if (this.isShowInfo.current == 2) {
          this.selectArr = this.products;
        }
      },
      isCheckAllMethod(val) {
        this.products = [];
        this.selectDatas = [];
        this.selectArr = [];
        if (val) {
          this.checkAll = true;
          this.products = this.allProducts;
          _.map(this.data, o => {
            let goodsIds = [];
            let productInfo = [];
            for (const item of o.goodList) {
              goodsIds.push(item.id);
              productInfo.push(item);
            }
            this.selectDatas.push({
              id: o.id,
              goodList: goodsIds,
              isCheckAll: true,
              productInfo: productInfo
            });
            if (this.isShowInfo.current == 1) {
              this.selectArr.push(o.id);
            } else if (this.isShowInfo.current == 2) {
              this.selectArr = this.products;
            }
          });
          //console.log(this.selectDatas);
        } else {
          this.checkAll = false;
        }
      },
      getInquiryList() {
        _getData("/enquiryPlus/enquiryList", this.searchParams).then(data => {
          console.log("获取询价管理的列表：", data);
          this.products = [];
          this.allProducts = [];
          this.selectDatas = [];
          this.checkAll = false;
          this.data = data.data;
          this.paginationData = data;
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
      calendarRange,
      listTitle,
      inquiryItem,
      pagination
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
              font-weight: 400;
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
            font-weight: 400;
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
            &:nth-child(3) {
              width: 78px;
            }
            &:nth-child(4) {
              width: 80px;
            }
            &:nth-child(6) {
              width: 166px;
            }
          }
        }
      }
      .checkAllStyle {
        /deep/.left-box {
          visibility: hidden;
        }
      }
      .right-box {
        display: flex;
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        .turnMyQuote {
          width: 132px;
          height: 42px;
          line-height: 42px;
          text-align: center;
          background-image: linear-gradient(-90deg, #ff4e1a 0%, #f10000 100%);
          cursor: pointer;
        }
        .submitOrder {
          width: 104px;
          height: 42px;
          line-height: 42px;
          text-align: center;
          background: #f5a623;
          cursor: pointer;
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
