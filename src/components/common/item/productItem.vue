<template>
  <li class="product-item">
    <h2>
      <p>1F 电子超声</p>
      <ul>
        <li>心电图机</li>
        <li>心电图工作站</li>
        <li>心电工作站</li>
        <li>心电工作站</li>
      </ul>
      <span>
        更多
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhuangsegengduo"></use>
        </svg>
      </span>
    </h2>
    <div class="content">
      <div class="left"></div>
      <ul class="right">
        <li>
          <a href="#" class="img"></a>
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
        <li>
          <a href="#" class="img"></a>
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
        <li>
          <a href="#" class="img"></a>
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
      </ul>
    </div>
  </li>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  li.product-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    h2 {
      display: flex;
      justify-content: space-between;
      height: 43px;
      align-items: center;
      p {
        width: 224px;
        background: #f5a623;
        height: 100%;
        border-radius: 20px 20px 0 0;
        display: flex;
        align-items: center;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #ffffff;
        padding-left: 27px;
      }
      ul {
        display: flex;
        justify-content: flex-end;
        flex: 1;
        height: 100%;
        align-items: flex-end;
        border-bottom: 1px solid #f5a623;
        padding-bottom: 3px;
        li {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #333333;
          margin-right: 30px;
          cursor: pointer;
          &:hover {
            color: $theme-color;
          }
        }
      }
      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        height: 100%;
        border-bottom: 1px solid #f5a623;
        padding-bottom: 3px;
        .icon {
          margin-left: 7px;
          margin-bottom: 3px;
        }
      }
    }
    .content {
      height: 382px;
      display: flex;
      justify-content: flex-start;
      .left {
        width: 224px;
        background: #fff;
        box-shadow: $base-box-shadow;
      }
      .right {
        flex: 1;
        padding-left: 17px;
        display: flex;
        justify-content: space-between;
        padding-top: 4px;
        li {
          //margin-right: 12px;
          //flex: 1;
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
          > p {
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
      }
    }
  }
</style>