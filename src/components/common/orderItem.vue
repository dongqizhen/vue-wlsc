<template>
  <div class="orderItem">
    <order-title :isOrder="true"></order-title>
    <order-item-product></order-item-product>
    <delivery-info></delivery-info>
  </div>
</template>
<script>
  import orderTitle from "./orderTitle";
  import deliveryInfo from "./deliveryInformation";
  import orderItemProduct from "./orderItemProduct";
  export default {
    data() {
      return {
        productArr: [
          {
            id: 1,
            imgUrl: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
            name: "John Brown",
            price: "￥1000",
            amount: 12
          },
          {
            id: 2,
            imgUrl: "http://file.haoyigong.com/server/upload/1554081863934.jpg",
            name: "John test",
            price: "￥1000",
            amount: 11
          },
          {
            id: 3,
            imgUrl: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
            name: "John Brown",
            price: "￥1000",
            amount: 10
          }
        ]
      };
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
