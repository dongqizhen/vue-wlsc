<template>
  <div class="nav">
    <div class="top_nav">
      <ul class="commonWidth">
        <li
          v-for="(item, i) in nav_title"
          :key="`nav-${i}`"
          @click="nav_change(item, i)"
        >
          <a :class="i == defaultNav && 'active'">{{ item.name }}</a>
        </li>
        <!-- <router-link
          v-for="(item, i) in nav_title"
          :key="`nav-${i}`"
          tag="li"
          :to="{
            path: item.path,
            query: { nav_index: i }
          }"
          @click.native="nav_change(i)"
        >
          <a target="_blank" :class="i == defaultNav ? 'active' : ''">
            {{
            item.name
          }}</a>
        </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
  const nav_title = [
    {
      name: "首页",
      path: "/"
    },
    {
      name: "找产品",
      path: "/lookingProduct"
    },
    {
      name: "找品牌",
      path: "/lookingProduct/oneOfBrandClassificne"
    },
    {
      name: "找店铺",
      path: "/lookingShop"
    },
    {
      name: "关于我们",
      path: "/aboutUs"
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
      nav_change(item, i) {
        console.log(i);
        const { href } = this.$router.resolve({
          path: item.path,
          query: { nav_index: i }
        });
        window.open(href, "_blank");

        // this.$router.push({
        //   path: item.path,
        //   query: { nav_index: i }
        // });
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