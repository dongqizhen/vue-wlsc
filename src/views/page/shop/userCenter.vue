<template>
  <center-page
    titleText="个人中心"
    :dataArr="dataArr"
    :openKeys="['sub1']"
    :defaultSelectedKeys="defaultSelectedKeys"
  >
    <div slot="header">
      <Header></Header>
      <div class="middleNav">
        <div class="navBox">
          <div class="logo">
            <a href="#">
              <img src="../../../assets/images/white-logo.png" />
            </a>
          </div>
          <Nav></Nav>
          <div class="telphone">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconbaiserexiandianhua"></use>
            </svg>
            400-012-1122
          </div>
        </div>
      </div>
    </div>
    <span slot="Icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icongerenzhongxin"></use>
      </svg>
    </span>
  </center-page>
</template>
<script>
  import Header from "../../../components/header/header";
  import centerPage from "../../../components/common/centerPage";
  import Nav from "../../../components/common/nav";
  export default {
    data() {
      return {
        defaultSelectedKeys: ["1"],
        dataArr: [
          {
            id: 1,
            key: "sub1",
            name: "",
            icon: "",
            menus: [
              { key: "1", name: "选购单", href: "/userCenter" },
              { key: "2", name: "我的询价", href: "/userCenter/myInquiry" },
              { key: "3", name: "我的订单", href: "/userCenter/myOrder" },
              { key: "4", name: "我的报价", href: "/userCenter/myQuote" },
              { key: "5", name: "我的收藏", href: "/userCenter/myStore" },
              { key: "6", name: "地址管理", href: "/userCenter/addressManage" },
              // { key: "7", name: "发票管理", href: "/userCenter/invoiceManage" },
              // { key: "8", name: "个人信息", href: "/userCenter/myCenter" },
              { key: "9", name: "消息中心", href: "/userCenter/myMessage" },
              { key: "10", name: "账号安全", href: "/userCenter/userSecurity" }
            ]
          }
        ]
      };
    },
    methods: {},
    beforeMount() {
      switch (this.$route.path.split("/")[2]) {
        case "shopIndex":
          this.defaultSelectedKeys = ["1"];
          break;
        case "myInquiry":
          this.defaultSelectedKeys = ["2"];
          break;
        case "inquiryOrderDetail":
          this.defaultSelectedKeys = ["2"];
          break;
        case "submitOrder":
          this.defaultSelectedKeys = ["2"];
          break;
        case "myOrder":
          this.defaultSelectedKeys = ["3"];
          break;
        case "orderDetail":
          this.defaultSelectedKeys = ["3"];
          break;
        case "myQuote":
          this.defaultSelectedKeys = ["4"];
          break;
        case "lookQuote":
          this.defaultSelectedKeys = ["4"];
          break;
        case "editQuote":
          this.defaultSelectedKeys = ["4"];
          break;
        case "myStore":
          this.defaultSelectedKeys = ["5"];
          break;
        case "addressManage":
          this.defaultSelectedKeys = ["6"];
          break;
        case "invoiceManage":
          this.defaultSelectedKeys = ["7"];
          break;
        case "myMessage":
          this.defaultSelectedKeys = ["9"];
          break;
        case "changePassword":
          this.defaultSelectedKeys = ["9"];
          break;
        case "changeEmail":
          this.defaultSelectedKeys = ["9"];
          break;
        case "changePhone":
          this.defaultSelectedKeys = ["9"];
          break;
        case "myCenter":
          this.defaultSelectedKeys = ["8"];
          break;
        case "userSecurity":
          this.defaultSelectedKeys = ["10"];
          break;
        case "messageDetail":
          this.defaultSelectedKeys = ["10"];
          break;
        default:
          this.defaultSelectedKeys = ["1"];
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
      centerPage,
      Nav
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  .centerPageCommon {
    /deep/.ant-layout {
      background: $base-background;
      .ant-layout-header {
        padding: 0;
        height: auto;
        .middleNav {
          width: 100%;
          height: 70px;
          background-image: linear-gradient(180deg, #ff4e1a 0%, #f10000 100%);
          .navBox {
            width: 1200px;
            height: 70px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .logo {
              margin-right: 30px;
              a {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
            .nav {
              height: 100%;
              .top_nav {
                height: 100%;
                border-bottom: none;
                .commonWidth {
                  width: 830px;
                }
                ul {
                  li {
                    a {
                      color: #fff;
                      background: none;
                    }
                  }
                }
              }
            }
            .telphone {
              font-size: 24px;
              color: #fff;
              .icon {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
      .ant-layout-content {
        overflow: initial;
      }
      .ant-menu-submenu-title {
        display: none;
      }
    }
  }
</style>
