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
      ...mapState(["isLogin", "defaultSelectedKeys"])
    },
    watch: {
      ...mapState(["defaultSelectedKeys"])
    },
    methods: {
      ...mapMutations(["changeDefaultSelectedKeys"])
    },
    created() {
      if (!this.isLogin) {
        this.$router.push({ path: "/login" });
      } else {
        _getData("/user/getUser", {}).then(data => {
          console.log("用户信息：", data);
          if (data.audit_status == 2) {
            this.$router.replace({ path: "/merchant/shopIndex" });
          } else {
            this.$router.replace({
              path: "/merchant/openShop",
              query: { shopStatus: data.audit_status }
            });
          }
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
