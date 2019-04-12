<template>
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
      <span
        >共<i>{{ amount }}</i
        >条</span
      >
    </div>
    <slot name="right-box"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      checkAll: {
        type: Boolean,
        required: true
      },
      amount: {
        type: [String, Number],
        required: true
      }
    },
    methods: {
      onCheckAllChange(e) {
        console.log(e);
        this.$emit("isCheckAll", e.target.checked);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
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
</style>
