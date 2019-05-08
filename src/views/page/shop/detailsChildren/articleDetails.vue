<template>
  <div class="article-details">
    <div class="left">
      <div class="article_box">
        <h2>
          {{ detail.topic }}
          <p>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
              </svg>
              {{ detail.hits }}
            </span>
            <span>{{ detail.createdOn }}</span>
          </p>
        </h2>

        <div class="introduce">
          <div class="content" v-html="detail.content"></div>
          <ul>
            <li>标签字数</li>
            <li>标签字数</li>
            <li>最长显示多少再定</li>
          </ul>
          <share-menu-vue></share-menu-vue>
        </div>
      </div>
      <comment-vue :isLogin="$store.state.isLogin"></comment-vue>
      <menu-vue :item="detail"></menu-vue>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  import shareMenuVue from "../../../../components/common/share/shareMenu.vue";
  import commentVue from "../../../../components/common/comment/comment.vue";
  import menuVue from "../../../../components/common/share/menu.vue";
  import { _getData } from "../../../../config/getData";

  export default {
    data() {
      return {
        isLogin: true,
        detail: {}
      };
    },
    components: {
      shareMenuVue,
      commentVue,
      menuVue
    },
    mounted() {
      //获取详情
      _getData(`${this.$API_URL.HYGPROURl}/server_pro/learn!request.action`, {
        method: "getArticleDetails",
        userid: "",
        token: "",
        params: { id: this.$route.query.id }
      }).then(data => {
        this.detail = data.data.result;
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .left {
    width: $content-left;
    background: $base-background;
    padding-bottom: 0;

    position: relative;
    .article_box {
      padding: 20px;
      padding-bottom: 0px;
      margin-bottom: 10px;
      background: #fff;
      box-shadow: $base-box-shadow;
      > h2 {
        font-size: 24px;
        color: #333333;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        font-weight: bold;
        p {
          font-size: 14px;
          color: #999999;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 5px;
          font-weight: normal;
          span {
            display: flex;
            height: 20px;
            align-items: center;
            margin-right: 20px;
            &:first-child {
              justify-content: flex-start;
              .icon {
                margin-right: 5px;
                width: 15px;
                height: 10px;
              }
            }
          }
        }
      }

      .introduce {
        margin-top: 24px;
        .content {
          border-top: 1px solid #dddddd;
          padding-top: 24px;
          letter-spacing: 1px;
          font-size: 16px;
          color: #333333;
          line-height: 32px;
        }
        > ul {
          display: flex;
          justify-content: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          li {
            margin-right: 4px;
            height: 25px;
            padding: 0 10px;
            background: #f7f7f7;
            border-radius: 15px;

            font-size: 12px;
            color: #fb6441;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 25px;
          }
        }
        /deep/ .share {
          border-top: 0.5px solid #dddddd;
        }
      }
    }
    /deep/ .menu {
      border-top: 0;
      position: absolute;
      width: 50px;
      height: 240px;
      left: -60px;
      top: 0;
      flex-direction: column;
      padding: 0;
      background: #fff;
      // justify-content: space-between;
      box-shadow: $base-box-shadow;
      span {
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        position: relative;
        justify-content: center;
        align-items: center;
        flex: 1;
        margin-top: 0;
        line-height: 18px;
        // margin-bottom: 24px;
        cursor: pointer;
        i {
          margin-right: 0;
        }

        &:hover {
          &::after {
            display: flex;
          }
        }
      }
    }
  }
  .right {
  }
</style>