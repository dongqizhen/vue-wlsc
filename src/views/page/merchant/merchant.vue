<template>
  <div class="merchant">
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout>
        <a-layout-sider>
          <div class="title">商家中心</div>
          <a-menu
            mode="inline"
            :openKeys="openKeys"
            style="width: 170px"
            :defaultSelectedKeys="defaultSelectedKeys"
            @click="handleClick"
          >
            <a-sub-menu key="sub1">
              <span slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icondianpuguanli"></use>
                </svg>
                <span>店铺管理</span>
              </span>
              <a-menu-item key="1">
                <router-link to="/merchant/shopIndex">店铺首页</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/merchant/shopInfo">店铺信息</router-link>
              </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/merchant/shopCertification">
                  店铺认证
                </router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icondianpuyunying"></use>
                </svg>
                <span>店铺运营</span>
              </span>
              <a-menu-item key="4">
                <router-link to="/merchant/publishGoods">发布产品</router-link>
              </a-menu-item>
              <a-menu-item key="5">
                <router-link to="/merchant/publishGoods">产品管理</router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <router-link to="/merchant/publishGoods">询价管理</router-link>
              </a-menu-item>
              <a-menu-item key="7">
                <router-link to="/merchant/publishGoods">订单管理</router-link>
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconqita"></use>
                </svg>
                <span>其他</span>
              </span>
              <a-menu-item key="8">
                <router-link to="/merchant/accountSecurity">
                  账号安全
                </router-link>
              </a-menu-item>
              <a-menu-item key="9">
                <router-link to="/merchant/personalCenter">
                  个人中心
                </router-link>
              </a-menu-item>
              <a-menu-item key="10">消息中心</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout-content>
          <div class="right-content">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-footer><Footer></Footer></a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  import Header from "../../../components/header/header";
  import Footer from "../../../components/footer/footer";
  export default {
    data() {
      return {
        openKeys: ["sub1", "sub2", "sub3"],
        defaultSelectedKeys: ["1"]
      };
    },
    methods: {
      handleClick(e) {
        console.log("click", e);
        // this.defaultSelectedKeys[0] = e.key;
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
        // case "publishGoods":
        //   this.defaultSelectedKeys = ["5"];
        //   break;
        // case "publishGoods":
        //   this.defaultSelectedKeys = ["6"];
        //   break;
        // case "publishGoods":
        //   this.defaultSelectedKeys = ["7"];
        //   break;
        case "accountSecurity":
          this.defaultSelectedKeys = ["8"];
          break;
        case "personalCenter":
          this.defaultSelectedKeys = ["9"];
          break;
        // case "personalCenter":
        //   this.defaultSelectedKeys = ["10"];
        //   break;
      }
    },
    components: {
      Header,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
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
                      url("../../../assets/images/redRightArrow.svg") no-repeat
                      140px center / 14px 26px;
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
