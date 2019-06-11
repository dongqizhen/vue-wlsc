<template>
  <div class="howToOpenShop">
    <guide-right title="如何注册">
      <div class="info" slot="contentInfo">
        <p>
          1、如果您是新用户，还没有网来商城账号，您可点击顶部的“免费注册”按钮进行快速注册。
        </p>
        <p>
          2、进入注册页面，填写相对应的信息，并请牢记您的密码，然后通过手机验证码进行验证注册。
        </p>
        <p>
          3、点击“登录”，即注册成功；
        </p>
        <p>
          4、您也可以使用微信注册登录，点击微信按钮；
        </p>
        <p>
          5、进入绑定手机页面，输入手机号，然后通过手机验证码进行验证注册，一旦登陆成功，下次可直接用微信扫码登录。
        </p>
      </div>
    </guide-right>
  </div>
</template>
<script>
  import guideRight from "../../../../components/common/guideRight";
  export default {
    data() {
      return {};
    },
    components: {
      guideRight
    }
  };
</script>
<style lang="scss" scoped>
  p {
    text-indent: 2em;
    line-height: 32px;
    color: #333;
    font-size: 16px;
  }
</style>
