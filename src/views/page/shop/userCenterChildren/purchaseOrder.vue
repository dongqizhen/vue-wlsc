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
        selectDatas: [],
        products: [],
        allProducts: []
      };
    },
    methods: {
      addInquiry() {
        console.log(this.selectDatas);
        if (this.selectDatas.length == 0) {
          alert("请先选择产品");
          return;
        } else {
          _.map(this.data, o => {
            _.map(this.selectDatas, val => {
              if (o.sid == val.storeId) {
                _.map(val.goodsList, item => {
                  _.map(o.list, value => {
                    if (item == value.id) {
                    }
                  });
                });
              }
            });
          });
        }
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
          if (
            _.find(this.selectDatas, o => {
              return o.storeId == val.storeId;
            })
          ) {
            _.each(this.selectDatas, value => {
              if (value.storeId == val.storeId) {
                value.goodsList = val.goodsList;
              }
            });
          } else {
            this.selectDatas.push({
              storeId: val.storeId,
              goodsList: val.goodsList
            });
          }
        } else {
          if (val.goodsList.length == 0) {
            _.each(this.selectDatas, value => {
              if (value.storeId == val.storeId) {
                this.selectDatas = _.without(this.selectDatas, value);
              }
            });
          } else {
            if (
              _.find(this.selectDatas, o => {
                return o.storeId == val.storeId;
              })
            ) {
              _.each(this.selectDatas, item => {
                if (item.storeId == val.storeId) {
                  item.goodsList = val.goodsList;
                }
              });
            } else {
              this.selectDatas.push({
                storeId: val.storeId,
                goodsList: val.goodsList
              });
            }
          }
        }
        this.products = [];
        _.map(this.selectDatas, o => {
          for (const item of o.goodsList) {
            this.products.push(item);
          }
        });
        if (this.products.length == this.allProducts.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      isCheckAllMethod(val) {
        if (val) {
          this.checkAll = true;
          this.checkedList = [];
          this.products = [];
          for (const val of this.data) {
            this.checkedList.push(val.sid);
          }
          this.products = this.allProducts;
          _.map(this.data, o => {
            let goodsIds = [];
            for (const item of o.list) {
              goodsIds.push(item.goods_id);
            }
            this.selectDatas.push({ storeId: o.sid, goodsList: goodsIds });
          });
        } else {
          this.checkAll = false;
          this.checkedList = [];
          this.products = [];
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
        _.map(data.list, o => {
          for (const item of o.list) {
            this.allProducts.push(item);
          }
        });
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
