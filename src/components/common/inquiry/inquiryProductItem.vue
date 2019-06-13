<template>
  <div class="inquiryProductItem">
    <span
      :class="
        isShowInfo.isMerchant || isShowInfo.current == 1 ? 'boxHidden' : ''
      "
    >
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
    <span
      v-if="
        isShowInfo.current != 3 ||
          (isShowInfo.current == 3 && isShowInfo.isMerchant)
      "
    >
      {{ itemData.number }}
    </span>
    <span v-if="isShowInfo.current == 3 && !isShowInfo.isMerchant">
      <van-stepper v-model="itemData.number" :max="itemData.repertoryNum" />
      <i class="stockNumber">库存{{ itemData.repertoryNum }}件</i>
    </span>
    <span>
      {{ itemData.arrivalTime ? itemData.arrivalTime.substring(0, 16) : "" }}
    </span>
    <span
      v-if="
        isShowInfo.current != 3 ||
          (isShowInfo.current == 3 && isShowInfo.isMerchant)
      "
    >
      {{ itemData.introduce }}
    </span>
    <span v-if="isShowInfo.current == 3 && !isShowInfo.isMerchant">
      <a-textarea
        placeholder="请输入备注"
        v-model="itemData.introduce"
      ></a-textarea>
    </span>
  </div>
</template>
<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        goodList: this.checkedList,
        checkedProductInfo: this.checkProductInfo
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
      },
      checkProductInfo: { type: Array }
    },
    watch: {
      checkedList(newVal) {
        //console.log(newVal);
        this.goodList = newVal;
      }
    },
    methods: {
      onChange(id) {
        // console.log(id);
        if (_.indexOf(this.goodList, id) == -1) {
          this.goodList.push(id);
          this.checkedProductInfo.push(this.itemData);
        } else {
          this.goodList = _.without(this.goodList, id);
          this.checkedProductInfo = _.without(
            this.checkedProductInfo,
            this.itemData
          );
        }
        // console.log(this.goodList);
        //console.log("产品信息：：：", this.checkedProductInfo);
        this.$emit("getCheckedList", {
          goodList: this.goodList,
          productInfo: this.checkedProductInfo
        });
        // this.$emit("getCheckedProductInfo", );
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
  @import "../../../assets/scss/_commonScss";
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
        width: 78px;
      }
      &:nth-child(5) {
        width: 80px;
        /deep/.van-stepper {
          .van-stepper__minus,
          .van-stepper__plus {
            width: 20px;
            height: 20px;
            border-radius: 0;
            border: $border-style;
            background: #f6f6f6;
            margin: 0;
            &:hover {
              cursor: pointer;
            }
          }
          .van-stepper__input {
            width: 38px;
            height: 16px;
            margin: 0;
            border-top: $border-style;
            border-bottom: $border-style;
          }
        }
        .stockNumber {
          font-style: normal;
          font-size: 10px;
          color: #ccc;
          margin-top: 4px;
        }
      }
      &:nth-child(6) {
        width: 68px;
        margin-right: 75px;
      }
      &:nth-child(7) {
        width: 157px;
        .ant-input {
          font-size: 12px;
          resize: none;
          height: 65px;
        }
      }
      &:nth-child(8) {
        width: 120px;
      }
    }
  }
</style>
