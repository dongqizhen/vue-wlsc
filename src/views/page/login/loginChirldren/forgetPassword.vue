<template>
  <div class="forget-password">
    <h2>忘记密码</h2>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          placeholder="请输入手机号"
          maxlength="11"
          autocomplete="off"
          v-decorator="[
            'phone',
            {
              rules: [
                {
                  required: true,
                  message: '请输入手机号'
                },
                {
                  pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                  message: '请输入正确的手机号'
                }
              ],
              validateTrigger: 'change'
            }
          ]"
        >
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          placeholder="请输入新密码，长度不少于6位"
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
      <a-form-item>
        <a-input
          placeholder="请输入验证码"
          maxlength="6"
          v-decorator="[
            'seccode',
            {
              rules: [
                {
                  required: true,
                  message: '请输入验证码'
                }
              ]
            }
          ]"
        >
          <span slot="suffix">获取验证码</span>
        </a-input>
      </a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        :disabled="hasErrors(form.getFieldsError())"
      >
        确定
      </a-button>
    </a-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      callback() {},
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
          }
        });
      },
      hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }
    },
    beforeCreate() {
      this.form = this.$form.createForm(this);
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .forget-password {
    width: 100%;
    height: 100%;
    padding: 0 71px;
    padding-top: 85px;
    > h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: #333333;
      margin-bottom: 34px;
    }
    /deep/ .ant-form {
      .ant-row {
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 20px;
        }

        .ant-form-item-control-wrapper {
          .ant-form-item-control {
            position: relative;
            .ant-form-explain {
              height: 30px;
              position: absolute;
              right: 0;
              top: 1px;
              display: flex;
              align-items: center;
              pointer-events: none;
              font-size: 14px;
              color: #f11f1f;
            }
            .ant-form-item-children {
              height: 30px;
              align-items: center;
              display: flex;
              input::-webkit-input-placeholder {
                color: #ccc;
                font-size: 15px !important;
                //line-height: 30px;
                line-height: normal;
              }
              input {
                border: none;
                padding-left: 0;
                border-bottom: 1px solid #cccccc;
                border-radius: 0;
                // height: 30px;
                color: #333333;
                font-size: 18px;
                padding: 0;
                line-height: 30px;
                display: flex;
                align-items: center;
                &:focus {
                  box-shadow: none;
                }
              }
              .ant-input-suffix {
                right: 0;
                cursor: pointer;
                font-size: 13px;
                color: #999999;
              }
            }
          }
        }
        &:nth-child(3) {
          .ant-form-item-control-wrapper {
            .ant-form-item-control {
              .ant-form-explain {
                top: -20px !important;
              }
            }
          }
        }
      }
      .register-box {
        display: flex;
        justify-content: flex-end;
        a {
          text-decoration: none;
          display: flex;
          justify-content: flex-end;
          font-size: 14px;
          color: #666666;
          text-decoration: none;
          &:hover {
            opacity: 0.7;
          }
        }
      }

      .login-form-button {
        width: 100%;
        height: 50px;
        //margin-top: 20px;
        background-image: linear-gradient(270deg, #ff4e1a 0%, #f10000 100%);
        border-radius: 6px;
        border: 0;
        font-size: 18px;
        color: #ffffff;
        opacity: 0.32;
        font-weight: 600;
      }
    }
    &:last-child {
      .ant-row {
        &:nth-child(2) {
          .ant-form-item-control-wrapper {
            .ant-form-item-control {
              .ant-form-explain {
                top: 0px !important;
              }
            }
          }
        }
      }
      .register-box {
        justify-content: space-between;
      }
    }
  }
</style>