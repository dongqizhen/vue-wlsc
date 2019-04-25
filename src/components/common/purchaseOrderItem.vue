<template>
  <div class="itemOrder">
    <div class="shopName">
      <a-checkbox @change="onChange"></a-checkbox>
      <img src="http://file.haoyigong.com/server/upload/1554429391594.jpg" />
      <span>北京华脉诚信科技有限公司</span>
    </div>
    <div class="productList">
      <ul>
        <li>
          <span>
            <a-checkbox @change="onChange"> </a-checkbox>
          </span>
          <span
            ><img
              src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
          /></span>
          <span>普利生全自动血凝分析仪C2000-A1BKKKLL</span>
          <span>普利生C2000-A</span>
          <span>¥198988282.00</span>
          <span>10</span>
          <span>¥198988282.00</span>
          <span>
            <div>删除</div>
            <div>添加到我的收藏</div>
          </span>
        </li>
        <li>
          <span>
            <a-checkbox @change="onChange"> </a-checkbox>
          </span>
          <span>
            <img
              src="http://file.haoyigong.com/server/upload/1554429391594.jpg"
            />
          </span>
          <span>普利生全自动血凝分析仪C2000-A1BKKKLL</span>
          <span>普利生C2000-A</span>
          <span>¥198988282.00</span>
          <span>10</span>
          <span>¥198988282.00</span>
          <span>
            <div>删除</div>
            <div>添加到我的收藏</div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      onChange() {}
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .itemOrder {
    margin-top: 24px;
    margin-bottom: 12px;
    .shopName {
      display: flex;
      align-items: center;
      margin-left: 21px;
      margin-bottom: 12px;
      img {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        margin-left: 14px;
        margin-right: 4px;
      }
    }
    .productList {
      ul {
        li {
          display: flex;
          height: 91px;
          border: 1px solid #ddd;
          padding-top: 10px;
          border-top: none;
          &:first-child {
            border-top: $border-style;
          }
          img {
            width: 70px;
            height: 70px;
          }
          span {
            &:first-child {
              margin-left: 20px;
              margin-right: 12px;
            }
            &:nth-child(2) {
              width: 70px;
              height: 70px;
              margin-right: 12px;
            }
            &:nth-child(3) {
              width: 155px;
              margin-right: 30px;
            }
            &:nth-child(4) {
              width: 100px;
              margin-right: 30px;
            }
            &:nth-child(5) {
              width: 83px;
              margin-right: 30px;
            }
            &:nth-child(6) {
              width: 113px;
              margin-right: 30px;
            }
            &:nth-child(7) {
              width: 137px;
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
</style>
