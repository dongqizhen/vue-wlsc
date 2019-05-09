<template>
  <li class="comment-item">
    <div class="img_box"></div>
    <div class="main">
      <span>
        张德志
        <span>2019-02-18&nbsp; 16:20</span>
      </span>
      <p>
        产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！
      </p>
      <div class="replay">
        <div class="btn">
          <div class="replay-btn">
            <span @click="replayBtnClick">回复</span>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            <span @click="packUp">
              2条回复
              <svg
                class="icon"
                :class="commentIsShow && 'active'"
                aria-hidden="true"
              >
                <use xlink:href="#iconhuifuzhankai"></use>
              </svg>
            </span>
          </div>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzan"></use>
            </svg>
            89
          </span>
        </div>
        <transition name="slide-fade">
          <div class="replay-area" v-if="isLogin && iptIsShow">
            <a-textarea placeholder="写下您的评论" :rows="4" />
            <span>发送</span>
          </div>
        </transition>
      </div>
      <transition name="slide-fade">
        <div class="replay-container" v-if="commentIsShow">
          <ul>
            <slot name="replay-container"></slot>
          </ul>
        </div>
      </transition>
    </div>
    <login-modal-vue type="login" :Visible="visible"></login-modal-vue>
  </li>
</template>

<script>
  import { mapState } from "vuex";
  import loginModalVue from "../../modal/loginModal.vue";

  export default {
    data() {
      return {
        iptIsShow: false,
        commentIsShow: false,
        visible: false
      };
    },
    components: {
      loginModalVue
    },
    methods: {
      replayBtnClick() {
        if (this.isLogin) {
          this.iptIsShow = !this.iptIsShow;
        } else {
          this.visible = true;
        }
      },
      packUp() {
        this.commentIsShow = !this.commentIsShow;
      }
    },
    computed: {
      ...mapState(["isLogin"])
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  textarea {
    //height: 91px !important;
    flex: 1;
    resize: none;

    font-size: 14px;
    border: 1px solid #dddddd;
    padding: 10px 20px;
    color: #333;
    &:focus {
      border-color: $theme-color;
      outline: 0;
      -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
      box-shadow: 0 0 0 2px rgba($color: $theme-color, $alpha: 0.2);
      border-right-width: 1px !important;
    }
    &:hover {
      border-color: $theme-color;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-5px);
    opacity: 0;
  }
  li {
    display: flex;
    justify-content: flex-start;
    //padding-bottom: 20px;
    border-bottom: 1px solid #dddddd;
    &:last-child {
      border: 0;
    }
    .img_box {
      height: 30px;
      width: 30px;
      border-radius: 16px;
      background: $base-background;
      margin-right: 8px;
      margin-top: 4px;
    }
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      > span {
        font-weight: bold;
        font-size: 14px;
        color: #333333;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 2px;
        span {
          font-weight: normal;
          font-size: 12px;
          color: #999999;
          margin-left: 10px;
        }
      }
      > p {
        font-size: 14px;
        color: #333333;
        margin-bottom: 6px;
      }
      .replay {
        font-size: 14px;
        color: #406599;
        display: flex;
        justify-content: flex-start;

        flex-direction: column;
        .btn {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          .replay-btn {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span {
              cursor: pointer;
              display: flex;
              align-items: center;
              .icon {
                width: 11px;
                height: 6px;
                margin-top: 2px;
                margin-left: 8px;
                transition: all 0.3s;
                &.active {
                  transform: rotate(180deg);
                }
              }
            }
          }
          > span {
            // font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #999999;
            display: flex;
            align-items: center;
            cursor: pointer;
            .icon {
              width: 16px;
              height: 16px;
              margin-right: 4px;
            }
          }
        }
        .replay-area {
          // margin-top: 10px;
          span {
            display: flex;
            height: 33px;
            width: 76px;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-top: 16px;
            background-image: linear-gradient(90deg, #ff4e1a 0%, #f10000 100%);
            font-weight: 600;
            font-size: 14px;
            color: #ffffff;
            float: right;
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
      .replay-container {
      }
    }
  }
</style>