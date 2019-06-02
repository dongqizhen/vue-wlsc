<template>
  <div class="paginationBox">
    <a-pagination
      showQuickJumper
      :total="data.amount"
      @change="onPaginationChange"
      :defaultPageSize="20"
    />
    <div class="sureBtn">确定</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      data: {
        type: [Object]
      }
    },
    methods: {
      onPaginationChange(page, pageSize) {
        this.$emit("onPaginationChange", page);
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
    }
  }
</style>
