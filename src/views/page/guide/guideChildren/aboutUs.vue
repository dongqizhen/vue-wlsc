<template>
  <div class="howToOpenShop">
    <guide-right title="关于我们">
      <div class="info" slot="contentInfo">
        <p>
          概述：
          网来商城是北京网来天下医疗科技有限责任公司旗下的一个医疗设备、备件采购平台。网来商城面向所有的医疗机构、医疗企业以及医疗从业人员，为各方提供优质的线上服务。
        </p>
        <p>
          基本介绍：
          网来商城为买卖双方提供产品性能对比、询价、报价、转为我的报价、成交等采购全流程的服务。所有产品按照国家医疗器械分类标准划分，有利于买方快速寻找产品。
          网来商城采用商户入驻平台开店模式，买家根据自身需求，可直接与卖家磋商交易。
        </p>
        <p>
          使命： 融合医学与工程，服务医疗与设备
        </p>
        <p>
          亮点功能简介： 产品性能对比：
          可以选择不同品牌的同类产品，进行产品参数性能对比，让买方的选择更加明确。
        </p>
        <p>
          询价：
          询价系统不仅为买方提供了便利的交流平台，也能及时提醒卖方有潜在的交易机会。
        </p>
        <p>
          转为我的报价：
          针对卖家：只要产品好，不怕销路难，人人都可以成为你的销售；
          针对买家：不需存货，就可做分销，轻松赚利润。
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
