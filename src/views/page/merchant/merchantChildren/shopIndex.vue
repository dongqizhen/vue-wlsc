<template>
  <div class="shopIndex">
    <common-title title="店铺首页"></common-title>
    <div v-if="!isLoading">
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
                同比{{ data.increase ? "增长" : "下降" }}{{ data.rate }}%
              </div>
            </li>
          </ul>
        </div>
        <div class="nav-box">
          <manage-number-nav
            :navArr="tabs"
            v-on:tab="getTab"
          ></manage-number-nav>
          <div class="trend">
            <div class="time">
              <ul>
                <li
                  v-for="time in timesTab"
                  :key="time.id"
                  :class="currentTab == time.id ? 'active' : ''"
                  @click="triggleTab(time.id, time.tabValue)"
                >
                  {{ time.name }}
                </li>
              </ul>
              <calendar-range
                :dateRange="dataChange"
                v-on:getDateRange="getDateRange"
              ></calendar-range>
            </div>
            <e-chart :options="polar" :init-options="initOptions"></e-chart>
          </div>
          <div class="statisticalTable">
            <ul>
              <li>
                <span @click="tabClick(1)">
                  时间
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="timeSvg"></use>
                  </svg>
                </span>
                <span @click="tabClick(2)">
                  新增访问店铺数
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="visitSvg"></use>
                  </svg>
                </span>
                <span @click="tabClick(3)">
                  新增收藏店铺数
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="storeSvg"></use>
                  </svg>
                </span>
                <span @click="tabClick(4)">
                  新增询价单数
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="inquirySvg"></use>
                  </svg>
                </span>
                <span @click="tabClick(5)">
                  新增订单数
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="orderSvg"></use>
                  </svg>
                </span>
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
    <loading v-else></loading>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  import calendarRange from "../../../../components/common/calendarRange";
  import { _getData, _getDataAll } from "../../../../config/getData";
  import _ from "lodash";
  import EChart from "vue-echarts";
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
        isLoading: true,
        flag1: -1,
        flag2: 0,
        flag3: 0,
        flag4: 0,
        flag5: 0,
        timeSvg: "#iconpaixu",
        visitSvg: "#iconpaixucopy",
        storeSvg: "#iconpaixucopy",
        inquirySvg: "#iconpaixucopy",
        orderSvg: "#iconpaixucopy",
        xAxisData: [
          "2019-03-01",
          "2019-03-02",
          "2019-03-03",
          "2019-03-04",
          "2019-03-05",
          "2019-03-06",
          "2019-03-07"
        ],
        newVisitNumber: [2, 3, 2, 13, 2, 15, 17],
        newStoreNumber: [2, 3, 23, 2, 9, 4, 9],
        newInquiryNumber: [2, 2, 12, 1, 2, 2, 6],
        newOrderNumber: [56, 76, 45, 2, 23, 98, 68],
        amountData: [],
        defaultActiveKey: 1,
        tabs: [
          "全部",
          "新增访问店铺数",
          "新增收藏店铺数",
          "新增询价单数",
          "新增订单数"
        ],
        currentTab: 7,
        timesTab: [
          { id: 7, name: "最近一周", tabValue: "aWeek" },
          { id: 15, name: "最近半个月", tabValue: "halfAMonth" },
          { id: 30, name: "最近一个月", tabValue: "aJan" }
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
            data: [],
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
            data: []
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
              data: [],
              itemStyle: {
                color: "#0283FF"
              }
            },
            {
              name: "新增收藏店铺数",
              type: "line",
              data: [],
              itemStyle: {
                color: "#37B2AC"
              }
            },
            {
              name: "新增询价单数",
              type: "line",
              data: [],
              itemStyle: {
                color: "#FD94A7"
              }
            },
            {
              name: "新增订单数",
              type: "line",
              data: [],
              itemStyle: {
                color: "#F5A623"
              }
            }
          ]
          // animationDuration: 1000
        },
        getSelectData: {
          startTime: "",
          endTime: "",
          order: "",
          dateTime: "aWeek"
        },
        dataChange: [],
        timeArr: []
      };
    },
    mounted() {
      _getDataAll([this.getShopCountInfo(), this.getShopSelectInfo()]).then(
        () => {
          this.isLoading = false;
        }
      );
      console.log(this.getTimeRange(7));
      this.polar.legend.data = [
        "新增访问店铺数",
        "新增收藏店铺数",
        "新增询价单数",
        "新增订单数"
      ];
      this.polar.xAxis.data = this.timeArr;
      this.polar.series[0].data = [2, 3, 2, 13, 2, 15, 17];
      this.polar.series[1].data = [2, 3, 23, 2, 9, 4, 9];
      this.polar.series[2].data = [2, 2, 12, 1, 2, 2, 6];
      this.polar.series[3].data = [56, 76, 45, 2, 23, 98, 68];
    },
    methods: {
      tabClick(i) {
        if (i == 1) {
          this.flag1 = this.flag1 + 1;
          console.log(this.flag1);
          if (this.flag1 % 2) {
            this.timeSvg = "#iconpaixu";
          } else {
            this.timeSvg = "#iconpaixu1";
          }
          this.visitSvg = "#iconpaixucopy";
          this.storeSvg = "#iconpaixucopy";
          this.inquirySvg = "#iconpaixucopy";
          this.orderSvg = "#iconpaixucopy";
        } else if (i == 2) {
          this.flag2 = this.flag2 + 1;
          if (this.flag2 % 2) {
            this.visitSvg = "#iconpaixu";
          } else {
            this.visitSvg = "#iconpaixu1";
          }
          this.timeSvg = "#iconpaixucopy";
          this.storeSvg = "#iconpaixucopy";
          this.inquirySvg = "#iconpaixucopy";
          this.orderSvg = "#iconpaixucopy";
        } else if (i == 3) {
          this.flag3 = this.flag3 + 1;
          if (this.flag3 % 2) {
            this.storeSvg = "#iconpaixu";
          } else {
            this.storeSvg = "#iconpaixu1";
          }
          this.timeSvg = "#iconpaixucopy";
          this.visitSvg = "#iconpaixucopy";
          this.inquirySvg = "#iconpaixucopy";
          this.orderSvg = "#iconpaixucopy";
        } else if (i == 4) {
          this.flag4 = this.flag4 + 1;
          if (this.flag4 % 2) {
            this.inquirySvg = "#iconpaixu";
          } else {
            this.inquirySvg = "#iconpaixu1";
          }
          this.timeSvg = "#iconpaixucopy";
          this.storeSvg = "#iconpaixucopy";
          this.visitSvg = "#iconpaixucopy";
          this.orderSvg = "#iconpaixucopy";
        } else if (i == 5) {
          this.flag5 = this.flag5 + 1;
          if (this.flag5 % 2) {
            this.orderSvg = "#iconpaixu";
          } else {
            this.orderSvg = "#iconpaixu1";
          }
          this.timeSvg = "#iconpaixucopy";
          this.storeSvg = "#iconpaixucopy";
          this.inquirySvg = "#iconpaixucopy";
          this.visitSvg = "#iconpaixucopy";
        }
      },
      getTab(val) {
        console.log(val);
        if (val == 0) {
          this.polar.legend.data = [
            "新增访问店铺数",
            "新增收藏店铺数",
            "新增询价单数",
            "新增订单数"
          ];
          this.polar.series[0].data = [2, 3, 2, 13, 2, 15, 17];
          this.polar.series[1].data = [2, 3, 23, 2, 9, 4, 9];
          this.polar.series[2].data = [2, 2, 12, 1, 2, 2, 6];
          this.polar.series[3].data = [56, 76, 45, 2, 23, 98, 68];
        } else if (val == 1) {
          this.polar.legend.data = ["新增访问店铺数"];
          this.polar.series[0].data = [2, 3, 2, 13, 2, 15, 17];
          this.polar.series[1].data = [];
          this.polar.series[2].data = [];
          this.polar.series[3].data = [];
        } else if (val == 2) {
          this.polar.legend.data = ["新增收藏店铺数"];
          this.polar.series[0].data = [];
          this.polar.series[1].data = [2, 3, 23, 2, 9, 4, 9];
          this.polar.series[2].data = [];
          this.polar.series[3].data = [];
        } else if (val == 3) {
          this.polar.legend.data = ["新增询价单数"];
          this.polar.series[0].data = [];
          this.polar.series[1].data = [];
          this.polar.series[2].data = [2, 2, 12, 1, 2, 2, 6];
          this.polar.series[3].data = [];
        } else {
          this.polar.legend.data = ["新增订单数"];
          this.polar.series[0].data = [];
          this.polar.series[1].data = [];
          this.polar.series[2].data = [];
          this.polar.series[3].data = [56, 76, 45, 2, 23, 98, 68];
        }
      },
      triggleTab(currentTabId, currentTabValue) {
        this.currentTab = currentTabId;
        this.getSelectData.dateTime = currentTabValue;
        this.timeArr = this.getTimeRange(currentTabId);
        this.getShopSelectInfo();
      },
      getDateRange(val) {
        console.log(val);
        this.currentTab = -1;
        this.dataChange = val;
        this.getSelectData.dateTime = "";
        this.getSelectData.startTime = val[0];
        this.getSelectData.endTime = val[1];
        this.getShopSelectInfo();
      },
      getShopCountInfo() {
        _getData("/store/sjHomeStore", {}).then(data => {
          //console.log("头部的统计信息:::", data);
          this.amountData = [
            {
              id: 1,
              name: "新增访问店铺数",
              amount: data.recordsNCount,
              rate: Math.abs(data.recordsGrowth).toFixed(2),
              increase: data.recordsGrowth >= 0
            },
            {
              id: 2,
              name: "新增收藏店铺数",
              amount: data.collectNCount,
              rate: Math.abs(data.collectGrowth).toFixed(2),
              increase: data.collectGrowth >= 0
            },
            {
              id: 3,
              name: "新增询价单数",
              amount: data.enquiryNCount,
              rate: Math.abs(data.enquiryGrowth).toFixed(2),
              increase: data.enquiryGrowth >= 0
            },
            {
              id: 4,
              name: "新增订单数",
              amount: data.orderCount,
              rate: Math.abs(data.orderGrowth).toFixed(2),
              increase: data.orderGrowth >= 0
            }
          ];
        });
      },
      getShopSelectInfo() {
        _getData("/store/homeStoreCount", this.getSelectData).then(data => {
          console.log("selectInfo:::", data);
          this.polar.xAxis.data = this.timeArr;
          _.map(this.timeArr, o => {
            _.map(data.recordsList, v => {});
          });
        });
      },
      getTimeRange(val) {
        this.timeArr = [];
        for (var i = -val; i < 0; i++) {
          this.timeArr.push(this.getCurrentTime(i));
        }
        return this.timeArr;
      },
      getCurrentTime(value) {
        var date = new Date();
        var targetDay_ms = date.getTime() + 1000 * 60 * 60 * 24 * value;
        date.setTime(targetDay_ms);
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        month = this.handleMonthOrDay(month + 1);
        day = this.handleMonthOrDay(day);
        return year + "-" + month + "-" + day;
      },
      handleMonthOrDay(val) {
        var v = val;
        if (v.toString().length == 1) {
          v = "0" + val;
        }
        return v;
      }
    },
    components: {
      EChart,
      manageNumberNav,
      calendarRange,
      commonTitle
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shopIndex {
    .common-title {
      background-color: #fff;
      padding-left: 20px;
      margin-bottom: 12px;
      border-bottom: none;
    }
    .container-box {
      .header {
        margin-bottom: 16px;
        ul {
          display: flex;
          li {
            width: 237.5px;
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
        .trend {
          background-color: #fff;
          height: 484px;
          padding-top: 21px;
          padding-left: 20px;
          margin-top: 1px;
          border-bottom: $border-style;
          .time {
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
            /deep/.ant-calendar-picker-input {
              padding: 0;
              height: 27px;
              line-height: 27px;
              .ant-calendar-range-picker-input {
                height: 100%;
              }
              .ant-calendar-picker-clear {
                right: 6px;
              }
            }
          }
          .echarts {
            width: 900px;
            height: 397px;
          }
        }
        /deep/.ant-tabs {
          .ant-tabs-bar {
            padding-left: 27px;
          }
        }
        .statisticalTable {
          padding: 34px 20px;
          background-color: #fff;
          margin-top: 1px;
          margin-bottom: 130px;
          ul {
            border: $border-style;
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


