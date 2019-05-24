<template>
  <div class="login-modal">
    <modal :isShow="visible" :options="options">
      <div slot="content" v-if="type != 'login'">
        <div class="alertContent">
          <div class="common">
            <div class="left-box">商品名称</div>
            <div class="right-box">
              <a-input
                placeholder="请输入商品名称"
                v-model="submitData.goodsName"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">商品图片</div>
            <div class="right-box">
              <upload
                v-on:getVal="getImgUrl"
                :imgUrl="submitData.goodsImage"
              ></upload>
            </div>
          </div>
          <div class="common">
            <div class="left-box">品牌</div>
            <div class="right-box">
              <a-input
                placeholder="请输入品牌"
                v-model="submitData.goodsBrand"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">型号</div>
            <div class="right-box">
              <a-input
                placeholder="请输入型号"
                v-model="submitData.goodsModel"
              ></a-input>
            </div>
          </div>
          <div class="common ">
            <div class="left-box">单价</div>
            <div class="right-box">
              <a-input
                placeholder="请输入单价"
                v-model="submitData.unitPrice"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">数量</div>
            <div class="right-box">
              <a-input
                placeholder="请输入数量"
                v-model="submitData.number"
              ></a-input>
            </div>
          </div>
          <div class="common ">
            <div class="left-box">单位</div>
            <div class="right-box">
              <a-input
                placeholder="请输入单位"
                v-model="submitData.unit"
              ></a-input>
            </div>
          </div>
          <div class="common ">
            <div class="left-box">到货时间</div>
            <div class="right-box">
              <a-input
                placeholder="请输入到货时间"
                v-model="submitData.arrivalTime"
              ></a-input>
            </div>
          </div>
          <div class="common remark">
            <div class="left-box">备注</div>
            <div class="right-box">
              <a-textarea
                class="textArea"
                placeholder="请输入备注"
                v-model="submitData.introduce"
              ></a-textarea>
            </div>
          </div>
        </div>
        <div class="btn">
          <a-button @click="saveAddress">保存修改</a-button>
          <a-button @click="cancelAddress">取消</a-button>
        </div>
      </div>
      <div slot="content" v-else>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconweidenglugantanhao"></use>
          </svg>
          你还没登录
        </p>
        <div class="btn">
          <a-button @click="toLogin">去登录</a-button>
          <a-button @click="visible = false">取消</a-button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import modal from "./modal.vue";
  import { _getData } from "../../config/getData";
  import upload from "../common/upload";
  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "编辑商品",
          closable: true,
          maskClosable: false,
          wrapClassName: "editQuote",
          centered: false
        },
        submitData: {
          goodsId: this.editId,
          goodsEnquirySn: this.goodsEnquirySn,
          goodsName: "",
          goodsImage: "",
          goodsBrand: "",
          goodsModel: "",
          unitPrice: "",
          unit: "",
          number: "",
          arrivalTime: "",
          introduce: ""
        }
      };
    },
    props: {
      Visible: {
        type: Boolean,
        default: false,
        required: true
      },
      type: {
        type: String,
        required: false
      },
      title: {
        type: String,
        default: "提交成功",
        required: false
      },
      editId: {},
      goodsEnquirySn: {}
    },
    components: {
      modal,
      upload
    },
    methods: {
      getImgUrl(val) {
        console.log(val);
        if (val.length > 0) {
          this.submitData.goodsImage = val[0];
        } else {
          this.submitData.goodsImage = "";
        }
      },
      toLogin() {
        const { href } = this.$router.resolve({
          path: "/login"
        });
        this.visible = false;
        window.open(href, "_blank");
      },
      saveAddress() {
        console.log(this.submitData);
        if (this.submitData.goodsId) {
          _getData("/enquiry/updateEnquiryGoods", this.submitData).then(data => {
            console.log(data);
            this.visible = false;
            this.$parent.visible = false;
            this.$emit("getIsUpdate", true);
          });
        } else {
          _getData("/enquiry/addEnquiryGoods", this.submitData).then(data => {
            console.log(data);
            this.visible = false;
            this.$parent.visible = false;
            this.$emit("getIsUpdate", true);
          });
        }
      },
      cancelAddress() {
        this.visible = false;
        this.$parent.visible = false;
      }
    },
    watch: {
      Visible(newVal) {
        this.visible = newVal;
        console.log(this.editId);
        if (typeof this.editId == "number") {
          _getData("/enquiry/getEnquiryGoods", {
            goodsEnquirySn: this.$route.params.id,
            goodsId: this.editId
          }).then(data => {
            console.log("获取产品详情：", data);
            this.submitData = data;
            console.log(this.submitData);
          });
        } else {
          this.submitData = {
            userName: "",
            phone: "",
            address: "",
            userLocation: "",
            postalCode: "075411",
            status: "0"
          };
        }
      },
      visible(newVal) {
        if (!newVal) {
          this.$parent.visible = false;
        }
      },
      editId(newVal) {
        console.log(newVal);
        // if (typeof newVal == "number") {
        //   _getData("/enquiry/getEnquiryGoods", {
        //     goodsEnquirySn: this.$route.params.id,
        //     goodsId: newVal
        //   }).then(data => {
        //     console.log("获取产品详情：", data);
        //     this.submitData = data;
        //   });
        // } else {
        //   this.submitData = {
        //     userName: "",
        //     phone: "",
        //     address: "",
        //     userLocation: "",
        //     postalCode: "075411",
        //     status: "0"
        //   };
        // }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
</style>