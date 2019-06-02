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
    <span>{{ itemData.unit_price }}</span>
    <span>{{ itemData.number }}</span>
    <span>{{ itemData.arrivalTime }}</span>
    <span>{{ itemData.goods_desc }}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: this.checkedList
      };
    },
    props: {
      itemData: {
        type: Object
      },
      checkedList: {
        type: Array
      }
    },
    watch: {
      checkedList(newVal) {
        this.list = newVal;
      }
    },
    methods: {
      onChange(id) {
        if (_.indexOf(this.list, id) == -1) {
          this.list.push(id);
          this.$emit("getChecked", this.list);
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
    &.active {
      background: rgba(245, 166, 35, 0.06);
    }
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
