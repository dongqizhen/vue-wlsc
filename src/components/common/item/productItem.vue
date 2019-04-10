<template>
  <router-link class="product-item" tag="li" to="/details/productDetails">
    <a target="_blank">
      <li>
        <div class="img">
          <img src="../../../assets/images/demo.jpg" alt="" />
        </div>
        <div class="price">
          ¥799
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxiaoliang"></use>
            </svg>
            销量: <span>99</span>
          </span>
        </div>
        <p>
          超声探头这里最多可以显示两行字，多余的用…展示
        </p>
        <div class="brand_small">
          <span>品牌：GE</span>
          <span>型号：DR UPGRADE…</span>
        </div>
        <div class="address">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icondianpu"></use>
          </svg>
          北京华脉诚信科技有限公司
        </div>
      </li>
    </a>
  </router-link>
</template>

<script>
  export default {};
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
      }
    }
    width: 253px;
    background: #fff;
    box-shadow: $base-box-shadow;
    padding: 15px 15px;
    padding-bottom: 10px;
    .img {
      display: flex;
      height: 224px;
      width: 224px;
      background: #f7f9fa;
      margin-bottom: 8.6px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .price {
      height: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: PingFangSC-Semibold;
      font-size: 20px;
      color: $theme-color;
      margin-bottom: 5px;
      > span {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #666666;

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
    p {
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #333333;
      font-weight: 600;
      line-height: 17px;
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
      }
    }
    .address {
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #333333;
      display: flex;
      justify-content: flex-start;
      height: 18px;
      align-items: center;
      .icon {
        margin-right: 6px;
        margin-top: 2px;
      }
    }
  }
</style>