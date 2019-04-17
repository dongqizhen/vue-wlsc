<template>
  <div class="merchant">
    <a-layout>
      <a-layout-header>
        <Header></Header>
        <slot name="navCenter"></slot>
      </a-layout-header>
      <a-layout>
        <a-layout-sider>
          <div class="title">
            <slot name="Icon"></slot>
            {{ titleText }}
          </div>
          <a-menu
            mode="inline"
            :openKeys="openKeys"
            style="width: 170px"
            :defaultSelectedKeys="defaultSelectedKeys"
            @click="handleClick"
          >
            <a-sub-menu v-for="itemObj in dataArr" :key="itemObj.key">
              <span slot="title">
                <svg class="icon" aria-hidden="true">
                  <use v-bind:xlink:href="itemObj.icon"></use>
                </svg>
                <span>{{ itemObj.name }}</span>
              </span>
              <a-menu-item
                v-for="menuItem in itemObj.menus"
                :key="menuItem.key"
              >
                <router-link :to="menuItem.href">
                  {{ menuItem.name }}
                </router-link>
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <div class="right-content">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  import Header from "../header/header";
  import Footer from "../footer/footer";
  export default {
    inject: ["reload"],
    data() {
      return {};
    },
    props: {
      titleText: {
        type: String,
        required: true
      },
      dataArr: {
        type: Array,
        required: true
      },
      openKeys: {
        type: Array,
        default: []
      },
      defaultSelectedKeys: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleClick(e) {},
      goBack() {
        this.$router.replace({ path: "/merchant" });
        //replace替换原路由，作用是避免回退死循环
        this.reload();
      }
    },
    beforeMount() {
      switch (this.$route.path.split("/")[2]) {
        case "shopIndex":
          this.defaultSelectedKeys = ["1"];
          break;
        case "shopInfo":
          this.defaultSelectedKeys = ["2"];
          break;
        case "shopCertification":
          this.defaultSelectedKeys = ["3"];
          break;
        case "publishGoods":
          this.defaultSelectedKeys = ["4"];
          break;
        case "productManage":
          this.defaultSelectedKeys = ["5"];
          break;
        case "inquiryManage":
          this.defaultSelectedKeys = ["6"];
          break;
        case "orderManage":
          this.defaultSelectedKeys = ["7"];
          break;
        case "accountSecurity":
          this.defaultSelectedKeys = ["8"];
          break;
        case "changePassword":
          this.defaultSelectedKeys = ["8"];
          break;
        case "changeEmail":
          this.defaultSelectedKeys = ["8"];
          break;
        case "changePhone":
          this.defaultSelectedKeys = ["8"];
          break;
        case "personalCenter":
          this.defaultSelectedKeys = ["9"];
          break;
        case "messageCenter":
          this.defaultSelectedKeys = ["10"];
          break;
        case "messageDetail":
          this.defaultSelectedKeys = ["10"];
          break;
      }
    },

    mounted() {
      if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener("popstate", this.goBack, false);
      }
    },

    destroyed() {
      window.removeEventListener("popstate", this.goBack, false);
    },
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .merchant {
    /deep/.ant-layout {
      background: $base-background;
      .ant-layout-header {
        padding: 0;
        height: $header-height;
        background: $theme-color;
        .header {
          background: $theme-color;
          .content {
            .left {
              color: #fff;
              a {
                color: #fff;
              }
            }
            .right {
              li {
                a {
                  color: #fff;
                }
              }
            }
          }
        }
      }
      .ant-layout-sider {
        background: $base-background;
        width: 170px !important;
        min-width: 170px !important;
        flex: 0 !important;
        margin-right: 20px;
        margin-bottom: 111px;
        .ant-layout-sider-children {
          height: 693px;
          background-color: #fff;
          .title {
            width: 100%;
            height: 69px;
            line-height: 69px;
            padding-left: 16px;
            color: #333;
            font-size: 20px;
            font-weight: 600;
            font-family: PingFangSC-Semibold;
            border-bottom: 0.2px solid #ddd;
          }
          .ant-menu-inline {
            border-right: none;
            .ant-menu-submenu {
              .ant-menu-submenu-title {
                padding-left: 20px !important;
                margin: 0;
                color: #333;
                font-size: 16px;
                font-weight: 600;
                height: 48px;
                line-height: 48px;
                .ant-menu-submenu-arrow {
                  display: none;
                }
                .icon {
                  margin-right: 7px;
                }
              }
              .ant-menu-sub {
                .ant-menu-item {
                  color: #333;
                  margin: 0;
                  height: 48px;
                  line-height: 48px;
                  padding-left: 43px !important;
                  -webkit-transition: color 0.3s
                      cubic-bezier(0.645, 0.045, 0.355, 1),
                    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                    background 0s cubic-bezier(0.645, 0.045, 0.355, 1),
                    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
                  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                    border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                    background 0s cubic-bezier(0.645, 0.045, 0.355, 1),
                    padding 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
                  &:hover {
                    background: #fafafa;
                    a {
                      color: $theme-color;
                    }
                  }
                  &.ant-menu-item-selected {
                    padding-right: 20px;
                    background: rgba(241, 2, 21, 0.03)
                      url("../../assets/images/redRightArrow.svg") no-repeat 140px
                      center / 14px 26px;
                    a {
                      color: $theme-color;
                    }
                  }
                  &::after {
                    border-right: none;
                  }
                }
              }
            }
          }
        }
      }
    }
    .ant-layout-has-sider {
      width: 1200px;
      margin: 0 auto;
      margin-top: 24px;
    }
  }
</style>
