<template>
  <div class="howToOpenShop">
    <guide-right title="卖家入门">
      <div class="info" slot="contentInfo">
        <p>
          1、打开网来商城官网，进入到首页，点击右上角的“商家中心”。
        </p>
        <p>
          2、如果是未登录状态，请先登录。
        </p>
        <p>
          3、进入商家入驻页面；
        </p>
        <p>
          4、填写店铺基本信息，上传店铺照片，点击下一步；
        </p>
        <p>
          5、按照要求填写信息，并上传相关资质证明，点击提交审核；
        </p>
        <p>
          6、等待平台审核通过，即可开通店铺。
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
