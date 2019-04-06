<template>
  <div class="review-container">
    <div class="login" v-if="!isLogin">
      <div>
        登录后方可发表评论
        <span>登录</span>
      </div>
    </div>
    <div class="write-review-container">
      <div class="write-review" v-if="isLogin">
        <div class="top">
          <div class="img-box"></div>
          <a-textarea placeholder="写下您的评论" :rows="4" />
        </div>

        <span>发送</span>
      </div>
      <h2>
        2条回复
        <ul>
          <li class="active">按时间倒序</li>
          <li>按时间正序</li>
        </ul>
      </h2>
      <div class="review_content">
        <ul>
          <comment-item-vue>
            <comment-item-vue slot="replay-container"></comment-item-vue>
          </comment-item-vue>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import commentItemVue from "./commentItem.vue";

  export default {
    data() {
      return {};
    },
    props: {
      isLogin: {
        type: Boolean,
        default: false,
        required: true
      }
    },
    components: {
      commentItemVue
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
    padding: 4px 20px;
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
        }
      }
    }
  }
</style>