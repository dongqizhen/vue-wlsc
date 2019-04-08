<template>
  <div class="publishGoods">
    <div class="commonBoxStyle basicInformation">
      <commonTitle><div slot="text">发布商品</div></commonTitle>
      <div class="informationContent">
        <div class="title">基本信息</div>
        <div class="common productName">
          <div class="left-box"><span class="red">*</span>产品名称</div>
          <div class="right-box">
            <a-input placeholder="请输入产品名称" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">产品编号</div>
          <div class="right-box">
            <a-input placeholder="请输入产品编号" />
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>产品分类</div>
          <div class="right-box">
            <a-select
              defaultValue="请选择大类"
              style="width: 136px"
              @change="handleProductBigTypeChange"
              :options="options"
            />
            <a-select
              defaultValue="请选择小类"
              style="width: 136px"
              @change="handleProductSmallTypeChange"
              :options="options"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box">产品类型</div>
          <div class="right-box">
            <a-select
              defaultValue="请选择类型"
              style="width: 136px"
              @change="handleProductTypeChange"
              :options="options"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>品牌</div>
          <div class="right-box">
            <a-input placeholder="请输入品牌" />
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>型号</div>
          <div class="right-box">
            <a-input placeholder="请输入型号" />
          </div>
        </div>
        <div class="common guidePrice">
          <div class="left-box">指导价</div>
          <div class="right-box">
            <a-input placeholder="区间最低" class="priceMin" />
            <div class="joiner">一</div>
            <a-input placeholder="区间最高" class="priceMax" />
            <!-- <div class="inquiry">询价</div> -->
            <a-checkbox @change="onChange">询价</a-checkbox>
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>备件号</div>
          <div class="right-box">
            <a-input placeholder="请输入备件号" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">库存数量</div>
          <div class="right-box">
            <a-input placeholder="请输入库存数量" />
          </div>
        </div>
      </div>
    </div>
    <div class="commonBoxStyle specification">
      <div class="title">产品规格参数</div>
      <div class="specificationContent">
        <div class="common">
          <div class="left-box">产地</div>
          <div class="right-box">
            <a-select
              defaultValue="请选择产地"
              style="width: 136px"
              @change="handleProductAddressChange"
              :options="options"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box">生产厂家</div>
          <div class="right-box">
            <a-input placeholder="请输入生产厂家" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">件装量</div>
          <div class="right-box">
            <a-input placeholder="请输入件装量" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">单位</div>
          <div class="right-box">
            <a-input placeholder="请输入单位" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">最小起订量</div>
          <div class="right-box">
            <a-input placeholder="请输入最小起订量" />
          </div>
        </div>
      </div>
    </div>
    <div class="commonBoxStyle productPicture">
      <div class="title">
        商品图片<span
          >(图片尺寸为600*400，仅之处jpg.jpeg.png格式，单张大小不超过1M。)</span
        >
      </div>
      <div class="pictureContent">
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
    <div class="commonBoxStyle productIntroduce">
      <div class="title">商品介绍</div>
      <div class="introduceContent">
        <a-input
          type="textarea"
          placeholder="请输入商品描述"
          class="noInput"
        ></a-input>
      </div>
    </div>
    <div class="submit">
      <a-button class="release">直接发布并上架</a-button>
      <a-button class="save">保存</a-button>
      <a-button class="reset">重置</a-button>
    </div>
  </div>
</template>

<script>
  import { Upload } from "ant-design-vue";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  export default {
    data() {
      return {
        defaultCascaderValue: [],
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
      onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      },
      handleProductBigTypeChange() {},
      handleProductSmallTypeChange() {},
      handleProductTypeChange(value) {
        console.log(`selected ${value}`);
      },
      handleProductAddressChange(value) {
        this.cities = cityData[value];
        console.log(this.cities);
        this.secondCity = cityData[value][0];
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
      AUpload: Upload,
      commonTitle
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .publishGoods {
    .commonBoxStyle {
      padding: 4px 20px;
      background: #ffffff;
      box-shadow: $base-box-shadow;
      margin-bottom: 10px;
      .title {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #f5a623;
        border-bottom: 1px solid #ddd;
        padding-left: 10px;
        padding-bottom: 11px;
        margin-bottom: 28px;
        margin-top: 24px;
        span {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          margin-left: 9px;
        }
      }
    }
    .common {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .left-box {
        width: 84px;
        font-family: PingFangSC-Medium;
        font-weight: 600;
        font-size: 14px;
        color: #333;
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
      }
    }
    .basicInformation {
      .certificationStatus {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333333;
      }
      .informationContent {
        margin-bottom: 10px;
        .companyIntroduce {
          align-items: flex-start;
          .left-box {
            margin-top: 6px;
          }
        }
        .guidePrice {
          .right-box {
            display: flex;
            align-items: center;
            .ant-input {
              width: 88px;
            }
            .priceMin {
              margin-right: 10px;
            }
            .joiner {
              color: #cccccc;
            }
            .priceMax {
              margin-left: 10px;
              margin-right: 46px;
            }
            /deep/.ant-checkbox {
              .ant-checkbox-inner {
                border-radius: 50%;
              }
            }
            /deep/.ant-checkbox-wrapper:hover,
            .ant-checkbox:hover,
            .ant-checkbox-input:focus {
              .ant-checkbox-inner {
                border-color: $theme-color;
              }
            }
            /deep/.ant-checkbox-checked {
              .ant-checkbox-inner {
                background-color: $theme-color;
                border-color: $theme-color;
              }
            }
          }
        }
      }
    }
    .specification {
    }
    .productPicture {
      .pictureContent {
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
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .productIntroduce {
      .introduceContent {
        .noInput {
          height: 203px;
          outline: none;
          resize: none;
          line-height: 22px;
          margin-bottom: 56px;
        }
      }
    }
    .ant-btn {
      height: 33px;
      border-radius: 3px;
      border: none;
      box-shadow: none;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #fff;
      margin-top: 34px;
      margin-bottom: 111px;
      margin-left: 30px;
      padding: 0 24px;
      letter-spacing: 0;
    }
    .release {
      background-image: linear-gradient(90deg, #f10000 0%, #ff4e1a 100%);
    }
    .save {
      background: #f5a623;
    }
    .reset {
      background: #999;
    }
  }
</style>
