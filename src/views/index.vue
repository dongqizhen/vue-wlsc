<template>
  <div class="index">
    <div class="header">
      <div class="content">
        <div class="left">
          <p>欢迎来到网来商城</p>
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
          <router-link tag="li" to="#"><a>商家中心</a></router-link>
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
    <div class="search">
      <div class="commonWidth">
        <h1><img src="../assets/images/logo.png" alt="" /></h1>
        <div class="ipt_box">
          <div class="search_box">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfangdajing"></use>
              </svg>
            </i>
            <input type="text" placeholder="请输入商品名或店铺" />
            <span>搜索</span>
          </div>
          <div class="nav">
            <h2>热门产品：</h2>
            <ul>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>呼吸机</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>CT</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>B超</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>手术钳</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>缝合器</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="top_nav">
      <ul class="commonWidth">
        <li class="active">首页</li>
        <li>找产品</li>
        <li>找品牌</li>
        <li>找店铺</li>
        <li>关于我们</li>
      </ul>
    </div>
    <div class="banner">
      <div class="commonWidth"></div>
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
  .index {
    .header {
      height: 40px;
      width: 100%;
      background: #f5f5f5;
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
          color: #333333;

          display: flex;
          justify-content: flex-start;
          p {
            display: flex;
          }
          a {
            padding: 0 20px 0 10px;
            color: $theme-color;
            text-decoration: none;
          }
          span {
            > a {
              color: #999999;
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
              color: #666666;
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
    .search {
      height: 134px;
      .commonWidth {
        padding-top: 23px;
        display: flex;
        justify-content: flex-start;
        h1 {
          margin-right: 41px;
        }
        .ipt_box {
          > div.search_box {
            height: 46px;
            border: 2px solid $theme-color;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 713px;
            i {
              margin: 0 9px 0 12px;
              .icon {
                height: 15px;
                width: 15px;
              }
            }
            input {
              font-size: 14px;
              font-family: $base-font-family;
              flex: 1;
              height: 100%;
              line-height: 42px;
            }
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 152px;
              background: $theme-color;
              height: 100%;
              cursor: pointer;
              font-size: 18px;
              font-family: $base-font-family;
              color: #ffffff;
            }
          }
          > div.nav {
            display: flex;
            justify-content: flex-start;
            height: 20px;
            align-items: center;
            margin-top: 15px;
            h2 {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #999999;
              line-height: 14px;
            }
            ul {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              height: 100%;
              li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                a {
                  line-height: 14px;
                  font-family: $base-font-family;
                  color: #666666;
                  font-size: 14px;
                  text-decoration: none;
                  padding: 0 16px;
                  border-right: 1px solid #d8d8d8;
                  &:hover {
                    color: $theme-color;
                  }
                }
                &:last-child {
                  a {
                    border-right: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
    .top_nav {
      height: 60px;
      border-bottom: 2px solid $theme-color;
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li {
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 58px;
          font-family: Helvetica-Bold;
          font-size: 18px;
          color: #333333;
          cursor: pointer;
          &.active {
            background: $theme-color;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>