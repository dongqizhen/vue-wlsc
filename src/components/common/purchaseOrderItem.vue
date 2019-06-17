<template>
  <div class="itemOrder">
    <div class="shopName">
      <a-checkbox @change="itemAllChange" :checked="checkAll"></a-checkbox>
      <img :src="data.image" />
      <span>{{ data.shopName }}</span>
    </div>
    <div class="productList">
      <ul>
        <li v-for="item in data.list" :key="item.id">
          <span>
            <a-checkbox
              @change="onChange(item.goods_id)"
              :checked="checkedChange(item.goods_id)"
            ></a-checkbox>
          </span>
          <span>
            <img :src="JSON.parse(item.list_pic_url)[0]" />
          </span>
          <span>{{ item.goods_name }}</span>
          <span>{{ item.brand_name }}/{{ item.model_name }}</span>
          <span>¥{{ item.retail_price }}</span>
          <span>
            <van-stepper v-model="item.number" :max="item.goods_number" />
            <i class="stockNumber">库存{{ item.goods_number }}件</i>
          </span>
          <span>¥{{ (item.retail_price * item.number).toFixed(2) }}</span>
          <span>
            <a-textarea
              placeholder="请输入备注"
              v-model="item.goods_specifition_name_value"
            ></a-textarea>
          </span>
          <span>
            <div @click="deleteProduct(item.goods_id)">删除</div>
            <div
              @click="addMyStore(item.goods_id)"
              v-if="item.isCollection == 0"
            >
              添加到我的收藏
            </div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import _ from "lodash";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        checkAll: false,
        checkedList: []
      };
    },
    props: {
      data: {
        type: Object
      },
      isCheckAll: {
        type: Boolean
      },
      selectDatas: {}
    },
    watch: {
      isCheckAll(newVal) {
        // console.log(newVal);
        // console.log(this.selectDatas);
        if (newVal) {
          this.checkAll = newVal;
          this.checkedList = [];
          for (const val of this.data.list) {
            this.checkedList.push(val.goods_id);
          }
        } else {
          this.checkAll = newVal;
          if (this.selectDatas.length == 0) {
            this.checkedList = [];
          }
        }
      }
    },
    methods: {
      deleteProduct(id) {
        _getData("/cart/delete", { goodIds: id }).then(data => {
          // console.log(data);
          this.$emit("getIsDelete", true);
        });
      },
      addMyStore(id) {
        _getData("/collect/addordelete", { typeId: 0, valueId: id }).then(
          data => {
            // console.log("收藏接口：", data);
            _.each(this.data.list, o => {
              if (o.goods_id == id) {
                o.isCollection = 1;
              }
            });
            this.$message.success("商品收藏成功", 1);
          }
        );
      },
      onChange(id) {
        // console.log(id);
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == this.data.list.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        this.$emit("getIsCheckAll", {
          isCheckAll: this.checkAll,
          storeId: this.data.sid,
          goodsList: this.checkedList
        });
      },
      checkedChange(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
      },
      itemAllChange(e) {
        if (!this.checkAll) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data.list) {
            this.checkedList.push(val.goods_id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
        this.$emit("getIsCheckAll", {
          isCheckAll: this.checkAll,
          storeId: this.data.sid,
          goodsList: this.checkedList
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  @import "../../assets/scss/_input";
  .itemOrder {
    margin-top: 24px;
    margin-bottom: 12px;
    .shopName {
      display: flex;
      align-items: center;
      margin-left: 21px;
      margin-bottom: 12px;
      img {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        margin-left: 14px;
        margin-right: 4px;
      }
    }
    .productList {
      ul {
        li {
          display: flex;
          height: 91px;
          border: 1px solid #ddd;
          padding-top: 10px;
          border-top: none;
          color: #333;
          font-size: 12px;
          &:first-child {
            border-top: $border-style;
          }
          img {
            width: 70px;
            height: 70px;
          }
          span {
            &:first-child {
              margin-left: 20px;
              margin-right: 12px;
            }
            &:nth-child(2) {
              width: 70px;
              height: 70px;
              margin-right: 12px;
            }
            &:nth-child(3) {
              width: 155px;
              margin-right: 30px;
            }
            &:nth-child(4) {
              width: 100px;
              margin-right: 30px;
            }
            &:nth-child(5) {
              width: 45px;
              margin-right: 30px;
            }
            &:nth-child(6) {
              width: 80px;
              margin-right: 30px;
              text-align: center;
              /deep/.van-stepper {
                .van-stepper__minus,
                .van-stepper__plus {
                  width: 20px;
                  height: 20px;
                  border-radius: 0;
                  border: $border-style;
                  background: #f6f6f6;
                  margin: 0;
                  &:hover {
                    cursor: pointer;
                  }
                }
                .van-stepper__input {
                  width: 38px;
                  height: 16px;
                  margin: 0;
                  border-top: $border-style;
                  border-bottom: $border-style;
                }
              }
              .stockNumber {
                font-style: normal;
                font-size: 10px;
                color: #ccc;
                margin-top: 4px;
              }
            }
            &:nth-child(7) {
              width: 65px;
              overflow: hidden;
              white-space: wrap;
              margin-right: 30px;
            }
            &:nth-child(8) {
              width: 116px;
              margin-right: 30px;
              .ant-input {
                font-size: 12px;
                resize: none;
                height: 65px;
              }
            }
            &:last-child {
              div {
                margin-bottom: 8px;
                &:hover {
                  color: $theme-color;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
