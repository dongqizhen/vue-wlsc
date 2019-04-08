<template>
  <div class="merchant">
    <a-layout>
      <a-layout-header><Header></Header></a-layout-header>
      <a-layout>
        <a-layout-sider>
          <div class="title">商家中心</div>
          <a-menu mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
              <a-icon type="user" />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="video-camera" />
              <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="upload" />
              <span>nav 3</span>
            </a-menu-item>
          </a-menu></a-layout-sider
        >
        <a-layout-content>Content</a-layout-content>
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
      return {};
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
