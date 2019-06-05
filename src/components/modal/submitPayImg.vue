<template>
  <div class="login-modal">
    <modal :isShow="visible" :options="options">
      <div slot="content" v-if="type != 'login'">
        <div class="alertContent">
          <upload v-on:getVal="getImgUrl"></upload>
        </div>
        <p>支持格式：jpg/png</p>
        <div class="btn">
          <a-button @click="sure">确定</a-button>
          <a-button @click="cancel">取消</a-button>
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
  import upload from "../common/upload";
  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "上传支付证明",
          closable: true,
          maskClosable: false,
          wrapClassName: "submitPay",
          centered: false
        },
        submitData: {
          imgUrl: ""
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
      }
    },
    components: {
      modal,
      upload
    },
    methods: {
      toLogin() {
        const { href } = this.$router.resolve({
          path: "/login"
        });
        this.visible = false;
        window.open(href, "_blank");
      },
      getImgUrl(val) {
        console.log(val);
        this.submitData.imgUrl = val[0];
      },
      sure() {
        //上传后台接口
      },
      cancel() {
        this.visible = false;
      }
    },
    watch: {
      Visible(newVal) {
        this.visible = newVal;
      },
      visible(newVal) {
        if (!newVal) {
          this.$parent.visible = false;
          this.$parent.payVisible = false;
          this.$parent.sureVisible = false;
          this.$parent.commentVisible = false;
          this.$parent.deleteVisible = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
</style>