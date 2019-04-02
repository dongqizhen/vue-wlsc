<template>
  <div class="shopInfo">
    <div class="container-box">
      <div class="header">
        <ul>
          <li>
            <div class="textName">新增访问店铺数</div>
            <div class="number">238</div>
            <div class="increase"><img />同比增长18.4%</div>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="nav-box"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {};
    },
    components: {}
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shopInfo {
    // background-color: #f6f6f6;
    .container-box {
      .header {
        margin-bottom: 16px;
        ul {
          display: flex;
          li {
            width: 236px;
            height: 130px;
            margin-right: 20px;
            background-color: #fff;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>
