<template>
  <div class="orderSureItemproduct">
    <div class="shopName">
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
      <span>{{ data.shopName }}</span>
    </div>
    <div class="productList">
      <ul>
        <li v-for="item in data.list" :key="item.id">
          <span>
            <img :src="item.list_pic_url" />
          </span>
          <span>{{ item.name }}</span>
          <span>{{ item.brand_name }}/{{ item.brand_model_name }}</span>
          <span>{{ item.number }}</span>
          <span>{{ item.goodsUnit }}</span>
          <span>¥{{ item.retail_price * item.number }}</span>
          <span>{{ item.createTime }}</span>
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
      return {};
    },
    props: {
      data: {
        type: Object
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .orderSureItemproduct {
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
            margin-right: 30px;
            &:first-child {
              margin-left: 20px;
              margin-right: 12px;
              width: 70px;
              height: 70px;
            }
            &:nth-child(2) {
              width: 155px;
            }
            &:nth-child(3) {
              width: 100px;
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
            &:last-child {
              width: 85px;
              margin-right: 10px;
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
