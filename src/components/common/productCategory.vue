<template>
  <div class="product-category">
    <div class="product">
      <div class="commonWidth">
        <h2>
          <span class="title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconchanpinfenlei"></use>
            </svg>
            产品分类
          </span>
          <span class="btn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconguanlichangyongfenlei"></use>
            </svg>
            管理常用分类
          </span>
        </h2>
        <div class="product_container">
          <div class="swiper-container nav_slide">
            <div class="swiper-wrapper">
              <div class="swiper-slide">常用分类</div>
              <div class="swiper-slide">电子超声</div>
              <div class="swiper-slide">临床检验</div>
              <div class="swiper-slide">实验仪器</div>
              <div class="swiper-slide">医学影像</div>
              <div class="swiper-slide">实验仪器</div>
              <div class="swiper-slide">医学影像</div>
              <div class="bar"><i></i></div>
            </div>
          </div>
          <div class="swiper-container page">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ul>
                  <li>超声手术设备</li>
                  <li>高强度超声治疗设备</li>
                  <li>超声手术设备附件</li>
                  <li>X 射线高压发生器</li>
                  <li>X射线管</li>
                  <li>X射线管组件</li>
                  <li>限束装置</li>
                  <li>高强度超声治疗设备</li>
                  <li>激光手术设备</li>
                  <li>医用激光光纤</li>
                  <li>主电缆</li>
                  <li>超声手术设备</li>
                  <li>高强度超声治疗设备</li>
                  <li>超声手术设备附件</li>
                  <li>X 射线高压发生器</li>
                  <li>X射线管</li>
                  <li>X射线管组件</li>
                  <li>限束装置</li>
                  <li>高强度超声治疗设备</li>
                  <li>激光手术设备</li>
                  <li>医用激光光纤</li>
                  <li>主电缆</li>
                </ul>
              </div>
              <div class="swiper-slide">电子超声</div>
              <div class="swiper-slide">临床检验</div>
              <div class="swiper-slide">实验仪器</div>
              <div class="swiper-slide">医学影像</div>
              <div class="swiper-slide">实验仪器</div>
              <div class="swiper-slide">医学影像</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import modalVue from "./modal.vue";

  export default {
    data() {
      return {
        visible: false, //控制modal层弹出
        options: {
          title: "管理常用品牌",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand",
          centered: true
        }
      };
    },
    components: {
      modalVue
    },
    methods: {
      handleClick() {
        this.visible = true;
      },
      handleOk() {
        this.visible = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  %h2 {
    height: 42px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
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

  .product {
    margin-bottom: 25px;
    .commonWidth {
      h2 {
        @extend %h2;
      }
      .product_container {
        background: #ffffff;
        box-shadow: $base-box-shadow;
        .swiper-container.nav_slide {
          height: 63px;
          border-bottom: 0.5px solid #ccc;
          // overflow-y: auto;
          .swiper-wrapper {
            position: relative;
            height: 62px;

            .swiper-slide {
              width: 180px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              font-weight: 600;
              font-size: 18px;
              color: #999999;
            }
            .bar {
              position: absolute;
              height: 3px;
              width: 180px;
              background: $theme-color;
              bottom: -0.5px;
              i {
                display: flex;
                position: absolute;
                bottom: 1px;
                width: 0px;
                left: 50%;
                margin-left: -5.5px;
                height: 0px;
                border-left: 5.5px solid transparent;
                border-right: 5.5px solid transparent;

                border-bottom: 6px solid $theme-color;
              }
            }
          }
        }
        .page {
          //min-height: 200px;
          ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 20px 20px;
            padding-bottom: 0;
            li {
              font-size: 13px;
              color: #666666;
              margin-bottom: 20px;
              margin-right: 30px;
              cursor: pointer;
              &:hover {
                color: $theme-color;
              }
            }
          }
        }
      }
    }
  }
</style>