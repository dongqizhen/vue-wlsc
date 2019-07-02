<template>
  <div id="components-back-top-demo-custom" class="sidebar">
    <a-back-top>
      <div class="back-top-inner">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconhuidingbu1"></use>
        </svg>
      </div>
    </a-back-top>
    <div class="online_server">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconyijianfankui"></use>
      </svg>
    </div>
    <!-- <model-vue></model-vue> -->
  </div>
</template>

<script>
  import modelVue from "../../views/page/shop/lookingProductChildren/model.vue";

  export default {
    data() {
      return {};
    },
    components: { modelVue }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";
  .sidebar {
    height: 102px;
    width: 48px;
    position: fixed;
    right: 50px;
    bottom: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //background: red;
    /deep/ .ant-back-top {
      position: static;
      width: 100%;
      height: 47px;
      .back-top-inner {
        height: 100%;
        width: 100%;
        // background: rgba(241, 2, 21, 0.22);
        opacity: 0.22;
        .icon {
          height: 100%;
          width: 100%;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
    .online_server {
      width: 100%;
      height: 47px;
      position: absolute;
      bottom: 0;
      opacity: 0.22;
      font-family: PingFangSC-Medium;
      font-size: 13px;
      color: #ffffff;
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        height: 100%;
        width: 100%;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
</style>