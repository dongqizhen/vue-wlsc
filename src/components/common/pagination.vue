<template>
  <div class="paginationBox">
    <a-pagination
      ref="page"
      showQuickJumper
      :total="data.amount || data.count"
      @change="onPaginationChange"
      :defaultPageSize="defaultPageSize"
      :pageSize="data.pageSize || data.countPerPage || data.numsPerPage"
    />
    <div class="sureBtn" @click="sureFun($event)">确定</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 1
      };
    },
    created() {
      //this.current = this.data.currentPage;
    },
    props: {
      data: {
        type: [Object]
      },
      defaultPageSize: {
        type: Number,
        default: 20
      }
    },
    methods: {
      onPaginationChange(page, pageSize) {
        this.$emit("onPaginationChange", page);
      },
      isNumber(val) {
        var regPos = /^\d+(\.\d+)?$/; //非负浮点数
        var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
        if (regPos.test(val) || regNeg.test(val)) {
          return true;
        } else {
          return false;
        }
      },
      sureFun(e) {
        let childrenNodeArr = this.$refs.page.$children[0].$children[0].$children;
        let inputChildNode = childrenNodeArr[childrenNodeArr.length - 1];
        let val = inputChildNode.goInputText;

        inputChildNode.go(e);
      }
    },
    mounted() {
      console.log(this.data);
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
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
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
