<template>
  <router-link
    class="video-item"
    tag="li"
    :to="{
      payh: '/details/videoDetails',
      query: { nav_index: $route.query.nav_index }
    }"
  >
    <a target="_blank">
      <div class="video_box"></div>
      <div class="content">
        <h2>
          胎儿静脉导管缺如及脐静脉文字
        </h2>
        <div class="lecturer">
          <p>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconjiangshi"></use>
              </svg>
            </i>
            讲师: 樊铮 贾樟柯…
          </p>
          <ul>
            <li>标签字数</li>
            <li>标签字数</li>
            <li>标签字数</li>
          </ul>
        </div>
      </div>
      <menu-vue></menu-vue>
    </a>
  </router-link>
</template>

<script>
  import menuVue from "../share/menu.vue";

  export default {
    data() {
      return {};
    },
    components: {
      menuVue
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  li.video-item {
    width: 376px;
    height: 364px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: $base-box-shadow;
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
      .content {
        h2 {
          color: $theme-color;
        }
      }
    }
    a {
      display: flex;
      text-decoration: none;
      width: 100%;
      flex-direction: column;
      height: 100%;
    }
    .video_box {
      height: 211px;
      background: #f7f9fa;
    }
    .content {
      padding: 10px;
      padding-bottom: 0;
      display: flex;
      flex: 1;
      flex-direction: column;
      h2 {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #333333;
        height: 50px;
        display: flex;
        align-items: center;
      }
      .lecturer {
        display: flex;
        justify-content: space-between;
        height: 52px;
        align-items: center;
        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 130px;
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #333333;
          i {
            display: flex;
            margin-right: 3px;
            margin-top: 1px;
            .icon {
              width: 7px;
              height: 7px;
            }
          }
          span {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        ul {
          display: flex;
          justify-content: flex-start;
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
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
</style>