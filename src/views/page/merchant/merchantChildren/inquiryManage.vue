<template>
  <div class="inquiryManage">
    <div class="inquiryContainer">
      <commonTitle title="询价管理">
        <div slot="titleRight" class="right-box">
          <ul>
            <li class="active">报价中(1)</li>
            <li>已报价(2)</li>
            <li>已关闭(1)</li>
          </ul>
        </div>
      </commonTitle>
      <div class="listContainer">
        <div class="listContent">
          <h2>
            <span>产品图片</span>
            <span>产品名称</span>
            <span>单价</span>
            <span>数量</span>
            <span>到货时间</span>
            <span>备注</span>
            <span>操作</span>
          </h2>
          <div class="orderTitle">
            <div class="left-box">
              <div class="checkedBox">
                <a-checkbox @change="onChange"></a-checkbox>
              </div>
              <div class="common orderNumber">
                <span>询价单编号：</span>
                <span>WLTX20181203-Z01</span>
              </div>
              <div class="common orderSubmitTime">
                <span class="svgBox">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icontijiaoshijian"></use>
                  </svg>
                </span>
                <span>订单提交时间：</span>
                <span>2019-09-12 18:30</span>
              </div>
              <div class="common userName">
                <span>
                  <img
                    src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
                  />
                </span>
                <span>询价人周磊</span>
              </div>
            </div>
            <div class="right-box">
              <div class="common orderStatus">
                <span class="svgBox">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconbaojiazhong"></use>
                  </svg>
                </span>
                <span>询价单状态：</span>
                <span>报价中</span>
              </div>
            </div>
          </div>
          <ul>
            <div class="leftInfoBox">
              <li v-for="item in data" :key="item.id">
                <span><img :src="item.img"/></span>
                <span>{{ item.name }}</span>
                <span>{{ item.price }}</span>
                <span>{{ item.number }}</span>
                <span>{{ item.arrivalTime }}</span>
                <span>{{ item.remark }}</span>
              </li>
            </div>
            <div class="operating">
              <div>查看详情</div>
              <div>删除订单</div>
            </div>
          </ul>
          <div class="checkedAllBox">
            <div class="left-box">
              <span>
                <a-checkbox @change="onCheckAllChange" :checked="checkAll">
                </a-checkbox>
              </span>
              <span>全选</span>
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconshanchu"></use>
                </svg>
                删除
              </span>
              <span>共<i>2</i>条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const data = [
    {
      id: "1",
      name: "John Brown",
      img: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
      price: "￥1000",
      remark: "暂无备注信息",
      number: 12,
      arrivalTime: "2019-03-28"
    },
    {
      id: "2",
      img: "http://file.haoyigong.com/server/upload/1554081863934.jpg",
      name: "Jim Green",
      price: "￥1000",
      remark: "暂无备注信息",
      number: 12,
      arrivalTime: "2019-03-28"
    },
    {
      id: "3",
      img: "http://file.haoyigong.com/server/upload/1553495655746.png",
      name: "Joe Black",
      price: "￥1000",
      remark: "暂无备注信息",
      number: 12,
      arrivalTime: "2019-03-28"
    }
  ];
  const defaultCheckedList = [];
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  export default {
    data() {
      return {
        data,
        checkAll: false,
        checkedList: defaultCheckedList,
        totalCount: 60,
        options: [
          {
            label: "北京",
            value: "Zhejiang",
            title: "北京 010",
            key: "010"
          },
          {
            label: "上海",
            value: "Jiangsu",
            key: "021"
          },
          {
            label: "杭州",
            value: "hangzhou",
            key: "0571",
            disabled: true
          }
        ]
      };
    },
    methods: {
      onChange(id) {
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == data.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      addClass(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return "active";
          }
        }
      },
      checkedChange(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
      },
      onCheckAllChange() {
        if (!this.checkAll) {
          this.checkAll = true;
          for (const val of data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      onPaginationChange() {},
      handleChange() {},
      handleShopTypeChange(value) {
        console.log(`selected ${value}`);
      },
      handleProductBigTypeChange(value) {
        this.cities = cityData[value];
        console.log(this.cities);
        this.secondCity = cityData[value][0];
      },
      handleProductSmallTypeChange(value) {
        console.log(value);
      }
    },
    components: {
      commonTitle
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .inquiryManage {
    .inquiryContainer {
      min-height: 693px;
      background-color: #fff;
      padding: 4px 20px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      margin-bottom: 10px;
      .common-title {
        .right-box {
          ul {
            display: flex;
            align-items: center;
            li {
              width: 76px;
              height: 27px;
              line-height: 27px;
              border: 1px solid #dddddd;
              font-size: 12px;
              color: #333;
              text-align: center;
              font-weight: normal;
              border-right: none;
              &:last-child {
                border-right: 1px solid #dddddd;
              }
              &.active {
                background: #ffdfaa;
                border: 1px solid #f5a623;
              }
            }
          }
        }
      }
      .listContainer {
        margin-top: 24px;
        .listContent {
          %span {
            font-size: 12px;
            color: #666;
            &:nth-child(1) {
              width: 70px;
              margin-left: 46px;
              margin-right: 12px;
            }
            &:nth-child(2) {
              width: 155px;
              margin-right: 30px;
            }
            &:nth-child(3) {
              width: 98px;
              margin-right: 30px;
            }
            &:nth-child(4) {
              width: 30px;
              margin-right: 18px;
            }
            &:nth-child(5) {
              width: 68px;
              margin-right: 40px;
            }
            &:nth-child(6) {
              flex: 1;
              margin-right: 30px;
            }
            &:nth-child(7) {
              width: 96px;
              div {
                margin-bottom: 10px;
                cursor: pointer;
              }
            }
          }
          h2 {
            height: 40px;
            display: flex;
            align-items: center;
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            margin-bottom: 12px;
            span {
              @extend %span;
            }
          }
          ul {
            display: flex;
            border: 1px solid #ddd;
            border-top: none;
            margin-bottom: 10px;
            .leftInfoBox {
              flex: 1;
              li {
                height: 90px;
                display: flex;
                padding-top: 10px;
                border-bottom: 0.5px solid #dddddd;
                &:last-child {
                  border-bottom: none;
                }
                span {
                  @extend %span;
                  img {
                    width: 70px;
                    height: 70px;
                  }
                }
              }
            }
            .operating {
              width: 96px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border-left: 1px solid #ddd;
              div {
                margin-bottom: 10px;
              }
            }
          }

          .orderTitle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(245, 166, 35, 0.05);
            border: 1px solid #dddddd;
            padding: 0 20px;
            height: 40px;
            .common {
              font-size: 12px;
              color: #333;
              font-weight: 600;
              margin-right: 30px;
              .svgBox {
                margin-right: 6px;
              }
              img {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                margin-right: 4px;
              }
            }
            .left-box {
              display: flex;
              align-items: center;
              .checkedBox {
                margin-right: 12px;
              }
            }
            .right-box {
              display: flex;
              .common {
                margin-right: 0;
              }
            }
          }
          .checkedAllBox {
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #dddddd;
            .left-box {
              span {
                &:first-child {
                  width: 34px;
                  margin-right: 12px;
                  padding-left: 20px;
                }
                &:nth-child(3) {
                  margin-right: 40px;
                  padding-left: 42px;
                }
                i {
                  font-style: normal;
                  color: $theme-color;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
            .right-box {
              button {
                width: 76px;
                height: 42px;
                line-height: 42px;
                border: 0;
                outline: none;
                background-color: transparent;
                color: #fff;
                text-align: center;
                cursor: pointer;
                &.shelf {
                  background-color: $theme-color;
                }
                &.obtained {
                  background-color: #f5a623;
                }
              }
            }
          }
          .paginationBox {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            margin-top: 40px;
            margin-bottom: 88px;
            /deep/ul.ant-pagination {
              li {
                &:hover {
                  border-color: $theme-color;
                  a {
                    color: $theme-color;
                  }
                  // border-color: $theme-color;
                  // background-color: $theme-color;
                  // a {
                  //   color: #fff;
                  // }
                }
                &.ant-pagination-item-active {
                  border-color: $theme-color;
                  background-color: $theme-color;
                  a {
                    color: #fff;
                  }
                }
                &:focus {
                  border-color: $theme-color;
                  color: $theme-color;
                }
                .ant-pagination-options-quick-jumper input:hover {
                  border-color: $theme-color;
                  border-right-width: 1px !important;
                }
                .ant-pagination-options-quick-jumper input:focus {
                  border-color: $theme-color;
                  outline: 0;
                  -webkit-box-shadow: 0 0 0 2px rgba(241, 2, 21, 0.2);
                  box-shadow: 0 0 0 2px rgba(241, 2, 21, 0.2);
                  border-right-width: 1px !important;
                }
              }
              .ant-pagination-next:focus,
              .ant-pagination-prev:focus,
              .ant-pagination-next:hover,
              .ant-pagination-prev:hover {
                .ant-pagination-item-link {
                  border-color: $theme-color;
                  color: $theme-color;
                }
              }
            }
            .sureBtn {
              width: 44px;
              height: 21px;
              border: 1px solid #e9e9e9;
              font-size: 12px;
              color: #666666;
              text-align: center;
              margin-left: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
