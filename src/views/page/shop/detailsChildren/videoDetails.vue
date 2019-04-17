<template>
  <div class="video-details">
    <div class="left">
      <div class="video_box">
        <h2>
          胎儿静脉导管缺如及脐静脉回流异常的超声诊断
          <p>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
              </svg>
              30万
            </span>
            <span>2017-08-22 19:32</span>
            <span>课程总时长：04:21</span>
          </p>
        </h2>
        <div class="video">
          <span class="video_menu">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshipinxiangqingyebofangjian"></use>
            </svg>
          </span>
        </div>
        <ul>
          <li>标签字数</li>
          <li>标签字数</li>
          <li>最长显示多少再定</li>
        </ul>
        <div class="lecturer">
          <h3>
            <i></i>
            讲师介绍
          </h3>
          <div class="photo">
            <div class="img_box"></div>
            <p>
              托尼老师
              <span
                >研究员级高级工程师，江苏省人民医院（南京医科大学第一附属医院）副院长，国家卫计委医院管理研究所临床医学工程首席专家，中国医师协会临床工程师分会副会长，中华医学会医学工程学分会候任主委，江苏省医院协会设备管理专业委员会主任委员，江苏省医疗设备器械质量控制中心主任。</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="introduce">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="课件介绍" key="1" :forceRender="true">
            <div class="introduce-content">
              <h2>
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
              </span>
            </div>
            <share-menu-vue></share-menu-vue>
          </a-tab-pane>
          <a-tab-pane tab="课件目录" key="2" :forceRender="true"
            >Content of Tab Pane 2</a-tab-pane
          >
        </a-tabs>
      </div>
      <comment-vue :isLogin="isLogin"></comment-vue>
      <menu-vue></menu-vue>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  import shareMenuVue from "../../../../components/common/share/shareMenu.vue";
  import commentVue from "../../../../components/common/comment/comment.vue";
  import menuVue from "../../../../components/common/share/menu.vue";
  export default {
    data() {
      return {
        isLogin: true //是否登录
      };
    },
    components: {
      shareMenuVue,
      commentVue,
      menuVue
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
              padding-bottom: 25px;
              border-bottom: 0.5px solid #dddddd;
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
      padding: 12px 0;
      background: #fff;
      // justify-content: space-between;
      box-shadow: $base-box-shadow;
      span {
        display: flex;
        flex-direction: column;
        height: auto;
        margin-top: 0;
        line-height: 18px;
        // margin-bottom: 24px;
        cursor: pointer;
        i {
          margin-right: 0;
        }
      }
    }
  }
  .right {
  }
</style>