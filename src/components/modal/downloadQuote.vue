<template>
  <div class="login-modal">
    <modal :isShow="visible" :options="options">
      <div slot="content" v-if="type != 'login'">
        <div class="orderInfo">
          <div class="common">
            <div class="left-box">
              邮箱地址
            </div>
            <div class="right-box">
              <a-input placeholder="请输入邮箱" v-model="email"></a-input>
            </div>
          </div>
        </div>
        <div class="btn">
          <a-button @click="sureOrder">确认下载</a-button>
          <a-button @click="visible = false">取消</a-button>
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
        email: "",
        visible: false,
        options: {
          title: "下载",
          closable: true,
          maskClosable: false,
          wrapClassName: "confirmDelivery",
          centered: false
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
      quoteId: {
        type: [String, Number]
      }
    },
    components: {
      modal
    },
    methods: {
      toLogin() {
        const { href } = this.$router.resolve({
          path: "/login"
        });
        this.visible = false;
        window.open(href, "_blank");
      },
      sureOrder() {
        if (!this.email) {
          this.$message.warning("请输入邮箱");
          return;
        }
        _getData("/quotation/queryProjectInfoBySchemeId", {
          id: this.quoteId,
          toAddress: this.email
        }).then(data => {
          console.log(data);
          this.visible = false;
        });
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
</style>