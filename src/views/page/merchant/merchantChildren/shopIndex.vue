<template>
  <Tabs @change="callback" type="card">
    <a-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
  </Tabs>
  <!-- <div class="shopInfo">
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
        
      </div>
    </div>
  </div> -->
</template>

<script>
  import { Tabs } from "ant-design-vue";
  export default {
    data() {
      return {};
    },
    methods: {
      callback(key) {
        console.log(key);
      }
    },
    components: { Tabs }
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
    }
  }
</style>
