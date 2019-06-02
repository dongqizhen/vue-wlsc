<template>
  <div class="inquiryProductItem">
    <span v-if="isShowInfo.isDetail">
      <a-checkbox @change="onChange"></a-checkbox>
    </span>
    <span>
      <img :src="itemData.list_pic_url" />
    </span>
    <span>{{ itemData.name }}</span>
    <span>{{ itemData.unitPrice }}</span>
    <span v-if="isShowInfo.isDetail">¥198988282.00</span>
    <span>{{ itemData.number }}</span>
    <span>{{
      itemData.arrivalTime ? itemData.arrivalTime.substring(0, 16) : ""
    }}</span>
    <span>{{ itemData.buyerDescription }}</span>
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
      },
      isShowInfo: {
        type: Object
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
