<template>
  <div class="loading">
    <img src="../../assets/images/loding.gif" alt="" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      text: {
        type: String,
        default: "加载中,请稍后..."
      }
    }
  };
</script>

<style lang="scss" scoped>
  .loading {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    flex-direction: column;
    img {
      width: 100px;
    }
    span {
      font-size: 15px;
      color: #666666;
    }
  }
</style>