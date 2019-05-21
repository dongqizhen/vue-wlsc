<template>
  <div class="review-container">
    <div class="login" v-if="!isLogin">
      <div>
        登录后方可发表评论
        <span @click="toLogin">登录</span>
      </div>
    </div>
    <div class="write-review-container">
      <div class="write-review" v-if="isLogin">
        <div class="top">
          <div class="img-box">
            <img :src="userInfo.imageUrl" alt="" />
          </div>
          <a-textarea placeholder="写下您的评论" v-model="value" :rows="4" />
        </div>

        <span @click="sendComment">发送</span>
      </div>
      <h2>
        {{ commentData.amount }}条回复
        <ul>
          <li
            :class="i == defaultVal && 'active'"
            v-for="(item, i) in ['按时间倒序', '按时间正序']"
            :key="`sort-${i}`"
            @click="handerClick(i)"
          >
            {{ item }}
          </li>
        </ul>
      </h2>
      <div class="review_content">
        <ul v-if="commentData.commentList.length">
          <comment-item-vue
            v-for="item in commentData.commentList"
            :key="item.id"
            :item="item"
            likeType="11"
          >
            <comment-item-vue
              slot="replay-container"
              v-for="val in item.replyList"
              :key="val.id"
              :item="val"
              likeType="11"
            ></comment-item-vue>
          </comment-item-vue>
        </ul>
        <no-data v-else type="no-comment" text="暂无评论"></no-data>
      </div>
    </div>
  </div>
</template>

<script>
  import commentItemVue from "./commentItem.vue";
  import { mapState } from "vuex";
  import { _getData } from "../../../config/getData";

  export default {
    data() {
      return {
        defaultVal: 0, //排序
        value: ""
        //commentType: ""
      };
    },
    props: {
      isLogin: {
        type: Boolean,
        default: false,
        required: true
      },
      video: {},
      commentData: {},
      type: {
        type: [String] //video 微课堂
      }
    },
    components: {
      commentItemVue
    },
    computed: {
      ...mapState(["userInfo"]),
      getType() {
        switch (this.type) {
          case "video":
            return {
              commentType: 1
            };
            break;
        }
      }
    },
    mounted() {},
    methods: {
      toLogin() {
        this.$router.push({ path: "/login" });
        // const { href } = this.$router.resolve({
        //   path: "/login"
        // });
        // window.open(href, "_blank");
      },
      handerClick(i) {
        this.defaultVal = i;
      },
      sendComment() {
        if (this.value == "") return;
        _getData(
          `${this.$API_URL.HYGPROURL}/server_pro/videoComment!request.action`,
          {
            method: "addModelComments",
            userid: "29942",
            params: {
              id: this.$route.query.id, //视频id
              type: this.getType.commentType, //表示聊一聊
              content: window.encodeURI(this.value), //评论内容，编码
              parentId: "", //被回复顶层评论id
              commentId: "" //被回复记录id
            }
          }
        )
          .then(() => {
            this.$nextTick()
              .then(() => {
                this.$message.success("评论成功");
              })
              .then(() => {
                this.value = "";
              });
          })
          .then(() => {
            this.$parent.getCommentList();
          });
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss.scss";
  textarea {
    //height: 91px !important;
    flex: 1;
    resize: none;
    font-size: 14px;
    border: 1px solid #dddddd;
    padding: 10px 20px;
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
  .review-container {
    .login {
      padding: 20px;
      background: #fff;
      margin: 10px 0;
      box-shadow: $base-box-shadow;
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 15px;
        color: #815535;
        height: 91px;
        background: #fff7e7;
        border: 1px solid #ded6c5;
        span {
          display: flex;
          height: 33px;
          width: 76px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-image: linear-gradient(90deg, #ff4e1a 0%, #f10000 100%);
          font-size: 14px;
          color: #ffffff;
          margin-left: 40px;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .write-review-container {
      box-shadow: $base-box-shadow;
      .write-review {
        padding: 24px 20px 20px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
        background: #fff;

        .top {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          .img-box {
            height: 30px;
            width: 30px;
            background: $base-background;
            margin-right: 8px;
            border-radius: 16px;
            img {
              height: 100%;
              width: 100%;
              border-radius: 16px;
            }
          }
        }

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

          &:hover {
            opacity: 0.7;
          }
        }
      }
      > h2 {
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 29px;
        justify-content: space-between;
        background: #f5f5f5;

        font-weight: 600;
        font-size: 15px;
        color: #f5a623;
        ul {
          display: flex;
          justify-content: flex-start;
          padding: 0 20px;
          li {
            font-size: 12px;
            color: #999999;
            cursor: pointer;
            font-weight: normal;
            &.active {
              font-weight: 600;
              font-size: 12px;
              color: #333333;
            }
            &:first-child {
              margin-right: 30px;
            }
          }
        }
      }
      .review_content {
        padding: 20px;
        padding-bottom: 0;
        background: #fff;
        display: flex;
        justify-content: flex-start;
        ul {
          width: 100%;
        }
        /deep/ .no-data {
          height: 500px;
        }
      }
    }
  }
</style>