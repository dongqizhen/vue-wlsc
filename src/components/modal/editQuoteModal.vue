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
              <!-- <a-input
                placeholder="请输入到货时间"
                v-model="submitData.arrivalTime"
              ></a-input> -->
              <a-date-picker
                :format="'YYYY-MM-DD'"
                @change="onDateChange"
                :defaultValue="moment(`${initialArrivalTime}`, 'YYYY-MM-DD')"
              />
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
  import moment from "moment";
  const initialArrivalTime = new Date().toLocaleDateString().replace(/\//g, "-");
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
          goodsName: "",
          goodsImage: "",
          goodsBrand: "",
          goodsModel: "",
          unitPrice: "",
          unit: "",
          number: "",
          arrivalTime: "",
          introduce: ""
        },
        initialArrivalTime: initialArrivalTime
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
      editId: {}
    },
    components: {
      modal,
      upload
    },
    methods: {
      moment,
      onDateChange(date, dataString) {
        console.log(date, dataString);
        this.submitData.arrivalTime = dataString;
      },
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
          this.submitData.goodsId = this.editId;
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
          this.options.title = "编辑商品";
          _getData("/quotation/goodsDetail", {
            param: {
              id: this.editId
            }
          }).then(data => {
            console.log("获取产品详情：", data);
            this.submitData = data;
            console.log(this.submitData);
            console.log(this.initialArrivalTime);
            console.log(this.submitData.arrivalTime);
            if (data.arrivalTime) {
              this.initialArrivalTime = data.arrivalTime;
            } else {
              this.initialArrivalTime = this.initialArrivalTime;
            }
          });
        } else {
          this.submitData = {
            goodsName: "",
            goodsImage: "",
            goodsBrand: "",
            goodsModel: "",
            unitPrice: "",
            unit: "",
            number: "",
            arrivalTime: "",
            introduce: ""
          };
          this.submitData.goodsImage = "initial";
          this.options.title = "添加商品";
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
    },
    mounted() {
      this.submitData.arrivalTime = this.initialArrivalTime;
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
</style>