<template>
  <router-link
    tag="li"
    to="/details/articleDetails"
    class="article-item"
    append
  >
    <a target="_blank">
      <div class="img_box"></div>
      <div class="content">
        <h2>
          这里显示文章名称，只显示一行这里显示文章名称，只显示一行
        </h2>
        <p>
          这不仅仅是一篇简单的文章，这个文章是前辈日积月累的新的，重要的地方读三遍，写三遍。这里展示两行，多余的用…来表示。
        </p>
        <ul>
          <li>标签字数</li>
          <li>标签字数</li>
          <li>最长显示多少再定</li>
        </ul>
        <div class="toolMenu">
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconpinglun"></use>
              </svg>
            </i>
            167
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconshoucang"></use>
              </svg>
            </i>
            999
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconzan"></use>
              </svg>
            </i>
            89
          </span>
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfenxiang"></use>
              </svg>
            </i>
            89
          </span>
        </div>
      </div>
    </a>
  </router-link>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss.scss";
  li.article-item {
    a {
      display: flex;
      cursor: pointer;
      justify-content: flex-start;
      text-decoration: none;
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
    }
    .img_box {
      height: 160px;
      width: 160px;
      background: #f7f9fa;
      margin-right: 20px;
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
        display: flex;
        align-items: center;
        font-weight: 500;
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
            .icon {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
</style>