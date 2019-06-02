<template>
  <div class="shoppingCart">
    <common-title title="选购单"></common-title>
    <div class="listContainer">
      <list-title :titleArr="titleArr"></list-title>
      <div class="listContent">
        <purchase-order-item
          v-for="item in data"
          :key="item.id"
          :data="item"
          :isCheckAll="isCheckAll(item.sid)"
          v-on:getIsCheckAll="getIsCheckAll"
        ></purchase-order-item>
      </div>
      <div class="tfooter">
        <check-all
          :amount="products.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
          <div slot="right-box">
            <div
              v-bind:class="['remark', products.length > 0 ? 'active' : '']"
              @click="addInquiry"
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
  import listTitle from "../../../../components/common/listTitle";
  import purchaseOrderItem from "../../../../components/common/purchaseOrderItem";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data: [],
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
        products: []
      };
    },
    methods: {
      addInquiry() {
        param: [
          {
            storeId: "398",
            goodsList: [
              {
                goodsId: "1181020",
                number: "4",
                buyerDescription: "商品买家描述"
              }
            ]
          }
        ];
        console.log(this.checkedList);
        _getData("/enquiry/addEnquiry", {
          param: [
            {
              storeId: "398",
              goodsList: [
                {
                  goodsId: "1181020",
                  number: "4",
                  buyerDescription: "商品买家描述"
                },
                {
                  goodsId: "1181019",
                  number: "4",
                  buyerDescription: "商品买家描述"
                }
              ]
            }
          ]
        }).then(data => {
          console.log("一键获取报价：", data);
        });
      },
      getIsCheckAll(val) {
        console.log(val);
        if (val.isCheckAll) {
          if (_.indexOf(this.checkedList, val.shopId) == -1) {
            this.checkedList.push(val.shopId);
          }
          // this.products
        } else {
          this.checkedList = _.without(this.checkedList, val.shopId);
        }
        if (_.indexOf(this.checkedList, val.shopId) == -1) {
          this.checkedList.push(val.shopId);
        }
        // console.log(this.checkedList);
        // _.map(this.checkedList, value => {
        //   console.log(value);
        //   _.map(val.products, data => {
        //     this.products.push(data);
        //   });
        // });
        // console.log(this.products);
        // if (this.checkedList.length == this.data.length) {
        //   this.checkAll = true;
        // } else {
        //   this.checkAll = false;
        // }
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
      }
    },
    mounted() {
      _getData("/cart/getCarts", {}).then(data => {
        console.log("获取选购单：", data);
        this.data = data.list;
      });
    },
    components: {
      commonTitle,
      checkAll,
      listTitle,
      purchaseOrderItem
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shoppingCart {
    min-height: 666px;
    background-color: #fff;
    padding: 4px 20px 20px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 110px;
    .listContainer {
      margin-top: 12px;
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
