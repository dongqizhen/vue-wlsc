<template>
  <div class="uploadImg">
    <a-upload
      listType="picture-card"
      class="avatar-uploader"
      :headers="{ 'Content-Type': 'multipart/form-data' }"
      :showUploadList="false"
      :action="actionURL"
      :beforeUpload="beforeUpload"
      @change="handleChange"
    >
      <div v-for="item in uploadList" :key="item.uid" class="uploadPreview">
        <img :src="item.url" />
        <svg
          class="icon"
          aria-hidden="true"
          @click.stop="handleRemove(item)"
          v-if="uploadList.length > 0"
        >
          <use xlink:href="#iconshangchuanshangpinguanbi"></use>
        </svg>
      </div>
      <div v-if="uploadList.length < 1">
        <a-icon class="icon">
          <use xlink:href="#icontianjiatupian1"></use>
        </a-icon>
        <div class="ant-upload-text">点击添加图片</div>
      </div>
    </a-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        uploadList: [],
        actionURL: this.$API_URL.HYGFILEURL + "/api/upload"
      };
    },
    props: {
      imgUrl: {}
    },
    watch: {
      imgUrl(newVal) {
        console.log(newVal);
        this.uploadList = [];
        if (typeof newVal == "string" && newVal) {
          this.uploadList.push({ uid: -1, url: newVal });
        }
      }
    },
    methods: {
      handleRemove(file) {
        this.uploadList.splice(this.uploadList.indexOf(file), 1);
        this.$emit("getVal", this.uploadList);
      },
      handleChange({ fileList }) {
        fileList.splice(0, fileList.length - 1);
        fileList[0].url =
          "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
        this.uploadList = fileList;
        this.$emit("getVal", this.uploadList);
      },
      beforeUpload(file) {
        // const isJPG = file.type === "image/jpeg";
        // if (!isJPG) {
        //   this.$message.error("You can only upload JPG file!");
        // }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("Image must smaller than 2MB!");
        }
        return isLt2M;
        // return isJPG && isLt2M;
      }
    }
  };
</script>
<style lang="scss" scoped>
  /deep/.avatar-uploader {
    display: flex;
    .ant-upload-list-item {
      width: 118px;
      height: 118px;
      border: none;
      background-color: #f5f5f5;
      margin-right: 0;
      margin-bottom: 0;
    }
    .ant-upload.ant-upload-select-picture-card {
      width: 118px;
      height: 118px;
      border: none;
      background-color: #f5f5f5;
      margin: 0;
      > .ant-upload {
        padding: 0;
      }
      .ant-upload-text {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #ccc;
      }
      .uploadPreview {
        width: 118px;
        height: 118px;
        position: relative;
        .icon {
          width: 23px;
          height: 23px;
          position: absolute;
          right: 4px;
          top: 4px;
        }
      }
      .anticon {
        width: 18px;
        height: 18px;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 100%;
      }
    }
  }
</style>
