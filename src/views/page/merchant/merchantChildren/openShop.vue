<template>
  <div class="openShop">
    <div class="steps-head">
      <div class="title">我要开店</div>
      <div class="flowChart">
        <div class="content">
          <a-steps
            :current="current"
            :class="current == 2 ? 'finishAfter' : ''"
          >
            <a-step
              v-for="(item, index) in steps"
              :key="index"
              :title="item"
              :status="
                current == index
                  ? 'process'
                  : current > index
                  ? 'finish'
                  : 'wait'
              "
            >
              <a-icon slot="icon" v-if="current > index" class="icon">
                <use xlink:href="#iconwancheng1"></use>
              </a-icon>
            </a-step>
          </a-steps>
        </div>
      </div>
    </div>
    <div class="steps-content">
      <shop-info
        v-show="current == 0"
        :isOpenShop="true"
        :current="current"
        v-on:getShopInfo="getShopInfo"
      ></shop-info>
      <shop-certification
        v-show="current == 1"
        :isOpenShop="true"
        :current="current"
        v-on:cancel="cancel"
        v-on:sure="sure"
      ></shop-certification>
      <div class="submitSuccessOrFailure" v-if="current == 2">
        <svg class="icon" aria-hidden="true">
          <use
            xlink:href="#iconzhanghaoanquanduigou"
            v-if="certificationStatus == 2"
          ></use>
          <use
            xlink:href="#iconzhanghaoanquancuowu"
            v-else-if="certificationStatus == 1"
          ></use>
        </svg>
        <div class="description">
          {{
            certificationStatus == 2
              ? "您的开店申请已经提交成功，后台正在认证中，三个工作日内给您反馈，请耐心等待…"
              : "抱歉，您提交的资料有误，请点击“重新审核”进行认证或联系客服。"
          }}
        </div>
        <a-button class="reset" @click="reset" v-if="certificationStatus == 1"
          >重新审核</a-button
        >
      </div>
    </div>
  </div>
</template>
<script>
  import shopInfo from "./shopInfo";
  import shopCertification from "./shopCertification";
  export default {
    data() {
      return {
        current: 0,
        steps: ["填写店铺信息", "填写认证资料", "完成认证"],
        certificationStatus: 2
      };
    },
    methods: {
      getShopInfo(val) {
        // console.log(val);
        this.current = val.current + 1;
      },
      cancel(val) {
        // console.log(val);
        this.current = val - 1;
      },
      sure(val) {
        this.current = val + 1;
      },
      reset() {
        this.current = 0;
      }
    },
    components: {
      shopInfo,
      shopCertification
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  .openShop {
    .steps-head {
      height: 192px;
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      margin-bottom: 16px;
      padding: 0 20px;
      .title {
        height: 85px;
        line-height: 85px;
        border-bottom: $border-style;
        text-align: center;
        font-weight: 600;
        font-size: 18px;
        color: #000;
      }
      .flowChart {
        width: 100%;
        height: 108px;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          width: 630px;
          height: 48px;
          /deep/.ant-steps {
            height: 100%;
            .ant-steps-item {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              padding-left: 7px;
              .ant-steps-item-icon {
                width: 34px;
                height: 34px;
                line-height: 34px;
                border-radius: 50%;
                font-size: 18px;
                font-weight: 600;
              }
            }
            .ant-steps-item-process {
              .ant-steps-item-icon {
                background-color: #f5a623;
                border-color: #f5a623;
                box-shadow: 0 0 0 7px rgba(245, 166, 35, 0.22);
                margin-right: 16px;
              }
            }
            .ant-steps-item-finish {
              .ant-steps-icon {
                width: 34px;
                height: 34px;
                line-height: 34px;
                .icon {
                  width: 34px;
                  height: 34px;
                  svg {
                    width: 34px;
                    height: 34px;
                  }
                }
              }
              .ant-steps-item-content {
                .ant-steps-item-title:after {
                  width: 100px;
                  background-image: linear-gradient(
                    270deg,
                    #f5a623 21%,
                    #7ed321 100%
                  );
                }
              }
            }
            &.finishAfter {
              .ant-steps-item-finish {
                &:first-child {
                  .ant-steps-item-content {
                    .ant-steps-item-title:after {
                      width: 100px;
                      background: #7ed321;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .steps-content {
      width: 100%;
      .submitSuccessOrFailure {
        height: 437px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
        .icon {
          width: 60px;
          height: 60px;
          margin-bottom: 30px;
        }
        .description {
          width: 378px;
          text-align: center;
          font-weight: 600;
          font-size: 18px;
          color: #333333;
          margin-bottom: 42px;
        }
      }
      .reset {
        width: 104px;
        height: 33px;
        background: #f5a623;
        border-radius: 3px;
        border: 1px solid #f5a623;
        box-shadow: none;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #fff;
      }
    }
  }
</style>
