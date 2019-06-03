<template>
  <div class="messageDetailCommon">
    <div class="content">
      <div class="title">买家申请店铺审核通过提示</div>
      <div class="subTitle">2018-11-18 19:02</div>
      <div class="introduce">
        您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！您好，您在网来商城的开店已审核通过，快去发布商品吧！
      </div>
    </div>
  </div>
</template>
<script>
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {};
    },
    props: {
      detailId: {}
    },
    mounted() {
      //根据id获取相应的信息内容
      // _getData("").then(data=>{
      //   console.log(data)
      // });
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
