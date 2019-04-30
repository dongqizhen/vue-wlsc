<template>
  <center-page
    titleText="商家中心"
    :dataArr="dataArr"
    :openKeys="['sub1', 'sub2', 'sub3']"
    :defaultSelectedKeys="defaultSelectedKeys"
  >
    <div slot="header">
      <Header></Header>
    </div>
  </center-page>
</template>
<script>
  import Header from "../../../components/header/header";
  import centerPage from "../../../components/common/centerPage";
  export default {
    inject: ["reload"],
    data() {
      return {
        defaultSelectedKeys: ["1"],
        dataArr: [
          {
            id: 1,
            key: "sub1",
            name: "店铺管理",
            icon: "#icondianpuguanli",
            menus: [
              { key: "1", name: "店铺首页", href: "/merchant/shopIndex" },
              { key: "2", name: "店铺信息", href: "/merchant/shopInfo" },
              { key: "3", name: "店铺认证", href: "/merchant/shopCertification" }
            ]
          },
          {
            id: 2,
            key: "sub2",
            name: "店铺运营",
            icon: "#icondianpuyunying",
            menus: [
              { key: "4", name: "发布产品", href: "/merchant/publishGoods" },
              { key: "5", name: "产品管理", href: "/merchant/productManage" },
              { key: "6", name: "询价管理", href: "/merchant/inquiryManage" },
              { key: "7", name: "订单管理", href: "/merchant/orderManage" }
            ]
          },
          {
            id: 3,
            key: "sub3",
            name: "其他",
            icon: "#iconqita",
            menus: [
              { key: "8", name: "账号安全", href: "/merchant/accountSecurity" },
              // { key: "9", name: "个人中心", href: "/merchant/personalCenter" },
              { key: "10", name: "消息中心", href: "/merchant/messageCenter" }
            ]
          }
        ]
      };
    },
    methods: {
      // goBack() {
      //   //replace替换原路由，作用是避免回退死循环
      //   // this.$router.replace({ path: "/merchant" });
      //   // this.reload();
      // }
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
    // mounted() {
    //   if (window.history && window.history.pushState) {
    //     history.pushState(null, null, document.URL);
    //     window.addEventListener("popstate", this.goBack, false);
    //   }
    // },
    // destroyed() {
    //   window.removeEventListener("popstate", this.goBack, false);
    // },
    components: {
      Header,
      centerPage
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
    }
  }
</style>
