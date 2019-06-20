<template>
  <div class="footer">
    <div class="commonWidth">
      <div class="link">
        <div class="left">
          <ul>
            <li v-for="item in footerList" :key="item.id">
              <h2>{{ item.title }}</h2>
              <router-link
                tag="span"
                :to="`/footer/guide/${v.subtitle}`"
                v-for="v in item.topicVoList"
                :key="v.id"
              >
                <a target="_blank">{{ v.title }}</a>
              </router-link>
              <!-- <router-link tag="span" to="/footer/guide/howToRegister">
                <a target="_blank">如何注册</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/sellerEntry">
                <a target="_blank">卖家入门</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/buyerEntry">
                <a target="_blank">买家入门</a>
              </router-link> -->
            </li>
            <!-- <li>
              <h2>采购专家</h2>
              <router-link tag="span" to="/footer/guide/inquirySystem">
                <a target="_blank">询价系统</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/quickOrder">
                <a target="_blank">快速下单</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/howToPurchase">
                <a target="_blank">如何采购</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/complaints">
                <a target="_blank">投诉维权</a>
              </router-link>
            </li>
            <li>
              <h2>供货商家</h2>
              <router-link tag="span" to="/footer/guide/howToOpenShop">
                <a target="_blank">开通店铺</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/marketingCenter">
                <a target="_blank">营销中心</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/releaseNewProducts">
                <a target="_blank">发布新品</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/merchantService">
                <a target="_blank">商家服务</a>
              </router-link>
            </li>
            <li>
              <h2>平台服务</h2>
              <router-link tag="span" to="/footer/guide/paymentMethod">
                <a target="_blank">支付方式</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/tradingRights">
                <a target="_blank">交易维权</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/customerService">
                <a target="_blank">客服中心</a>
              </router-link>
              <router-link tag="span" to="/footer/guide/shopRules">
                <a target="_blank">网来商城规则</a>
              </router-link>
            </li> -->
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
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        footerList: ""
      };
    },
    mounted() {
      _getData("topic/queryTopicList", {}).then(data => {
        console.log("底部", data);
        this.footerList = data;
      });
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