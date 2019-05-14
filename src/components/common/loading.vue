<template>
  <div class="loading">
    <div v-if="loading != undefined" class="loadingimg">
      <img src="../../assets/images/loading.gif" alt="" />
      <span>{{ text }}</span>
    </div>
    <div v-else class="skeleton">
      <a-skeleton active />
      <br />
      <a-skeleton active />
      <br />
      <a-skeleton active />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    created() {
      //console.log(this.loading != undefined);
    },
    props: {
      text: {
        type: String,
        default: "加载中,请稍后..."
      },
      loading: {
        type: String
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

    .loadingimg {
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
      }
      span {
        font-size: 15px;
        color: #666666;
      }
    }
    .skeleton {
      width: 100%;
      display: flex;
      flex-direction: column;
      /deep/ .ant-skeleton {
      }
    }
  }
</style>