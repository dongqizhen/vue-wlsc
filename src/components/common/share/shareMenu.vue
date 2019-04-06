<template>
  <div class="share-menu share">
    分享到：
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconweixinfenxiang"></use>
        </svg>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconweibofenxiang"></use>
        </svg>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconweixinpengyouquanfenxiang"></use>
        </svg>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconqqkongjianfenxiang"></use>
        </svg>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconqqfenxiang"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .share {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 83px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #666666;
    ul {
      display: flex;
      justify-content: flex-start;
      margin-left: 14px;
      li {
        margin-right: 16px;
        cursor: pointer;
        opacity: 0.5;
        width: 29px;
        height: 29px;
        &:hover {
          opacity: 1;
        }
        .icon {
          width: 29px;
          height: 29px;
        }
      }
    }
  }
</style>