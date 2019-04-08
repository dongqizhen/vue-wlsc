<template>
  <div class="share-menu share">
    分享到：
    <ul>
      <li v-for="item in shareArr" :key="item.icon">
        <a-tooltip placement="bottom">
          <template slot="title">
            <span>{{ item.title }}</span>
          </template>
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#${item.icon}`"></use>
          </svg>
        </a-tooltip>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shareArr: [
          {
            icon: "iconweixinfenxiang",
            title: "分享到微信"
          },
          {
            icon: "iconweibofenxiang",
            title: "分享到微博"
          },
          {
            icon: "iconweixinpengyouquanfenxiang",
            title: "分享到朋友圈"
          },
          {
            icon: "iconqqkongjianfenxiang",
            title: "分享到QQ空间"
          },
          {
            icon: "iconqqfenxiang",
            title: "分享到QQ"
          }
        ]
      };
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .share {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 83px;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #666666;
    ul {
      display: flex;
      justify-content: flex-start;
      margin-left: 14px;
      li {
        margin-right: 16px;
        cursor: pointer;
        opacity: 0.5;
        width: 29px;
        height: 29px;
        &:hover {
          opacity: 1;
        }
        .icon {
          width: 29px;
          height: 29px;
        }
      }
    }
  }
</style>