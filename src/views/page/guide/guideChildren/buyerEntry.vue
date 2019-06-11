<template>
  <div class="howToOpenShop">
    <guide-right title="买家入门">
      <div class="info" slot="contentInfo">
        <p>
          1、打开网来商城官网，进入到首页。
        </p>
        <p>
          2、如果是未登录状态，请先登录。
        </p>
        <p>
          3、可以在搜索框中输入意向产品名称。
        </p>
        <p>
          4、也可以通过找产品、找品牌、找店铺一级级筛选，选出意向产品。
        </p>
      </div>
    </guide-right>
  </div>
</template>
<script>
  import guideRight from "../../../../components/common/guideRight";
  export default {
    data() {
      return {};
    },
    components: {
      guideRight
    }
  };
</script>
<style lang="scss" scoped>
  p {
    text-indent: 2em;
    line-height: 32px;
    color: #333;
    font-size: 16px;
  }
</style>
