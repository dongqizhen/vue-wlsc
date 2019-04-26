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
          <a-input placeholder="请输入原密码"></a-input>
        </div>
      </div>
      <div class="common">
        <div class="left-box">新密码</div>
        <div class="right-box">
          <a-input placeholder="请输入新密码"></a-input>
        </div>
      </div>
      <div class="common">
        <div class="left-box">确认密码</div>
        <div class="right-box">
          <a-input placeholder="请再次输入新密码"></a-input>
        </div>
      </div>
      <div class="common btnBox">
        <div class="left-box"></div>
        <div class="right-box">
          <div class="btn submit">确定</div>
          <div class="btn cancel">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import commonTitle from "../common/merchantRightCommonTitle";
  export default {
    data() {
      return {};
    },
    components: {
      commonTitle
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
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


