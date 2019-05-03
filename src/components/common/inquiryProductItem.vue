<template>
  <div class="inquiryProductItem">
    <span v-if="isDetail">
      <a-checkbox @change="onChange"></a-checkbox>
    </span>
    <span>
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
    </span>
    <span>普利生全自动血凝分析仪C2000-A1BKKKLL</span>
    <span>普利生C2000-A</span>
    <span v-if="isDetail">¥198988282.00</span>
    <span>12</span>
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
      isDetail: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      onChange() {}
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
