<template>
  <div class="messageDetailCommon">
    <div class="content">
      <div class="title">{{ data.title }}</div>
      <div class="subTitle">
        {{ data.createdOn ? data.createdOn.substring(0, 16) : "" }}
      </div>
      <div class="introduce">
        {{ data.detail }}
      </div>
    </div>
  </div>
</template>
<script>
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        data: {}
      };
    },
    props: {
      detailId: {}
    },
    mounted() {
      //根据id获取相应的信息内容
      _getData("/message/detail", { id: this.$route.params.id }).then(data => {
        console.log(data);
        this.data = data;
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .messageDetailCommon {
    .content {
      .title {
        text-align: center;
        font-size: 20px;
        color: #333333;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .subTitle {
        text-align: center;
        font-size: 14px;
        color: #999999;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: $border-style;
      }
      .introduce {
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 32px;
      }
    }
  }
</style>
