<template>
  <div class="detaile">
    <Header></Header>
    <search></search>
    <Nav></Nav>
    <div class="container">
      <div class="commonWidth">
        <a-breadcrumb :routes="routes">
          <span slot="separator">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconwangyelujing"></use>
            </svg>
          </span>

          <template
            slot="itemRender"
            slot-scope="{ route, params, routes, paths }"
          >
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.name }}
            </span>
            <router-link v-else :to="`/${paths.join('/')}`">
              {{ route.name }}
            </router-link>
          </template>
        </a-breadcrumb>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <side-bar />
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";
  import sideBar from "../../../components/sideBar/sideBar.vue";
  export default {
    data() {
      return {
        routes: [
          {
            path: "/",
            name: "首页"
          },
          {
            path: "/detaile",
            name: "文章详情"
          }
        ]
      };
    },
    components: {
      Header,
      Footer,
      search,
      Nav,
      sideBar
    },
    mounted() {
      console.log(this);
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .detaile {
    /deep/ .ant-breadcrumb {
      height: 57px;
      padding-top: 8px;
      display: flex;
      align-items: center;
      > span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 17px;

        .ant-breadcrumb-link {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          height: 17px;
          > a {
            text-decoration: none;
            &:hover {
              color: $theme-color;
            }
          }
        }
        .ant-breadcrumb-separator {
          margin: 0 10px;
          > span {
            display: flex;
            align-items: center;
          }
          .icon {
            width: 10px;
            height: 18px;
          }
        }
      }
    }
    .container {
      background: $base-background;
      padding-bottom: 110px;
      .content {
        display: flex;
        justify-content: space-between;
        /* .left {
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
                      font-family: PingFangSC-Semibold;
                      font-size: 24px;
                      color: #333333;
                      display: flex;
                      flex-direction: column;
                      margin-bottom: 24px;
                      p {
                        font-family: PingFangSC-Regular;
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
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #fb6441;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        line-height: 25px;
                      }
                    }
                    .lecturer {
                      font-family: PingFangSC-Semibold;
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
                        }
                        p {
                          font-family: PingFangSC-Semibold;
                          font-size: 16px;
                          color: #333333;
                          display: flex;
                          flex: 1;
                          flex-direction: column;
                          span {
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #666666;
                            line-height: 20px;
                            margin-top: 9px;
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
                                font-family: PingFangSC-Regular;
                                font-size: 16px;
                                color: #666666;
                                &.ant-tabs-tab-active {
                                  font-family: PingFangSC-Medium;
                                  color: $theme-color;
                                }
                                &:hover {
                                  font-family: PingFangSC-Medium;
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
                            font-family: PingFangSC-Medium;
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
                            font-family: PingFangSC-Regular;
                            font-size: 16px;
                            color: #666666;
                            line-height: 32px;
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
                } */
      }
    }
  }
</style>