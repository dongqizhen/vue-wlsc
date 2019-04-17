<template>
  <div class="login-up">
    <a-tabs defaultActiveKey="1" @change="callback">
      <a-tab-pane tab="快速登录" key="1">
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
          <div class="register-box">
            <router-link to="register" class="register" replace>
              立即注册
            </router-link>
          </div>

          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form>
      </a-tab-pane>
      <a-tab-pane tab="密码登录" key="2" forceRender>
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
              placeholder="请输入密码"
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
          <div class="register-box">
            <router-link to="forgetPassword" class="forget-password">
              忘记密码
            </router-link>
            <router-link to="register" class="register" replace>
              立即注册
            </router-link>
          </div>

          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form>
      </a-tab-pane>
    </a-tabs>
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
  .login-up {
    height: 100%;
    width: 100%;
    padding: 0 71px;
    padding-top: 87px;
    /deep/ .ant-tabs-top {
      .ant-tabs-bar {
        border-bottom: 0;
        margin-bottom: 0;
        margin-bottom: 60px;
        .ant-tabs-nav-container {
          .ant-tabs-nav-wrap {
            .ant-tabs-nav {
              width: 100%;

              > div:not(.ant-tabs-ink-bar) {
                display: flex;
                justify-content: center;
                .ant-tabs-tab {
                  padding: 0;
                  margin: 0;
                  font-size: 18px;
                  color: #999999;
                  &:not(.ant-tabs-tab-active):hover {
                    opacity: 0.7;
                  }
                  &:first-child {
                    margin-right: 100px;
                  }
                  &.ant-tabs-tab-active {
                    font-size: 18px;
                    color: #000000;
                    font-weight: 600;
                  }
                }
              }
              .ant-tabs-ink-bar {
                display: none !important;
              }
            }
          }
        }
      }
      .ant-tabs-content {
        .ant-tabs-tabpane {
          .ant-form {
            .ant-row {
              margin-bottom: 20px;
              &:first-child {
                margin-bottom: 40px;
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
              &:nth-child(2) {
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
              margin-top: 20px;
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
      }
    }
  }
</style>