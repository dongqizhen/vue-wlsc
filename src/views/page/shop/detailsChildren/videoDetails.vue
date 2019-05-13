<template>
  <div class="video-details">
    <div v-if="!isLoading">
      <div class="left">
        <div class="video_box">
          <h2>
            {{ detail.title }}
            <p>
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
                </svg>
                {{ detail.watchAmount }}
              </span>
              <span>{{ detail.createdOn }}</span>
              <span>课程总时长：{{ detail.totalTime }}</span>
            </p>
          </h2>
          <div class="video">
            <video-player
              v-if="detail && detail.videoSubList.length"
              class="video-player-box vjs-custom-skin"
              :style="{ 'background-image': detail.image }"
              ref="videoPlayer"
              :options="playerOptions"
              :playsinline="true"
              customEventName="customstatechangedeventname"
            >
            </video-player>
            <!-- <img :src="detail.image" alt="" /> -->
            <!-- <span class="video_menu">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshipinxiangqingyebofangjian"></use>
            </svg>
          </span> -->
          </div>
          <ul>
            <li v-for="label in detail.labelList" :key="label.id">
              {{ label.name }}
            </li>
          </ul>
          <div class="lecturer">
            <h3>
              <i></i>
              讲师介绍
            </h3>
            <div class="photo">
              <div class="img_box"></div>
              <p>
                {{ detail.speaker }}
                <span>
                  {{ detail.videoUserIntroduce }}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="introduce">
          <a-tabs defaultActiveKey="1">
            <a-tab-pane tab="课件介绍" key="1" :forceRender="true">
              <div class="introduce-content" v-html="detail.introduce">
                <!-- <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconkejianjieshaoziseyuandian"></use>
                </svg>
                术式
              </h2>
              <span>程序化、隧道法原味腹腔镜脾切除术</span>
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconkejianjieshaoziseyuandian"></use>
                </svg>
                术者
              </h2>
              <span>徐杰、刘作金</span>
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconkejianjieshaoziseyuandian"></use>
                </svg>
                单位
              </h2>
              <span>
                重庆医科大学附属第二医院肝胆外科<br />
                重庆市“龚建平”肝胆外科首席专家工作室<br />
                重庆市肝胆外科联盟理事长单位<br />
                重庆市肝病治疗中心外科部
              </span>
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconkejianjieshaoziseyuandian"></use>
                </svg>
                手术特点
              </h2>
              <span>
                利用百克钳可靠的止血效果，不仅能让手术视野更加干净，而且明显减少止血钳的使用，避免了对最后使用切割闭合器的干扰。手术全程在百克钳辅助下完成，只在脾动脉处使用了止血钳。切除手术
              </span> -->
              </div>
            </a-tab-pane>
            <a-tab-pane tab="课件目录" key="2" :forceRender="true"
              >Content of Tab Pane 2</a-tab-pane
            >
          </a-tabs>
          <share-menu-vue></share-menu-vue>
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
  import "video.js/dist/video-js.css";
  import "vue-video-player/src/custom-theme.css";
  import { videoPlayer } from "vue-video-player";

  export default {
    data() {
      return {
        detail: "",
        isLoading: true,
        playerOptions: {
          // videojs options
          muted: true,
          languages: {
            en: {
              Play: "播放",
              Pause: "暂停",
              Loaded: "加载",
              Unmute: "取消静音",
              Mute: "静音",
              Fullscreen: "全屏",
              Replay: "重新播放",
              "Non-Fullscreen": "退出全屏",
              "Play Video": "点击播放",
              "Playback Rate": "播放速度"
            }
          },
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          preload: true,
          fluid: true,
          sources: [
            {
              type: "video/mp4",
              src: ""
            }
          ],
          poster: ""
        },
        globalOptions: {}
      };
    },
    components: {
      shareMenuVue,
      commentVue,
      menuVue,
      videoPlayer
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player;
      }
    },
    mounted() {
      _getData(`${this.$API_URL.HYGPROURL}/server_pro/video!request.action`, {
        method: "getVideoByIdV1",
        userid: "",
        params: { id: this.$route.query.id }
      })
        .then(data => {
          this.detail = data.data.result;
          this.playerOptions.poster = this.detail.image;
          this.playerOptions.sources[0].src = this.detail.videoSubList[0].url;
        })
        .then(() => {
          this.isLoading = false;
        });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .video-details {
    width: 100%;
  }
  .left {
    width: $content-left;
    background: $base-background;
    padding-bottom: 0;

    position: relative;

    .video_box {
      padding: 20px;
      padding-bottom: 33px;
      margin-bottom: 10px;
      background: #fff;
      box-shadow: $base-box-shadow;
      h2 {
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
      .video {
        width: 100%;
        height: 408.7px;
        background: $base-background;
        position: relative;
        cursor: pointer;
        background-size: 100% 100%;
        img {
          height: 100%;
          width: 100%;
        }
        /deep/ .video-player-box {
          width: 100%;
          height: 100%;
          .video-js {
            width: 100% !important;
            height: 100% !important;
            .vjs-poster {
              background-size: 100% 100%;
            }
            .vjs-big-play-button {
              width: 80px;
              height: 80px;
              border-radius: 41px;
              border: none;
              background: url("../../../../assets/images/play.svg") no-repeat
                center;
              background-size: 100% 100%;
            }
          }
        }
        .video_menu {
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -40px;
          margin-top: -40px;

          .icon {
            width: 80px;
            height: 80px;
          }
        }
      }
      > ul {
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        margin-bottom: 30px;
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
          font-weight: 600;
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
          }
          p {
            font-weight: 600;
            font-size: 16px;
            color: #333333;
            display: flex;
            flex: 1;
            flex-direction: column;
            span {
              font-weight: 500;
              font-size: 14px;
              color: #666666;
              line-height: 20px;
              margin-top: 9px;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
    .introduce {
      //height: 100px;
      background: #fff;
      box-shadow: $base-box-shadow;
      margin-bottom: 10px;
      .share-menu {
        margin-left: 20px;
        border-top: 0.5px solid #dddddd;
      }
      /deep/ .ant-tabs {
        .ant-tabs-bar {
          height: 54px;
          margin-bottom: 0;
          .ant-tabs-nav-container {
            .ant-tabs-nav-wrap {
              padding: 0 20px;
              .ant-tabs-nav {
                > div {
                  &:first-child {
                    display: flex;
                    justify-content: flex-start;
                  }
                  &.ant-tabs-ink-bar {
                    background: $theme-color;
                  }
                }
                .ant-tabs-tab {
                  padding: 0;
                  height: 54px;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  font-size: 16px;
                  color: #666666;
                  &.ant-tabs-tab-active {
                    font-weight: 600;
                    color: $theme-color;
                  }
                  &:hover {
                    color: $theme-color;
                  }
                }
              }
            }
          }
        }
        .ant-tabs-content {
          padding: 4px 20px 0;
          .ant-tabs-tabpane {
            .introduce-content {
              padding-top: 21px;
              padding-bottom: 25px;

              p {
                font-size: 16px;
                color: #666666;
                line-height: 32px;
              }
            }

            h2 {
              font-weight: 600;
              font-size: 16px;
              color: #333333;
              height: 42px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-top: 10px;
              .icon {
                height: 12px;
                width: 12px;
                margin-top: 1px;
                margin-right: 6px;
              }
              &:nth-child(2) {
                margin-top: 0;
              }
            }
            span {
              font-size: 16px;
              color: #666666;
              line-height: 32px;
              letter-spacing: 1px;
            }
          }
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