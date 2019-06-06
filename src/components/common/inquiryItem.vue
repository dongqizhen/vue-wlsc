<template>
  <div class="inquiryItem">
    <inquiry-title
      :checkedList="selectDatas"
      v-on:getChecked="getChecked"
      :data="data"
      :isShowInfo="isShowInfo"
    ></inquiry-title>
    <!-- <order-title
      :checkedList="selectDatas"
      v-on:getChecked="getChecked"
      :data="data"
      :isShowInfo="isShowInfo"
    ></order-title> -->
    <div class="inquiryProduct">
      <div class="leftInfoBox">
        <inquiry-product-item
          v-for="item in data.goodList"
          :key="item.id"
          :itemData="item"
          :isShowInfo="isShowInfo"
          :checkedList="goodList"
          v-on:getCheckedList="getCheckedList"
        ></inquiry-product-item>
      </div>
      <div class="operating">
        <div v-if="isShowInfo.current == 1 && isShowInfo.isShop == 1">
          <router-link
            :to="{
              path: `editInquiry/${data.id}`,
              query: { isShowInfo: isShowInfo }
            }"
          >
            编辑报价
          </router-link>
        </div>
        <div v-else>
          <router-link
            :to="{
              path: `inquiryOrderDetail/${data.id}`,
              query: { isShowInfo: JSON.stringify(this.isShowInfo) }
            }"
          >
            查看详情
          </router-link>
        </div>
        <div @click="deleteInquiryOrder(data.id)">删除询价单</div>
        <div
          v-if="isShowInfo.current == 1"
          @click="remindQuote(data.storeId, data.id)"
          class="remind"
        >
          {{ data.remind == 1 ? "已" : "" }}提醒商家报价
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  import inquiryTitle from "./inquiry/inquiryTitle";
  import inquiryProductItem from "./inquiryProductItem";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return { selectDatas: this.checkedList, goodList: [] };
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      checkedList: {
        type: Array,
        required: true
      },
      isShowInfo: {
        type: Object
      }
    },
    watch: {
      checkedList(newVal) {
        console.log("变化的值：：：：", newVal);
        this.selectDatas = newVal;
        if (newVal.length > 0) {
          _.map(newVal, o => {
            if (o.id == this.data.id) {
              this.goodList = o.goodList;
            }
          });
        } else {
          this.goodList = [];
        }
      }
    },
    methods: {
      getCheckedList(val) {
        // console.log(this.data.id);
        console.log("选择的值：", val);
        this.goodList = val;
        // console.log(this.selectDatas);
        let itemIsCheckAll;
        if (this.data.goodList.length == val.length) {
          itemIsCheckAll = true;
        } else {
          itemIsCheckAll = false;
        }
        // console.log(itemIsCheckAll);
        if (this.selectDatas.length == 0) {
          this.selectDatas.push({
            id: this.data.id,
            goodList: val,
            isCheckAll: itemIsCheckAll
          });
        } else {
          if (
            _.find(this.selectDatas, o => {
              return o.id == this.data.id;
            })
          ) {
            _.map(this.selectDatas, o => {
              if (o.id == this.data.id) {
                o.goodList = val;
                o.isCheckAll = itemIsCheckAll;
              }
            });
          } else {
            this.selectDatas.push({
              id: this.data.id,
              goodList: val,
              isCheckAll: itemIsCheckAll
            });
          }
        }
        // console.log(this.selectDatas);
        this.$emit("getChecked", this.selectDatas);
      },
      getChecked(val) {
        if (
          _.find(val, o => {
            return o.id == this.data.id;
          })
        ) {
          this.goodList = _.find(val, o => {
            return o.id == this.data.id;
          }).goodList;
        } else {
          this.goodList = [];
        }
        this.selectDatas = val;
        this.$emit("getChecked", val);
      },
      deleteInquiryOrder(id) {
        console.log(id);
        _getData("/enquiryPlus/deleteEnquiry", { ids: id }).then(data => {
          console.log("删除询价单：", data);
          this.$emit("getIsDelete", data);
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
      }
    },
    components: {
      orderTitle,
      inquiryProductItem,
      inquiryTitle
    }
  };
</script>
<style lang="scss" scoped>
  .inquiryProduct {
    display: flex;
    border: 1px solid #ddd;
    border-top: none;
    margin-bottom: 10px;
    .leftInfoBox {
      flex: 1;
      /deep/.inquiryProductItem {
        border: none;
        border-bottom: 1px solid #ddd;
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .operating {
      width: 96px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #ddd;
      color: #333;
      font-size: 12px;
      div {
        margin-bottom: 10px;
        cursor: pointer;
        a {
          color: #333;
          &:hover {
            color: #f10215;
          }
        }
        &:hover {
          color: #f10215;
        }
      }
      // .remind {
      //   color: #f10215;
      //   font-size: 14px;
      //   font-weight: 600;
      // }
    }
  }
</style>
