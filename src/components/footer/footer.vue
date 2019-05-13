<template>
  <div class="footer">
    <div class="commonWidth">
      <div class="link">
        <div class="left">
          <ul>
            <li>
              <h2>入门指南</h2>
              <router-link tag="span" to="/footer/guide/aboutUs">
                <a>关于我们</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/howToRegister">
                <a>如何注册</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/sellerEntry">
                <a>卖家入门</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/buyerEntry">
                <a>买家入门</a>
              </router-link>
            </li>
            <li>
              <h2>采购专家</h2>
              <router-link tag="span" to="/footer/guide/inquirySystem">
                <a>询价系统</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/quickOrder">
                <a>快速下单</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/howToPurchase">
                <a>如何采购</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/complaints">
                <a>投诉维权</a>
              </router-link>
            </li>
            <li>
              <h2>购货商家</h2>
              <router-link tag="span" to="/footer/guide/howToOpenShop">
                <a>开通店铺</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/marketingCenter">
                <a>营销中心</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/releaseNewProducts">
                <a>发布新品</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/merchantService">
                <a>商家服务</a>
              </router-link>
            </li>
            <li>
              <h2>平台服务</h2>
              <router-link tag="span" to="/footer/guide/paymentMethod">
                <a>支付方式</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/tradingRights">
                <a>交易维权</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/customerService">
                <a>客服中心</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/shopRules">
                <a>网来商城规则</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right">
          <img src="../../assets/images/logo.png" alt="" />
          <i></i>
          <div>
            <img src="../../assets/images/code.png" alt="" />
            欢迎下载网来商城App
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright 2005-2016 allbring.com Corporation, All Rights Reserved
        &nbsp;&nbsp;&nbsp;&nbsp; 京ICP备16013128号 &nbsp;&nbsp;&nbsp;&nbsp;
        版权所属：北京网来天下医疗科技有限责任公司
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";
  .footer {
    height: 300px;
    border-top: 2px solid $theme-color;
    .commonWidth {
      width: 1200px;
      display: flex;
      flex-direction: column;
      .link {
        padding: 43px 0 33px;
        border-bottom: 1px solid #ddd;
        display: flex;
        width: 100%;
        .left {
          flex: 1;
          ul {
            display: flex;
            justify-content: flex-start;
            li {
              width: 104px;
              display: flex;
              flex-direction: column;
              h2 {
                font-family: PingFangSC-Regular;
                font-size: 16px;
                color: #333333;
                height: 22px;
                line-height: 22px;
                margin-bottom: 25px;
              }
              span {
                display: flex;
                height: 17px;
                align-items: center;
                margin-bottom: 10px;
                a {
                  display: flex;
                  height: 17px;
                  font-family: PingFangSC-Regular;
                  font-size: 12px;
                  color: #666666;
                  &:hover {
                    color: $theme-color;
                  }
                }
              }
            }
          }
        }
        .right {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          > img {
            display: flex;
            height: 51px;
          }
          i {
            display: flex;
            height: 60px;
            border-left: 1px solid #cccccc;
            margin-left: 77.4px;
            margin-right: 81px;
          }
          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666666;
            > img {
              width: 111px;
              margin-bottom: 7px;
            }
          }
        }
      }
      .copyright {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #999999;
      }
    }
  }
</style>