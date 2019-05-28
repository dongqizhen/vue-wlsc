<template>
  <div class="itemOrder">
    <div class="shopName">
      <a-checkbox @change="itemAllChange" :checked="checkAll"></a-checkbox>
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
      <span>{{ val.shopName }}</span>
    </div>
    <div class="productList">
      <ul>
        <li v-for="item in val.list" :key="item.id">
          <span>
            <a-checkbox
              @change="onChange(item.id)"
              :checked="checkedChange(item.id)"
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
      val: {
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
          for (const val of this.val.list) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
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
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == this.val.list.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        this.$emit("getIsCheckAll", {
          isCheckAll: this.checkAll,
          shopId: this.val.sid
        });
      },
      checkedChange(id) {
        console.log(id);
        console.log(this.checkedList);
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
      },
      itemAllChange(e) {
        console.log(e.target.checked);
        if (!this.checkAll) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.val.list) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
        this.$emit("getIsCheckAll", {
          isCheckAll: this.checkAll,
          shopId: this.val.sid
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
