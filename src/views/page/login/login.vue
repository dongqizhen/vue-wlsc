<template>
  <div class="login">
    <div class="container">
      <div class="main-container">
        <h2 class="logo">
          <img src="../../../assets/images/logo.png" alt="" />
        </h2>
        <div class="login-container">
          <div class="banner">
            <img src="../../../assets/images/登录注册页插图.png" alt="" />
          </div>
          <div class="login-box">
            <a-tabs defaultActiveKey="1" @change="callback">
              <a-tab-pane tab="快速登录" key="1">
                <a-form :form="form" @submit="handleSubmit">
                  <a-form-item>
                    <a-input
                      placeholder="请输入手机号码"
                      maxlength="11"
                      v-decorator="[
                        'phone',
                        {
                          rules: [
                            {
                              required: true,
                              message: '请输入手机号码'
                            },
                            {
                              pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                              message: '请输入正确的手机号码'
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
                    </a-input>
                  </a-form-item>
                  <router-link to="#" class="register">立即注册</router-link>
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
              <a-tab-pane tab="密码登录" key="2" forceRender
                >Content of Tab Pane 2</a-tab-pane
              >
            </a-tabs>
          </div>
        </div>
        <div class="slogan">
          <span></span>
          这里写一句口号网来商城最棒
          <span></span>
        </div>
      </div>
    </div>
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

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";

  input::-webkit-input-placeholder {
    color: #ccc;
    font-size: 15px !important;
    //line-height: 30px;
    line-height: normal;
  }

  #app {
    height: 100%;
  }
  .login {
    height: 100%;
    background: #fdf6ea;
  }
  .container {
    background: #fdf6ea;
    padding: 0;

    .main-container {
      width: 1200px;
      margin: 0 auto;
      .logo {
        padding: 84px 0;
        padding-top: 65px;
        cursor: pointer;
      }
      .login-container {
        height: 535px;
        background: #fff;
        width: 948px;
        margin: 0 auto;
        box-shadow: 2px 7px 24px 0 rgba(241, 2, 21, 0.09);
        border-radius: 12px;
        display: flex;
        justify-content: flex-start;
        .banner {
        }
        .login-box {
          /* width: 508px; */
          height: 100%;
          flex: 1;
          margin-left: -14px;
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
                      }
                    }
                  }
                }
                .register {
                  display: flex;
                  justify-content: flex-end;
                  font-size: 14px;
                  color: #666666;
                  text-decoration: none;
                }
                .login-form-button {
                  width: 100%;
                  height: 50px;
                  margin-top: 20px;
                  background-image: linear-gradient(
                    270deg,
                    #ff4e1a 0%,
                    #f10000 100%
                  );
                  border-radius: 6px;
                  border: 0;
                  font-size: 18px;
                  color: #ffffff;
                  opacity: 0.32;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
      .slogan {
        font-size: 16px;
        color: #ee7322;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 77px;
        padding-bottom: 100px;
        span {
          display: flex;
          width: 124px;
          height: 2px;
          transform: scaleX(-1);
          background-image: linear-gradient(
            270deg,
            rgba(238, 115, 34, 0.5) 0%,
            #ee7322 99%
          );
        }
      }
    }
  }
</style>