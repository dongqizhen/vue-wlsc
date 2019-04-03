<template>
  <div class="shopInfo">
    <div class="container-box">
      <div class="header">
        <ul>
          <li>
            <div class="textName">新增访问店铺数</div>
            <div class="number">238</div>
            <div class="increase"><img />同比增长18.4%</div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="nav-box">
        <a-tabs defaultActiveKey="1" @change="callback">
          <a-tab-pane tab="全部" key="1">Content of Tab Pane 1</a-tab-pane>
          <a-tab-pane tab="新增访问店铺数" key="2"
            >Content of Tab Pane 2</a-tab-pane
          >
          <a-tab-pane tab="新增收藏店铺数" key="3"
            >Content of Tab Pane 3</a-tab-pane
          >
          <a-tab-pane tab="新增询价单数" key="4"
            >Content of Tab Pane 3</a-tab-pane
          >
          <a-tab-pane tab="新增订单数" key="5"
            >Content of Tab Pane 3</a-tab-pane
          >
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      }
    },
    components: {}
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shopInfo {
    // background-color: #f6f6f6;
    .container-box {
      .header {
        margin-bottom: 16px;
        ul {
          display: flex;
          li {
            width: 236px;
            height: 130px;
            margin-right: 20px;
            background-color: #fff;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      .nav-box {
        /deep/.ant-tabs-bar {
          height: 53px;
          line-height: 53px;
          background-color: #fff;
          border-bottom: none;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
          .ant-tabs-nav-container {
            height: 100%;
            .ant-tabs-nav-wrap {
              height: 100%;
              .ant-tabs-nav-scroll {
                height: 100%;
                .ant-tabs-nav {
                  height: 100%;
                  .ant-tabs-ink-bar {
                    background-color: $theme-color;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
