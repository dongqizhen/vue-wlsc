<template>
  <div class="shop-card">
    <div class="shop">
      <span class="leftTopIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconyirenzhengjiaobiao"></use>
        </svg>
      </span>
      <div class="img_box"></div>
      <p>北京华脉诚信科技有限公司</p>
      <ul>
        <li><span>店铺类型：</span><span>代理商</span></li>
        <li><span>销售地区：</span><span>北京市；天津市</span></li>
      </ul>
      <div class="btn">
        <a-button>进店看看</a-button>
        <a-button>收藏店铺</a-button>
      </div>
      <div class="service">
        <a-button>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconlianxikefu"></use>
          </svg>
          联系客服
        </a-button>
      </div>
      <div class="shop-bottom-shadow"></div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .shop {
    height: 362px;
    background: #ffffff;
    box-shadow: $base-box-shadow;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .leftTopIcon {
      position: absolute;
      top: 0;
      left: 0;
      .icon {
        height: 42px;
        width: 42px;
      }
    }
    .img_box {
      height: 104px;
      width: 179px;
      background: $base-background;
      margin-top: 34px;
      margin-bottom: 8px;
    }
    p {
      font-size: 15px;
      color: #2b3e50;
      font-weight: 600;
      height: 22px;
      line-height: 22px;
    }
    > ul {
      padding: 0 18px;
      margin-top: 24px;
      width: 100%;
      li {
        display: flex;
        justify-content: flex-start;
        height: 20px;
        align-items: center;
        margin-bottom: 12px;
        span {
          font-size: 14px;
          color: #526c85;
          &:first-child {
            width: 70px;
          }
          &:last-child {
            font-weight: 600;
            flex: 1;
          }
        }
      }
    }
    .btn {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 19px;
      /deep/ .ant-btn-default {
        width: 87px;
        height: 31px;
        span {
          display: flex;
          height: 29px;
          align-items: center;
          line-height: 29px;
        }
        &:hover {
          opacity: 0.7;
        }
        &:first-child {
          background: rgba(241, 2, 21, 0.03);
          border: 1px solid #f10215;
          font-size: 14px;
          color: #f10215;
          font-weight: 600;
          margin-right: 13px;
        }
        &:last-child {
          background: rgba(245, 166, 35, 0.1);
          border: 1px solid #f5a623;
          font-size: 14px;
          color: #f5a623;
          font-weight: 600;
        }
      }
    }
    .service {
      margin-top: 20px;
      .ant-btn-default {
        //border: none;
        font-size: 14px;
        color: #666666;
        box-shadow: none;
        border: #fff 1px solid;
        background: #fff;
        &:active {
          box-shadow: none;
        }
        &::after {
          display: none;
        }
        .icon {
          width: 16.5px;
          height: 14px;
          margin-right: 5px;
        }
        span {
        }
      }
    }
    .shop-bottom-shadow {
      background: url("../../assets/images/shopBottomShadow.png") repeat center;
      height: 18px;
      position: absolute;
      bottom: -18px;
      width: 100%;
    }
  }
</style>