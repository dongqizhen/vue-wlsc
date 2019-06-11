<template>
  <div class="howToOpenShop">
    <guide-right title="客服中心">
      <div class="info" slot="contentInfo">
        <p>
          商务合作及服务电话：<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 400-012-1211
          或010-57065620-423
        </p>
        <p>
          服务时间：<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 周一至周五 09：00——18：00
        </p>
        <p>
          地址：<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          北京市顺义区竺园路12号院泰达融科园7号楼
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
