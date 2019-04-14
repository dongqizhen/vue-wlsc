<template>
  <router-link class="model-item" tag="li" to="model">
    <a target="_blank">
      <div class="img_box">
        <img src="../../../assets/images/demo.jpg" alt="" />
      </div>
      <div class="introduce">
        <h2>型号名称CA-50</h2>
        <p>参考价格：<span>10～100万</span></p>
        <span>
          产品分类（子类）/品牌/型号
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
            </svg>
            30万
          </span>
        </span>
      </div>
    </a>
  </router-link>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  li {
    padding: 16px;
    background: #fff;
    cursor: pointer;
    margin-bottom: 12px;
    box-shadow: $base-box-shadow;
    a {
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      .img_box {
        height: 130px;
        width: 130px;
        background: $base-background;
        margin-right: 20px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .introduce {
        padding: 6px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        h2 {
          font-size: 18px;
          color: #333333;
          font-weight: 600;
        }
        p {
          font-size: 14px;
          color: #999999;
          span {
            font-size: 16px;
            color: #f10215;
            font-weight: 600;
          }
        }
        > span {
          display: flex;
          font-size: 14px;
          color: #666666;
          span {
            font-size: 12px;
            color: #999999;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .icon {
              width: 15px;
              height: 10px;
              margin-right: 4px;
              margin-left: 12px;
            }
          }
        }
      }
    }
    &:hover {
      a {
        h2 {
          color: $theme-color;
        }
      }
    }
  }
</style>