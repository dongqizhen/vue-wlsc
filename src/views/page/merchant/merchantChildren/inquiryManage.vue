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
              报价中({{ quoting }})
            </li>
            <li
              :class="isShowInfo.current == 2 ? 'active' : ''"
              @click="tab(2)"
            >
              已报价({{ quoted }})
            </li>
            <li
              :class="isShowInfo.current == 3 ? 'active' : ''"
              @click="tab(3)"
            >
              已关闭({{ closed }})
            </li>
          </ul>
        </div>
      </commonTitle>
      <div class="listContainer">
        <div class="listContent">
          <list-title :titleArr="titleArr"></list-title>
          <div class="tbody">
            <ul v-if="data.length != 0">
              <li v-for="item in data" :key="item.id">
                <inquiry-manage-item
                  :data="item"
                  :checkedList="checkedList"
                  v-on:getChecked="getChecked"
                  :isShowInfo="isShowInfo"
                  v-on:getIsDelete="getIsDelete"
                ></inquiry-manage-item>
              </li>
            </ul>
            <no-data v-else text="暂无数据"></no-data>
          </div>
          <checkAll
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
            v-on:isDelete="getCheckDelete"
            v-if="isShowInfo.current != 1"
          ></checkAll>
        </div>
      </div>
      <pagination
        :data="paginationData"
        v-on:onPaginationChange="getPaginationChange"
        v-if="paginationData.count != 0"
      ></pagination>
    </div>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import inquiryManageItem from "../../../../components/common/inquiry/inquiryManageItem";
  import checkAll from "../../../../components/common/checkAll";
  import pagination from "../../../../components/common/pagination";
  import { _getData } from "../../../../config/getData";
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        isShowInfo: {
          isDetail: false,
          current: 1,
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
          "询价备注",
          "",
          "操作"
        ],
        getInquiryListParams: {
          page: 1, //当前页
          size: 10, //每页显示条数
          status: 1, //询价状态:1：报价中，2：已报价，3：已关闭。',
          enquirySn: "", //询价单号
          storeId: "" //商铺id，商铺id为空时，查询当前用户的询价单。
        },
        paginationData: {},
        quoting: 0,
        quoted: 0,
        closed: 0
      };
    },
    computed: {
      ...mapState(["userShopInfo"])
    },
    methods: {
      //批量删除
      getCheckDelete(val) {
        console.log(this.checkedList);
        if (this.checkedList.length > 0) {
          _getData("/enquiryPlus/deleteEnquiry", {
            ids: this.checkedList.join(","),
            flag: "shop"
          }).then(data => {
            console.log("批量删除询价单：", data);
            this.$message.success("批量删除询价单成功", 1);
            this.getInquiryList();
            this.getInquiryNumber();
          });
        } else {
          this.$message.warning("请选择询价单", 1);
          return;
        }
      },
      getIsDelete(val) {
        console.log(val);
        this.getInquiryList();
        this.getInquiryNumber();
      },
      tab(tabVal) {
        this.isShowInfo.current = tabVal;
        this.getInquiryListParams.status = tabVal;
        if (tabVal == 2) {
          this.titleArr = [
            "产品图片",
            "产品名称",
            "单价",
            "数量",
            "到货时间",
            "询价备注",
            "报价备注",
            "操作"
          ];
        } else {
          this.titleArr = [
            "产品图片",
            "产品名称",
            "单价",
            "数量",
            "到货时间",
            "询价备注",
            "",
            "操作"
          ];
        }

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
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      getPaginationChange(val) {
        console.log(val);
        this.getInquiryListParams.page = val;
        this.getInquiryList();
      },
      getInquiryList() {
        this.getInquiryListParams.storeId = this.userShopInfo.store_id;
        _getData("/enquiryPlus/enquiryList", this.getInquiryListParams).then(
          data => {
            console.log("获取询价管理的列表：", data);
            this.checkedList = [];
            this.checkAll = false;
            this.data = data.data;
            this.paginationData = data;
          }
        );
      },
      getInquiryNumber() {
        _getData("/enquiryPlus/enquiryCount", {
          param: { storeId: this.userShopInfo.store_id }
        }).then(data => {
          console.log("获取的询价数：：：", data);
          _.map(data.data, o => {
            if (o.status == 1) {
              this.quoting = o.num;
            } else if (o.status == 2) {
              this.quoted = o.num;
            } else {
              this.closed = o.num;
            }
          });
        });
      }
    },
    mounted() {
      if (this.$route.query.status) {
        this.titleArr = [
          "产品图片",
          "产品名称",
          "单价",
          "数量",
          "到货时间",
          "询价备注",
          "报价备注",
          "操作"
        ];
        this.getInquiryListParams.status = this.$route.query.status;
        this.isShowInfo.current = this.$route.query.status;
        this.$router.replace({ path: "/merchant/inquiryManage" });
      }
      this.getInquiryList();
      this.getInquiryNumber();
    },
    components: {
      commonTitle,
      checkAll,
      listTitle,
      inquiryManageItem,
      pagination
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
                &:nth-child(3) {
                  width: 78px;
                }
                &:nth-child(4) {
                  width: 80px;
                }
                &:nth-child(5) {
                  width: 98px;
                }
                &:nth-child(6) {
                  width: 90px;
                  margin-right: 15px;
                }
                &:nth-child(7) {
                  width: 91px;
                  margin-right: 15px;
                }
                &:last-child {
                  width: 96px;
                }
              }
            }
          }
          .tbody {
            /deep/.no-data {
              height: 552px;
            }
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
