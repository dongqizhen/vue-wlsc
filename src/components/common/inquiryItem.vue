<template>
  <div class="inquiryItem">
    <order-title :isOrder="isOrder"></order-title>
    <div class="inquiryProduct">
      <div class="leftInfoBox">
        <ul>
          <li v-for="item in data" :key="item.id">
            <span><img :src="item.img"/></span>
            <span>{{ item.name }}</span>
            <span>{{ item.price }}</span>
            <span>{{ item.number }}</span>
            <span>{{ item.arrivalTime }}</span>
            <span>{{ item.remark }}</span>
          </li>
        </ul>
      </div>
      <div class="operating">
        <div>
          <router-link to="inquiryDetail">查看详情</router-link>
        </div>
        <div>删除订单</div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  export default {
    data() {
      return { isOrder: false };
    },
    props: {
      data: {
        type: Array,
        required: true
      }
    },
    components: {
      orderTitle
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
      ul {
        li {
          height: 90px;
          display: flex;
          padding-top: 10px;
          border-bottom: 0.5px solid #dddddd;
          &:last-child {
            border-bottom: none;
          }
          span {
            font-size: 12px;
            color: #666;
            margin-right: 30px;
            &:nth-child(1) {
              width: 70px;
              margin-left: 46px;
              margin-right: 12px;
              img {
                width: 70px;
                height: 70px;
              }
            }
            &:nth-child(2) {
              width: 155px;
            }
            &:nth-child(3) {
              width: 100px;
            }
            &:nth-child(4) {
              width: 60px;
            }
            &:nth-child(5) {
              width: 113px;
            }
            &:nth-child(6) {
              flex: 1;
            }
          }
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
      div {
        margin-bottom: 10px;
        cursor: pointer;
        a {
          color: #333;
        }
      }
    }
  }
</style>
