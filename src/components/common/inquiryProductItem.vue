<template>
  <div class="inquiryProductItem">
    <span :class="isShowInfo.isMerchant ? 'boxHidden' : ''">
      <a-checkbox
        @change="onChange(itemData.id)"
        :checked="checkedChange(itemData.id)"
      ></a-checkbox>
    </span>
    <span>
      <img :src="itemData.goodsImage" />
    </span>
    <span>{{ itemData.goodsName }}</span>
    <span>{{ itemData.unitPrice }}</span>
    <span v-if="isShowInfo.isDetail">¥198988282.00</span>
    <span>{{ itemData.number }}</span>
    <span>
      {{ itemData.arrivalTime ? itemData.arrivalTime.substring(0, 16) : "" }}
    </span>
    <span>{{ itemData.introduce }}</span>
  </div>
</template>
<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        goodList: this.checkedList
      };
    },
    props: {
      itemData: {
        type: Object
      },
      isShowInfo: {
        type: Object
      },
      checkedList: {
        type: Array
      }
    },
    watch: {
      checkedList(newVal) {
        console.log(newVal);
        this.goodList = newVal;
      }
    },
    methods: {
      onChange(id) {
        // console.log(id);
        if (_.indexOf(this.goodList, id) == -1) {
          this.goodList.push(id);
        } else {
          this.goodList = _.without(this.goodList, id);
        }
        // console.log(this.goodList);
        this.$emit("getCheckedList", this.goodList);
      },
      checkedChange(id) {
        for (const val of this.goodList) {
          if (val == id) {
            return true;
          }
        }
      }
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
    > span {
      font-size: 12px;
      color: #666;
      margin-right: 30px;
      &.boxHidden {
        visibility: hidden;
      }
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
        width: 60px;
      }
      &:nth-child(6) {
        width: 68px;
        margin-right: 75px;
      }
      &:nth-child(7) {
        width: 157px;
      }
      &:nth-child(8) {
        width: 120px;
      }
    }
  }
</style>
