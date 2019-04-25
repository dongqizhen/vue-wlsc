<template>
  <div class="one-of-brand-classific">
    <breadcrumb-vue :routes="routes"></breadcrumb-vue>
    <div class="search">
      <span>常用品牌</span>
      <span>一线品牌</span>
      <span class="all">全部</span>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
      <div class="ipt">
        <input type="text" placeholder="请输入品牌名称" />
        <span>搜索</span>
      </div>
    </div>
    <span class="manageBtn" @click="brandVisible = !brandVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconguanlichangyongfenlei"></use>
      </svg>
      管理常用品牌
      <common-brands-modal-vue
        :brandVisible="brandVisible"
      ></common-brands-modal-vue>
    </span>
    <div class="content">
      <div class="left">
        <ul>
          <router-link
            v-for="(item, i) in arr"
            :key="`cp-${i}`"
            tag="li"
            :to="
              $route.query.nav_index == 2
                ? { path: '/lookingProduct', query: { nav_index: 2 } }
                : $route.query.nav_index == 1
                ? { path: 'brand', query: { nav_index: 1 } }
                : ''
            "
          >
            <a>
              <div class="img_box"></div>
              松下
            </a>
          </router-link>
        </ul>
      </div>

      <div class="right">
        <brand-card-vue v-if="$route.query.nav_index == 1"></brand-card-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import brandCardVue from "../../../../components/common/brandCard.vue";
  import breadcrumbVue from "../../../../components/common/breadcrumb.vue";
  import CommonBrandsModalVue from "../../../../components/modal/CommonBrandsModal";

  const arr = [
    "松下",
    "迈瑞",
    "西门子",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下",
    "松下"
  ];
  export default {
    data() {
      return {
        arr,
        routes: "",
        brandVisible: false
      };
    },
    created() {
      this.routes =
        this.$route.query.nav_index == 2
          ? [
              {
                name: "首页",
                path: "/"
              },
              {
                name: "找品牌",
                path: "/lookingProduct/oneOfBrandClassificne"
              }
            ]
          : [
              {
                name: "首页",
                path: "/"
              },
              {
                name: "找产品",
                path: "/lookingProduct?nav_index=" + this.$route.query.nav_index
              },
              {
                name: "超声手术设备",
                path: "/lookingProduct/oneOfBrandClassificne"
              }
            ];
    },
    components: {
      brandCardVue,
      breadcrumbVue,
      CommonBrandsModalVue
    },
    methods: {
      handleClick(item, i) {}
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss.scss";
  .one-of-brand-classific {
    .search {
      display: flex;
      position: relative;
      justify-content: flex-start;
      margin-top: 4px;
      > span {
        padding: 0 6px;
        font-size: 14px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 26px;
        cursor: pointer;
        margin-right: 10px;
        &.all {
          background: rgba(241, 2, 21, 0.03);
          border: 1px solid #f10215;
          font-size: 14px;
          color: #f10215;
          font-weight: 600;
        }
        &:not(.all) {
          color: #666666;
          border: 1px solid #333333;
        }
        &:hover {
          color: $theme-color;
        }
      }
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        line-height: 26px;
        li {
          font-size: 14px;
          color: #666666;
          font-weight: 600;
          margin-right: 18px;
          cursor: pointer;
          &:hover {
            color: $theme-color;
          }
        }
      }
      .ipt {
        width: 213px;
        height: 35px;
        position: absolute;
        border: 1px solid $theme-color;
        right: -150px;
        display: flex;
        justify-content: flex-start;
        top: -4px;
        input {
          height: 100%;
          //display: none;
          flex: 1;
          display: flex;
          width: 135px;
          padding: 0 10px;
        }
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          background-image: linear-gradient(90deg, #ff4e1a 0%, #f10000 100%);
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    span.manageBtn {
      font-size: 14px;
      color: #999999;
      line-height: 14px;
      cursor: pointer;
      margin: 24px 0;
      display: flex;
      .icon {
        width: 13px;
        height: 14px;
        margin-right: 5px;
        margin-top: 1px;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        width: $content-left;

        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin-right: -12px;
          li {
            margin-right: 12px;
            margin-bottom: 30px;
            a {
              display: flex;
              flex-direction: column;
              align-items: center;
              font-size: 15px;
              color: #333333;
              text-decoration: none;
              cursor: pointer;
              .img_box {
                width: 144px;
                height: 104px;
                background: #fff;
                box-shadow: $base-box-shadow;
                margin-bottom: 8px;
              }
              &:hover {
                color: $theme-color;
              }
            }
          }
        }
      }
      .right {
        width: 236px;
      }
    }
  }
</style>