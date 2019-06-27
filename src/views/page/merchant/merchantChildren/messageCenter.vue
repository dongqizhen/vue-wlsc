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
          <div :class="current == 0 ? 'active' : ''" @click="system(0)">
            系统通知({{ systemNumber }})
          </div>
          <div :class="current == 1 ? 'active' : ''" @click="system(1)">
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
                  path: `messageDetail/${item.id}`
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
          <no-data v-else text="暂无数据"></no-data>
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
                  v-bind:class="[
                    'remark',
                    checkedList.length > 0 ? 'active' : ''
                  ]"
                  @click="remarkRead"
                >
                  标记已读
                </div>
              </div>
            </check-all>
          </div>
        </div>
        <pagination
          :data="paginationData"
          v-on:onPaginationChange="getPaginationChange"
          v-if="paginationData.count != 0"
        ></pagination>
      </div>
      <loading v-else :number="2"></loading>
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
  import { _getData } from "../../../../config/getData";
  import { mapMutations } from "vuex";
  export default {
    data() {
      return {
        systemNumber: 0,
        personalNumber: 0,
        data: [],
        isLoading: true,
        isMessageLoading: true,
        tabs: [],
        defaultActiveKey: 0,
        checkAll: false,
        checkedList: [],
        current: 0,
        unRead: true,
        params: {
          currentPage: "1", //类型：String  必有字段  备注：当前页
          countPerPage: "10", //类型：String  必有字段  备注：每页显示条数
          messageType: 0, //类型：String  可有字段  备注：消息类型 0系统消息，1私信，空字符串查询全部
          readType: 0 //类型：String  可有字段  备注：消息状态 0未读，1已读，空字符串查询全部
        },
        getMessageNumberParams: {
          messageType: 0, //类型：String  可有字段  备注：消息类型 0系统消息，1私信，空字符串查询全部
          readType: 0 //类型：String  可有字段  备注：消息状态 0未读，1已读，空字符串查询全部
        },
        paginationData: {}
      };
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
        this.params.readType = val;
        this.getMessageNumberParams.readType = val;
        this.getMessageList();
        this.getMessageNumber();
      },
      system(val) {
        this.current = val;
        this.checkedList = [];
        this.checkAll = false;
        this.params.messageType = val;
        this.getMessageNumberParams.messageType = val;
        this.getMessageList();
        this.getMessageNumber();
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
            this.getMessageList();
            this.getMessageNumber();
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
            flag: "read"
          }).then(data => {
            console.log(data);
            //移动到已读列表
            this.unRead = false;
            this.defaultActiveKey = 1;
            this.params.readType = 1;
            this.getMessageNumberParams.readType = 1;
            this.getMessageList();
            this.getMessageNumber();
          });
        } else {
          this.$message.warning("请选择信息", 1);
          return;
        }
      },
      getPaginationChange(val) {
        console.log(val);
        this.params.currentPage = val;
        this.getMessageList();
      },
      getMessageList() {
        _getData("/message/list", this.params).then(data => {
          console.log("获取到的信息列表：", data);
          this.checkedList = [];
          this.data = data.data;
          this.paginationData = data;
        });
      },
      async getMessageNumber() {
        return await _getData(
          "/message/messageNum",
          this.getMessageNumberParams
        ).then(data => {
          console.log("私信消息数量：", data);
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
      }
    },
    mounted() {
      if (this.$route.query.type == "message") {
        this.system(0);
      } else if (this.$route.query.type == "private") {
        this.system(1);
      }
      this.getMessageList();
      this.getMessageNumber();
      _getData("/user/getUser", {}).then(data => {
        console.log("获取用户的店铺开店信息：", data);
        this.changeUserShopInfoState(data);
      });
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
    margin-bottom: 10px;
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
