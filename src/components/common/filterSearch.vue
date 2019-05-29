<template>
  <div class="filter">
    <div class="selectInfo">
      <div class="common">
        <div class="left-box">关键词</div>
        <div class="right-box">
          <a-input placeholder="请输入关键词" v-model="val" />
        </div>
      </div>
      <div class="common">
        <div class="left-box">下单日期</div>
        <div class="right-box">
          <calendar-range></calendar-range>
        </div>
      </div>
    </div>
    <div class="selectBtn">
      <a-button class="search">搜索</a-button>
      <a-button class="clear">清空</a-button>
    </div>
  </div>
</template>
<script>
  import calendarRange from "./calendarRange";
  export default {
    data() {
      return {
        val: ""
      };
    },
    methods: {
      changeDate() {}
    },
    components: {
      calendarRange
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  @import "../../assets/scss/_input";
  .filter {
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
    .selectInfo {
      display: flex;
      .common {
        display: flex;
        align-items: center;
        height: 27px;
        margin-right: 30px;
        .left-box {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #333333;
          margin-right: 6px;
        }
        .right-box {
          @include placeholderStyle(12px);
          .ant-input {
            width: 121px;
            height: 27px;
          }
          /deep/.ant-calendar-picker-input {
            padding: 0;
            height: 27px;
            line-height: 27px;
            .ant-calendar-range-picker-input {
              height: 100%;
            }
            .ant-calendar-picker-clear {
              right: 6px;
            }
          }
        }
      }
    }
    .selectBtn {
      button {
        border: 0;
        outline: none;
        background-color: transparent;
        color: #fff;
        font-size: 12px;
        margin-right: 10px;
        padding: 0 18px;
        height: 27px;
        line-height: 27px;
        cursor: pointer;
        border-radius: 0;
        &:last-child {
          margin-right: 0;
        }
      }
      .search {
        background-color: $theme-color;
        border: 1px solid $theme-color;
      }
      .clear {
        background-color: #999;
        border: 1px solid #999;
      }
    }
  }
</style>
