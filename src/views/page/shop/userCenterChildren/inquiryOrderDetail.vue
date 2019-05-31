<template>
  <div class="messageCenter">
    <common-title title="询价单"></common-title>
    <div class="listContainer">
      <order-title
        :isShowInfo="isShowInfo"
        :data="item"
        :checkedList="checkedList"
        v-on:getChecked="getChecked"
      ></order-title>
      <div class="shopAndlink">
        <div class="shopName">
          <img
            src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
          />
          北京华脉诚信科技有限公司
        </div>
        <div class="linkName">联系人：张三</div>
        <div class="phone">联系方式：188100000299 400-121-1212</div>
      </div>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <ul>
          <li v-for="item in data" :key="item.id" :class="addClass(item.id)">
            <span>
              <a-checkbox
                @change="onChange(item.id)"
                :checked="checkedChange(item.id)"
              ></a-checkbox>
            </span>
            <span><img :src="item.img"/></span>
            <span>{{ item.name }}</span>
            <span>{{ item.productLine }}</span>
            <span>{{ item.brandOrmodel }}</span>
            <span>{{ item.number }}</span>
            <span>{{ item.createOn }}</span>
            <span>这里是一段备注</span>
          </li>
        </ul>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
          <div
            slot="right-box"
            class="right-box"
            v-if="isShowInfo.current == 2"
          >
            <div class="totalInfo">
              <span class="totalPrice"> 报价总金额：<i>¥5982827.00</i> </span>
              <span class="download" @click="turnMyQuote">转为我的报价</span>
              <span class="edit">
                <router-link to="/userCenter/submitOrder">提交订单</router-link>
              </span>
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
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        isShowInfo: {},
        item: {
          enquirySn: "sn2019052015475145961000"
        },
        data: [
          {
            id: "1",
            name: "John Brown",
            img: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
            productLine: "配件/CT类",
            brandOrmodel: "GE/GE-101",
            status: "未上架",
            number: 111,
            createOn: "2019-03-28"
          },
          {
            id: "2",
            img: "http://file.haoyigong.com/server/upload/1554081863934.jpg",
            name: "Jim Green",
            productLine: "配件/CT类",
            brandOrmodel: "GE/GE-102",
            status: "未上架",
            number: 111,
            createOn: "2019-03-28"
          },
          {
            id: "3",
            img: "http://file.haoyigong.com/server/upload/1553495655746.png",
            name: "Joe Black",
            productLine: "配件/CT类",
            brandOrmodel: "GE/GE-103",
            status: "未上架",
            number: 111,
            createOn: "2019-03-28"
          }
        ],
        current: 1,
        checkAll: false,
        checkedList: [],
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
    methods: {
      turnMyQuote() {},
      tab(tabVal) {
        this.current = tabVal;
      },
      onChange(id) {
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == this.data.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      addClass(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return "active";
          }
        }
      },
      checkedChange(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
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

      getInquiryList() {
        _getData("/enquiry/enquiryList", {
          page: 1,
          size: 10,
          status: this.current
        }).then(data => {
          console.log("获取询价管理的列表：", data);
          this.data = data.data;
        });
      }
    },
    mounted() {
      // this.getInquiryList();
      console.log(this.$route.query.isShowInfo);
      this.isShowInfo = this.$route.query.isShowInfo;
      this.isShowInfo.isTrue = false;
      this.isShowInfo.isDetail = true;
    },
    components: {
      commonTitle,
      checkAll,
      orderTitle,
      listTitle
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .messageCenter {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
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
      /deep/.orderTitle {
        .common {
          font-size: 14px;
        }
      }
      .shopAndlink {
        display: flex;
        font-size: 14px;
        color: #333333;
        align-items: center;
        height: 70px;
        padding-left: 22px;
        .shopName {
          margin-right: 40px;
          height: 20px;
          display: flex;
          align-items: center;
          img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 4px;
            margin-top: 2px;
          }
        }
        .linkName {
          margin-right: 40px;
        }
      }
      .listContent {
        /deep/.listTitle {
          ul {
            li {
              &:nth-child(4) {
                width: 92px;
              }
              &:nth-child(5) {
                width: 92px;
              }
              &:nth-child(6) {
                width: 72px;
                margin-right: 46px;
              }
              &:last-child {
                width: 160px;
                margin-right: 0;
              }
            }
          }
        }
        ul {
          margin-top: 10px;
          %span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666;
            margin-right: 30px;
            &:first-child {
              width: 34px;
              padding-left: 20px;
              margin-right: 0;
            }
            &:nth-child(2) {
              width: 70px;
              margin-left: 12px;
              margin-right: 12px;
              img {
                width: 100%;
                height: 70px;
              }
            }
            &:nth-child(3) {
              width: 155px;
            }
            &:nth-child(4) {
              width: 98px;
            }
            &:nth-child(5) {
              width: 92px;
            }
            &:nth-child(6) {
              width: 92px;
            }
            &:nth-child(7) {
              width: 72px;
              margin-right: 46px;
            }
            &:nth-child(8) {
              width: 160px;
              margin-right: 0;
            }
          }
          li {
            display: flex;
            height: 93px;
            border: 1px solid #ddd;
            margin-bottom: 12px;
            padding-top: 11px;
            &.active {
              background-color: rgba(245, 166, 35, 0.06);
            }
            span {
              @extend %span;
            }
          }
        }
      }
      .tfooter {
        .right-box {
          .totalInfo {
            height: 42px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .totalPrice {
              font-size: 12px;
              color: #666666;
              margin-right: 40px;
              i {
                font-size: 16px;
                color: $theme-color;
                font-style: normal;
                font-weight: 600;
              }
            }
            .download {
              width: 132px;
              height: 100%;
              line-height: 40px;
              text-align: center;
              background-image: linear-gradient(90deg, #ff4e1a 100%, #f10000 0%);
              font-size: 14px;
              color: #ffffff;
              font-weight: 600;
              cursor: pointer;
            }
            .edit {
              width: 104px;
              height: 100%;
              line-height: 40px;
              text-align: center;
              font-size: 14px;
              color: #ffffff;
              font-weight: 600;
              background: #f5a623;
              cursor: pointer;
              a {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>
