<template>
  <div class="contact-service">
    <div class="head">
      <common-title title="消息中心"></common-title>
      <div class="shopInfo">
        <div>
          <div class="img-box"></div>
          <div class="right">
            <h3>商家名称<span>2019-11-14 14:28</span></h3>
            <p>
              这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息显示用户发布的信息
            </p>
          </div>
        </div>
        <span>进入店铺</span>
      </div>
    </div>
    <div class="reply">
      <h2>最新回复</h2>
      <ul>
        <li>
          <div class="img-box"></div>
          <div class="right">
            <h3>商家名称<span>2019-11-14 14:28</span></h3>
            <p>
              这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息显示用户发布的信息
            </p>
          </div>
        </li>
        <li>
          <div class="img-box"></div>
          <div class="right">
            <h3>商家名称<span>2019-11-14 14:28</span></h3>
            <p>
              这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息显示用户发布的信息
            </p>
          </div>
        </li>
        <li>
          <div class="img-box"></div>
          <div class="right">
            <h3>商家名称<span>2019-11-14 14:28</span></h3>
            <p>
              这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息显示用户发布的信息
            </p>
          </div>
        </li>
        <li>
          <div class="img-box"></div>
          <div class="right">
            <h3>商家名称<span>2019-11-14 14:28</span></h3>
            <p>
              这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息这里显示用户发布的信息显示用户发布的信息
            </p>
          </div>
        </li>
      </ul>
      <div class="replay-container">
        <a-textarea placeholder="请输入内容…" :rows="4" v-model="value" />
        <a-button :disabled="value == ''">发送</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  import commonTitle from "../../../../../components/common/merchantRightCommonTitle";
  export default {
    data() {
      return {
        value: ""
      };
    },
    components: {
      commonTitle
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../../assets/scss/_commonScss";
  @import "../../../../../assets/scss/_input";
  .contact-service {
    // min-height: 693px;
    .head {
      background-color: #fff;
      padding: 4px 20px;
      margin-bottom: 10px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      .shopInfo {
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          display: flex;
          .img-box {
            height: 46px;
            width: 46px;
            border-radius: 46px;
            background: #cbcbcb;
            margin-right: 9px;
          }
          .right {
            h3 {
              font-size: 15px;
              color: #333333;
              font-weight: 600;
              line-height: 21px;
              display: flex;
              align-items: center;
              margin-bottom: 8px;
              span {
                margin-left: 10px;
                font-size: 12px;
                color: #999999;
              }
            }
            p {
              line-height: 21px;
              font-size: 15px;
              color: #333333;
              width: 688px;
            }
          }
          &:last-child {
            border-bottom: 0;
          }
        }
        > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 40px;
          background: rgba(245, 166, 35, 0.05);
          border: 1px solid #f5a623;
          border-radius: 20.5px;
          font-size: 15px;
          color: #f5a623;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .reply {
      background: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
      margin-bottom: 48px;
      h2 {
        padding-left: 20px;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #333333;
        border-bottom: 1px solid #dddddd;
      }
      ul {
        display: flex;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #dddddd;
        //padding-bottom: 50px;
        height: 390px;
        overflow: auto;
        &::-webkit-scrollbar {
          width: 5px;
          height: 5px;

          background-color: #b5b1b1;
        }
        &::-webkit-scrollbar-track {
          background: #f6f6f6;
          border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
          background: #aaa;
          border-radius: 2px;
        }
        li {
          display: flex;
          justify-content: flex-start;
          padding: 24px 0;
          border-bottom: 0.5px solid #dddddd;
          .img-box {
            height: 46px;
            width: 46px;
            border-radius: 46px;
            background: #cbcbcb;
            margin-right: 9px;
          }
          .right {
            h3 {
              font-size: 15px;
              color: #333333;
              font-weight: 600;
              line-height: 21px;
              display: flex;
              align-items: center;
              margin-bottom: 8px;
              span {
                margin-left: 10px;
                font-size: 12px;
                color: #999999;
              }
            }
            p {
              line-height: 21px;
              font-size: 15px;
              color: #333333;
              width: 688px;
            }
          }
          &:last-child {
            border-bottom: 0;
          }
        }
      }
      .replay-container {
        position: relative;
        height: 170px;
        /deep/ .ant-input {
          height: 134px;

          &::-webkit-scrollbar {
            width: 5px;
            height: 5px;

            background-color: #b5b1b1;
          }
          &::-webkit-scrollbar-track {
            background: #f6f6f6;
            border-radius: 2px;
          }
          &::-webkit-scrollbar-thumb {
            background: #aaa;
            border-radius: 2px;
          }
          border: 0;
          padding: 18px 20px;
          resize: none;
          font-size: 15px;
          color: #333;
          &:hover,
          &:focus {
            border: none !important;
            outline: none;
            box-shadow: none !important;
          }
        }
        button {
          position: absolute;
          width: 102px;
          height: 42px;
          background-image: linear-gradient(270deg, #ff4e1a 0%, #f10000 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #fffefe;
          font-weight: 600;
          border: #fff;
          right: 20px;
          bottom: 17px;
          &[disabled] {
            opacity: 0.2;
          }
          &::after {
            display: none;
          }
        }
      }
    }
  }
</style>