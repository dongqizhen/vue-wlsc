<template>
  <div class="no-data">
    <img src="../../assets/images/no_data/no-content.png" alt="" />
    <span></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color: #fff, $alpha: 0);
    img {
      width: 124px * 2;
    }
  }
</style>