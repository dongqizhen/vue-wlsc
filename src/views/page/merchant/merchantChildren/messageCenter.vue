<template>
  <div class="messageCenter">
    <common-title><div slot="text">消息中心</div></common-title>
    <div class="tabBar">
      <div class="left-box">
        <manage-number-nav :navArr="tabs"></manage-number-nav>
      </div>
      <div class="right-box">
        <div class="active">系统通知(24)</div>
        <div>私信消息(12)</div>
      </div>
    </div>
    <div class="listContainer">
      <div class="listContent">
        <ul>
          <li>
            <div class="checkBox">
              <a-checkbox @change="onChange"> </a-checkbox>
            </div>
            <div class="introduceBox">
              <div class="title">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconxingzhuang1"></use>
                </svg>
                <span>卖家申请店铺审核通过提示</span>
                <span class="createOn">2018-11-18</span>
              </div>
              <div class="introduce">
                您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好...
                <a>
                  <span>展开</span>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icongengduoxialajiantou"></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>
          <li class="messageBox">
            <div class="checkBox">
              <a-checkbox @change="onChange"> </a-checkbox>
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
                  <span class="unRead">1</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tfooter">
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
</template>

<script>
  const defaultCheckedList = [];
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import manageNumberNav from "../../../../components/common/manageNumberNav";
  export default {
    data() {
      return {
        data: [],
        totalCount: 50,
        tabs: [],
        checkAll: false,
        checkedList: defaultCheckedList
      };
    },
    beforeMount() {
      this.tabs = [
        {
          id: 2,
          name: "未读消息",
          amount: 24,
          createOn: "2018-11-18",
          title: "卖家申请店铺审核通过提示",
          introduce:
            "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
        },
        {
          id: 3,
          name: "已读消息",
          amount: 12,
          createOn: "2018-11-18",
          title: "卖家申请店铺审核通过提示",
          introduce:
            "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
        }
      ];
    },
    methods: {
      callback(key) {
        console.log(key);
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
      onCheckAllChange() {
        if (!this.checkAll) {
          this.checkAll = true;
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      onPaginationChange() {}
    },
    components: {
      commonTitle,
      manageNumberNav
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
          color: #333333;
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
      }
    }
  }
</style>
