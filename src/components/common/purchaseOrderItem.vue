<template>
  <div class="itemOrder">
    <div class="shopName">
      <a-checkbox @change="itemAllChange" :checked="checkAll"></a-checkbox>
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
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
            <img :src="item.list_pic_url" />
          </span>
          <span>{{ item.goods_name }}</span>
          <span>{{ item.brand_name }}/{{ item.model_name }}</span>
          <span>¥{{ item.retail_price }}</span>
          <span>{{ item.number }}</span>
          <span>¥{{ item.retail_price * item.number }}</span>
          <span>
            <div @click="deleteProduct(item.id)">删除</div>
            <div @click="addMyStore(item.id)">添加到我的收藏</div>
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
      }
    },
    watch: {
      isCheckAll(newVal) {
        console.log(newVal);
        this.checkAll = newVal;
        if (this.checkAll) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data.list) {
            this.checkedList.push(val.goods_id);
          }
        } else {
          this.checkAll = false;
        }
      }
    },
    methods: {
      deleteProduct(id) {
        _getData("/cart/delete", { goodIds: [id] }).then(data => {
          console.log(data);
        });
      },
      addMyStore(id) {
        _getData("/collect/addordelete", { typeId: 0, valueId: id }).then(
          data => {
            console.log("收藏接口：", data);
          }
        );
      },
      onChange(id) {
        console.log(id);
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
              width: 83px;
              margin-right: 30px;
            }
            &:nth-child(6) {
              width: 113px;
              margin-right: 30px;
            }
            &:nth-child(7) {
              width: 137px;
              margin-right: 30px;
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
