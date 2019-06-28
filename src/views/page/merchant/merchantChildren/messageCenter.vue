<template>
  <div class="messageCenter">
    <common-title title="消息中心"></common-title>
    <div v-if="!isLoading">
      <div class="tabBar">
        <div class="left-box">
          <manage-number-nav
            :navArr="tabs"
            v-on:tab="getTab"
            :defaultActiveKey="defaultActiveKey"
          ></manage-number-nav>
        </div>
        <div class="right-box">
          <div :class="current == 0 && 'active'" @click="system(0)">
            系统通知({{ systemNumber }})
          </div>
          <div :class="current == 1 && 'active'" @click="system(1)">
            私信消息({{ personalNumber }})
          </div>
        </div>
      </div>
      <div v-if="!isMessageLoading">
        <div class="listContainer">
          <div class="listContent" v-if="data.length > 0">
            <ul v-if="current == 0">
              <router-link
                tag="li"
                v-for="item in data"
                :key="item.id"
                :to="{
                  path: `messageDetail/${item.id}`
                }"
              >
                <system-notice
                  :data="item"
                  :checkedList="checkedList"
                  v-on:getChecked="getChecked"
                  :unRead="unRead"
                ></system-notice>
              </router-link>
            </ul>
            <ul v-else>
              <router-link
                class="messageBox"
                tag="li"
                v-for="item in data"
                :key="item.id"
                :to="{
                  path: `contactBuyer`,
                  query: {
                    keyId: 10,
                    topTitle: 'sub3',
                    id: item.id,
                    shopId: item.storeId,
                    sender: 'store'
                  }
                }"
              >
                <private-message
                  :data="item"
                  :checkedList="checkedList"
                  v-on:getChecked="getChecked"
                  :unRead="unRead"
                ></private-message>
              </router-link>
            </ul>
          </div>
          <no-data v-else type="no-message" text="暂无消息"></no-data>
          <div class="tfooter">
            <check-all
              :amount="checkedList.length"
              :checkAll="checkAll"
              v-on:isCheckAll="isCheckAllMethod"
              @isDelete="batchDeleteData"
              v-if="data.length > 0"
            >
              <div slot="right-box">
                <div
                  :class="['remark', checkedList.length > 0 && 'active']"
                  @click="remarkRead"
                  v-if="!readType"
                >
                  标记已读
                </div>
              </div>
            </check-all>
          </div>
        </div>
      </div>
      <loading v-else :number="2"></loading>
      <pagination
        :data="paginationData"
        v-on:onPaginationChange="getPaginationChange"
        v-if="paginationData.count != 0"
        ref="pagination"
      ></pagination>
    </div>
    <loading v-else></loading>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  import systemNotice from "../../../../components/messageCenter/systemNoticeItem";
  import privateMessage from "../../../../components/messageCenter/privateMessageItem";
  import checkAll from "../../../../components/common/checkAll";
  import pagination from "../../../../components/common/pagination";
  import { _getData, _getDataAll } from "../../../../config/getData";
  import { mapState, mapMutations } from "vuex";
  export default {
    data() {
      return {
        systemNumber: 0,
        personalNumber: 0,
        data: [],
        isLoading: true,
        isMessageLoading: true,
        tabs: [],
        messageNumber: "",
        defaultActiveKey: 0,
        checkAll: false,
        checkedList: [],
        current: 0,
        readType: 0, //消息类型
        unRead: true,
        pageType: "system", //页面类型

        paginationData: {}
      };
    },
    computed: {
      ...mapState(["userShopInfo"])
    },
    methods: {
      ...mapMutations(["changeUserShopInfoState"]),
      getTab(val) {
        console.log(val);
        if (this.tabs[0].id == val) {
          this.unRead = true;
        } else {
          this.unRead = false;
        }
        this.checkedList = [];
        this.checkAll = false;
        this.readType = val;
        if (this.current) {
          this.getPrivateMessageList();
        } else {
          this.getSystemMessageList();
        }
        this.$nextTick(() => {
          if (this.$refs.pagination) {
            this.$refs.pagination.$data.current = 1;
          }
        });
      },
      system(val) {
        this.current = val;
        this.checkedList = [];
        this.checkAll = false;
        if (val) {
          this.tabs = [
            {
              id: 0,
              name: "未读消息",
              amount: this.messageNumber.personalUnread
            },
            {
              id: 1,
              name: "已读消息",
              amount: this.messageNumber.personalRead
            }
          ];
          this.getPrivateMessageList();
        } else {
          this.tabs = [
            {
              id: 0,
              name: "未读消息",
              amount: this.messageNumber.systemUnread
            },
            {
              id: 1,
              name: "已读消息",
              amount: this.messageNumber.systemRead
            }
          ];
          this.getSystemMessageList();
        }
        this.$nextTick(() => {
          if (this.$refs.pagination) {
            this.$refs.pagination.$data.current = 1;
          }
        });
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
      //批量删除
      batchDeleteData() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
          console.log(this.checkedList);
          console.log(this.checkedList.join(","));
          _getData("/message/updateStatus", {
            ids: this.checkedList.join(","),
            flag: "delete"
          }).then(data => {
            console.log(data);
            this.$message.success("批量删除成功", 1);
            // this.getMessageList();
            // this.getMessageNumber();
          });
        } else {
          this.$message.warning("请选择信息", 1);
          return;
        }
      },
      //批量已读
      remarkRead() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
          console.log(this.checkedList);
          console.log(this.checkedList.join(","));
          _getData("/message/updateStatus", {
            ids: this.checkedList.join(","),
            flag: "read",
            storeId: this.userShopInfo.store_id
          }).then(data => {
            console.log(data);
            //移动到已读列表
            this.unRead = false;
            this.defaultActiveKey = 1;
            this.readType = 1;
            this.getMessageAll();
          });
        } else {
          this.$message.warning("请选择信息", 1);
          return;
        }
      },
      getPaginationChange(val) {
        console.log(val);

        if (this.current) {
          this.getPrivateMessageList(val);
        } else {
          this.getSystemMessageList(val);
        }
      },
      async getPrivateMessageList(page = 1) {
        this.isMessageLoading = true;
        return await _getData("/message/chatList", {
          currentPage: page, //当前页
          countPerPage: "6", //每页显示条数
          storeId: this.userShopInfo.store_id, //店铺id，不传时默认查询当前登录用户
          readType: 1 //消息状态 0未读，1已读，空字符串查询全部
        })
          .then(data => {
            console.log("获取私信信息列表：", data);
            this.checkedList = [];
            this.data = data.data;
            this.paginationData = data;
          })
          .then(() => {
            this.isMessageLoading = false;
          });
      },
      async getSystemMessageList(page = 1) {
        this.isMessageLoading = true;
        return await _getData("/message/list", {
          currentPage: page, //当前页
          countPerPage: "6", //每页显示条数
          storeId: this.userShopInfo.store_id, //店铺id，不传时默认查询当前登录用户
          readType: this.readType //消息状态 0未读，1已读，空字符串查询全部
        })
          .then(data => {
            console.log("获取系统通知列表：", data);
            this.checkedList = [];
            this.data = data.data;
            this.paginationData = data;
          })
          .then(() => {
            this.isMessageLoading = false;
          });
      },
      async getMessageNumber() {
        // this.getMessageNumberParams.storeId = this.userShopInfo.store_id;
        return await _getData("/message/messageNum", {
          storeId: this.userShopInfo.store_id //消息状态 店铺id，不传时默认查询当前用户的
        }).then(data => {
          console.log("私信消息数量：", data);
          this.messageNumber = data;
          this.tabs = [
            {
              id: 0,
              name: "未读消息",
              amount: data.systemUnread
            },
            {
              id: 1,
              name: "已读消息",
              amount: data.systemRead
            }
          ];
          this.systemNumber = data.system;
          this.personalNumber = data.personal;
        });
      },
      async getMessageAll() {
        this.isLoading = true;
        return await _getDataAll([
          this.getMessageNumber(),
          this.pageType == "system"
            ? this.getSystemMessageList()
            : this.getPrivateMessageList()
        ]).then(() => {
          this.isLoading = false;
        });
      }
    },
    created() {
      //点击头部进入页面的显示信息

      this.pageType = this.$route.query.type || "system";

      if (this.$route.query.type == "system") {
        //系统消息
        this.system(0);
      } else if (this.$route.query.type == "private") {
        //已读消息
        this.system(1);
      }
    },
    mounted() {
      this.getMessageAll();
    },
    components: {
      commonTitle,
      manageNumberNav,
      systemNotice,
      privateMessage,
      checkAll,
      pagination
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
    margin-bottom: 100px;
    .tabBar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: $border-style;
      margin-top: 3px;
      /deep/.nav {
        border-bottom: none;
        .ant-tabs {
          .ant-tabs-ink-bar {
            bottom: 0 !important;
          }
        }
      }
      .right-box {
        display: flex;
        align-items: center;
        height: 27px;
        div {
          width: 95px;
          height: 27px;
          line-height: 27px;
          border: $border-style;
          text-align: center;
          font-size: 12px;
          color: #333;
          cursor: pointer;
          &:first-child {
            border-right: none;
          }
          &.active {
            background: #ffdfaa;
            border: 1px solid #f5a623;
          }
        }
      }
    }
    .listContainer {
      margin-top: 12px;
      /deep/.no-data {
        height: 550px;
      }
      /deep/ .paginationBox {
        margin-bottom: 40px;
      }
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
