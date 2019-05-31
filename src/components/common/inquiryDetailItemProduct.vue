<template>
  <div class="inquiryProductItem">
    <span>
      <a-checkbox @change="onChange(itemData.id)"></a-checkbox>
    </span>
    <span>
      <img :src="itemData.list_pic_url" />
    </span>
    <span>{{ itemData.name }}</span>
    <span>{{ itemData.brand_name }}/{{ itemData.brand_model_name }}</span>
    <span>{{ itemData.unit_price }}</span>
    <span>{{ itemData.number }}</span>
    <span>2019-08-13</span>
    <span>这里有一段文本显示备注</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      itemData: {
        type: Object
      }
    },
    methods: {
      onChange(id) {}
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .inquiryProductItem {
    display: flex;
    height: 90px;
    border: $border-style;
    padding-top: 10px;
    span {
      font-size: 12px;
      color: #666;
      margin-right: 30px;
      img {
        width: 70px;
        height: 70px;
      }
      &:first-child {
        width: 14px;
        margin-left: 20px;
        margin-right: 12px;
      }
      &:nth-child(2) {
        width: 70px;
        margin-right: 12px;
      }
      &:nth-child(3) {
        width: 155px;
      }
      &:nth-child(4) {
        width: 98px;
      }
      &:nth-child(5) {
        width: 98px;
      }
      &:nth-child(6) {
        width: 90px;
      }
      &:nth-child(7) {
        width: 97px;
      }
      &:nth-child(8) {
        width: 120px;
      }
    }
  }
</style>
