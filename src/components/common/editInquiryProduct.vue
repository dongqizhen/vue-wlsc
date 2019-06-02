<template>
  <div class="inquiryProductItem" :class="addClass(itemData.id)">
    <span>
      <a-checkbox
        @change="onChange(itemData.id)"
        :checked="checkedChange(itemData.id)"
      ></a-checkbox>
    </span>
    <span>
      <img :src="itemData.list_pic_url" />
    </span>
    <span>{{ itemData.name }}</span>
    <span>{{ itemData.brand_name }}/{{ itemData.brand_model_name }}</span>
    <span>
      <a-input placeholder="输入单价" v-model="itemData.unit_price"></a-input>
    </span>
    <span><van-stepper v-model="itemData.number"/></span>
    <span
      ><a-date-picker
        :format="'YYYY-MM-DD'"
        @change="onDateChange"
        :defaultValue="moment('2015-01-01', 'YYYY-MM-DD')"
    /></span>
    <span
      ><a-textarea
        placeholder="输入备注"
        v-model="itemData.buyerDescription"
      ></a-textarea
    ></span>
  </div>
</template>
<script>
  import moment from "moment";
  export default {
    data() {
      return { list: this.checkedList };
    },
    props: {
      itemData: {
        type: Object
      },
      checkedList: {
        type: Array
      }
    },
    methods: {
      moment,
      onDateChange(date, dataString) {
        console.log(date, dataString);
        this.itemData.arrivalTime = dataString;
      },
      onChange(id) {
        if (_.indexOf(this.list, id) == -1) {
          this.list.push(id);
          this.$emit("getChecked", this.list);
          this.$emit("getData", { id: id, data: this.itemData });
        } else {
          this.list = _.without(this.list, id);
          this.$emit("getChecked", id);
        }
      },
      checkedChange(id) {
        for (const val of this.list) {
          if (val == id) {
            return true;
          }
        }
      },
      addClass(id) {
        for (const val of this.list) {
          if (val == id) {
            return "active";
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
        .ant-input {
          width: 98px;
          height: 21px;
          font-size: 12px;
        }
      }
      &:nth-child(6) {
        width: 90px;
        /deep/.van-stepper {
          .van-stepper__minus,
          .van-stepper__plus {
            width: 20px;
            height: 20px;
          }
          .van-stepper__input {
            width: 38px;
            height: 18px;
          }
        }
      }
      &:nth-child(7) {
        width: 110px;
        margin-right: 20px;
        /deep/.ant-calendar-picker {
          width: 110px;
          height: 21px;
          margin-left: 0;
          > div {
            height: 21px;
          }
          .ant-input {
            height: 21px;
            line-height: 21px;
            padding: 4px 8px;
          }
        }
      }
      &:nth-child(8) {
        width: 115px;
        .ant-input {
          resize: none;
        }
      }
    }
  }
</style>
