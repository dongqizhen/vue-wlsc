<template>
  <div class="nav">
    <div class="top_nav">
      <ul class="commonWidth">
        <router-link
          v-for="(item, i) in nav_title"
          :key="`nav-${i}`"
          tag="li"
          :to="{ path: item.path, query: { nav_index: i } }"
          @click="nav_change"
        >
          <a target="_blank" :class="i == defaultNav ? 'active' : ''">{{
            item.title
          }}</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  const nav_title = [
    {
      title: "首页",
      path: "/"
    },
    {
      title: "找产品",
      path: "/"
    },
    {
      title: "找品牌",
      path: "/"
    },
    {
      title: "找店铺",
      path: "/lookingShop"
    },
    {
      title: "关于我们",
      path: "/"
    }
  ];
  export default {
    data() {
      return {
        nav_title
      };
    },
    props: {
      defaultNav: {
        type: [Number, String],
        default: 0
      }
    },
    methods: {
      nav_change(i) {
        console.log(i);
      }
    },
    created() {}
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/_commonScss";

  .top_nav {
    height: 60px;
    border-bottom: 2px solid $theme-color;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 58px;
        font-weight: 600;
        font-size: 18px;
        color: #333333;
        cursor: pointer;
        a {
          color: #333333;
          text-decoration: none;
          display: flex;
          width: 120px;
          height: 100%;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          &.active {
            background: $theme-color;
            color: #ffffff;
          }
          &:not(.active):hover {
            color: $theme-color;
          }
        }
      }
    }
  }
</style>