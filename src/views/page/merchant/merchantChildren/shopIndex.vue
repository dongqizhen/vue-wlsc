<template>
  <div class="shopInfo">
    <div class="container-box">
      <div class="header">
        <ul>
          <li v-for="data in amountData" :key="data.id">
            <div class="textName">{{ data.name }}</div>
            <div class="number">{{ data.amount }}</div>
            <div class="increase">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icontongbizengchang"
                  v-if="data.increase"
                ></use>
                <use xlink:href="#icontongbixiajiang" v-else></use>
              </svg>
              同比{{ data.increase ? "增长" : "下降" }}{{ data.rate }}
            </div>
          </li>
        </ul>
      </div>
      <div class="nav-box">
        <a-tabs :defaultActiveKey="defaultActiveKey" @change="callback">
          <a-tab-pane v-for="tab in tabs" :key="tab.id" :tab="tab.name">
            <div class="trend">
              <div class="time">
                <ul>
                  <li
                    v-for="time in timesTab"
                    :key="time.id"
                    :class="currentTab == time.id ? 'active' : ''"
                    @click="triggleTab(time.id)"
                  >
                    {{ time.name }}
                  </li>
                </ul>
                <div class="calendar">
                  <div class="block">
                    <el-date-picker
                      v-model="value7"
                      type="daterange"
                      align="right"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      @change="changeDate"
                    >
                    </el-date-picker>
                  </div>
                </div>
              </div>
              <v-chart :options="polar" :init-options="initOptions"></v-chart>
            </div>
          </a-tab-pane>
        </a-tabs>
        <div class="statisticalTable">
          <ul>
            <li>
              <span>时间</span>
              <span>新增访问店铺数</span>
              <span>新增收藏店铺数</span>
              <span>新增询价单数</span>
              <span>新增订单数</span>
            </li>
            <li v-for="item in items" :key="item.id">
              <span>{{ item.time }}</span>
              <span>{{ item.newVisit }}</span>
              <span>{{ item.newStore }}</span>
              <span>{{ item.newInquiry }}</span>
              <span>{{ item.newOrder }}</span>
            </li>
          </ul>
        </div>
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
  const xAxisData = [
      "2019-03-01",
      "2019-03-02",
      "2019-03-03",
      "2019-03-04",
      "2019-03-05",
      "2019-03-06",
      "2019-03-07"
    ],
    newVisitNumber = [2, 3, 2, 13, 2, 15, 17],
    newStoreNumber = [2, 3, 23, 2, 9, 4, 9],
    newInquiryNumber = [2, 2, 12, 1, 2, 2, 6],
    newOrderNumber = [56, 76, 45, 2, 23, 98, 68];
  export default {
    data() {
      return {
        xAxisData,
        newVisitNumber,
        newStoreNumber,
        newInquiryNumber,
        newOrderNumber,
        amountData: [
          {
            id: 1,
            name: "新增访问店铺数",
            amount: 238,
            rate: "18.4%",
            increase: true
          },
          {
            id: 2,
            name: "新增收藏店铺数",
            amount: 29,
            rate: "36.1%",
            increase: true
          },
          {
            id: 3,
            name: "新增询价单数",
            amount: 1,
            rate: "50.7%",
            increase: false
          },
          {
            id: 4,
            name: "新增订单数",
            amount: 3,
            rate: "11.2%",
            increase: true
          }
        ],
        defaultActiveKey: 1,
        tabs: [
          { id: 1, name: "全部" },
          { id: 2, name: "新增访问店铺数" },
          { id: 3, name: "新增收藏店铺数" },
          { id: 4, name: "新增询价单数" },
          { id: 5, name: "新增订单数" }
        ],
        currentTab: 1,
        timesTab: [
          { id: 1, name: "最近一周" },
          { id: 2, name: "最近半个月" },
          { id: 3, name: "最近一个月" }
        ],
        items: [
          {
            id: 1,
            time: "2019-03-01",
            newVisit: 2,
            newStore: 2,
            newInquiry: 2,
            newOrder: 56
          },
          {
            id: 2,
            time: "2019-03-02",
            newVisit: 3,
            newStore: 3,
            newInquiry: 2,
            newOrder: 76
          },
          {
            id: 3,
            time: "2019-03-03",
            newVisit: 2,
            newStore: 23,
            newInquiry: 12,
            newOrder: 45
          },
          {
            id: 4,
            time: "2019-03-04",
            newVisit: 13,
            newStore: 2,
            newInquiry: 1,
            newOrder: 2
          },
          {
            id: 5,
            time: "2019-03-05",
            newVisit: 2,
            newStore: 9,
            newInquiry: 2,
            newOrder: 23
          },
          {
            id: 6,
            time: "2019-03-06",
            newVisit: 15,
            newStore: 4,
            newInquiry: 2,
            newOrder: 98
          }
        ],
        value: "",
        initOptions: {
          renderer: "svg"
        },
        polar: {
          title: {
            text: "趋势图",
            padding: [5, 0, 0, 15]
          },
          tooltip: {},
          legend: {
            icon: "square",
            left: "16%",
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
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLine: {
              // 坐标轴
              lineStyle: {
                width: "2",
                color: "#ddd"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#666",
                fontSize: "12"
              }
            },
            data: xAxisData
          },
          yAxis: {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLine: {
              // 坐标轴
              lineStyle: {
                width: "2",
                color: "#ddd"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#666",
                fontSize: "12"
              }
            }
          },
          series: [
            {
              name: "新增访问店铺数",
              type: "line",
              data: newVisitNumber,
              itemStyle: {
                color: "#0283FF"
              }
            },
            {
              name: "新增收藏店铺数",
              type: "line",
              data: newStoreNumber,
              itemStyle: {
                color: "#37B2AC"
              }
            },
            {
              name: "新增询价单数",
              type: "line",
              data: newInquiryNumber,
              itemStyle: {
                color: "#FD94A7"
              }
            },
            {
              name: "新增订单数",
              type: "line",
              data: newOrderNumber,
              itemStyle: {
                color: "#F5A623"
              }
            }
          ]
          // animationDuration: 1000
        },
        value7: ""
      };
    },
    mounted() {},
    methods: {
      triggleTab(currentTabId) {
        this.currentTab = currentTabId;
      },
      callback(key) {
        console.log("nav", key);
        if (key == 2) {
          this.xAxisData = [];
          this.newVisitNumber = [];
          this.newStoreNumber = [2, 3, 23, 2, 9, 4, 9];
          this.newInquiryNumber = [];
          this.newOrderNumber = [];
        }
      },
      onPanelChange(date, dateString) {
        console.log(date, dateString);
      },
      onChange(value, dateString) {
        console.log("Selected Time: ", value);
        console.log("Formatted Selected Time: ", dateString);
      },
      onOk(value) {
        console.log("onOk: ", value);
      },
      changeDate(value) {
        console.log(value);
        this.currentTab = -1;
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
            text-align: center;
            &:last-child {
              margin-right: 0;
            }
            .textName {
              margin-top: 15px;
              font-size: 14px;
              color: #666;
            }
            .number {
              font-family: PingFangSC-Semibold;
              font-weight: 600;
              font-size: 30px;
              color: #000;
              height: 42px;
              margin: 10px 0;
            }
            .increase {
              height: 22px;
              line-height: 22px;
              vertical-align: middle;
              font-size: 14px;
              color: #999;
              font-weight: 600;
              .icon {
                width: 22px;
                height: 22px;
                margin-right: 8px;
                vertical-align: middle;
              }
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
                      &:hover {
                        color: $theme-color;
                      }
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
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
            .ant-tabs-tabpane {
              background-color: #fff;
              padding-left: 27px;
              .trend {
                height: 484px;
                .time {
                  margin-top: 21px;
                  margin-bottom: 30px;
                  display: flex;
                  ul {
                    display: flex;
                    align-items: center;
                    li {
                      padding: 0 18px;
                      height: 31px;
                      line-height: 31px;
                      text-align: center;
                      color: #999;
                      font-size: 14px;
                      margin-right: 20px;
                      cursor: pointer;
                      &.active {
                        background: rgba(241, 2, 21, 0.03);
                        border-radius: 15.5px;
                        color: $theme-color;
                        font-weight: 600;
                      }
                    }
                  }
                  .calendar {
                    width: 174px;
                    margin-left: 22px;
                    /deep/.el-range-separator {
                      width: 8%;
                    }
                  }
                }
                .echarts {
                  width: 900px;
                  height: 397px;
                }
              }
            }
          }
        }
        .statisticalTable {
          padding: 34px 20px;
          background-color: #fff;
          margin-top: 10px;
          ul {
            border: 1px solid #ddd;
            li {
              display: flex;
              height: 48px;
              align-items: center;
              border-bottom: 0.5px solid #ddd;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #666666;
              span {
                flex: 1;
                text-align: center;
              }
              &:first-child {
                background: #f8f8f8;
                font-family: PingFangSC-Medium;
                color: #333333;
                font-weight: 600;
              }
              &:last-child {
                border-bottom: none;
              }
            }
          }
        }
      }
    }
  }
</style>


