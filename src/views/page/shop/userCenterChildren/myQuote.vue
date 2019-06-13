<template>
  <div class="myQuote">
    <common-title title="我的报价"></common-title>
    <div class="listContainer">
      <div class="selectInfoBox">
        <div class="selectInfo">
          <div class="common productName">
            <div class="left-box">客户名称</div>
            <div class="right-box">
              <a-input
                placeholder="请输入客户名称"
                v-model="param.clenteleName"
              />
            </div>
          </div>
          <div class="common productName">
            <div class="left-box">商品名称</div>
            <div class="right-box">
              <a-input placeholder="请输入商品名称" v-model="param.goodsName" />
            </div>
          </div>
        </div>
        <div class="selectBtn">
          <button class="search" @click="search">搜索</button>
          <button class="clear" @click="clearData">清空</button>
        </div>
      </div>
      <div class="listContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="content">
          <ul v-if="data.length > 0">
            <li v-for="item in data" :key="item.id" :class="addClass(item.id)">
              <div>
                <a-checkbox
                  @change="onChange(item.id)"
                  :checked="checkedChange(item.id)"
                ></a-checkbox>
              </div>
              <div>{{ item.clienteleName }}</div>
              <div>
                <div v-for="goodItem in item.goodList" :key="goodItem.id">
                  <span>{{ goodItem.goodsName }}</span>
                  <span>
                    {{ goodItem.goodsBrand }}/{{ goodItem.goodsModel }}
                  </span>
                  <span>{{ goodItem.number }}</span>
                  <span>{{ goodItem.unit }}</span>
                </div>
              </div>
              <div>¥{{ item.totalPrice }}</div>
              <div>
                {{ item.createdOn ? item.createdOn.substring(0, 16) : "" }}
              </div>
              <div>
                <div class="operate">
                  <router-link
                    target="_blank"
                    :to="{
                      path: `/userCenter/lookQuote/${item.id}`
                    }"
                  >
                    查看
                  </router-link>
                </div>
                <div class="operate">下载</div>
                <div class="operate" @click="deleteItem(item.id)">
                  删除
                </div>
              </div>
            </li>
          </ul>
          <no-data text="暂无数据" v-else></no-data>
        </div>
      </div>
      <div class="tfooter">
        <check-all
          :amount="checkedList.length"
          :checkAll="checkAll"
          v-on:isCheckAll="isCheckAllMethod"
          @isDelete="batchDeleteData"
          v-if="data.length > 0"
        >
        </check-all>
      </div>
    </div>
    <pagination
      :data="paginationData"
      v-on:onPaginationChange="getPaginationChange"
      v-if="paginationData.count != 0"
    ></pagination>
  </div>
</template>

<script>
  import _ from "lodash";
  import { _getData } from "../../../../config/getData";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import checkAll from "../../../../components/common/checkAll";
  import pagination from "../../../../components/common/pagination";
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
        checkedList: [],
        data: [],
        param: {
          currentPage: 1, //类型：Number
          countPerPage: 5, //类型：Number
          clenteleName: "", //类型：String  备注：客户名称
          goodsName: "", //类型：String 备注：商品名
          date: "" //类型：String  备注：时间
        },
        paginationData: {}
      };
    },
    methods: {
      //批量删除
      batchDeleteData() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
          console.log(this.checkedList);
          console.log(this.checkedList.join(","));
          _getData("/quotation/delete", {
            param: {
              ids: this.checkedList.join(",")
            }
          }).then(data => {
            console.log(data);
            this.$message.success("批量删除成功", 1);
            this.getList();
          });
        } else {
          this.$message.warning("请选择删除项", 1);
          return;
        }
      },
      search() {
        this.getList();
      },
      clearData() {
        this.param.clenteleName = "";
        this.param.goodsName = "";
      },
      deleteItem(id) {
        _getData("/quotation/delete", {
          param: {
            ids: id
          }
        }).then(data => {
          console.log("删除报价单:", data);
          this.getList();
        });
      },
      onChange(id) {
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == this.data.length) {
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
        this.checkedList = [];
        if (val) {
          this.checkAll = true;
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
        }
      },
      getPaginationChange(val) {
        console.log(val);
        this.param.currentPage = val;
        this.getList();
      },
      getList() {
        _getData("/quotation/list", { param: this.param }).then(data => {
          console.log("获取我的报价列表:", data);
          this.checkedList = [];
          this.checkAll = false;
          this.data = data.data;
          this.paginationData = data;
        });
      }
    },
    mounted() {
      this.getList();
    },
    components: {
      commonTitle,
      listTitle,
      checkAll,
      pagination
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .myQuote {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 100px;
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
              padding-bottom: 10px;
              // min-height: 125px;
              > div {
                display: flex;
                flex-direction: column;
                margin-right: 30px;
                padding-top: 10px;
                font-size: 12px;
                color: #333333;
                &:first-child {
                  width: 56px;
                  padding-left: 20px;
                  margin-right: 0;
                  // justify-content: center;
                }
                &:nth-child(2) {
                  width: 86px;
                  // justify-content: center;
                }
                &:nth-child(3) {
                  width: 464px;
                  > div {
                    display: flex;
                    margin-bottom: 22px;
                    &:last-child {
                      margin-bottom: 0;
                    }
                    span {
                      height: 36px;
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
                .operate {
                  margin-bottom: 10px;
                  cursor: pointer;
                  a {
                    color: #333;
                  }
                  &:hover {
                    color: $theme-color;
                    a {
                      color: $theme-color;
                    }
                  }
                }
              }
              &.active {
                background: rgba(245, 166, 35, 0.06);
              }
            }
          }
          /deep/.no-data {
            height: 500px;
          }
        }
      }
    }
  }
</style>
