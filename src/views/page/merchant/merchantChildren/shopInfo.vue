<template>
  <div class="shopInfo">
    <div class="container-box">
      <div class="header">
        <div class="verticalBar"></div>
        店铺信息
      </div>
      <div class="content">
        <div class="common shopName">
          <div class="left-box"><span class="red">*</span>店铺名称</div>
          <div class="right-box">
            <a-input placeholder="请输入店铺名称" />
          </div>
        </div>
        <div class="common shopType">
          <div class="left-box">店铺类型</div>
          <div class="right-box">
            <a-select
              defaultValue="请选择经营模式"
              style="width: 222px"
              @change="handleShopTypeChange"
              :options="options"
            />
          </div>
        </div>
        <div class="common shopIndexPicture">
          <div class="left-box">店铺首页图片</div>
          <div class="right-box">
            <a-upload
              name="avatar"
              listType="picture-card"
              class="avatar-uploader"
              :showUploadList="false"
              action="//jsonplaceholder.typicode.com/posts/"
              :beforeUpload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">点击添加图片</div>
              </div>
            </a-upload>
          </div>
        </div>
        <div class="common shopBusinessScope">
          <div class="left-box"><span class="red">*</span>经营范围</div>
          <div class="right-box">
            <a-input placeholder="请输入店铺经营范围" />
          </div>
        </div>
        <div class="common shopSaleArea">
          <div class="left-box"><span class="red">*</span>销售地区</div>
          <div class="right-box saleArea">
            <a-select
              defaultValue="省"
              style="width: 120px"
              @change="handleProvinceChange"
              :options="options"
            />
            <a-select
              defaultValue="市"
              style="width: 120px"
              @change="handleCityChange"
              :options="options"
            />
            <a-select
              defaultValue="区"
              style="width: 120px"
              @change="handleAreaChange"
              :options="options"
            />
          </div>
        </div>
        <div class="common shopIntroduce">
          <div class="left-box">店铺介绍</div>
          <div class="right-box">
            <a-textarea
              placeholder="请在这里对店铺做一个介绍"
              type="textarea"
              v-model="introduce"
              class="noInput"
            />
          </div>
        </div>
        <div class="common submit">
          <div class="left-box"></div>
          <div class="right-box">
            <a-button>保存</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Input, Select, Upload, Icon, Button } from "ant-design-vue";

  const selectArr = [{ key: 1, value: "beijing" }, { key: 2, value: "tianjin" }];
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  const provinceData = ["Zhejiang", "Jiangsu"];
  const cityData = {
    Zhejiang: [
      { label: "北京", value: "Hangzhou", id: 1 },
      { label: "天津", value: "Ningbo", id: 2 },
      { label: "上海", value: "Wenzhou", id: 3 }
    ],
    Jiangsu: [
      { label: "苏州", value: "Nanjing", id: 4 },
      { label: "常州", value: "Suzhou", id: 5 },
      { label: "南京", value: "Zhenjiang", id: 6 }
    ]
  };
  const defaultCity = cityData[provinceData[0]][0];
  export default {
    data() {
      return {
        provinceData,
        cityData,
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
        defaultCity,
        selectArr,
        loading: false,
        imageUrl: "",
        introduce: "",
        options: [
          {
            label: "北京",
            value: "Zhejiang",
            title: "北京 010",
            key: "010"
          },
          {
            label: "上海",
            value: "Jiangsu",
            key: "021"
          },
          {
            label: "杭州",
            value: "hangzhou",
            key: "0571",
            disabled: true
          }
        ]
      };
    },
    methods: {
      handleShopTypeChange(value) {
        console.log(`selected ${value}`);
      },
      handleProvinceChange(value) {
        this.cities = cityData[value];
        console.log(this.cities);
        this.secondCity = cityData[value][0];
      },
      handleCityChange(value) {
        console.log(value);
      },
      handleAreaChange(value) {
        console.log(value);
      },
      handleChange(info) {
        if (info.file.status === "uploading") {
          this.loading = true;
          return;
        }
        if (info.file.status === "done") {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
      },
      beforeUpload(file) {
        const isJPG = file.type === "image/jpeg";
        if (!isJPG) {
          this.$message.error("You can only upload JPG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("Image must smaller than 2MB!");
        }
        return isJPG && isLt2M;
      }
    },
    components: {
      AInput: Input,
      ASelect: Select,
      AUpload: Upload,
      AIcon: Icon,
      ATextarea: Input,
      AButton: Button
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shopInfo {
    background-color: #fff;
    height: 693px;
    padding: 4px 20px;
    .header {
      display: flex;
      align-items: center;
      height: 49px;
      font-family: PingFangSC-Medium;
      font-weight: 600;
      font-size: 18px;
      color: #333;
      border-bottom: $border-style;
      .verticalBar {
        width: 4px;
        height: 19px;
        background: #f5a623;
        margin-right: 6px;
        margin-top: 1.5px;
      }
    }
    .content {
      margin-top: 24px;
      .common {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        &:nth-last-child(2) {
          align-items: flex-start;
          .left-box {
            margin-top: 6px;
          }
        }
        .left-box {
          margin-right: 24px;
          font-family: PingFangSC-Medium;
          font-weight: 600;
          font-size: 14px;
          color: #151515;
          .red {
            color: $theme-color;
            margin-left: -6.8px;
          }
        }
        .right-box {
          @include placeholderColor(#ccc);
          .ant-input {
            width: 390px;
            height: 34px;
            line-height: 34px;
            border: 1px solid #cccccc;
            border-radius: 3px;
          }
          .noInput {
            height: 109px;
            outline: none;
            resize: none;
            line-height: 22px;
          }
          /deep/.avatar-uploader {
            .ant-upload.ant-upload-select-picture-card {
              width: 118px;
              height: 118px;
              border: none;
              .ant-upload-text {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #ccc;
              }
            }
          }
        }
        .saleArea {
          /deep/.ant-select {
            margin-right: 14px;
          }
        }
      }
      .ant-btn {
        width: 65px;
        height: 33px;
        background: #f5a623;
        border-radius: 3px;
        border: none;
        box-shadow: none;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #fff;
        margin-left: 58px;
      }
    }
  }
</style>
