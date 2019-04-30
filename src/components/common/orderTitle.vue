<template>
  <div class="orderTitle">
    <div class="left-box">
      <div class="checkedBox">
        <a-checkbox
          @change="onChange(data.id)"
          :checked="checkedChange(data.id)"
        ></a-checkbox>
      </div>
      <div class="common orderNumber">
        <span>{{ isOrder ? "订单" : "询价单" }}编号：</span>
        <span>WLTX20181203-Z01</span>
      </div>
      <div class="common orderSubmitTime">
        <span class="svgBox">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icontijiaoshijian"></use>
          </svg>
        </span>
        <span>{{ isOrder ? "订单" : "询价单" }}提交时间：</span>
        <span>2019-09-12 18:30</span>
      </div>
      <div class="common userName" v-if="isOrder == false">
        <span>
          <img
            src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
          />
        </span>
        <span>询价人：</span>
        <span>周磊</span>
      </div>
    </div>
    <div class="right-box">
      <div class="common orderStatus">
        <span class="svgBox">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconbaojiazhong"></use>
          </svg>
        </span>
        <span>{{ isOrder ? "订单" : "询价单" }}状态：</span>
        <span>待接单</span>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from "lodash";
  export default {
    data() {
      return { list: this.checkedList };
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      isOrder: {
        type: Boolean,
        required: true
      },
      checkedList: {
        type: Array,
        required: true
      }
    },
    watch: {
      checkedList() {
        this.list = this.checkedList;
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
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .orderTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(245, 166, 35, 0.05);
    border: $border_style;
    padding: 0 20px;
    height: 40px;
    .common {
      font-size: 12px;
      color: #333;
      font-weight: 600;
      margin-right: 30px;
      .svgBox {
        margin-right: 6px;
      }
      img {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 4px;
      }
    }
    .left-box {
      display: flex;
      align-items: center;
      .checkedBox {
        margin-right: 12px;
      }
    }
    .right-box {
      display: flex;
      .common {
        margin-right: 0;
      }
    }
  }
</style>
