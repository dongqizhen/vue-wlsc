<template>
  <router-link
    class="product-item"
    tag="li"
    :to="{
      path: `/details/productDetails/${list.id || list.value_id}`,
      query: {
        nav_index: $route.query.nav_index,
        shopId: list.store_id || list.sid
      }
    }"
  >
    <a target="_blank">
      <li>
        <div
          class="img"
          v-lazy-container="{
            selector: 'img'
          }"
        >
          <img
            :data-src="list.primary_pic_url"
            alt=""
            v-if="list.primary_pic_url"
          />
          <img v-else src="../../../assets/images/default.png" alt="" />
        </div>
        <div class="price">
          {{ list.show_price }}
        </div>
        <p>
          {{ list.name }}
        </p>
        <div class="brand_small">
          <span>品牌：{{ list.brand_name }}</span>
          <span>型号：{{ list.brand_model_name }}</span>
        </div>
        <div class="address">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icondianpu"></use>
            </svg>
            <div>
              {{ list.shop_name || list.shopName }}
            </div>
          </div>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxiaoliang"></use>
            </svg>
            销量: <span>{{ list.sell_volume }}</span>
          </span>
        </div>
      </li>
    </a>
  </router-link>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      list: {
        type: Object
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  li.product-item {
    //margin-right: 12px;
    //flex: 1;
    a {
      text-decoration: none;
      &:hover {
        p {
          color: $theme-color;
        }
        img {
          transform: scale(1.1);
        }
      }
    }
    /deep/ img[lazy="loading"] {
      /*your style here*/
      background: url("../../../assets/images/loading.gif") no-repeat center;
      background-size: 100px;
      background-color: #f7f9fa;
    }
    /deep/ img[lazy="error"] {
      /*your style here*/
      background: url("../../../assets/images/default.png") no-repeat center;
      background-size: 100% 100%;
      //display: none;
      // background-color: #f7f9fa;
    }
    width: 291px;
    background: #fff;
    box-shadow: $base-box-shadow;
    padding: 15px 15px;
    padding-bottom: 10px;

    .img {
      display: flex;
      height: 261px;
      width: 261px;
      background: #f7f9fa;
      margin-bottom: 8.6px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: transform 0.5s ease;
      }
    }
    .price {
      height: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // font-family: PingFangSC-Semibold;
      font-size: 18px;
      font-weight: 600;
      color: $theme-color;
      margin-bottom: 5px;
    }
    p {
      //font-family: PingFangSC-Medium;
      font-size: 13px;
      color: #333333;
      font-weight: 600;
      line-height: 17px;
      height: 34px;
      margin-bottom: 7px;
    }
    .brand_small {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      span {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
        &:first-child {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:last-child {
          text-align: right;
          width: 133px;
          margin-left: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .address {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #333333;
      display: flex;
      justify-content: space-between;
      height: 18px;
      align-items: center;
      > div {
        display: flex;
        align-items: center;

        > div {
          width: 135px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        > .icon {
          margin-right: 6px;
          margin-top: 2px;
        }
      }

      > span {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #666666;
        font-weight: normal;
        .icon {
          width: 14px;
          height: 14px;
        }
        > span {
          font-family: PingFangSC-Medium;
          font-size: 12px;
          color: #2a2a2a;
          line-height: 16px;
        }
      }
    }
  }
</style>