<template>
  <div class="contact-service">
    <div class="head">
      <common-title title="消息中心"></common-title>
      <div class="shopInfo">
        <div>
          <div class="img-box">
            <img :src="shopDetail.image" alt="" />
          </div>
          <div class="right">
            <h3>{{ shopDetail.shopName }}<span>2019-11-14 14:28</span></h3>
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
      <div class="replay-content">
        <ul v-if="commentData.firstMessage">
          <li>
            <div class="img-box">
              <img
                :src="commentData.firstMessage.senderImage"
                v-if="commentData.firstMessage.senderImage"
              />
              <svg class="icon" aria-hidden="true" v-else>
                <use xlink:href="#iconweidenglutouxiang"></use>
              </svg>
            </div>
            <div class="right">
              <h3>
                {{ commentData.firstMessage.senderName
                }}<span>{{ commentData.firstMessage.createdOn }}</span>
              </h3>
              <p>
                {{ commentData.firstMessage.content }}
              </p>
            </div>
            <a-button v-if="$userid == commentData.firstMessage.sendUserId">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconshanchu"></use>
              </svg>
              删除
            </a-button>
          </li>
          <li v-for="item in commentData.replyList" :key="item.id">
            <div class="img-box">
              <img :src="item.senderImage" v-if="item.senderImage" />
              <svg class="icon" aria-hidden="true" v-else>
                <use xlink:href="#iconweidenglutouxiang"></use>
              </svg>
            </div>
            <div class="right">
              <h3>
                {{ item.senderName }}<span>{{ item.createdOn }}</span>
              </h3>
              <p>
                {{ item.content }}
              </p>
            </div>
            <a-button v-if="$userid == item.sendUserId">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconshanchu"></use>
              </svg>
              删除
            </a-button>
          </li>
        </ul>
        <no-data v-else type="no-message" text="暂无消息"></no-data>
      </div>

      <div class="replay-container">
        <a-textarea placeholder="请输入内容…" :rows="4" v-model="value" />
        <a-button
          :disabled="value == ''"
          @click="sendMessage"
          :loading="sendBtnLoad"
          >发送</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
  import commonTitle from "../../../../../components/common/merchantRightCommonTitle";
  import { _getData } from "../../../../../config/getData";
  import _ from "lodash";
  export default {
    data() {
      return {
        value: "",
        shopDetail: "",
        commentData: "",
        sender: "", //用户类型
        sendBtnLoad: false
      };
    },
    components: {
      commonTitle
    },
    created() {
      console.log(this.$route);
      if (_.startsWith(this.$route.path, "/userCenter")) {
        this.sender = "user";
      } else {
        this.sender = "store";
      }
    },
    methods: {
      sendMessage() {
        this.sendBtnLoad = true;
        _getData("message/sendPersonlMessage", {
          storeId: this.$route.query.shopId, //类型：Number  必有字段  备注：店铺id
          userId: this.$userid, //类型：Number  必有字段  备注：用户id
          content: this.value, //类型：String  必有字段  备注：消息内容
          sender: this.sender
        }).then(data => {
          this.value = "";
          this.sendBtnLoad = false;
        });
      }
    },
    mounted() {
      console.log(this);
      _getData("/store/homeStore", {
        storeId: this.$route.query.shopId
      }).then(data => {
        this.shopDetail = data;
      });

      _getData("message/beginChat", {
        storeId: this.$route.query.shopId
      }).then(data => {
        console.log("消息", data);
        this.commentData = data;
      });
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
            background: #f5f5f5;
            margin-right: 9px;
            overflow: hidden;
            img {
              height: 100%;
              width: 100%;
            }
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
      .replay-content {
        height: 390px;
        overflow: auto;
        border-bottom: 1px solid #dddddd;
        .no-data {
          height: 100%;
        }
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
        ul {
          display: flex;
          padding: 0 20px;
          display: flex;
          flex-direction: column;

          //padding-bottom: 50px;

          li {
            display: flex;
            justify-content: flex-start;
            padding: 24px 0;
            align-items: center;
            border-bottom: 0.5px solid #dddddd;
            cursor: pointer;
            .img-box {
              height: 46px;
              width: 46px;
              border-radius: 46px;
              background: #cbcbcb;
              margin-right: 9px;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              .icon {
                height: 25px;
                width: 25px;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
            .right {
              width: 835px;
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
            /deep/ .ant-btn {
              background: #f5f5f5;
              border-radius: 15.5px;
              height: 30px;
              width: 75px;
              border: 0;
              font-size: 12px;
              color: #333333;
              border: #f5f5f5 1px solid;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 28px;
              display: none;
              .icon {
                margin-right: 3px;
              }
              &:hover {
                opacity: 0.7;
              }
              &::after {
                display: none;
              }
            }
            &:last-child {
              border-bottom: 0;
            }
            &:hover {
              /deep/ .ant-btn {
                display: flex;
              }
            }
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