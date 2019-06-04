<template>
  <div class="itemProductComment">
    <div class="productInfo">
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
      <div class="productName">普利生全自动血凝分析仪C2000-A1BKKKLL</div>
    </div>
    <div class="common">
      <div class="left-box">评价商品</div>
      <div class="right-box">
        <a-textarea
          placeholder="其他买家需要你的建议哦！"
          v-model="submitData.introduce"
        ></a-textarea>
      </div>
    </div>
    <div class="common">
      <div class="left-box">上传图片</div>
      <div class="right-box">
        <div class="pictureContent">
          <div
            v-for="file in uploadList"
            :key="file.uid"
            class="uploadItem"
            :data-id="file.uid"
          >
            <img :src="file.url" />
            <div class="demo-upload-list-cover">
              <svg class="icon" aria-hidden="true" @click="handleRemove(file)">
                <use xlink:href="#iconshangchuanshangpinguanbi"></use>
              </svg>
            </div>
          </div>
          <a-upload
            ref="upload"
            listType="picture-card"
            class="avatar-uploader"
            :showUploadList="false"
            action="//jsonplaceholder.typicode.com/posts/"
            :beforeUpload="beforeUpload"
            @change="handleChange"
          >
            <div v-if="uploadList.length < 6">
              <a-icon class="icon">
                <use xlink:href="#icontianjiatupian1"></use>
              </a-icon>
              <div class="ant-upload-text">点击添加图片</div>
            </div>
          </a-upload>
        </div>
      </div>
    </div>
    <div class="common">
      <div class="left-box">商品打分</div>
      <div class="right-box">
        <div class="commentItem">
          <span>性能评价</span
          ><span><a-rate v-model="submitData.performance"></a-rate></span>
        </div>
        <div class="commentItem">
          <span>质量评价</span
          ><span><a-rate v-model="submitData.quality"></a-rate></span>
        </div>
        <div class="commentItem">
          <span>售后评价</span
          ><span><a-rate v-model="submitData.afterSale"></a-rate></span>
        </div>
        <div class="commentItem">
          <span>培训评价</span
          ><span><a-rate v-model="submitData.training"></a-rate></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        uploadList: [],
        submitData: {
          introduce: "",
          performance: 0,
          quality: 0,
          afterSale: 0,
          Training: 0
        }
      };
    },
    methods: {
      handleRemove(file) {
        this.uploadList.splice(this.uploadList.indexOf(file), 1);
      },
      handleChange(info) {
        for (const val of info.fileList) {
          val.url =
            "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
        }
        this.uploadList = info.fileList;
      },
      beforeUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
          this.$message.error("Image must smaller than 1MB!");
        }
        return isLt2M;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .itemProductComment {
    border: 5px solid #f5f5f5;
    .productInfo {
      height: 50px;
      padding-left: 44px;
      background: rgba(245, 166, 35, 0.05);
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      .productName {
        font-size: 15px;
        color: #333333;
        font-weight: 600;
        margin-left: 8px;
      }
    }
    .common {
      display: flex;
      margin-bottom: 24px;
      .left-box {
        width: 88px;
        font-size: 14px;
        color: #666666;
      }
      .right-box {
        width: 530px;
        .ant-input {
          width: 520px;
          height: 109px;
          line-height: 20px;
          font-size: 14px;
          color: #333;
          resize: none;
        }
        .pictureContent {
          // height: 118px;
          margin-bottom: 18px;
          display: flex;
          flex-wrap: wrap;
          .demo-upload-list {
            width: 118px;
            height: 118px;
            margin-right: 30px;
            border: 1px dashed #ccc;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            &:hover {
              cursor: pointer;
              .demo-upload-list-cover {
                display: block;
              }
            }
          }
          .demo-upload-list-cover {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            .icon {
              width: 23px;
              height: 23px;
              position: absolute;
              right: 4px;
              top: 4px;
            }
          }
          .uploadItem {
            width: 118px;
            height: 118px;
            margin-right: 14px;
            margin-bottom: 10px;
            position: relative;
            img {
              width: 100%;
            }
            &:hover {
              cursor: pointer;
              .demo-upload-list-cover {
                display: block;
              }
            }
          }
          /deep/.avatar-uploader {
            .ant-upload.ant-upload-select-picture-card {
              width: 118px;
              height: 118px;
              border: none;
              .anticon {
                width: 18px;
                height: 18px;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
              .ant-upload-text {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #ccc;
              }
              img {
                width: 100%;
              }
            }
            .ant-upload-list {
              .ant-upload-list-item {
                width: 118px;
                height: 118px;
                margin-right: 30px;
                padding: 0;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .commentItem {
          height: 20px;
          margin-bottom: 13px;
          display: flex;
          span {
            display: flex;
            &:first-child {
              margin-right: 13px;
            }
            &:last-child {
              height: 20px;
              /deep/ul {
                height: 100%;
                color: #f10215;
                li {
                  font-size: 20px;
                  &.ant-rate-star {
                    top: -8px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
