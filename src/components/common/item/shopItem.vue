<template>
  <router-link
    tag="li"
    :to="{
      path: '/shopDetails',
      query: {
        nav_index: $route.query.nav_index,
        shopId: item.sid,
        shopName: item.shopName
      }
    }"
    class="shop-item"
  >
    <a target="_blank">
      <div class="top">
        <div class="img_box">
          <img :src="item.image" alt="" v-if="item.image" />
        </div>
        <h2>{{ item.shopName }}</h2>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconzhaodianpuweizhi"></use>
          </svg>
          销售地区：北京市;天津市
        </p>
      </div>
      <div class="bottom">
        <ul>
          <li>访问量<span>2321</span></li>
          <li>咨询数<span>987</span></li>
          <li>成交数<span>-</span></li>
          <li>好评率<span>98%</span></li>
        </ul>
      </div>
    </a>
  </router-link>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["item"]
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  li.shop-item {
    background: #fff;
    height: 363px;
    width: 253px;
    margin-bottom: 20px;
    box-shadow: $base-box-shadow;
    cursor: pointer;
    display: flex;
    margin-right: 24px;
    a {
      display: flex;
      height: 100%;
      flex-direction: column;
      text-decoration: none;
    }
    &:hover {
      .top {
        h2 {
          color: $theme-color;
        }
      }
    }
    .top {
      padding: 15px;
      padding-bottom: 0;
      flex: 1;
      .img_box {
        height: 224px;
        width: 224px;
        background: $base-background;

        img {
          height: 100%;
          width: 100%;
        }
      }
      h2 {
        font-size: 16px;
        color: #333333;
        font-weight: 600;
        height: 22px;
        line-height: 22px;
        margin: 8px 0;
      }
      p {
        font-size: 12px;
        color: #666666;
      }
    }
    .bottom {
      height: 57px;
      border-top: 1px solid #e0e7ea;
      padding: 0 15px;
      display: flex;
      align-items: center;
      > ul {
        overflow: hidden;
        width: 100%;
        //height: 100%;
        li {
          font-size: 12px;
          color: #999999;
          width: 50%;
          float: left;
          height: 24px;
          line-height: 24px;
          //margin-top: 5px;
          span {
            color: #f10215;
            margin-left: 6px;
          }
        }
      }
    }
  }
</style>