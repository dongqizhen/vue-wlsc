<template>
  <div class="nav">
    <div class="top_nav">
      <ul class="commonWidth">
        <li class="active">首页</li>
        <li>找产品</li>
        <li>找品牌</li>
        <li>找店铺</li>
        <li>关于我们</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";

  .top_nav {
    height: 60px;
    border-bottom: 2px solid $theme-color;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li {
        width: 120px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 58px;
        font-family: Helvetica-Bold;
        font-size: 18px;
        color: #333333;
        cursor: pointer;
        &.active {
          background: $theme-color;
          color: #ffffff;
        }
      }
    }
  }
</style>