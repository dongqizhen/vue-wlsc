<template>
  <router-link
    class="bid-info-item"
    tag="li"
    :to="{
      path: '/details/bidinfoDetails',
      query: { nav_index: $route.query.nav_index, id: 0 }
    }"
  >
    <a target="_blank">
      <div class="bid-left">
        <h2>彩色多普勒超声诊断系统</h2>
        <span>卡威/KaweMiller</span>
        <div>
          <div>开标时间 <span>2019-05-10</span></div>
          <div>采购单位 <span>荔波县热敏医院</span><span>二级甲等</span></div>
          <div>中标单位 <span>建发（北京）有限公司</span></div>
        </div>
      </div>
      <div class="price">
        <span>单品价格</span>
        <span>1000.00万元</span>
      </div>
      <div class="adress">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icongongsidizhi"></use>
        </svg>
        新疆藏住自治区阿拉伯山脉
      </div>
    </a>
  </router-link>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  .bid-info-item {
    height: 160px;
    background: #fff;
    box-shadow: $base-box-shadow;
    display: flex;
    margin-right: 0;
    width: 100%;
    padding: 13.5px 20px;
    cursor: pointer;
    position: relative;
    a {
      text-decoration: none;
    }
    &:hover {
      .bid-left {
        h2 {
          color: $theme-color;
        }
      }
    }
    .bid-left {
      h2 {
        font-size: 18px;
        color: #000000;
        font-weight: 600;
        height: 25px;
        display: flex;
        align-items: center;
      }
      > span {
        display: flex;
        align-items: center;
        height: 21px;
        font-size: 15px;
        color: #333333;
        margin-top: 7px;
        margin-bottom: 16px;
      }
      > div {
        display: flex;
        flex-direction: column;
        > div {
          display: flex;
          font-size: 12px;
          color: #666666;

          margin-bottom: 6px;
          span {
            font-size: 12px;
            color: #333333;
            margin-left: 10px;

            &:nth-child(2) {
              background: rgba(245, 166, 35, 0.08);
              height: 16px;
              font-size: 11px;
              color: #f5a623;
              padding: 0 4px;
              align-items: center;
              margin-left: 5px;
            }
          }
        }
      }
    }
    .price {
      position: absolute;
      right: 20px;
      top: 13.5px;
      display: flex;
      flex-direction: column;
      span {
        font-size: 11px;
        color: #999999;
        &:last-child {
          font-size: 20px;
          color: #f10215;
          font-weight: 600;
        }
      }
    }
    .adress {
      position: absolute;
      bottom: 13.5px;
      right: 20px;
      font-size: 12px;
      color: #999999;
      display: flex;
      align-items: center;
      .icon {
        width: 11px;
        height: 11px;
        margin-right: 4px;
        margin-top: 1px;
      }
    }
  }
</style>