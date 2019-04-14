<template>
  <div class="brand-card">
    <div class="img_box">
      <div class="img"></div>
      监护除颤仪
    </div>
    <div class="introduce">
      <p>
        产品适用范围除颤监护仪临床上主要用于医院或急救车上对病人进行1.
        生命体征监护(心电、血氧、无创血压)2.
        体外除颤(电极板、粘性电极、AED除颤)3. 体内除颤(体内除颤电极)4. 起博。
        产品适用范围除颤监护仪临床上主要用于医院或急救车上对病人进行1.
        生命体征监护(心电、血氧、无创血压)2.
        体外除颤(电极板、粘性电极、AED除颤)3. 体内除颤(体内除颤电极)4. 起博…
      </p>
      <span>
        查看更多
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icongengduoxialajiantou"></use>
        </svg>
      </span>
      <div class="bottom-shadow"></div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .brand-card {
    display: flex;
    flex-direction: column;
    .img_box {
      font-size: 17px;
      color: #333333;
      font-weight: 600;
      background: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 27px 28px;
      box-shadow: $base-box-shadow;
      .img {
        width: 180px;
        height: 113px;
        background: $base-background;
        margin-bottom: 25px;
      }
    }
    .introduce {
      padding: 14px;
      padding-bottom: 16px;
      padding-top: 8px;
      background: #fff;
      margin-top: 12px;
      box-shadow: $base-box-shadow;
      position: relative;
      p {
        font-size: 14px;
        color: #666666;
        letter-spacing: 0;
        line-height: 27px;
      }
      span {
        font-size: 12px;
        color: #019ddd;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 6px;
        cursor: pointer;
        .icon {
          height: 6px;
          width: 10px;
          margin-left: 4px;
          margin-top: 1px;
        }
      }
      .bottom-shadow {
        background: url("../../assets/images/shopBottomShadow.png") no-repeat
          center;
        height: 18px;
        position: absolute;
        bottom: -12px;
        width: 100%;
        left: 0;
      }
    }
  }
</style>