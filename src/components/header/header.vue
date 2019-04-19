
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
          <a>188****1234</a>
          <span @click="exitHandler"><a>退出</a></span>
        </div>
      </div>
      <ul class="right">
        <router-link tag="li" to="#" v-if="isLogin">
          <a>
            个人中心
          </a>
        </router-link>
        <router-link tag="li" to="#" v-if="isLogin">
          <a>
            系统通知(24)
          </a>
        </router-link>
        <router-link tag="li" to="#" v-if="isLogin">
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
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  export default {
    data() {
      return {};
    },
    methods: {
      exitHandler() {
        window.clearVuexAlong(true);
        this.changeLoginState(false);
      },
      ...mapMutations(["changeLoginState"])
    },
    computed: { ...mapState(["isLogin"]) }
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
          }
        }
      }
    }
  }
</style>