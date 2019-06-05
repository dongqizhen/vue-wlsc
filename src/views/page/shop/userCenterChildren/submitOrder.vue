<template>
  <div class="orderSure">
    <common-title title="订单确认"></common-title>
    <div class="receiptAddress">
      <div class="addAddress">
        <span>收货地址:</span>
        <span class="addNewAddress" @click="addCarSuccess">使用新地址</span>
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
              @click="addCarSuccess(item.id)"
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
        <order-sure-item :data="data"></order-sure-item>
      </div>
      <div class="totalInfo">
        <span>
          共计
          <i>{{ data.list ? data.list.length : "" }}</i>
          件商品
        </span>
        <span>
          总额<i>￥{{ data.subtotal }}</i>
        </span>
        <a-button @click="sureSubmit">确认</a-button>
      </div>
    </div>
    <add-address-modal
      :Visible="visible"
      :type="type"
      :editId="editId"
    ></add-address-modal>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import orderSureItem from "../../../../components/common/orderSureItem";
  import { _getData } from "../../../../config/getData";
  import addAddressModal from "../../../../components/modal/addAddressModal";
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        visible: false,
        type: "",
        editId: 0,
        data: {},
        userAddressList: [],
        checkAll: false,
        checkedList: [],
        titleArr: [
          "产品图片",
          "产品名称",
          "品牌型号",
          "数量",
          "单位",
          "小计",
          "报价日期",
          "操作"
        ],
        current: -1,
        submitAddressData: {},
        submitData: {
          storeList: []
        }
      };
    },
    computed: {
      ...mapState(["isLogin", "userInfo"])
    },
    watch: {
      visible(newVal) {
        if (!newVal) {
          this.getAddress();
        }
      }
    },
    methods: {
      sureSubmit() {
        _.map(this.userAddressList, val => {
          if (this.current == val.id) {
            this.submitAddressData.consignee = val.userName;
            this.submitAddressData.mobile = val.phone;
            this.submitAddressData.address = val.address;
            this.submitAddressData.postCode = val.postalCode;
            this.submitAddressData.postCode = val.postalCode;
          }
        });
        this.submitData.storeList.push({
          storeId: this.data.storeId,
          goodsList: this.data.list
        });
        this.submitData = {
          ...this.submitAddressData,
          storeList: this.submitData.storeList
        };
        console.log(this.submitData);
        _getData("/order/addOrder", { params: this.submitData }).then(data => {
          console.log(data);
        });
      },
      addCarSuccess(id) {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.visible = true;
        this.editId = id;
      },
      selectAddress(id) {
        this.current = id;
      },
      getAddress() {
        _getData(
          `${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`,
          {
            method: "appPageList",
            userid: this.userInfo,
            token: "",
            params: { currentPage: 1, countPerPage: 10 }
          }
        ).then(data => {
          console.log(data);
          this.userAddressList = data.data.result.UserAddressList;
          _.map(data.data.result.UserAddressList, val => {
            if (val.status == 1) {
              this.current = val.id;
            }
          });
        });
      }
    },
    mounted() {
      this.getAddress();
      _getData("/enquiry/getEnquiry", {
        enquirySn: this.$route.params.id.split("|")[0]
      }).then(data => {
        console.log("获取询价单详情：", data);
        this.data = data;
      });
    },
    components: {
      commonTitle,
      listTitle,
      orderSureItem,
      addAddressModal
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
      /deep/.listTitle {
        ul {
          li {
            &:first-child {
              margin-left: 20px;
            }
            &:nth-child(4) {
              width: 66px;
            }
            &:nth-child(5) {
              width: 50px;
            }
            &:nth-child(6) {
              width: 100px;
            }
            &:nth-child(7) {
              width: 68px;
              margin-right: 67px;
            }
          }
        }
      }
      .listContent {
        margin-top: 24px;
      }
      .totalInfo {
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border: $border-style;
        span {
          margin-right: 40px;
          font-size: 12px;
          color: #666666;
          i {
            color: $theme-color;
            font-style: normal;
            font-size: 16px;
            font-weight: 600;
          }
        }
        .ant-btn {
          width: 76px;
          border: none;
          border-radius: 0;
          height: 40px;
          background: #f5a623;
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }
</style>
