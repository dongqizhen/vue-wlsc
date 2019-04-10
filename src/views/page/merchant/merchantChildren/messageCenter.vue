<template>
    <div class="messageCenter">
        <div class="listContainer">
            <div class="nav">
                <div class="left-box">
                    <a-tabs :defaultActiveKey="1">
                        <a-tab-pane
                            v-for="tab in tabs"
                            :key="tab.id"
                            :tab="`${tab.name}(${tab.amount})`"
                        >
                            <div class="listContent">
                                <ul>
                                    <li>
                                        <div></div>
                                        <div>
                                            <div>{{ tab.title }}</div>
                                            <div>{{ tab.introduce }}</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a-tab-pane>
                    </a-tabs>
                    <div class="right-box">
                        <div class="common systemNotification ">
                            系统通知(24)
                        </div>
                        <div class="common privateMessage active">
                            私信消息(12)
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkedAllBox">
                <div class="left-box">
                    <span>
                        <a-checkbox
                            @change="onCheckAllChange"
                            :checked="checkAll"
                        >
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
            <div class="paginationBox">
                <a-pagination
                    showQuickJumper
                    :total="totalCount"
                    @change="onPaginationChange"
                />
                <div class="sureBtn">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
const defaultCheckedList = [];
import _ from "lodash";
export default {
    data() {
        return {
            totalCount: 50,
            tabs: ["1", "2", "3"],
            checkAll: false,
            checkedList: defaultCheckedList,
            DefaultTabBar: ["1", "2"]
        };
    },
    beforeMount() {
        this.tabs = [
            {
                id: 1,
                name: "消息中心",
                amount: 36,
                createOn: "2018-11-18",
                title: "卖家申请店铺审核通过提示",
                introduce:
                    "您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发布商品吧您好，您在网来商城的开店申请已通过，快去发…您好，您在网来商城的开店，您在网来商城的开店申请已通过，快去发…您好..."
            },
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
            if (this.checkedList.length == data.length) {
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
                for (const val of data) {
                    this.checkedList.push(val.id);
                }
            } else {
                this.checkAll = false;
                this.checkedList = [];
            }
        },
        onPaginationChange() {}
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
        margin-top: 13px;
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            .left-box {
                /deep/.ant-tabs {
                    .ant-tabs-bar {
                        border-bottom: none;
                        height: 100%;
                        margin: 0;
                        .ant-tabs-tab {
                            padding: 12px 0;
                            font-size: 18px;
                            &:hover {
                                color: $theme-color;
                            }
                        }
                        .ant-tabs-ink-bar {
                            bottom: 2px;
                            background-color: $theme-color;
                        }
                    }
                    .ant-tabs-tab-active {
                        color: $theme-color;
                    }
                }
            }
            .right-box {
                display: flex;
                align-items: center;
                height: 27px;
                .common {
                    width: 94px;
                    height: 100%;
                    line-height: 27px;
                    font-size: 12px;
                    color: #333;
                    text-align: center;
                    cursor: pointer;
                    border: 1px solid #ddd;
                    &.active {
                        background: #ffdfaa;
                        border: 1px solid #f5a623;
                    }
                }
                .systemNotification {
                    border-right: none;
                }
            }
        }
        .paginationBox {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            margin-top: 40px;
            margin-bottom: 88px;
            /deep/ul.ant-pagination {
                li {
                    &:hover {
                        border-color: $theme-color;
                        a {
                            color: $theme-color;
                        }
                        // border-color: $theme-color;
                        // background-color: $theme-color;
                        // a {
                        //   color: #fff;
                        // }
                    }
                    &.ant-pagination-item-active {
                        border-color: $theme-color;
                        background-color: $theme-color;
                        a {
                            color: #fff;
                        }
                    }
                    &:focus {
                        border-color: $theme-color;
                        color: $theme-color;
                    }
                    .ant-pagination-options-quick-jumper input:hover {
                        border-color: $theme-color;
                        border-right-width: 1px !important;
                    }
                    .ant-pagination-options-quick-jumper input:focus {
                        border-color: $theme-color;
                        outline: 0;
                        -webkit-box-shadow: 0 0 0 2px rgba(241, 2, 21, 0.2);
                        box-shadow: 0 0 0 2px rgba(241, 2, 21, 0.2);
                        border-right-width: 1px !important;
                    }
                }
                .ant-pagination-next:focus,
                .ant-pagination-prev:focus,
                .ant-pagination-next:hover,
                .ant-pagination-prev:hover {
                    .ant-pagination-item-link {
                        border-color: $theme-color;
                        color: $theme-color;
                    }
                }
            }
            .sureBtn {
                width: 44px;
                height: 21px;
                border: 1px solid #e9e9e9;
                font-size: 12px;
                color: #666666;
                text-align: center;
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
