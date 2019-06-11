<template>
  <div class="howToOpenShop">
    <guide-right title="快速下单">
      <div class="info" slot="contentInfo">
        <p>
          1、进入个人中心，点击“我的询价”。
        </p>
        <p>
          2、在“已报价”列表中，可以选择报价产品，点击“查看详情”。
        </p>
        <p>
          3、进入询价单详情页，选择需要报价产品，点击“提交订单”。
        </p>
        <p>
          4、添加收货详细信息后，点击“确认”，该笔订单完成。
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
