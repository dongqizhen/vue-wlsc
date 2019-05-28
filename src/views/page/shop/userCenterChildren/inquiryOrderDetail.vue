<template>
  <div class="messageCenter">
    <common-title title="询价单"></common-title>
    <div class="listContainer">
      <div class="listContent">
        <order-title :isOrder="false"></order-title>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
        >
          <div slot="right-box">
            <div
              v-bind:class="['remark', checkedList.length > 0 ? 'active' : '']"
              @click="remarkRead"
            >
              标记已读
            </div>
          </div>
        </check-all>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import checkAll from "../../../../components/common/checkAll";
  import orderTitle from "../../../../components/common/orderTitle";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data: [],
        current: 1,
        checkAll: false,
        checkedList: []
      };
    },
    methods: {
      tab(tabVal) {
        this.current = tabVal;
      },
      getChecked(val) {
        if (typeof val == "object") {
          this.checkedList = val;
        } else {
          if (_.indexOf(this.checkedList, val) != -1) {
            this.checkedList = _.without(this.checkedList, val);
          }
        }
        if (this.checkedList.length == this.data.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
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
      remarkRead() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
        }
      },
      getInquiryList() {
        _getData("/enquiry/enquiryList", {
          page: 1,
          size: 10,
          status: this.current
        }).then(data => {
          console.log("获取询价管理的列表：", data);
          this.data = data.data;
        });
      }
    },
    mounted() {
      this.getInquiryList();
    },
    components: {
      commonTitle,
      checkAll,
      orderTitle
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
            cursor: pointer;
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
      margin-top: 12px;
      .tfooter {
        .remark {
          width: 104px;
          height: 42px;
          background-color: #ccc;
          color: #fff;
          font-size: 14px;
          line-height: 42px;
          text-align: center;
          font-weight: 600;
          cursor: pointer;
          &.active {
            background-color: #f5a623;
          }
        }
      }
    }
  }
</style>
