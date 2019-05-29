<template>
  <div class="header">
    <div class="content">
      <div class="left">
        <p>欢迎来到网来商城</p>
        <div v-if="!isLogin">
          <router-link to="/login">请登录</router-link>
          <router-link to="/register" tag="span"><a>免费注册</a></router-link>
        </div>
        <div v-else>
          <a>{{
            userInfo.accountNo.substr(0, 3) +
              "****" +
              userInfo.accountNo.substr(7)
          }}</a>
          <span @click="exitHandler"><a>退出</a></span>
        </div>
      </div>
      <ul class="right">
        <router-link tag="li" to="/userCenter" v-if="isLogin">
          <a>
            个人中心
          </a>
        </router-link>
        <router-link tag="li" to="#" v-if="isLogin">
          <a>
            系统通知(24)
          </a>
        </router-link>
        <router-link tag="li" to="/merchant/messageCenter" v-if="isLogin">
          <a>
            私信消息(12)
          </a>
        </router-link>
        <router-link tag="li" to="#">
          <a>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongouwuche"></use>
            </svg>
            我的选购单
          </a>
        </router-link>
        <li><a @click="openMerchant">商家中心</a></li>
        <router-link
          tag="li"
          to="#"
          class="wlsc-code"
          @mouseenter.native="codeShow = true"
          @mouseleave.native="codeShow = false"
        >
          <a>
            <i></i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconwanglaishangchengapp"></use>
            </svg>
            网来商城App
          </a>
          <transition name="slide-fade">
            <div class="code" v-if="codeShow">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconappxiazaierweima"></use>
              </svg>
            </div>
          </transition>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        codeShow: false
      };
    },
    methods: {
      exitHandler() {
        //window.clearVuexAlong();
        this.changeLoginState(false);
        this.changeUserInfoState({});
        this.$router.push("/login");
        this.changeUserShopInfoState({});
      },
      ...mapMutations([
        "changeLoginState",
        "changeUserInfoState",
        "changeUserShopInfoState"
      ]),
      openMerchant() {
        _getData("/user/getUser", {}).then(data => {
          console.log("获取用户的店铺开店信息：", data);
          // if (data.data.errno) {
          //   this.$router.replace({
          //     path: "/login",
          //     query: { redirect: "/merchant" }
          //   });
          // } else {
          this.changeUserShopInfoState(data);
          this.$router.push({ path: "/merchant" });
          // }
        });
      }
    },
    computed: {
      ...mapState(["isLogin", "userInfo"])
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";

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
        height: 100%;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 30px;
          cursor: pointer;
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
          &:last-child {
            position: relative;
            .code {
              height: 66px;
              width: 66px;
              position: absolute;
              bottom: -62px;
              opacity: 1;
              .icon {
                height: 66px;
                width: 66px;
              }
            }
          }
        }
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(5px);
    opacity: 0;
  }
</style>
