<template>
  <div class="shopCertification">
    <div class="basicInformation">
      <commonTitle>
        <div slot="text">认证材料</div>
        <span slot="titleRight" class="certificationStatus"
          >认证状态：认证中</span
        >
      </commonTitle>
      <div class="informationContent">
        <div class="title">基本信息</div>
        <div class="common companyName">
          <div class="left-box"><span class="red">*</span>公司名称</div>
          <div class="right-box">
            <a-input placeholder="请输入公司名称" />
          </div>
        </div>
        <div class="common companyAddress">
          <div class="left-box"><span class="red">*</span>公司地址</div>
          <div class="right-box">
            <a-cascader
              :options="options"
              @change="onChange"
              placeholder="请选择省/市/区"
              :defaultValue="defaultCascaderValue"
              style="width: 390px"
            />
          </div>
        </div>
        <div class="common companyIntroduce">
          <div class="left-box"><span class="red">*</span>公司介绍</div>
          <div class="right-box">
            <a-textarea
              placeholder="请在这里对公司做一个介绍"
              type="textarea"
              v-model="introduce"
              class="noInput"
            />
          </div>
        </div>
        <div class="common companyLegalPerson">
          <div class="left-box">法定代表人</div>
          <div class="right-box">
            <a-input placeholder="请输入法定代表人" />
          </div>
        </div>
        <div class="common companyContact">
          <div class="left-box"><span class="red">*</span>联系人</div>
          <div class="right-box">
            <a-input placeholder="请输入联系人" />
          </div>
        </div>
        <div class="common companyPhone">
          <div class="left-box"><span class="red">*</span>手机号</div>
          <div class="right-box">
            <a-input placeholder="请输入手机号" />
          </div>
        </div>
        <div class="common companyTelephone">
          <div class="left-box"><span class="red">*</span>办公室电话</div>
          <div class="right-box">
            <a-input placeholder="请输入办公室电话" />
          </div>
        </div>
        <div class="common companyEmail">
          <div class="left-box"><span class="red">*</span>企业邮箱</div>
          <div class="right-box">
            <a-input placeholder="请输入企业邮箱" />
          </div>
        </div>
        <div class="common companyFax">
          <div class="left-box">传真</div>
          <div class="right-box">
            <a-input placeholder="请输入传真" />
          </div>
        </div>
        <div class="common companyBankAccount">
          <div class="left-box">开户银行</div>
          <div class="right-box">
            <a-input placeholder="请输入开户银行" />
          </div>
        </div>
        <div class="common companyOpenAccount">
          <div class="left-box">开户账号</div>
          <div class="right-box">
            <a-input placeholder="请输入开户账号" />
          </div>
        </div>
        <div class="common companyQQ">
          <div class="left-box">QQ号</div>
          <div class="right-box">
            <a-input placeholder="请输入QQ号" />
          </div>
        </div>
        <div class="common companyWeChat">
          <div class="left-box">微信号</div>
          <div class="right-box">
            <a-input placeholder="请输入微信号" />
          </div>
        </div>
      </div>
    </div>
    <div class="identityInformation">
      <div class="title">证件信息</div>
      <div class="identityContent">
        <div class="common companyBusinessLicense">
          <div class="left-box">
            <span class="red">*</span>营业执照<i>(三合一)</i>
          </div>
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
        <div class="common companyTaxRegistration">
          <div class="left-box">税务登记证</div>
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
        <div class="common companyProductionLicense">
          <div class="left-box">医疗器械经营或生产许可证</div>
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
      </div>
    </div>
    <div class="submit">
      <a-button>提交审核</a-button>
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
      onChange() {},
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
      AUpload: Upload,
      commonTitle
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .shopCertification {
    %title {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #f5a623;
      border-bottom: 1px solid #ddd;
      padding-left: 10px;
      padding-bottom: 11px;
      margin-bottom: 28px;
      margin-top: 24px;
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
        .noInput {
          height: 109px;
          outline: none;
          resize: none;
          line-height: 22px;
        }
      }
    }
    .basicInformation {
      background-color: #fff;
      padding: 4px 20px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      margin-bottom: 10px;
      .certificationStatus {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333333;
      }
      .informationContent {
        margin-bottom: 10px;
        .title {
          @extend %title;
        }
        .companyIntroduce {
          align-items: flex-start;
          .left-box {
            margin-top: 6px;
          }
        }
      }
    }
    .identityInformation {
      padding: 4px 20px;
      background: #ffffff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      .title {
        @extend %title;
      }
      .identityContent {
        display: flex;
        .common {
          display: block;
          margin-right: 40px;
          .left-box {
            width: auto;
            margin-bottom: 12px;
            color: #333;
            .red {
              color: $theme-color;
              margin-left: 0;
            }
            i {
              font-style: normal;
              color: #666;
              margin-left: 3px;
            }
          }
          .right-box {
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
        }
      }
    }
    .ant-btn {
      height: 33px;
      background: #f5a623;
      border-radius: 3px;
      border: none;
      box-shadow: none;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #fff;
      margin-top: 34px;
      margin-bottom: 111px;
      margin-left: 30px;
    }
  }
</style>
