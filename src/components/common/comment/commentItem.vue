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
            <span>
              2条回复
              <svg class="icon" aria-hidden="true">
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
        <div class="replay-area">
          <a-textarea placeholder="写下您的评论" :rows="4" />
          <span>发送</span>
        </div>
      </div>
      <div class="replay-container">
        <ul>
          <slot name="replay-container"></slot>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      replayBtnClick() {
        alert();
      }
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
  li {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 20px;
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
          margin-top: 10px;
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
    }
  }
</style>