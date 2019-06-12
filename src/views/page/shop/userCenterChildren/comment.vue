<template>
  <div class="comment">
    <common-title title="评价"></common-title>
    <div class="commentContent">
      <product-item-comment
        v-for="item in data"
        :key="item.id"
        :data="item"
        ref="commentInfo"
      ></product-item-comment>
    </div>
    <div class="btn">
      <a-button @click="submitComment">提交评价</a-button>
    </div>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import productItemComment from "../../../../components/common/comment/productItemComment";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data: [],
        flag: true
      };
    },
    methods: {
      submitComment() {
        // console.log(this.$refs.commentInfo);
        const commentList = [];
        this.flag = true;
        _.map(this.$refs.commentInfo, val => {
          if (this.flag) {
            let obj = {};
            obj.typeId = 0;
            obj.valueId = val.productId;
            let imagesList = [];
            _.map(val.uploadList, o => {
              imagesList.push(o.url);
            });
            obj.imagesList = imagesList;
            obj.performance = val.submitData.performance;
            if (!val.submitData.content) {
              this.$message.warning("请输入评价内容", 1);
              this.flag = false;
              return;
            } else {
              obj.content = val.submitData.content;
            }
            obj.quality = val.submitData.quality;
            obj.aftersale = val.submitData.aftersale;
            obj.train = val.submitData.train;
            commentList.push(obj);
          }
        });
        console.log(this.flag);
        console.log(commentList);
        if (this.flag) {
          _getData("/comment/comment", { commentList: commentList }).then(
            data => {
              console.log("评价是否成功：", data);
              this.$message.success("评论成功", 1);
              this.$router.replace({
                path: "/userCenter/myOrder",
                query: { status: 5 }
              });
            }
          );
        }
      },
      getOrderDetail() {
        _getData("/order/orderDetails", { id: this.$route.params.id }).then(
          data => {
            console.log(data);
            this.data = data.goodsList;
          }
        );
      }
    },
    mounted() {
      this.getOrderDetail();
    },
    components: {
      commonTitle,
      productItemComment
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .comment {
    background-color: #fff;
    min-height: 666px;
    margin-bottom: 100px;
    padding: 4px 20px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    .commentContent {
      /deep/.itemProductComment {
        .productInfo {
          margin-top: 10px;
        }
      }
    }
    .btn {
      margin: 20px 98px;
      .ant-btn {
        background: #f5a623;
        border-radius: 3px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 600;
        border: 1px solid #f5a623;
      }
    }
  }
</style>