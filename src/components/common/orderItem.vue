<template>
  <div class="orderItem">
    <order-title
      :isShowInfo="isShowInfo"
      :checkedList="checkedList"
      v-on:getChecked="getChecked"
      :data="data"
    ></order-title>
    <order-item-product :data="data"></order-item-product>
    <delivery-info :data="data"></delivery-info>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  import deliveryInfo from "./deliveryInformation";
  import orderItemProduct from "./orderItemProduct";
  export default {
    data() {
      return {};
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      checkedList: {
        type: Array,
        required: true
      },
      isShowInfo: {
        tyep: Object
      }
    },
    methods: {
      getChecked(val) {
        this.$emit("getChecked", val);
      }
    },
    components: {
      orderTitle,
      deliveryInfo,
      orderItemProduct
    }
  };
</script>

<style lang="scss" scoped>
  .orderItem {
    .productInfoBox {
      border-top: none;
    }
    .shippingAddress {
      border-top: none;
    }
  }
</style>
