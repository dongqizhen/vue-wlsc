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
          <a-tab-pane tab="全部" key="1"
            ><div class="trend">
              <!-- <div id="trend-all"></div> -->
              <v-chart :options="polar"></v-chart>
            </div>
          </a-tab-pane>
          <a-tab-pane tab="新增访问店铺数" key="2"
            ><div class="trend">趋势图</div>
          </a-tab-pane>
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
  import ECharts from "vue-echarts";
  import "zrender/lib/svg/svg";

  // 手动引入 ECharts 各模块来减小打包体积
  import "echarts/lib/chart/bar";
  import "echarts/lib/chart/line";
  import "echarts/lib/chart/pie";
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/title";
  import "echarts/lib/component/visualMap";
  import "echarts/lib/component/legend";
  export default {
    data() {
      return {
        polar: {
          renderer: "svg",
          title: {
            text: "趋势图"
          },
          tooltip: {
            // trigger: "item",
            // formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            icon: "square",
            left: "13%",
            selectedMode: false,
            itemGap: 40,
            itemWidth: 16,
            data: [
              "新增访问店铺数",
              "新增收藏店铺数",
              "新增询价单数",
              "新增订单数"
            ],
            textStyle: {
              fontSize: 14,
              color: "#666"
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "2019.03.01",
              "2019.03.02",
              "2019.03.03",
              "2019.03.04",
              "2019.03.05",
              "2019.03.06",
              "2019.03.07"
            ]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "新增访问店铺数",
              type: "line",
              data: [2, 3, 2, 13, 2, 15, 17],
              itemStyle: {
                color: "#0283FF"
              }
            },
            {
              name: "新增收藏店铺数",
              type: "line",
              data: [2, 3, 23, 2, 9, 4, 9],
              itemStyle: {
                color: "#37B2AC"
              }
            },
            {
              name: "新增询价单数",
              type: "line",
              data: [2, 2, 12, 1, 2, 2, 6],
              itemStyle: {
                color: "#FD94A7"
              }
            },
            {
              name: "新增订单数",
              type: "line",
              data: [56, 76, 45, 2, 23, 98, 68],
              itemStyle: {
                color: "#F5A623"
              }
            }
          ]
          // animationDuration: 1000
        }
      };
    },
    mounted() {},
    methods: {
      callback(key) {
        console.log(key);
      }
    },
    components: { "v-chart": ECharts }
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
        /deep/.ant-tabs {
          .ant-tabs-bar {
            height: 53px;
            line-height: 53px;
            padding-left: 27px;
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
                    font-size: 15px;
                    color: #666666;
                    font-family: PingFangSC-Regular;
                    .ant-tabs-tab {
                      padding: 12px 0;
                      margin-right: 67px;
                    }
                    .ant-tabs-ink-bar {
                      background-color: $theme-color;
                    }
                  }
                  .ant-tabs-tab-active {
                    font-family: PingFangSC-Medium;
                    color: $theme-color;
                  }
                }
              }
            }
          }
          .ant-tabs-content {
            .ant-tabs-tabpane {
              background-color: #fff;
              padding-left: 27px;
              .trend {
                height: 484px;
                .echarts {
                  width: 800px;
                  height: 315px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
