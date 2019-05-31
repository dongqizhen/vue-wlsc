<template>
  <div class="orderSure">
    <common-title title="订单确认"></common-title>
    <div class="receiptAddress">
      <div class="addAddress">
        <span>收货地址:</span>
        <span class="addNewAddress">使用新地址</span>
      </div>
      <div class="addressInfo">
        <ul class="clearfix">
          <li
            v-for="item in userAddressList"
            :key="item.id"
            @click="selectAddress(item.id)"
            :class="current == item.id ? 'active' : ''"
          >
            <div class="receiptName">
              <span>{{ item.userLocation }}</span
              ><span>（{{ item.userName }} 收）</span>
            </div>
            <div class="addressDetail">
              <span class="detailAddress">
                {{
                  item.address.length > 25
                    ? item.address.substring(0, 25) + "..."
                    : item.address
                }}
              </span>
              <span>{{ item.phone }}</span>
            </div>
            <div class="defaultAddress" v-if="item.status == 1">默认地址</div>
            <div
              class="editAddress"
              v-show="current == item.id"
              @click="editAddress(item.id)"
            >
              修改
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="listContainer">
      <list-title :titleArr="titleArr"></list-title>
      <div class="listContent">
        <purchase-order-item
          v-for="item in data"
          :key="item.id"
          :val="item"
          :isCheckAll="isCheckAll(item.sid)"
          v-on:getIsCheckAll="getIsCheckAll"
        ></purchase-order-item>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import purchaseOrderItem from "../../../../components/common/purchaseOrderItem";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data: [],
        userAddressList: [],
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
        ],
        current: -1
      };
    },
    methods: {
      selectAddress(id) {
        this.current = id;
      },

      getIsCheckAll(val) {
        console.log(val);
        if (val.isCheckAll) {
          if (_.indexOf(this.checkedList, val.shopId) == -1) {
            this.checkedList.push(val.shopId);
          }
        } else {
          this.checkedList = _.without(this.checkedList, val.shopId);
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
            this.checkedList.push(val.sid);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      isCheckAll(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
      },
      remarkRead() {}
    },
    mounted() {
      _getData(`${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`, {
        method: "appPageList",
        userid: "15301",
        token: "09a52ead-ef25-411d-8ac2-e3384fceed68",
        params: { currentPage: 1, countPerPage: 10 }
      }).then(data => {
        console.log(data);
        this.userAddressList = data.data.result.UserAddressList;
        _.map(data.data.result.UserAddressList, val => {
          if (val.status == 1) {
            this.current = val.id;
          }
        });
      });
    },
    components: {
      commonTitle,
      listTitle,
      purchaseOrderItem
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .orderSure {
    min-height: 666px;
    background-color: #fff;
    padding: 4px 20px 20px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 110px;
    .receiptAddress {
      margin-top: 24px;
      .addAddress {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        span {
          font-size: 14px;
          color: #333;
        }
        .addNewAddress {
          width: 95px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          border: $border-style;
          border-radius: 2px;
          font-size: 12px;
          color: #666666;
        }
      }
      .addressInfo {
        ul {
          width: 105%;
          li {
            position: relative;
            width: 237px;
            height: 106px;
            background: url("../../../../assets/images/address-bgc.png") no-repeat
              center center / 100% 100%;
            padding: 10px 20px;
            font-size: 12px;
            color: #666666;
            cursor: pointer;
            margin-right: 10px;
            float: left;
            margin-bottom: 30px;
            &.active {
              background: url("../../../../assets/images/address-active.png")
                no-repeat center center / 100% 100%;
            }
            .receiptName {
              padding-bottom: 5px;
              border-bottom: $border-style;
              span {
                &:first-child {
                  margin-right: 9px;
                }
              }
            }
            .addressDetail {
              padding-top: 7px;
              .detailAddress {
              }
            }
            .defaultAddress {
              width: 57px;
              height: 17px;
              line-height: 17px;
              background: rgba(1, 157, 221, 0.61);
              border-radius: 0 4px 0 0;
              text-align: center;
              font-size: 12px;
              color: #ffffff;
              position: absolute;
              right: 0;
              top: 0;
            }
            .editAddress {
              font-size: 12px;
              color: #f5a623;
            }
          }
        }
      }
    }
    .listContainer {
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
