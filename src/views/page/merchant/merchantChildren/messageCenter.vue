<template>
  <div class="messageCenter">
    <div class="listContainer">
      <ul></ul>
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
</template>

<script>
  const defaultCheckedList = [];
  import _ from "lodash";
  export default {
    data() {
      return {
        checkAll: false,
        checkedList: defaultCheckedList
      };
    },
    methods: {
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
      margin-top: 24px;
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
