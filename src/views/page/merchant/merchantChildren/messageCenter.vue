<template>
  <div class="messageCenter">
    <common-title title="消息中心"></common-title>
    <div class="tabBar">
      <div class="left-box">
        <manage-number-nav :navArr="tabs" v-on:tab="getTab"></manage-number-nav>
      </div>
      <div class="right-box">
        <div :class="current == 1 ? 'active' : ''" @click="system(1)">
          系统通知(24)
        </div>
        <div :class="current == 2 ? 'active' : ''" @click="system(2)">
          私信消息(12)
        </div>
      </div>
    </div>
    <div class="listContainer">
      <div class="listContent">
        <ul v-if="current == 1">
          <router-link
            tag="li"
            v-for="item in data"
            :key="item.id"
            :to="{
              path: 'messageDetail',
              query: { id: item.id }
            }"
          >
            <div class="checkBox">
              <label @click.stop="stopChange">
                <a-checkbox
                  @change="onChange(item.id)"
                  :checked="checkedChange(item.id)"
                ></a-checkbox>
              </label>
            </div>
            <div class="introduceBox">
              <div class="title">
                <svg class="icon" aria-hidden="true" v-if="unRead">
                  <use xlink:href="#iconxingzhuang1"></use>
                </svg>
                <span class="titleText">{{ item.title }}</span>
                <span class="createOn">{{ item.createOn }}</span>
              </div>
              <div class="introduce">
                {{
                  item.introduce.length > 130
                    ? item.introduce.substr(0, 130) + "......"
                    : item.introduce
                }}
              </div>
            </div>
          </router-link>
        </ul>
        <ul v-else>
          <router-link
            class="messageBox"
            tag="li"
            v-for="item in data"
            :key="item.id"
            :to="{
              path: 'messageDetail',
              query: { id: item.id }
            }"
          >
            <div class="checkBox">
              <label @click.stop="stopChange">
                <a-checkbox
                  @change="onChange(item.id)"
                  :checked="checkedChange(item.id)"
                ></a-checkbox>
              </label>
            </div>
            <div class="introduceBox">
              <div class="avatar">
                <img
                  src="http://file.haoyigong.com/server/upload/1554081863934.jpg"
                />
              </div>
              <div class="messageContent">
                <div class="userName">
                  <span class="name">用户18810041528</span>
                  <span>2018-11-18 03:02</span>
                </div>
                <div class="info">
                  <span
                    >您好，我是山东省人民医院的张三，可以交个朋友吗？您好，我是山东省人民医院的张三，可以交个朋友吗？您好，我是山东省...</span
                  >
                  <span class="unRead" v-if="unRead">1</span>
                </div>
              </div>
            </div>
          </router-link>
        </ul>
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
    <pagination></pagination>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  import checkAll from "../../../../components/common/checkAll";
  import pagination from "../../../../components/common/pagination";
  export default {
    data() {
      return {
        data: [
          {
            id: 1,
            title: "卖家申请店铺审核通过提示",
            createOn: "2018-11-18",
            introduce:
              "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
          },
          {
            id: 2,
            title: "卖家申请店铺审核通过提示",
            createOn: "2018-11-18",
            introduce:
              "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好"
          },
          {
            id: 3,
            title: "卖家申请店铺审核通过提示",
            createOn: "2018-11-18",
            introduce:
              "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
          }
        ],
        tabs: [],
        checkAll: false,
        checkedList: [],
        current: 1,
        unRead: true
      };
    },
    beforeMount() {
      this.tabs = [
        {
          id: 2,
          name: "未读消息",
          amount: 24
        },
        {
          id: 3,
          name: "已读消息",
          amount: 12
        }
      ];
    },
    methods: {
      getTab(val) {
        if (this.tabs[0].id == val) {
          this.unRead = true;
        } else {
          this.unRead = false;
        }
      },
      system(val) {
        this.current = val;
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
      checkedChange(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
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
      remarkRead() {
        if (this.checkedList.length > 0) {
          //向后台发送请求，标记为已读，成功后将刷新数据
        }
      },
      onPaginationChange() {},
      stopChange() {}
    },
    components: {
      commonTitle,
      manageNumberNav,
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
      .listContent {
        ul {
          li {
            padding: 12px 20px;
            border: $border-style;
            margin-bottom: 10px;
            display: flex;
            .checkBox {
              margin-right: 16px;
            }
            .introduceBox {
              .title {
                font-size: 15px;
                color: #333333;
                font-weight: 600;
                height: 21px;
                line-height: 21px;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                .icon {
                  width: 18px;
                  height: 13px;
                  margin-right: 6px;
                }
                .createOn {
                  font-size: 12px;
                  color: #666666;
                  font-weight: normal;
                  margin-left: 9px;
                }
              }
              .introduce {
                font-size: 13px;
                color: #666666;
                line-height: 21px;
                a {
                  color: #019ddd;
                  height: 17px;
                  line-height: 17px;
                  .icon {
                    width: 9px;
                    height: 5px;
                    margin-left: 3px;
                    vertical-align: middle;
                  }
                }
              }
            }
            &.messageBox {
              display: flex;
              align-items: center;
              .introduceBox {
                display: flex;
                flex: 1;
                .avatar {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  margin-right: 13px;
                  img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                  }
                }
                .messageContent {
                  flex: 1;
                  .userName {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 7px;
                    span {
                      font-size: 12px;
                      color: #666666;
                    }
                    .name {
                      font-size: 15px;
                      color: #333333;
                      font-weight: 600;
                    }
                  }
                  .info {
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    color: #666666;
                    .unRead {
                      margin-left: 28px;
                      width: 22px;
                      height: 13px;
                      line-height: 13px;
                      background: $theme-color;
                      border-radius: 2px;
                      font-size: 12px;
                      color: #ffffff;
                      text-align: center;
                    }
                  }
                }
              }
            }
          }
        }
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
