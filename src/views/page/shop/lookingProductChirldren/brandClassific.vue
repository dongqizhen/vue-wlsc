<template>
  <div class="brand-classific">
    <h2>
      <span class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconchanpinfenlei"></use>
        </svg>
        品牌分类
      </span>
    </h2>
    <div class="main-content">
      <ul class="left">
        <li>
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconpingjiashixinwujiaoxing"></use>
              </svg>
              品牌分类
            </span>
            <span class="btn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconguanlichangyongfenlei"></use>
              </svg>
              管理常用品牌
            </span>
          </h2>

          <ul>
            <router-link
              :to="{
                path: 'oneOfBrandClassificne',
                query: { nav_index: $route.query.nav_index }
              }"
              append
              tag="li"
            >
              <a target="_blank">超声手术设备</a></router-link
            >
            <router-link to="oneOfBrandClassificne" append tag="li">
              <a target="_blank">高强度超声治疗设备</a></router-link
            >
            <router-link to="oneOfBrandClassificne" append tag="li">
              <a target="_blank">激光手术设备</a></router-link
            >
            <router-link to="oneOfBrandClassificne" append tag="li">
              <a target="_blank">手术辅助照明灯</a></router-link
            >

            <li>医用激光光纤</li>
            <li>主电缆</li>
            <li>手术无影灯</li>
            <li>手术辅助照明灯</li>
            <li>医用射线防护用具</li>
            <li>超声手术设备</li>
            <li>高强度超声治疗设备</li>
          </ul>
          <span>
            更多
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongengduoxialajiantou"></use>
            </svg>
          </span>
        </li>
        <li>
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconpingjiashixinwujiaoxing"></use>
              </svg>
              品牌分类
            </span>
            <span class="btn">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconguanlichangyongfenlei"></use>
              </svg>
              管理常用品牌
            </span>
          </h2>
          <ul>
            <li>超声手术设备</li>
            <li>高强度超声治疗设备</li>
            <li>激光手术设备</li>
            <li>手术辅助照明灯</li>

            <li>医用激光光纤</li>
            <li>主电缆</li>
            <li>手术无影灯</li>
            <li>手术辅助照明灯</li>
            <li>医用射线防护用具</li>
            <li>超声手术设备</li>
            <li>高强度超声治疗设备</li>
          </ul>
        </li>
        <li>
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icondianzichaosheng1"></use>
              </svg>
              品牌分类
            </span>
          </h2>
          <ul>
            <li>超声手术设备</li>
            <li>高强度超声治疗设备</li>
            <li>激光手术设备</li>
            <li>手术辅助照明灯</li>

            <li>医用激光光纤</li>
            <li>主电缆</li>
            <li>手术无影灯</li>
            <li>手术辅助照明灯</li>
            <li>医用射线防护用具</li>
            <li>超声手术设备</li>
            <li>高强度超声治疗设备</li>
          </ul>
        </li>
      </ul>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../../assets/scss/_commonScss";
  h2 {
    height: 42px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
    span {
      display: flex;
      align-items: center;
    }
    span.title {
      font-weight: 600;
      font-size: 16px;
      color: #333333;
      line-height: 16px;

      .icon {
        width: 19px;
        height: 13px;
        margin-right: 7px;
      }
    }
    span.btn {
      font-size: 14px;
      color: #999999;
      line-height: 14px;
      cursor: pointer;
      .icon {
        width: 13px;
        height: 14px;
        margin-right: 5px;
        margin-top: 1px;
      }
    }
  }
  .main-content {
    display: flex;
    justify-content: space-between;
    ul.left {
      width: $content-left;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: -24px;
      > li {
        width: 374px;
        box-shadow: $base-box-shadow;
        background: #fff;
        margin-bottom: 24px;
        position: relative;
        h2 {
          height: 60px;
          border-bottom: 1px solid #dddddd;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px 0 20px;
          .title {
            font-size: 18px;
            color: #333333;
            font-weight: 600;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .icon {
              height: 22px;
              width: 22px;
              margin-right: 8px;
              margin-bottom: 2px;
            }
          }
          .btn {
            font-size: 14px;
            color: #999999;
            cursor: pointer;
          }
        }
        ul {
          display: flex;
          justify-content: flex-start;
          padding: 20px;
          flex-wrap: wrap;
          padding-right: 10px;
          margin-right: -30px;
          padding-bottom: 4px;
          //width: 100%;
          li {
            font-size: 13px;

            margin-right: 30px;
            margin-bottom: 16px;
            cursor: pointer;
            a {
              color: #666666;
              text-decoration: none;
            }
            &:hover {
              a {
                color: $theme-color;
              }
            }
          }
        }
        > span {
          position: absolute;
          right: 20px;
          bottom: 20px;
          font-size: 12px;
          color: #019ddd;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .icon {
            height: 6px;
            width: 10px;
            margin-left: 4px;
            margin-top: 1px;
          }
        }
      }
    }
    .right {
      width: 236px;
    }
  }
</style>