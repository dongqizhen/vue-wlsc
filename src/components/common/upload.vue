<template>
  <div class="uploadImg">
    <a-upload
      listType="picture-card"
      class="avatar-uploader"
      :showUploadList="true"
      action="//jsonplaceholder.typicode.com/posts/"
      :beforeUpload="beforeUpload"
      :fileList="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 1">
        <a-icon class="icon">
          <use xlink:href="#icontianjiatupian1"></use>
        </a-icon>
        <div class="ant-upload-text">点击添加图片</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        previewVisible: false,
        previewImage: "",
        fileList: [
          // {
          //   uid: "-1",
          //   name: "xxx.png",
          //   status: "done",
          //   url:
          //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          // }
        ]
      };
    },
    methods: {
      handleCancel() {
        this.previewVisible = false;
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        this.fileList = fileList;
        this.$emit("getVal", this.fileList);
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
      .ant-upload-text {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #ccc;
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
