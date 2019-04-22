<template>
  <div class="toolMenu menu">
    <span>
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpinglun"></use>
        </svg>
      </i>
      167
    </span>
    <span>
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshoucang"></use>
        </svg>
      </i>
      999
    </span>
    <span>
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzan"></use>
        </svg>
      </i>
      89
    </span>
    <span>
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconfenxiang"></use>
        </svg>
      </i>
      89
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .toolMenu {
    border-top: 0.5px solid #e0e7ea;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
    span {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 1px;
      height: 21px;
      line-height: 21px;
      i {
        margin-right: 4px;
        .icon {
          width: 16px;
          height: 16px;
        }
      }
      &::after {
        content: "回复";
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #ffffff;
        background: $theme-color;
        display: none;
      }
      &:nth-child(2) {
        &::after {
          content: "收藏";
        }
      }
      &:nth-child(3) {
        &::after {
          content: "点赞";
        }
      }
      &:nth-child(4) {
        &::after {
          content: "分享";
        }
      }
    }
  }
</style>