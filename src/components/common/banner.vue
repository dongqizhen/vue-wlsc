<template>
  <div class="banner">
    <div class="commonWidth">
      <swiper ref="mySwiper" :options="swiperOption" v-if="banner.length">
        <!-- slides -->
        <swiper-slide v-for="item in banner" :key="item.id">
          <img :src="item.image_url" />
        </swiper-slide>
        <!-- Optional controls -->
        <ul class="swiper-pagination" slot="pagination"></ul>
      </swiper>
      <div class="login">
        <div class="avatar">
          <h2>
            <svg class="icon" aria-hidden="true" v-if="!userInfo.imageUrl">
              <use xlink:href="#iconweidenglutouxiang"></use>
            </svg>
            <img :src="userInfo.imageUrl" alt="" v-else />
          </h2>
          <p>
            {{
              isLogin
                ? "亲爱的" +
                  userInfo.accountNo.substr(0, 3) +
                  "****" +
                  userInfo.accountNo.substr(7)
                : "Hi"
            }},下午好
          </p>
          <div class="btn" v-if="!isLogin">
            <router-link to="/login" tag="span" class="login_in"
              >登录</router-link
            >
            <router-link to="/register" tag="span" class="sign_in"
              >注册</router-link
            >
          </div>
        </div>
        <div class="notice">
          <h2>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxingzhuang"></use>
              </svg>
            </i>
            系统公告
          </h2>
          <div class="con1 swiper-container">
            <ul ref="con1" class="swiper-wrapper">
              <li
                v-for="(item, i) in items"
                :key="`item-${i}`"
                class="swiper-slide"
              >
                <span>【公告】</span>
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import { _getData } from "../../config/getData";
  import { mapState } from "vuex";
  import _ from "lodash";
  import Swiper from "swiper";

  export default {
    data() {
      return {
        num: 0,
        animate: false,
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
        },
        items: [
          "2018十一假期暂停什么…",
          "2019十一假期暂停什么…",
          "2020十一假期暂停什么…",
          "2021十一假期暂停什么…",
          "2022十一假期暂停什么…",
          "2023十一假期暂停什么…"
        ],
        banner: []
      };
    },
    components: { swiper, swiperSlide },
    methods: {},
    computed: {
      ...mapState(["isLogin", "userInfo"])
    },
    created() {},
    mounted() {
      var myswiper = new Swiper(".notice .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 0,
        direction: "vertical",
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        },
        loop: true
      });

      _getData("api/ad/banner", {}).then(data => {
        this.banner = data.banner;
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";
  .banner {
    padding-top: 30px;
    margin-bottom: 14px;
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
            transition-timing-function: linear;
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
        .avatar {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 145px;
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
            margin-bottom: 10px;
            overflow: hidden;
            opacity: 1;
            .icon {
              height: 32px;
              width: 28px;
            }
            img {
              height: 100%;
              width: 100%;
            }
          }
          p {
            font-size: 14px;
            font-family: $base-font-family;
            color: #ffffff;
            margin-bottom: 9px;
          }
          .btn {
            width: 100%;
            padding: 0 34px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            span {
              background: rgba(255, 255, 255, 0.36);
              border: 0.5px solid #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 59px;
              height: 27px;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #ffffff;
              cursor: pointer;
              &:hover {
                opacity: 0.9;
              }
            }
          }
        }
        .notice {
          padding: 0 13px;
          width: 100%;
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          h2 {
            border-bottom: #d8d8d8 1px solid;
            height: 25px;
            font-size: 12px;
            color: #ffffff;
            font-family: $base-font-family;
            display: flex;
            align-items: center;
            line-height: 25px;
            i {
              margin-top: 1px;
              margin-right: 2.5px;
              .icon {
                height: 13px;
                width: 12px;
              }
            }
          }
          .con1 {
            overflow: hidden;
            flex: 1;
            ul {
              width: 100%;
              transition: all 1s;
              li {
                height: 30px;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #ffffff;
                line-height: 30px;
                border-bottom: 0.5px dotted rgba(255, 255, 255, 0.52);
                display: flex;
                justify-content: flex-start;
                cursor: pointer;

                &:hover {
                  color: $theme-color;
                }
                p {
                  flex: 1;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
  }
</style>