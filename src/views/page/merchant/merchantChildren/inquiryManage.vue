<template>
  <div class="inquiryManage">
    <div class="inquiryContainer">
      <commonTitle title="询价管理">
        <div slot="titleRight" class="right-box">
          <ul>
            <li
              :class="isShowInfo.current == 1 ? 'active' : ''"
              @click="tab(1)"
            >
              报价中(1)
            </li>
            <li
              :class="isShowInfo.current == 2 ? 'active' : ''"
              @click="tab(2)"
            >
              已报价(2)
            </li>
            <li
              :class="isShowInfo.current == 3 ? 'active' : ''"
              @click="tab(3)"
            >
              已关闭(3)
            </li>
          </ul>
        </div>
      </commonTitle>
      <div class="listContainer">
        <div class="listContent">
          <list-title :titleArr="titleArr"></list-title>
          <div class="tbody">
            <ul>
              <li v-for="item in data" :key="item.enquirySn">
                <inquiry-item
                  :data="item"
                  :checkedList="checkedList"
                  v-on:getChecked="getChecked"
                  :isShowInfo="isShowInfo"
                  v-on:getIsDelete="getIsDelete"
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
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import checkAll from "../../../../components/common/checkAll";
  import listTitle from "../../../../components/common/listTitle";
  import orderTitle from "../../../../components/common/orderTitle";
  import inquiryItem from "../../../../components/common/inquiryItem";
  import { _getData } from "../../../../config/getData";
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: false,
          isShow: false,
          current: 1,
          isShop: 1,
          isTrue: true,
          isMerchant: true,
          isOrder: false
        },
        data: [],
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
        ],
        getInquiryListParams: {
          page: 1, //当前页
          size: 10, //每页显示条数
          status: 1, //询价状态:1：报价中，2：已报价，3：已关闭。',
          enquirySn: "", //询价单号
          storeId: "" //商铺id，商铺id为空时，查询当前用户的询价单。
        }
      };
    },
    computed: {
      ...mapState(["userShopInfo"])
    },
    methods: {
      getIsDelete(val) {
        console.log(val);
        if (val == "删除成功！") {
          this.getInquiryList();
        }
      },
      tab(tabVal) {
        this.isShowInfo.current = tabVal;
        this.getInquiryListParams.status = tabVal;
        this.getInquiryList();
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
            this.checkedList.push(val.enquirySn);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      getInquiryList() {
        this.getInquiryListParams.storeId = this.userShopInfo.store_id;
        _getData("/enquiryPlus/enquiryList", this.getInquiryListParams).then(
          data => {
            console.log("获取询价管理的列表：", data);
            this.data = data.data;
          }
        );
      }
    },
    mounted() {
      this.getInquiryList();
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
      padding: 4px 20px 20px 20px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      margin-bottom: 100px;
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
