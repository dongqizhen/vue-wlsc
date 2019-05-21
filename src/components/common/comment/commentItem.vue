<template>
  <li class="comment-item">
    <div class="img_box">
      <img :src="item.userImageUrl" alt="" />
    </div>
    <div class="main">
      <span>
        {{ item.username }}
        <span>{{ item.createdOn }}</span>
      </span>
      <p>
        {{ item.content
        }}{{
          item.commentId && item.commentId != -1
            ? "&nbsp;&nbsp;//@" +
              item.commentName +
              "：" +
              decodeURI(item.commentContent)
            : ""
        }}
      </p>
      <div class="replay">
        <div class="btn">
          <div class="replay-btn">
            <span @click="replayBtnClick">回复</span>

            <span
              @click="
                if (!item.commentId) {
                  packUp();
                }
              "
            >
              &nbsp;&nbsp;·&nbsp;
              {{ item.commentNum }}条回复
              <svg
                v-if="!item.commentId"
                class="icon"
                :class="commentIsShow && 'active'"
                aria-hidden="true"
              >
                <use xlink:href="#iconhuifuzhankai"></use>
              </svg>
            </span>
          </div>
          <span @click="giveALike(item.id)">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzan" v-if="!isCommentLike"></use>
              <use xlink:href="#iconzanx" v-else></use>
            </svg>
            {{ commentAmount }}
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
  import { _getData } from "../../../config/getData";

  export default {
    data() {
      return {
        iptIsShow: false,
        commentIsShow: false,
        visible: false,
        isCommentLike: 0, //评论是否点赞 0 否 1 是
        commentAmount: 0
      };
    },
    props: ["item", "likeType"],
    components: {
      loginModalVue
    },
    created() {
      this.isCommentLike = this.item.isDianzan;
      this.commentAmount = this.item.amount;
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
      },
      //点赞
      giveALike(id) {
        this.isCommentLike = !this.isCommentLike;
        _getData(`${this.$API_URL.HYGPROURL}/server_pro/dianzan!request.action`, {
          method: "addOrDeleteDianzan_v27",
          token: "",
          userid: "29942",
          params: {
            id: id,
            type: this.likeType,
            controlflag: this.isCommentLike ? 0 : 1 //1表示取消，0表示添加（传的是现在的状态）
          }
        }).then(() => {
          this.commentAmount = this.isCommentLike
            ? (this.commentAmount += 1)
            : (this.commentAmount -= 1);
        });
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
    padding-top: 20px;
    &:last-child {
      border: 0;
    }
    &:first-child {
      padding-top: 0;
    }
    .img_box {
      height: 30px;
      width: 30px;
      border-radius: 16px;
      background: $base-background;
      margin-right: 8px;
      margin-top: 4px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }
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