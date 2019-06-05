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
  import { mapState, mapMutations } from "vuex";
  import { _getData } from "../../../config/getData";
  export default {
    data() {
      return {
        defaultSelectedKeys: ["0"],
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
    computed: {
      ...mapState(["isLogin", "userShopInfo"])
    },
    methods: {},
    beforeMount() {
      console.log(111111);
      if (this.userShopInfo.audit_status == 2) {
        if (this.$route.path.indexOf("shopInfo") != -1) {
          this.defaultSelectedKeys = ["2"];
          this.$router.replace({ path: "/merchant/shopInfo" });
        } else if (this.$route.path.indexOf("shopCertification") != -1) {
          this.defaultSelectedKeys = ["3"];
          this.$router.replace({ path: "/merchant/shopCertification" });
        }
        if (this.$route.path.indexOf("publishGoods") != -1) {
          this.defaultSelectedKeys = ["4"];
          this.$router.replace({ path: "/merchant/publishGoods" });
        }
        if (this.$route.path.indexOf("productManage") != -1) {
          this.defaultSelectedKeys = ["5"];
          this.$router.replace({ path: "/merchant/productManage" });
        }
        if (this.$route.path.indexOf("inquiryManage") != -1) {
          this.defaultSelectedKeys = ["6"];
          this.$router.replace({ path: "/merchant/inquiryManage" });
        }
        if (this.$route.path.indexOf("orderManage") != -1) {
          this.defaultSelectedKeys = ["7"];
          this.$router.replace({ path: "/merchant/orderManage" });
        }
        if (this.$route.path.indexOf("accountSecurity") != -1) {
          this.defaultSelectedKeys = ["8"];
          this.$router.replace({ path: "/merchant/accountSecurity" });
        }
        if (this.$route.path.indexOf("messageCenter") != -1) {
          this.defaultSelectedKeys = ["10"];
          this.$router.replace({ path: "/merchant/messageCenter" });
        }
        if (this.$route.path.indexOf("shopIndex") != -1) {
          this.defaultSelectedKeys = ["1"];
          this.$router.replace({ path: "/merchant/shopIndex" });
        }
      } else {
        this.defaultSelectedKeys = ["0"];
        this.$router.replace({
          path: "/merchant/openShop",
          query: { shopStatus: this.userShopInfo.audit_status }
        });
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
    }
  }
</style>
