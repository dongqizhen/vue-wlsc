<template>
  <div class="messageCenter">
    <common-title title="询价单"></common-title>
    <div class="listContainer">
      <order-title
        :isShowInfo="isShowInfo"
        :data="data"
        :checkedList="checkedList"
        v-on:getChecked="getChecked"
      ></order-title>
      <div class="shopAndlink">
        <div class="shopName">
          <img
            src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
          />
          {{ data.shopName }}
        </div>
        <div class="linkName">联系人：{{ data.username }}</div>
        <div class="phone">联系方式：188100000299 400-121-1212</div>
      </div>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <ul>
          <li
            v-for="item in data.goodList"
            :key="item.id"
            :class="addClass(item.id)"
          >
            <span>
              <a-checkbox
                @change="onChange(item.id)"
                :checked="checkedChange(item.id)"
              ></a-checkbox>
            </span>
            <span><img :src="item.goodsImage"/></span>
            <span>{{ item.goodsName }}</span>
            <span>{{ item.goodsBrand }}/{{ item.goodsModel }}</span>
            <span>{{ item.unitPrice }}</span>
            <span>{{ item.number }}</span>
            <span>{{
              item.arrivalTime ? item.arrivalTime.substring(0, 16) : ""
            }}</span>
            <span>{{ item.introduce }}</span>
          </li>
        </ul>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
          <div slot="right-box" class="right-box">
            <div
              :class="[
                'commonStyle',
                data.remind == 1 ? 'disabledStyle' : 'remind'
              ]"
              v-if="isShowInfo.current == 1"
              @click="remindQuote(data.storeId, data.id)"
            >
              {{ data.remind == 1 ? "已" : "" }}提醒商家报价
            </div>
            <div class="totalInfo" v-if="isShowInfo.current == 2">
              <span class="totalPrice">
                报价总金额：<i>¥{{ data.subtotal }}</i>
              </span>
              <span class="download" @click="turnMyQuote">转为我的报价</span>
              <span class="edit">
                <router-link
                  :to="`/userCenter/submitOrder/${$route.params.id}`"
                >
                  提交订单
                </router-link>
              </span>
            </div>
            <div
              :class="[
                'commonStyle',
                checkedList.length > 0 ? 'remind' : 'disabledStyle'
              ]"
              v-if="isShowInfo.current == 3"
              @click="getQuote"
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
  import orderTitle from "../../../../components/common/orderTitle";
  import listTitle from "../../../../components/common/listTitle";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: true,
          isShow: false,
          current: 1,
          isOrder: false,
          isTrue: false
        },
        data: {},
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
        ],
        goodsList: []
      };
    },
    methods: {
      turnMyQuote() {
        console.log(this.checkedList);
        this.goodsList = [];
        _.map(this.checkedList, val => {
          _.map(this.data.list, value => {
            if (val == value.id) {
              this.goodsList.push({
                goodsId: val,
                number: value.number,
                unitPrice: value.unit_price
              });
            }
          });
        });
        console.log(this.goodsList);
        _getData("/enquiry/myEnquiry", {
          param: [
            {
              enquirySn: this.$route.params.id,
              goodsList: this.goodsList
            }
          ]
        }).then(data => {
          console.log(data);
          this.$router.replace({ path: "/userCenter/myQuote" });
        });
      },
      remindQuote(storeId, enquiryId) {
        if (this.data.remind == 0) {
          _getData("/message/enquiryRemind", {
            param: {
              storeId: storeId, //备注：商铺id
              enquiryId: enquiryId //备注：询价单id
            }
          }).then(data => {
            console.log("提醒商家报价：", data);
            this.data.remind = 1;
          });
        } else {
          alert("已提醒商家报价");
          return;
        }
      },
      getQuote() {
        if (this.checkedList.length > 0) {
          let goodsList = [];
          _.map(this.checkedList, val => {
            _.map(this.data.goodList, o => {
              if (o.id == val) {
                goodsList.push({
                  goodsId: o.goodsId,
                  number: o.number,
                  buyerDescription: o.introduce
                });
              }
            });
          });
          _getData("/enquiryPlus/addEnquiry", {
            param: { storeId: this.data.storeId, goodsList: goodsList }
          }).then(data => {
            console.log("一键获取报价：", data);
            this.$router.replace({ path: "/userCenter/myInquiry" });
          });
        }
      },
      tab(tabVal) {
        this.current = tabVal;
      },
      onChange(id) {
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == this.data.goodList.length) {
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
      },
      getInquiryDetail() {
        _getData("/enquiryPlus/enquiryDetail", {
          id: this.$route.params.id
        }).then(data => {
          console.log("获取询价单详情：", data);
          this.data = data;
        });
      }
    },
    mounted() {
      this.getInquiryDetail();
      console.log(this.$route.query.isShowInfo);
      this.isShowInfo = JSON.parse(this.$route.query.isShowInfo);
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
          .commonStyle {
            width: 132px;
            height: 42px;
            line-height: 42px;
            font-size: 14px;
            color: #ffffff;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
          }
          .remind {
            background-image: linear-gradient(-90deg, #ff4e1a 0%, #f10000 100%);
          }
          .disabledStyle {
            background-image: linear-gradient(-90deg, #ccc 0%, #ccc 100%);
          }
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
