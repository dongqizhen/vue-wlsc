<template>
  <div class="common-title">
    <div class="titleText">
      <div class="verticalBar"></div>
      <slot name="text"></slot>
    </div>
    <slot name="titleRight"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .common-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 49px;
    font-family: PingFangSC-Medium;
    font-weight: 600;
    font-size: 18px;
    color: #333;
    border-bottom: $border-style;
    .titleText {
      display: flex;
      align-items: center;
      .verticalBar {
        width: 4px;
        height: 19px;
        background: #f5a623;
        margin-right: 6px;
      }
    }
  }
</style>

