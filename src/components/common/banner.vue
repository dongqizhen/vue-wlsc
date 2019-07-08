<template>
  <div class="banner">
    <div class="commonWidth">
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        v-if="banner.length"
        @slideChangeTransitionStart="slideChangeTransitionStart"
      >
        <!-- slides -->
        <swiper-slide v-for="item in banner" :key="item.id">
          <a target="_blank" :href="item.link"><img :src="item.image_url"/></a>
        </swiper-slide>
        <!-- Optional controls -->
        <ul class="swiper-pagination" slot="pagination"></ul>
      </swiper>
      <div class="login">
        <p :style="background" key="background"></p>
        <div>
          <div class="avatar">
            <h2 @click="toUserCenter">
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
              }},{{ getCurrTime }}
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
              <ul ref="con1" class="swiper-wrapper" @click="toNotice($event)">
                <li
                  v-for="(item, i) in noteList"
                  :key="`item-${i}`"
                  class="swiper-slide"
                  :data-id="item.id"
                >
                  <div>
                    <span>【公告】</span>
                    <p>{{ item.title }}</p>
                  </div>
                </li>
              </ul>
            </div>
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
        background: {
          background: ""
          // backgroundImage: "",
          // backgroundSize: "",
          // backgroundPosition: ""
        },
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
          on: {
            // slideChangeTransitionStart() {}
          },
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
        bannerURL: "",
        banner: [],
        noteList: []
      };
    },
    components: { swiper, swiperSlide },
    methods: {
      slideChangeTransitionStart() {
        setTimeout(() => {
          this.background.background = `url(${this.banner[this.swiper.realIndex].image_url})`;
        }, 500);
      },
      toUserCenter() {
        if (this.$getLocalStorage()) {
          this.$router.push("/userCenter");
        }
      },
      toNotice(e) {
        let id = e.target.parentElement.getAttribute("data-id");
        this.$router.push({ path: "/notice", query: { id } });
      }
    },
    computed: {
      ...mapState(["isLogin", "userInfo"]),

      swiper() {
        return this.$refs.mySwiper.swiper;
      },

      getCurrTime() {
        let now = new Date(),
          hour = now.getHours();
        if (hour < 6) {
          return "凌晨好！";
        } else if (hour < 9) {
          return "早上好！";
        } else if (hour < 12) {
          return "上午好！";
        } else if (hour < 14) {
          return "中午好！";
        } else if (hour < 17) {
          return "下午好！";
        } else if (hour < 19) {
          return "傍晚好！";
        } else if (hour < 24) {
          return "晚上好！";
        }
      }
    },
    created() {},
    mounted() {
      _getData("ad/banner", {}).then(data => {
        console.log("轮播", data);
        this.banner = data.banner;

        this.background.background = `url(${this.banner[0].image_url})`;
      });

      _getData("topic/getTopic", {
        currentPage: "1", //类型：String  必有字段  备注：当前页
        numsPerPage: "10" //类型：String  必有字段  备注：每页显示条数
      })
        .then(data => {
          console.log("公告", data);
          this.noteList = data.data;
        })
        .then(() => {
          this.$nextTick().then(() => {
            var myswiper = new Swiper(".notice .swiper-container", {
              slidesPerView: 6,
              spaceBetween: 0,
              direction: "vertical",
              autoplay: {
                disableOnInteraction: false,
                delay: 4000
              },
              loop: this.noteList.length >= 6
            });
          });
        });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";
  .banner {
    padding-top: 10px;
    margin-bottom: 14px;
    .commonWidth {
      height: 375px;
      //background: $theme-color;
      position: relative;
      // display: flex;
      // justify-content: space-between;
      /deep/ .swiper-container {
        height: 100%;
        cursor: pointer;
        width: 932px;
        margin: 0;
        z-index: 1000;
        .swiper-slide {
          > div {
            width: 100%;
            height: 100%;
          }
          img {
            background: url("../../assets/images/loading.gif") no-repeat center;
            background-color: #fff;
            background-size: (307 / 3) * 2px (298 / 3) * 2px;
            width: 100%;
            height: 100%;
            border: 0;
          }
        }
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
        width: 260px;
        position: absolute;
        right: 0;
        overflow: hidden;
        top: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        //background: hsl(20, 40%, 90%) fixed;

        // &::before {
        //   content: "";
        //   position: absolute;
        //   top: 0;
        //   right: 0;
        //   left: 0;
        //   bottom: 0;
        //   filter: blur(20px);
        //   // background: hsl(20, 40%, 90%) fixed;
        // }
        > img {
          height: 100%;
          width: 100%;
        }
        > p {
          height: 100%;
          width: 260px;
          position: absolute;
          right: 0;
          filter: blur(20px);
          top: 0;
          z-index: 0;
          background-size: 100% 100%;
          background-position: -50% 0;
          background-repeat: no-repeat;
        }
        > div {
          width: 260px;
          height: 375px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: absolute;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
        }
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
            cursor: pointer;
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
            padding: 0 55px;
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
            height: 26px;
            font-size: 12px;
            color: #ffffff;
            font-family: $base-font-family;
            display: flex;
            align-items: center;
            line-height: 26px;
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
            width: 100%;
            ul {
              width: 100%;
              // transition: all 1s;
              display: flex;
              flex-direction: column;
              transform-origin: 52% 50%;
              transform: translateZ(0);

              li {
                -webkit-font-smoothing: antialiased;
                height: 30px;
                //font-family: PingFangSC-Regular;
                font-size: 12px;

                color: #ffffff;
                transform-origin: 52% 50%;
                transform: translateZ(0);
                line-height: 30px;
                border-bottom: 0.5px dotted rgba(255, 255, 255, 0.52);
                display: flex;
                justify-content: flex-start;
                cursor: pointer;
                opacity: 1 !important;
                &:hover {
                  color: $theme-color;
                }
                > div {
                  display: flex;
                  align-items: center;
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
  }
</style>