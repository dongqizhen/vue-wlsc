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
          <router-link tag="li" to="/merchant"><a>商家中心</a></router-link>
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
      <div class="commonWidth">
        <swiper ref="mySwiper" :options="swiperOption">
          <!-- slides -->
          <swiper-slide><img src="../assets/images/banner.png"/></swiper-slide>
          <swiper-slide><img src="../assets/images/banner.png"/></swiper-slide>
          <swiper-slide><img src="../assets/images/banner.png"/></swiper-slide>
          <swiper-slide><img src="../assets/images/banner.png"/></swiper-slide>
          <swiper-slide><img src="../assets/images/banner.png"/></swiper-slide>
          <!-- Optional controls -->
          <ul class="swiper-pagination" slot="pagination"></ul>
        </swiper>
        <div class="login">
          <h2>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconweidenglutouxiang"></use>
            </svg>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";

  // require styles
  import "swiper/dist/css/swiper.css";

  export default {
    data() {
      return {
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true

          notNextTick: true,

          //循环

          loop: true,

          //设定初始化时slide的索引

          initialSlide: 0,

          //自动播放

          autoplay: {
            delay: 4000,

            stopOnLastSlide: false,

            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            bulletElement: "li",
            // type: "custom",
            clickable: true
          }
        }
      };
    },
    components: {
      swiper,
      swiperSlide
    }
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
    .banner {
      padding-top: 30px;
      .commonWidth {
        height: 300px;
        //background: $theme-color;
        position: relative;
        /deep/ .swiper-container {
          height: 100%;
          cursor: pointer;
          .swiper-pagination {
            height: 8px;
            width: 100%;
            bottom: 16px;
            display: flex;
            justify-content: center;
            li {
              background: #fff;
              border-radius: 5px;
              border-radius: 5px;
              height: 8px;
              width: 8px;
              margin: 0;
              opacity: 0.65;
              margin-right: 8px;
              transition: opacity 0.5s, background-color 0.5s, width 0.5s;
              transition-delay: 0.5s, 0.5s, 0s;
              &.swiper-pagination-bullet-active {
                width: 24px;
                transition-delay: 0s;
              }
            }
          }
        }
        .login {
          height: 100%;
          width: 218px;
          position: absolute;
          right: 0;
          background: rgba(51, 51, 51, 0.64);
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          h2 {
            height: 50px;
            width: 50px;
            border-radius: 26px;
            background: #cbcbcb;
            border: 1px solid #979797;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 16px;
            .icon {
              height: 32px;
              width: 28px;
            }
          }
        }
      }
    }
  }
</style>