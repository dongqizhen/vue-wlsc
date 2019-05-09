<template>
  <div class="case-details">
    <div v-if="!isLoading">
      <div class="left">
        <div class="case_box">
          <h2>
            {{ detail.name }}
            <p>
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
                </svg>
                {{ detail.dcount }}
              </span>
              <span>{{ detail.createOn }}</span>
            </p>
          </h2>
          <div class="lecturer">
            <!-- <h3>
            <i></i>
            讲师介绍
          </h3> -->
            <div class="photo">
              <div class="img_box">
                <img :src="detail.userImageUrl" alt="" />
              </div>
              <p>
                {{ detail.author }}
                <span></span>
              </p>
            </div>
          </div>
          <div class="introduce">
            <div class="content">
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconguzhangxianxiang"></use>
                </svg>
                故障现象
              </h2>
              <p v-html="decodeURIComponent(detail.failurePhenomenon)"></p>
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconguzhangfenxi"></use>
                </svg>
                故障分析
              </h2>
              <p v-html="decodeURIComponent(detail.failureAnalysis)"></p>
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconjiejuefangan"></use>
                </svg>
                解决方案
              </h2>
              <p v-html="decodeURIComponent(detail.solution)"></p>
            </div>
            <ul>
              <li>{{ detail.productLineName }}</li>
              <li>{{ detail.brandName }}</li>
              <li>{{ detail.modelName }}</li>
            </ul>
            <share-menu-vue></share-menu-vue>
          </div>
        </div>
        <comment-vue :isLogin="$store.state.isLogin"></comment-vue>
        <menu-vue :item="detail"></menu-vue>
      </div>
      <div class="right"></div>
    </div>
    <div v-else>
      <a-skeleton active />
      <br />
      <a-skeleton active />
      <br />
      <a-skeleton active />
    </div>
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
        isLoading: true,
        detail: ""
      };
    },
    components: {
      shareMenuVue,
      commentVue,
      menuVue
    },
    mounted() {
      _getData(
        `${this.$API_URL.HYGPROURl}/server_pro/maintenance!request.action`,
        {
          method: "getMaintenanceByIdV29",
          userid: "",
          token: "",
          params: {
            id: this.$route.query.id //维修宝id
          }
        }
      )
        .then(data => {
          this.detail = data.data.result;
        })
        .then(() => {
          this.isLoading = false;
        });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .case-details {
    width: 100%;
  }
  .left {
    width: $content-left;
    background: $base-background;
    padding-bottom: 0;

    position: relative;
    .case_box {
      padding: 20px;
      padding-bottom: 0px;
      margin-bottom: 10px;
      background: #fff;
      box-shadow: $base-box-shadow;
      > h2 {
        font-weight: 600;
        font-size: 24px;
        color: #333333;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        p {
          font-weight: normal;
          font-size: 14px;
          color: #999999;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 5px;
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
      .lecturer {
        font-weight: 600;
        font-size: 20px;
        color: #333333;
        display: flex;
        flex-direction: column;
        h3 {
          justify-content: flex-start;
          align-items: center;
          display: flex;
          height: 28px;
          line-height: 28px;
          margin-bottom: 24px;
          i {
            display: flex;
            height: 22px;
            width: 6px;
            background: #f5a623;
            border-radius: 3px;
            margin-right: 10px;
          }
        }
        .photo {
          display: flex;
          justify-content: flex-start;
          .img_box {
            height: 50px;
            width: 50px;
            background: $base-background;
            margin-right: 10px;
            border-radius: 25px;
            img {
              height: 100%;
              width: 100%;
              border-radius: 25px;
            }
          }
          p {
            font-weight: 600;
            font-size: 16px;
            color: #333333;
            display: flex;
            flex: 1;
            flex-direction: column;
            span {
              font-weight: normal;
              font-size: 14px;
              color: #666666;
              line-height: 20px;
              margin-top: 9px;
              letter-spacing: 1px;
            }
          }
        }
      }
      .introduce {
        padding: 4px 0 0;
        margin-top: 24px;
        .content {
          border-top: 1px solid #dddddd;
          > h2 {
            margin-top: 30px;
            font-weight: 600;
            font-size: 16px;
            color: #333333;
            display: flex;
            justify-content: flex-start;
            height: 22px;
            align-items: center;
            line-height: 22px;
            margin-bottom: 4px;
            .icon {
              height: 12px;
              width: 12px;
              margin-right: 6px;
            }
          }
          > p {
            font-weight: normal;
            font-size: 16px;
            color: #666666;
            letter-spacing: 1px;
            line-height: 32px;
          }
        }
        > ul {
          display: flex;
          justify-content: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          > li {
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