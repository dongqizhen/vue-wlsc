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
          <list-title :titleArr="titleArr"></list-title>
          <div class="tbody">
            <ul>
              <li v-for="item in data" :key="item.id">
                <inquiry-item
                  :data="item"
                  :checkedList="checkedList"
                  v-on:getChecked="getChecked"
                  :isDetail="false"
                ></inquiry-item>
              </li>
            </ul>
          </div>
          <checkAll
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
          ></checkAll>
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
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import checkAll from "../../../../components/common/checkAll";
  import listTitle from "../../../../components/common/listTitle";
  import orderTitle from "../../../../components/common/orderTitle";
  import inquiryItem from "../../../../components/common/inquiryItem";
  export default {
    data() {
      return {
        data,
        checkAll: false,
        checkedList: [],
        titleArr: [
          "产品图片",
          "产品名称",
          "单价",
          "数量",
          "到货时间",
          "备注",
          "操作"
        ]
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
      }
    },
    components: {
      commonTitle,
      checkAll,
      listTitle,
      orderTitle,
      inquiryItem
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
          /deep/.listTitle {
            margin-bottom: 12px;
            ul {
              li {
                &:nth-child(4) {
                  width: 60px;
                }
                &:nth-child(6) {
                  width: 157px;
                }
                &:nth-child(7) {
                  width: 96px;
                  justify-content: center;
                }
              }
            }
          }
          .tbody {
            > ul {
              > li {
                margin-bottom: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>
