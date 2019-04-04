<template>
  <div class="detaile">
    <Header></Header>
    <search></search>
    <Nav></Nav>
    <div class="container">
      <div class="commonWidth">
        <a-breadcrumb :routes="routes">
          <span slot="separator">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconwangyelujing"></use>
            </svg>
          </span>

          <template
            slot="itemRender"
            slot-scope="{ route, params, routes, paths }"
          >
            <span v-if="routes.indexOf(route) === routes.length - 1">
              {{ route.name }}
            </span>
            <router-link v-else :to="`/${paths.join('/')}`">
              {{ route.name }}
            </router-link>
          </template>
        </a-breadcrumb>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";

  export default {
    data() {
      return {
        routes: [
          {
            path: "/",
            name: "首页"
          },
          {
            path: "/detaile",
            name: "文章详情"
          }
        ]
      };
    },
    components: {
      Header,
      Footer,
      search,
      Nav
    },
    mounted() {
      console.log(this);
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .detaile {
    /deep/ .ant-breadcrumb {
      height: 49px;
      margin-top: 8px;
      display: flex;
      align-items: center;
      > span {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        height: 17px;

        .ant-breadcrumb-link {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          height: 17px;
          > a {
            text-decoration: none;
            &:hover {
              color: $theme-color;
            }
          }
        }
        .ant-breadcrumb-separator {
          margin: 0 10px;
          > span {
            display: flex;
            align-items: center;
          }
          .icon {
            width: 10px;
            height: 18px;
          }
        }
      }
    }
  }
</style>