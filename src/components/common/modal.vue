<template>
  <div class="modal">
    <!-- <a-button type="primary" @click="showModal">
      Open Modal with customized button props
    </a-button> -->
    <a-modal
      :title="options.title"
      v-model="visible"
      @ok="handleOk"
      :afterClose="afterClose"
      :wrapClassName="options.wrapClassName"
      :maskStyle="
        options.maskStyle || {
          'background-color': 'rgba(0, 0, 0, 0.17)'
        }
      "
      :footer="options.footer || null"
    >
      <div slot="ofooter">
        footer
      </div>
      <slot name="content"></slot>
    </a-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: () => ({
          title: "",
          closable: true,
          maskClosable: true,
          wrapClassName: "",
          maskStyle: {
            "background-color": "rgba(0, 0, 0, 0.17)"
          }
        }),
        required: false
      }
    },
    methods: {
      handleOk(e) {
        console.log(this);
        this.visible = false;
        this.$parent.visible = false;
      },
      afterClose() {
        this.visible = false;
        this.$parent.visible = false;
      }
    },
    mounted() {
      console.log(this.options);
    },
    computed: {},
    watch: {
      isShow(newVal, oldval) {
        this.visible = newVal;
      }
    }
  };
</script>

<style  lang="scss">
  @import "../../assets/scss/_commonScss";
  body .ant-modal-mask {
    background: rgba(0, 0, 0, 0.17);
  }
  .ant-modal-wrap {
    .ant-modal-content {
      .ant-modal-close {
        height: 38px;
        width: 38px;
        .ant-modal-close-x {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            height: 15px;
            width: 15px;
          }
        }
      }
      .ant-modal-header {
        border-bottom: 0;
        padding: 0;
        height: 38px;
        background: #f6f6f6;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .ant-modal-title {
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          padding-left: 20px;
        }
      }
    }
  }
  .commonBrand {
    .ant-modal {
      width: 863px !important;
      .ant-modal-header {
        margin-bottom: 15px;
      }
      .ant-modal-body {
        padding: 0 23px;
        h2 {
          height: 57px;
          display: flex;
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          color: #000000;
          justify-content: flex-start;
          align-items: center;
          line-height: 18px;
          font-weight: 500;
          span {
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: #999999;
            margin-left: 8px;
            line-height: 15px;
            margin-top: 2px;
          }
        }
        .common_brand {
          margin-bottom: 24px;
          ul {
            background: #f5f5f5;
            border-radius: 4px;
            padding: 0 20px;
            padding-top: 21.5px;
            display: flex;
            justify-content: flex-start;

            li {
              width: 97px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-right: 10px;
              font-family: PingFangSC-Semibold;
              font-size: 13px;
              color: #333333;
              margin-bottom: 21.5px;
              position: relative;
              cursor: pointer;
              .img_box {
                background: #fff;
                width: 100%;
                height: 70px;
                margin-bottom: 6px;
              }
              i {
                position: absolute;
                right: -7px;
                top: -7px;
                cursor: pointer;
                .icon {
                  height: 14px;
                  width: 14px;
                }
              }
            }
          }
        }
        .all_brand {
          .word_nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 28.5px;
            height: 28.5px;
            > span {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 20px;
              width: 40px;
              background: rgba(241, 2, 21, 0.03);
              border: 0.5px solid $theme-color;
              font-family: PingFangSC-Medium;
              font-size: 12px;
              color: $theme-color;
              margin-right: 6px;
            }
            ul {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex: 1;
              height: 100%;
              li {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #666666;
                padding: 0 6.5px;
                cursor: pointer;
                height: 100%;
                line-height: 28.5px;
                &:hover {
                  color: $theme-color;
                }
              }
            }
            .inp_box {
              height: 28.5px;
              width: 181.5px;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              background: #ffffff;
              border: 1px solid $theme-color;
              input {
                flex: 1;
                width: 122.5px;
                height: 100%;
                font-family: PingFangSC-Regular;
                font-size: 13px;
                //color: #999999;
                padding-left: 11.5px;
                color: #000;
              }
              span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 59px;
                height: 100%;
                cursor: pointer;
                background-image: linear-gradient(
                  90deg,
                  #ff4e1a 0%,
                  #f10000 100%
                );
                font-family: PingFangSC-Medium;
                font-size: 13px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
</style>