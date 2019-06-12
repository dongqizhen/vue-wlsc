<template>
  <router-link
    tag="li"
    :to="{
      path: '/details/articleDetails',
      query: { nav_index: $route.query.nav_index, id: item.id }
    }"
    class="article-item"
    append
  >
    <a target="_blank">
      <div
        class="img_box"
        v-lazy-container="{
          selector: 'img'
        }"
      >
        <img :data-src="item.cover0" alt="" />
      </div>
      <div class="content">
        <h2>
          {{ item.topic }}
        </h2>
        <p>
          这不仅仅是一篇简单的文章，这个文章是前辈日积月累的新的，重要的地方读三遍，写三遍。这里展示两行，多余的用…来表示。
        </p>
        <ul>
          <li v-for="label in item.labelList" :key="label.id">
            {{ label.name }}
          </li>
        </ul>
        <div class="toolMenu">
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconpinglun"></use>
              </svg>
            </i>
            {{ item.commentNum }}
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconshoucang"></use>
              </svg>
            </i>
            {{ item.favoriteNum }}
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconzan"></use>
              </svg>
            </i>
            {{ item.amount }}
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfenxiang"></use>
              </svg>
            </i>
            {{ item.shareNum }}
          </span>
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["item"]
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss.scss";
  li.article-item {
    /deep/ img[lazy="loading"] {
      /*your style here*/
      background: url("../../../assets/images/loading.gif") no-repeat center;
      background-size: 100px;
      background-color: #f7f9fa;
    }
    /deep/ img[lazy="error"] {
      /*your style here*/
      background: url("../../../assets/images/loading.gif") no-repeat center;
      background-size: 100px;
      display: none;
      // background-color: #f7f9fa;
    }
    a {
      display: flex;
      cursor: pointer;
      justify-content: flex-start;
      text-decoration: none;
      width: 100%;
    }
    box-shadow: $base-box-shadow;
    width: 768px;
    height: 192px;
    margin-bottom: 12px;
    background: #ffffff;
    padding: 16px;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    &:hover {
      .content {
        h2 {
          color: $theme-color;
        }
      }
      .img_box {
        img {
          transform: scale(1.1);
        }
      }
    }
    .img_box {
      height: 160px;
      width: 160px;
      display: flex;
      background: #f7f9fa;
      margin-right: 20px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        transition: transform 0.5s ease;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      h2 {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #333333;
        height: 40px;
        // display: flex;
        line-height: 40px;
        align-items: center;
        font-weight: 500;
        width: 556px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #999999;
      }
      > ul {
        display: flex;
        justify-content: flex-start;
        margin-top: 12px;
        margin-bottom: 18px;
        height: 25px;
        li {
          margin-right: 4px;
          height: 25px;
          padding: 0 10px;
          background: #f7f7f7;
          border-radius: 15px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #fb6441;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 25px;
        }
      }
      .toolMenu {
        display: flex;
        justify-content: flex-start;
        span {
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #999999;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-right: 20px;
          height: 21px;
          line-height: 21px;
          i {
            margin-right: 4px;
            display: flex;
            align-items: center;
            .icon {
              //margin-top: 2px;
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
</style>