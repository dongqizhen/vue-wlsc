<template>
  <center-page
    titleText=""
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
  import Header from "../../../components/header/header";
  import centerPage from "../../../components/common/centerPage";
  export default {
    data() {
      return {
        dataArr: [
          {
            id: 1,
            key: "sub1",
            name: "入门指南",
            icon: "#icondianpuguanli",
            menus: [
              { key: "1", name: "关于我们", href: "/footer/guide/aboutUs" },
              {
                key: "2",
                name: "如何注册",
                href: "/footer/guide/howToRegister"
              },
              { key: "3", name: "卖家入门", href: "/footer/guide/sellerEntry" },
              { key: "4", name: "买家入门", href: "/footer/guide/buyerEntry" }
            ]
          },
          {
            id: 2,
            key: "sub2",
            name: "采购专家",
            icon: "#icondianpuyunying",
            menus: [
              {
                key: "5",
                name: "询价系统",
                href: "/footer/guide/inquirySystem"
              },
              { key: "6", name: "快速下单", href: "/footer/guide/quickOrder" },
              {
                key: "7",
                name: "如何采购",
                href: "/footer/guide/howToPurchase"
              },
              { key: "8", name: "投诉维权", href: "/footer/guide/complaints" }
            ]
          },
          {
            id: 3,
            key: "sub3",
            name: "供货商家",
            icon: "#iconqita",
            menus: [
              {
                key: "9",
                name: "开通店铺",
                href: "/footer/guide/howToOpenShop"
              },
              {
                key: "10",
                name: "营销中心",
                href: "/footer/guide/marketingCenter"
              },
              {
                key: "11",
                name: "发布新品",
                href: "/footer/guide/releaseNewProducts"
              },
              {
                key: "12",
                name: "商家服务",
                href: "/footer/guide/merchantService"
              }
            ]
          },
          {
            id: 4,
            key: "sub4",
            name: "平台服务",
            icon: "#iconqita",
            menus: [
              {
                key: "13",
                name: "支付方式",
                href: "/footer/guide/paymentMethod"
              },
              {
                key: "14",
                name: "交易维权",
                href: "/footer/guide/tradingRights"
              },
              {
                key: "15",
                name: "客服中心",
                href: "/footer/guide/customerService"
              },
              {
                key: "16",
                name: "网来商城规则",
                href: "/footer/guide/shopRules"
              }
            ]
          }
        ]
      };
    },
    computed: {
      defaultSelectedKeys() {
        return JSON.parse(window.localStorage["vuex-along"])["vuex-along"]
          .defaultSelectedKeys;
      }
    },
    watch: {
      defaultSelectedKeys() {
        return JSON.parse(window.localStorage["vuex-along"])["vuex-along"]
          .defaultSelectedKeys;
      }
    },
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
      .ant-layout-has-sider {
        .title {
          display: none;
        }
      }
    }
  }
</style>
