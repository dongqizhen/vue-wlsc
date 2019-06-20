<template>
  <div class="howToOpenShop">
    <guide-right title="询价系统">
      <div class="info" slot="contentInfo">
        <p>
          1、进入产品详情页，点击“加入选购单”，
        </p>
        <p>
          2、在弹出的对话框中选择“询价”， 进入询价页面。
        </p>
        <p>
          3、选择需要询价的产品，点击“一键获取报价”。
        </p>
        <p>
          4、进入编辑询价单页面，如果对本次询价有特殊备注，可在询价备注中填写需求。点击“获取报价”。
        </p>
        <p>
          5、进入我的询价页面，等待商家提供价格回复单。
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
created(){
console.log(this)
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
