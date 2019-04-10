<template>
  <div class="search">
    <div class="commonWidth">
      <h1><img src="../../assets/images/logo.png" alt="" /></h1>
      <div class="ipt_box">
        <div class="search_box">
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconfangdajing"></use>
            </svg>
          </i>
          <input
            type="text"
            placeholder="请输入商品名或店铺"
            v-model.trim="value"
            @keyup.enter="handClick"
          />
          <span @click="handClick">搜索</span>
        </div>
        <div class="nav">
          <h2>热门产品：</h2>
          <ul>
            <router-link tag="li" to="#">
              <a>血压仪</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>呼吸机</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>CT</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>B超</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>手术钳</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>缝合器</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>血压仪</a>
            </router-link>
            <router-link tag="li" to="#">
              <a>血压仪</a>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    },
    methods: {
      handClick() {
        if (this.value != "") {
          const { href } = this.$router.resolve({
            path: "/search",
            query: { val: this.value }
          });

          window.open(href, "_blank");
        }
      }
    },
    created() {
      if (this.$route.query.val) this.value = this.$route.query.val;
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";
  .search {
    height: 134px;
    .commonWidth {
      padding-top: 23px;
      display: flex;
      justify-content: flex-start;
      h1 {
        margin-right: 41px;
      }
      .ipt_box {
        > div.search_box {
          height: 46px;
          border: 2px solid $theme-color;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 713px;
          i {
            margin: 0 9px 0 12px;
            .icon {
              height: 15px;
              width: 15px;
            }
          }
          input {
            font-size: 14px;
            font-family: $base-font-family;
            flex: 1;
            height: 100%;
            line-height: 42px;
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 152px;
            background: $theme-color;
            height: 100%;
            cursor: pointer;
            font-size: 18px;
            font-family: $base-font-family;
            color: #ffffff;
          }
        }
        > div.nav {
          display: flex;
          justify-content: flex-start;
          height: 20px;
          align-items: center;
          margin-top: 15px;
          h2 {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #999999;
            line-height: 14px;
          }
          ul {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            li {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              a {
                line-height: 14px;
                font-family: $base-font-family;
                color: #666666;
                font-size: 14px;
                text-decoration: none;
                padding: 0 16px;
                border-right: 1px solid #d8d8d8;
                &:hover {
                  color: $theme-color;
                }
              }
              &:last-child {
                a {
                  border-right: 0;
                }
              }
            }
          }
        }
      }
    }
  }
</style>