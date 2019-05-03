<template>
  <center-page
    titleText="商家中心"
    :dataArr="dataArr"
    :openKeys="['sub1', 'sub2', 'sub3', 'sub4']"
    :defaultSelectedKeys="defaultSelectedKeys"
  >
    <div slot="header">
      <Header></Header>
    </div>
  </center-page>
</template>
<script>
  import Header from "../../components/header/header";
  import centerPage from "../../components/common/centerPage";
  export default {
    data() {
      return {
        defaultSelectedKeys: ["1"],
        dataArr: [
          {
            id: 1,
            key: "sub1",
            name: "入门指南",
            icon: "#icondianpuguanli",
            menus: [
              { key: "1", name: "关于我们", href: "/merchant/shopIndex" },
              { key: "2", name: "如何注册", href: "/merchant/shopInfo" },
              { key: "3", name: "卖家入门", href: "/merchant/shopCertification" },
              { key: "4", name: "买家入门", href: "/merchant/shopCertification" }
            ]
          },
          {
            id: 2,
            key: "sub2",
            name: "采购专家",
            icon: "#icondianpuyunying",
            menus: [
              { key: "5", name: "询价系统", href: "/merchant/publishGoods" },
              { key: "6", name: "快速下单", href: "/merchant/productManage" },
              { key: "7", name: "如何采购", href: "/merchant/inquiryManage" },
              { key: "8", name: "投诉维权", href: "/merchant/orderManage" }
            ]
          },
          {
            id: 3,
            key: "sub3",
            name: "购货商家",
            icon: "#iconqita",
            menus: [
              { key: "9", name: "开通店铺", href: "/merchant/accountSecurity" },
              { key: "10", name: "营销中心", href: "/merchant/messageCenter" },
              { key: "11", name: "发布新品", href: "/merchant/personalCenter" },
              { key: "12", name: "商家服务", href: "/merchant/personalCenter" }
            ]
          },
          {
            id: 4,
            key: "sub4",
            name: "平台服务",
            icon: "#iconqita",
            menus: [
              { key: "13", name: "支付方式", href: "/merchant/accountSecurity" },
              { key: "14", name: "交易维权", href: "/merchant/messageCenter" },
              { key: "15", name: "客服中心", href: "/merchant/personalCenter" },
              {
                key: "16",
                name: "网来商城规则",
                href: "/merchant/personalCenter"
              }
            ]
          }
        ]
      };
    },

    beforeMount() {
      //   switch (this.$route.path.split("/")[2]) {
      //     case "shopIndex":
      //       this.defaultSelectedKeys = ["1"];
      //       break;
      //     case "shopInfo":
      //       this.defaultSelectedKeys = ["2"];
      //       break;
      //     case "shopCertification":
      //       this.defaultSelectedKeys = ["3"];
      //       break;
      //     case "publishGoods":
      //       this.defaultSelectedKeys = ["4"];
      //       break;
      //     case "productManage":
      //       this.defaultSelectedKeys = ["5"];
      //       break;
      //     case "inquiryManage":
      //       this.defaultSelectedKeys = ["6"];
      //       break;
      //     case "orderManage":
      //       this.defaultSelectedKeys = ["7"];
      //       break;
      //     case "accountSecurity":
      //       this.defaultSelectedKeys = ["8"];
      //       break;
      //     case "changePassword":
      //       this.defaultSelectedKeys = ["8"];
      //       break;
      //     case "changeEmail":
      //       this.defaultSelectedKeys = ["8"];
      //       break;
      //     case "changePhone":
      //       this.defaultSelectedKeys = ["8"];
      //       break;
      //     case "personalCenter":
      //       this.defaultSelectedKeys = ["9"];
      //       break;
      //     case "messageCenter":
      //       this.defaultSelectedKeys = ["10"];
      //       break;
      //     case "messageDetail":
      //       this.defaultSelectedKeys = ["10"];
      //       break;
      //   }
    },
    components: {
      Header,
      centerPage
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
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
      .ant-layout-has-sider {
        .title {
          display: none;
        }
      }
    }
  }
</style>
