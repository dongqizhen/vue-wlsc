<template>
  <div class="merchant">
    <div class="header">
      <div class="content">
        <div class="left">
          <p>返回网来商城首页</p>
          <router-link to="#">请登录</router-link>
          <router-link to="#" tag="span"><a>免费注册</a></router-link>
        </div>
        <ul class="right">
          <router-link tag="li" to="#">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icongouwuche"></use>
              </svg>
              我的选购单
            </a>
          </router-link>
          <router-link tag="li" to="/"><a>个人中心</a></router-link>
          <router-link tag="li" to="#">
            <a>
              <i></i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconwanglaishangchengapp"></use>
              </svg>
              网来商城App
            </a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="left-side">
        <div class="title">商家中心</div>
        <div class="container-box">
          <div class="storeManagement">
            <h2>店铺管理</h2>
            <ul>
              <li>店铺首页</li>
              <li class="active">店铺信息</li>
              <li>店铺认证</li>
            </ul>
          </div>
          <div class="storeOperation">
            <h2>店铺运营</h2>
            <ul>
              <li>发布产品</li>
              <li>产品管理</li>
              <li>询价管理</li>
              <li>订单管理</li>
            </ul>
          </div>
          <div class="other">
            <h2>其他</h2>
            <ul>
              <li>账号安全</li>
              <li>个人中心</li>
              <li>消息中心</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {};
    },
    components: {}
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";

  .merchant {
    background-color: $base-backgroud;
    .header {
      width: 100%;
      height: $header-height;
      background: $theme-color;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 14px;
      .content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          color: #fff;
          display: flex;
          justify-content: flex-start;
          p {
            display: flex;
          }
          a {
            padding: 0 20px 0 10px;
            color: #fff;
            text-decoration: none;
          }
          span {
            > a {
              color: #fff;
              padding: 0;
              &:hover {
                color: $theme-color;
              }
            }
          }
        }
        .right {
          display: flex;
          justify-content: flex-start;
          li {
            a {
              color: #fff;
              text-decoration: none;
              line-height: 14px;
              &:hover {
                color: $theme-color;
              }
              svg {
                margin-right: 5px;
              }
            }
            &:nth-child(2) {
              margin: 0 30px;
            }
          }
        }
      }
    }
    .container {
      display: flex;
      width: 1200px;
      margin: 0 auto;
      margin-top: 24px;
      .left-side {
        width: 170px;
        background-color: #fff;
        margin-right: 20px;
        height: 693px;
        .title {
          width: 100%;
          height: 69px;
          line-height: 69px;
          padding-left: 16px;
          color: #333;
          font-size: 20px;
          font-weight: 600;
          font-family: PingFangSC-Semibold;
          border-bottom: 0.2px solid #ddd;
        }
        .container-box {
          color: #333;
          %common {
            padding-left: 20px;
            height: 48px;
            line-height: 48px;
          }
          h2 {
            font-family: PingFangSC-Medium;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 0;
            @extend %common;
          }
          ul {
            margin-bottom: 0;
            li {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              @extend %common;
              &.active {
                color: $theme-color;
                background: rgba(241, 2, 21, 0.03);
              }
            }
          }
        }
      }
      .right-content {
        width: 1006px;
        // background-color: #fff;
      }
    }
  }
</style>
