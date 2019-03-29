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
    <div class="container commonWidth">
      <div class="left-side">
        <div class="title">商家中心</div>
        <div class="container-box">
          <div class="storeManagement"></div>
          <div class="storeOperation"></div>
          <div class="orderManagement"></div>
          <div class="orderManagement"></div>
          <div class="other"></div>
        </div>
      </div>
      <div class="right-content"></div>
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
  @import "../assets/scss/_commonScss";
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
      margin-top: 24px;
      .left-side {
        width: 170px;
        background-color: #fff;
        .title {
          padding-left: 16px;
          height: 70px;
          line-height: 70px;
          font-family: PingFangSC-Semibold;
          font-size: 20px;
          color: #333333;
          border: 1px solid #dddddd;
        }
      }
    }
  }
</style>
