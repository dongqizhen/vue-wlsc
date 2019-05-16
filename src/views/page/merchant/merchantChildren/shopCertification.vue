<template>
  <div class="shopCertification">
    <div class="basicInformation">
      <commonTitle title="认证材料">
        <span slot="titleRight" class="certificationStatus" v-if="!isOpenShop">
          <svg class="icon" aria-hidden="true">
            <use
              xlink:href="#iconbaojiazhong"
              v-if="certificationStatus == 1"
            ></use>
            <use
              xlink:href="#iconyibaojia"
              v-else-if="certificationStatus == 2"
            ></use>
            <use xlink:href="#iconbaojiazhong" v-else></use>
          </svg>
          认证状态：{{
            certificationStatus == 1
              ? "认证中"
              : certificationStatus == 2
              ? "已认证"
              : "未认证"
          }}
        </span>
      </commonTitle>
      <div class="informationContent">
        <div class="title">基本信息</div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>公司名称</div>
          <div class="right-box">
            <a-input
              placeholder="请输入公司名称"
              v-model="submitData.companyName"
            />
          </div>
        </div>
        <div class="common companyAddress">
          <div class="left-box"><span class="red">*</span>公司地址</div>
          <div class="right-box">
            <a-cascader
              :fieldNames="{ label: 'name', value: 'id', children: 'children' }"
              :loadData="loadData"
              :options="options"
              @change="onChange"
              placeholder="请选择省/市/区"
              :defaultValue="defaultCascaderValue"
              style="width: 390px"
              changeOnSelect
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
            </a-cascader>
          </div>
        </div>
        <div class="common companyIntroduce">
          <div class="left-box"><span class="red">*</span>公司介绍</div>
          <div class="right-box">
            <a-textarea
              placeholder="请在这里对公司做一个介绍"
              type="textarea"
              v-model="submitData.companyIntroduction"
              class="noInput"
            />
          </div>
        </div>
        <div class="common ">
          <div class="left-box">法定代表人</div>
          <div class="right-box">
            <a-input
              placeholder="请输入法定代表人"
              v-model="submitData.checking"
            />
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>联系人</div>
          <div class="right-box">
            <a-input
              placeholder="请输入联系人"
              v-model="submitData.link_name"
            />
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>手机号</div>
          <div class="right-box">
            <a-input placeholder="请输入手机号" v-model="submitData.mobile" />
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>办公室电话</div>
          <div class="right-box">
            <a-input
              placeholder="请输入办公室电话"
              v-model="submitData.workPhone"
            />
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>企业邮箱</div>
          <div class="right-box">
            <a-input
              placeholder="请输入企业邮箱"
              v-model="submitData.companyEmail"
            />
          </div>
        </div>
        <div class="common ">
          <div class="left-box">传真</div>
          <div class="right-box">
            <a-input placeholder="请输入传真" v-model="submitData.fax" />
          </div>
        </div>
        <!-- <div class="common ">
          <div class="left-box">开户银行</div>
          <div class="right-box">
            <a-input placeholder="请输入开户银行" v-model="submitData.bank" />
          </div>
        </div>
        <div class="common ">
          <div class="left-box">开户账号</div>
          <div class="right-box">
            <a-input
              placeholder="请输入开户账号"
              v-model="submitData.bankNum"
            />
          </div>
        </div> -->
        <div class="common ">
          <div class="left-box">QQ号</div>
          <div class="right-box">
            <a-input placeholder="请输入QQ号" v-model="submitData.qqCode" />
          </div>
        </div>
        <div class="common ">
          <div class="left-box">微信号</div>
          <div class="right-box">
            <a-input
              placeholder="请输入微信号"
              v-model="submitData.weiXinCode"
            />
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
            <upload v-on:getVal="getLicenseUrl"></upload>
          </div>
        </div>
        <div class="common companyTaxRegistration">
          <div class="left-box">税务登记证</div>
          <div class="right-box">
            <upload v-on:getVal="getTaxRegistrationUrl"></upload>
          </div>
        </div>
        <div class="common companyProductionLicense">
          <div class="left-box">医疗器械经营或生产许可证</div>
          <div class="right-box">
            <upload v-on:getVal="getProductionLicenseUrl"></upload>
          </div>
        </div>
      </div>
    </div>
    <div class="submit">
      <a-button @click="cancel" v-if="isOpenShop" class="cancel">
        上一步
      </a-button>
      <a-button @click="submit">提交审核</a-button>
    </div>
    <submit-success-modal
      :Visible="visible"
      :type="type"
    ></submit-success-modal>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import upload from "../../../../components/common/upload";
  import submitSuccessModal from "../../../../components/modal/submitSuccessModal";
  import { mapState } from "vuex";
  import { _getData } from "../../../../config/getData";
  import _ from "lodash";
  export default {
    data() {
      return {
        visible: false,
        type: "",
        certificationStatus: 2,
        defaultCascaderValue: [],
        submitData: {
          companyName: "",
          address: [],
          companyIntroduction: "",
          checking: "",
          link_name: "",
          mobile: "",
          workPhone: "",
          companyEmail: "",
          fax: "",
          bank: "",
          bankNum: "",
          qqCode: "",
          weiXinCode: "",
          licenseUrl: "",
          taxRegistrationUrl: "",
          productionLicenseUrl: ""
        },
        options: []
      };
    },
    props: {
      isOpenShop: {
        type: Boolean
      },
      current: {
        type: Number
      }
    },
    methods: {
      submit() {
        console.log(this.submitData);
        if (this.submitData.companyName == "") {
          alert("请输入公司名称");
          return;
        }
        if (this.submitData.address.length == 0) {
          alert("请选择公司地址");
          return;
        }
        if (this.submitData.companyIntroduction == "") {
          alert("请输入公司介绍");
          return;
        }
        if (this.submitData.link_name == "") {
          alert("请输入联系人");
          return;
        }
        if (this.submitData.mobile == "") {
          alert("请输入手机号");
          return;
        }
        if (this.submitData.workPhone == "") {
          alert("请输入办公室电话");
          return;
        }
        if (this.submitData.companyEmail == "") {
          alert("请输入企业邮箱");
          return;
        }

        if (this.submitData.licenseUrl == "") {
          alert("请上传营业执照");
          return;
        }
        if (this.isOpenShop) {
          this.$emit("sure", this.current);
        } else {
          this.addCarSuccess();
        }
      },
      cancel() {
        this.$emit("cancel", this.current);
      },
      addCarSuccess() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.visible = true;
      },
      onChange(val) {
        console.log(val);
        this.submitData.address = val;
      },
      loadData(selectedOptions) {
        console.log("111111", selectedOptions);
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        if (selectedOptions.length == 1) {
          console.log("获取市");
          _getData("/api/address/getCity", { provinceId: targetOption.id }).then(
            data => {
              targetOption.loading = false;
              targetOption.children = _.map(data, value => {
                if (
                  selectedOptions[0].name != "北京市" &&
                  selectedOptions[0].name != "天津市" &&
                  selectedOptions[0].name != "重庆市" &&
                  selectedOptions[0].name != "上海市"
                ) {
                  return (value = { ...value, isLeaf: false });
                } else {
                  return (value = { ...value, isLeaf: true });
                }
              });
              this.options = [...this.options];
            }
          );
        } else {
          console.log("获取区");
          if (
            selectedOptions[0].name != "北京市" &&
            selectedOptions[0].name != "天津市" &&
            selectedOptions[0].name != "重庆市" &&
            selectedOptions[0].name != "上海市"
          ) {
            _getData("/api/address/getCounty", {
              provinceId: selectedOptions[0].id,
              cityId: targetOption.id
            }).then(data => {
              targetOption.loading = false;
              targetOption.children = data;
              this.options = [...this.options];
            });
          } else {
            targetOption.loading = false;
          }
        }
      },
      getLicenseUrl(val) {
        if (val.length) {
          this.submitData.licenseUrl = val[0].url;
        } else {
          this.submitData.licenseUrl = "";
        }
      },
      getTaxRegistrationUrl(val) {
        if (val.length) {
          this.submitData.taxRegistrationUrl = val[0].url;
        } else {
          this.submitData.licenseUrl = "";
        }
      },
      getProductionLicenseUrl(val) {
        if (val.length) {
          this.submitData.productionLicenseUrl = val[0].url;
        } else {
          this.submitData.licenseUrl = "";
        }
      }
    },
    computed: {
      ...mapState(["isLogin"])
    },
    components: {
      upload,
      commonTitle,
      submitSuccessModal
    },
    mounted() {
      _getData("/api/address/getProvince", {}).then(data => {
        console.log(data);
        this.options = _.map(data, value => {
          return (value = { ...value, isLeaf: false });
        });
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  @import "../../../../assets/scss/_input";
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
        @include placeholderStyle;
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
      &.cancel {
        background-color: #9b9b9b;
      }
    }
  }
</style>
