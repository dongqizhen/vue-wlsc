<template>
  <div class="commonPassword">
    <commonTitle title="账号安全">
      <div class="infoPath" slot="infoPath">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconxiangqianfan"></use>
        </svg>
        <span>更改密码</span>
      </div>
    </commonTitle>
    <div class="contentBox">
      <div class="common">
        <div class="left-box">原密码</div>
        <div class="right-box">
          <a-form-item
            :validate-status="Error('password') ? 'error' : ''"
            :help="Error('password') || ''"
          >
            <transition name="slide-fade">
              <span v-if="password_err" class="extra password_err">
                密码错误
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconxingzhuang2"></use>
                </svg>
              </span>
            </transition>
            <a-input
              placeholder="请输入密码"
              type="password"
              autocomplete="off"
              @change="passwordChange"
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    }
                  ]
                }
              ]"
            >
              <!-- <span slot="suffix">获取验证码</span> -->
            </a-input>
          </a-form-item>
        </div>
      </div>
      <div class="common">
        <div class="left-box">新密码</div>
        <div class="right-box">
          <a-form-item
            :validate-status="Error('password') ? 'error' : ''"
            :help="Error('password') || ''"
          >
            <a-input
              placeholder="请输入新密码，长度不少于6位"
              autocomplete="off"
              type="password"
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码'
                    },
                    {
                      pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,
                      message: '由字母和数字组成，长度不少于6位'
                    }
                  ],
                  validateTrigger: 'change'
                }
              ]"
            >
            </a-input>
          </a-form-item>
        </div>
      </div>
      <div class="common">
        <div class="left-box">确认密码</div>
        <div class="right-box">
          <a-form-item
            :validate-status="Error('confirmPassword') ? 'error' : ''"
            :help="Error('confirmPassword') || ''"
          >
            <a-input
              placeholder="请再次输入密码"
              autocomplete="off"
              type="password"
              v-decorator="[
                'confirmPassword',
                {
                  rules: [
                    {
                      required: true,
                      message: '请确认密码'
                    },
                    {
                      validator: compareToFirstPassword
                    }
                  ],
                  validateTrigger: 'change'
                }
              ]"
            >
            </a-input>
          </a-form-item>
        </div>
      </div>
      <div class="common btnBox">
        <div class="left-box"></div>
        <div class="right-box">
          <div class="btn submit" @click="sure">确定</div>
          <div class="btn cancel" @click="cancel">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { FormValidator } from "../../components/mixin/mixin";
  import commonTitle from "../common/merchantRightCommonTitle";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        password_err: false,
        submitData: {
          oldPassword: "",
          newPassword: "",
          moreNewPassword: ""
        }
      };
    },
    mixins: [FormValidator],
    methods: {
      sure() {
        console.log();
      },
      cancel() {
        this.$router.go(-1);
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.form;
        if (value && value !== form.getFieldValue("password")) {
          callback("两次输入密码不一致");
        } else {
          callback();
        }
      },
      passwordChange() {
        this.password_err = false;
      }
    },
    components: {
      commonTitle
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  @import "../../assets/scss/_input";
  .commonPassword {
    padding: 0 20px;
    background-color: #fff;
    min-height: 693px;
    box-shadow: $base-box-shadow;
    .contentBox {
      margin-top: 24px;
      .common {
        display: flex;
        margin-bottom: 30px;
        align-items: center;
        .left-box {
          width: 76px;
          font-size: 14px;
          color: #333333;
          font-weight: 600;
        }
        .right-box {
          height: 34px;
          @include placeholderStyle;
          input {
            width: 389px;
          }
        }
      }
      .btnBox {
        .right-box {
          display: flex;
          .btn {
            padding: 0 18px;
            height: 33px;
            line-height: 33px;
            margin-right: 15px;
            font-size: 14px;
            cursor: pointer;
          }
          .submit {
            background: #f5a623;
            border-radius: 3px;
            color: #fff;
          }
          .cancel {
            border: 1px solid #cccccc;
            border-radius: 3px;
          }
        }
      }
    }
  }
</style>


