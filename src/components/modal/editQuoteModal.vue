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
                v-model="submitData.userName"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">品牌</div>
            <div class="right-box">
              <a-input
                placeholder="请输入联系方式"
                v-model="submitData.phone"
                @change="onChange"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">型号</div>
            <div class="right-box">
              <a-input
                placeholder="请输入收货人姓名"
                v-model="submitData.userLocation"
              ></a-input>
            </div>
          </div>
          <div class="common ">
            <div class="left-box">单价</div>
            <div class="right-box">
              <a-input
                placeholder="请输入单价"
                v-model="submitData.address"
              ></a-input>
            </div>
          </div>
          <div class="common">
            <div class="left-box">数量</div>
            <div class="right-box">
              <a-input
                placeholder="请输入数量"
                v-model="submitData.address"
              ></a-input>
            </div>
          </div>
          <div class="common ">
            <div class="left-box">单位</div>
            <div class="right-box">
              <a-input
                placeholder="请输入单位"
                v-model="submitData.address"
              ></a-input>
            </div>
          </div>
          <div class="common remark">
            <div class="left-box">备注</div>
            <div class="right-box">
              <a-textarea
                placeholder="请输入备注"
                v-model="submitData.address"
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

  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "编辑商品",
          closable: true,
          maskClosable: false,
          wrapClassName: "addAddress",
          centered: false
        },
        submitData: {
          userName: "",
          phone: "",
          address: "",
          userLocation: "",
          postalCode: "075411",
          status: "0"
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
      editId: {}
    },
    components: {
      modal
    },
    methods: {
      onChange(val) {
        console.log(val);
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
        if (this.submitData.id) {
          _getData(
            `${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`,
            {
              method: "updateUserAddress",
              userid: "15301",
              token: "09a52ead-ef25-411d-8ac2-e3384fceed68",
              params: this.submitData
            }
          ).then(data => {
            console.log(data);
            this.visible = false;
            this.$parent.visible = false;
          });
        } else {
          _getData(
            `${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`,
            {
              method: "addUserAddress",
              userid: "15301",
              token: "09a52ead-ef25-411d-8ac2-e3384fceed68",
              params: this.submitData
            }
          ).then(data => {
            console.log(data);
            this.visible = false;
            this.$parent.visible = false;
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
      },
      visible(newVal) {
        if (!newVal) {
          this.$parent.visible = false;
        }
      },
      editId(newVal) {
        console.log(newVal);
        if (typeof newVal == "number") {
          _getData(
            `${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`,
            {
              method: "getUserAddressById",
              userid: "15301",
              token: "09a52ead-ef25-411d-8ac2-e3384fceed68",
              params: { userAddressId: newVal }
            }
          ).then(data => {
            console.log(data);
            this.submitData = data.data.result;
            this.submitData.id = newVal;
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
</style>