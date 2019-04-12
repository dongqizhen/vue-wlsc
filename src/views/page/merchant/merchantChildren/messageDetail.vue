<template>
  <div class="messageDetail">
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
  export default {
    data() {
      return {};
    },
    created() {
      console.log(this.$route.query.id);
      //根据id获取相应的信息内容
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .messageDetail {
    min-height: 693px;
    background-color: #fff;
    padding: 20px 70px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
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
