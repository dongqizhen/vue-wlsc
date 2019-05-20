<template>
  <div class="messageCenter">
    <common-title title="我的报价"></common-title>
    <div class="listContainer">
      <div class="selectInfoBox">
        <div class="selectInfo">
          <div class="common productName">
            <div class="left-box">客户名称</div>
            <div class="right-box">
              <a-input placeholder="请输入客户名称" />
            </div>
          </div>
          <div class="common productName">
            <div class="left-box">商品名称</div>
            <div class="right-box">
              <a-input placeholder="请输入商品名称" />
            </div>
          </div>
        </div>
        <div class="selectBtn">
          <button class="search">搜索</button>
          <button class="clear">清空</button>
        </div>
      </div>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="content">
          <ul>
            <li>
              <div>
                <a-checkbox></a-checkbox>
              </div>
              <div>山东中心医院</div>
              <div>
                <div>
                  <p>普利生全自动血凝分析仪C2000-A1BKKKLL</p>
                  <p>众驰伟业 全自动血凝分析仪 XL1000E</p>
                  <p>众驰伟业 全自动血凝分析仪 XL1000E</p>
                </div>
                <div>
                  <p>普利生C2000-A</p>
                  <p>Zonci众XL1000E</p>
                  <p>Zonci众XL1000E</p>
                </div>
                <div>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <div>
                  <p>台</p>
                  <p>台</p>
                  <p>台</p>
                </div>
              </div>
              <div>¥16000.00</div>
              <div>2019-12-02 16:09</div>
              <div>
                <div>查看</div>
                <div>下载</div>
                <div>删除</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
        </check-all>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import { _getData } from "../../../../config/getData";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import checkAll from "../../../../components/common/checkAll";
  export default {
    data() {
      return {
        titleArr: [
          "客户名称",
          "商品名称",
          "品牌型号",
          "数量",
          "单位",
          "报价总额",
          "报价日期",
          "操作"
        ],
        checkAll: false,
        checkedList: []
      };
    },
    methods: {
      getChecked(val) {
        if (typeof val == "object") {
          this.checkedList = val;
        } else {
          if (_.indexOf(this.checkedList, val) != -1) {
            this.checkedList = _.without(this.checkedList, val);
          }
        }
      },
      isCheckAllMethod(val) {
        if (val) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      getList() {
        _getData("/enquiry/enquiryList", { page: 1, size: 10, status: "" }).then(
          data => {
            console.log(data);
          }
        );
      }
    },
    mounted() {
      this.getList();
    },
    components: {
      commonTitle,
      listTitle,
      checkAll
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .messageCenter {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
    .listContainer {
      margin-top: 12px;
      .selectInfoBox {
        display: flex;
        margin-top: 24px;
        margin-bottom: 24px;
        .selectInfo {
          display: flex;
          .common {
            display: flex;
            align-items: center;
            height: 27px;
            margin-right: 30px;
            .left-box {
              font-size: 12px;
              color: #333333;
              margin-right: 6px;
            }
            .right-box {
              @include placeholderStyle(12px);
              .ant-input {
                width: 121px;
                height: 27px;
              }
            }
          }
        }
        .selectBtn {
          button {
            border: 0;
            outline: none;
            background-color: transparent;
            color: #fff;
            font-size: 12px;
            margin-right: 10px;
            padding: 0 18px;
            height: 27px;
            line-height: 27px;
            cursor: pointer;
            &:last-child {
              margin-right: 0;
            }
          }
          .search {
            background-color: $theme-color;
          }
          .clear {
            background-color: #999;
          }
        }
      }
      .listContent {
        /deep/.listTitle {
          ul {
            li {
              &:first-child {
                width: 86px;
                margin-left: 56px;
                margin-right: 30px;
              }
              &:nth-child(2) {
                width: 155px;
              }
              &:nth-child(3) {
                width: 100px;
              }
              &:nth-child(4) {
                width: 69px;
              }
              &:nth-child(5) {
                width: 50px;
              }
              &:nth-child(6) {
                width: 90px;
              }
              &:nth-child(7) {
                width: 68px;
                margin-right: 60px;
              }
            }
          }
        }
        .content {
          margin-top: 10px;
          ul {
            li {
              display: flex;
              border: $border-style;
              margin-bottom: 10px;
              > div {
                display: flex;
                flex-direction: column;
                margin-right: 30px;
                padding-top: 10px;
                font-size: 12px;
                color: #333333;
                p {
                  height: 36px;
                  margin-bottom: 22px;
                }
                &:first-child {
                  width: 56px;
                  padding-left: 20px;
                  margin-right: 0;
                  justify-content: center;
                }
                &:nth-child(2) {
                  width: 86px;
                  justify-content: center;
                }
                &:nth-child(3) {
                  width: 464px;
                  display: flex;
                  flex-direction: initial;
                  > div {
                    margin-right: 30px;
                    &:nth-child(1) {
                      width: 155px;
                    }
                    &:nth-child(2) {
                      width: 100px;
                    }
                    &:nth-child(3) {
                      width: 69px;
                    }
                    &:nth-child(4) {
                      width: 50px;
                      margin-right: 0;
                    }
                  }
                }
                &:nth-child(4) {
                  width: 90px;
                  color: #f10215;
                }
                &:nth-child(5) {
                  width: 68px;
                  color: #666666;
                  margin-right: 60px;
                }
                &:last-child {
                  width: 54px;
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
