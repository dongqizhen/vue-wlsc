<template>
  <div class="product-details">
    <div class="left">
      <div class="magnifying">
        <div class="img_box">
          <a class="magnifier-thumb-wrapper">
            <img id="thumb" :src="productInfo.list_pic_url" />
          </a>
          <div class="magnifier-preview" id="preview"></div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../../../../assets/images/demo.jpg" alt="" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconhoufankedianji"></use>
              </svg>
            </div>
            <div class="swiper-button-next">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxiangqianfan"></use>
              </svg>
            </div>

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
          </div>
        </div>
        <div class="main">
          <h2>{{ productInfo.name }}</h2>
          <div class="price">
            <span>指导价：</span>
            <span>¥{{ productInfo.market_price }}</span>
            <span>询价</span>
          </div>
          <ul class="params">
            <li>
              <span>
                <span>产品分类：</span>
                <a>{{ productInfo.category_name }}</a>
              </span>
              <span>
                <span>品牌：</span>
                <a>普利生</a>
              </span>
            </li>
            <li>
              <span>
                <span>产品类型：</span>
                <a>整机/备件/人工</a>
              </span>
              <span>
                <span>销售范围：</span>
                <a>全国</a>
              </span>
            </li>
            <li>
              <span>
                <span>型号：</span>
                <a>C2000-A</a>
              </span>
              <span>
                <span>数量 库存：</span>
                <a>{{ productInfo.goods_number }}</a>
              </span>
            </li>
            <li>
              <span>
                <span>备件号：</span>
                <a>XCV111122333939932222</a>
              </span>
              <span>
                <span>产地：</span>
                <a>国产</a>
              </span>
            </li>
          </ul>
          <div class="btn">
            <a-button @click="addCarSuccess">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconbaisegouwuche"></use>
              </svg>
              加入选购单
            </a-button>
            <a-button>收藏商品</a-button>
          </div>
        </div>
      </div>

      <div class="introduce-tabs">
        <!-- <a-affix :offsetTop="0">
          <a-button type="primary">Affix top</a-button>
        </a-affix> -->
        <a-tabs defaultActiveKey="1">
          <a-tab-pane tab="产品介绍" key="1" :forceRender="true">
            <p
              class="introduce"
              v-html="convertStr"
              v-if="productInfo"
              v-lazy-container="{
                selector: 'img'
              }"
            ></p>
          </a-tab-pane>
          <a-tab-pane tab="产品规格/参数" key="2" :forceRender="true">
            <ul class="specification">
              <li><span>商品名称</span><span>超声手术设备</span></li>
              <li><span>品牌名称</span><span>普利生</span></li>
              <li><span>型号</span><span>C2000-A</span></li>
              <li><span>单位</span><span>台</span></li>
              <li><span>生产厂家</span><span>北京普利生仪器有限公司</span></li>
            </ul>
          </a-tab-pane>
          <a-tab-pane tab="产品评价(36)" key="3" :forceRender="true">
            <ul class="evaluate">
              <li>
                <div class="img_box"></div>
                <div class="evaluate-container">
                  <div class="name">孟世和<span>2019-02-18 16:20</span></div>
                  <ul class="rate-container">
                    <li>
                      性能评价
                      <div class="rate">
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                      </div>
                    </li>
                    <li>
                      售后评价
                      <div class="rate">
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                      </div>
                    </li>
                    <li>
                      质量评价
                      <div class="rate">
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                      </div>
                    </li>
                    <li>
                      培训评价
                      <div class="rate">
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiashixinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use
                              xlink:href="#iconpingjiakongxinwujiaoxing"
                            ></use>
                          </svg>
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p>
                    产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！产品很不错。我下次会再来的！
                  </p>
                  <ul class="evaluate-img">
                    <li
                      v-for="(item, i) in imgarr"
                      :key="i"
                      :class="i == defaultIndex ? 'active' : ''"
                      @click="changeImage(i, $event)"
                    >
                      <div class="img_box">
                        <img :src="item" alt="" />
                      </div>
                      <i></i>
                    </li>
                  </ul>

                  <div class="big-image" :class="bigImageIsShow && 'active'">
                    <img src="../../../../assets/images/demo.jpg" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </a-tab-pane>

          <template slot="renderTabBar" slot-scope="props, DefaultTabBar">
            <component :is="DefaultTabBar" {...props} class="tab-affix" />
          </template>
        </a-tabs>
      </div>
    </div>
    <div class="right">
      <a-button>
        <router-link
          :to="{
            path: '/comparisonOfParameters',
            query: { nav_index: $route.query.nav_index }
          }"
          target="_blank"
        >
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconcanshuduibi"></use>
          </svg>
          参数对比
        </router-link>
      </a-button>
      <shop-card-vue></shop-card-vue>
    </div>
    <login-modal-vue :Visible="visible" :type="type"></login-modal-vue>
  </div>
</template>

<script>
  import shareMenuVue from "../../../../components/common/share/shareMenu.vue";
  import img from "../../../../assets/images/demo.jpg";
  import { Icon } from "ant-design-vue";
  import modal from "../../../../components/modal/modal.vue";
  const IconFont = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1093268_lw1r0m4k91i.js"
  });
  import Swiper from "swiper";
  import shopCardVue from "../../../../components/common/shopCard.vue";
  import loginModalVue from "../../../../components/modal/loginModal.vue";
  import { mapState } from "vuex";
  import { _getData } from "../../../../config/getData";

  export default {
    data() {
      return {
        productInfo: "", //产品详情
        imgarr: [img, img],
        defaultIndex: null,
        visible: false,
        title: "",
        imgUrl: "",
        type: "",
        bigImageIsShow: false
      };
    },
    components: {
      shareMenuVue,
      IconFont,
      shopCardVue,
      loginModalVue
    },
    methods: {
      changeImage(i, e) {
        if (this.defaultIndex == i) {
          this.bigImageIsShow = !this.bigImageIsShow;
        } else {
          this.defaultIndex = i;
          this.bigImageIsShow = true;
        }
      },
      callback(val) {
        console.log(val);
      },
      toggle(tabIndex) {
        this.whichTab = tabIndex;
        window.location.href = "#searchBar"; // 锚点
      },
      addCarSuccess() {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.visible = true;
      },
      handleScroll() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let dom = document.querySelector(".ant-tabs-nav-wrap");
        let offsetTop = document
          .querySelector(".introduce-tabs")
          .getBoundingClientRect().top;

        if (offsetTop <= 0) {
          dom.style.position = "fixed";
          dom.style.top = "0";
        } else {
          dom.style.position = "static";
        }
      }
    },
    computed: {
      ...mapState(["isLogin"]),
      convertStr() {
        return this.productInfo.goods_desc.replace(
          /(?<=\<img [^>]*src=['"])([^'"]+)(?=[^>]*>)/gi,
          '"data-src="$1'
        );
      }
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      _getData("api/goods/gooddetail", {
        id: this.$route.params.id
      })
        .then(data => {
          console.log(data);
          this.productInfo = data.productInfo;
        })
        .then(() => {
          const evt = new Event(),
            m = new Magnifier(evt);
          m.attach({
            thumb: "#thumb",
            large: this.productInfo.list_pic_url,
            largeWrapper: "preview",
            zoom: 2,
            zoomable: true
          });
        });

      const swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 16,
        slidesPerGroup: 5,
        loop: false,
        loopFillGroupWithBlank: true,
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";

  .product-details {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    /deep/ img[lazy="loading"] {
      /*your style here*/
      // background: url("../../../../assets/images/loading.gif") no-repeat center;
      // background-size: 200px;
      background-color: #f7f9fa;
    }
    /deep/ img[lazy="error"] {
      /*your style here*/
      background: url("../../../../assets/images/loading.gif") no-repeat center;
      background-size: 200px;
      // background-color: #f7f9fa;
    }
    .left {
      width: $content-left;
      background: $base-background;
      padding-bottom: 0;
      margin-right: 20px;
      position: relative;
      .magnifying {
        display: flex;
        justify-content: flex-start;
        padding: 15.5px 20px 0;
        height: 444px;
        background: #fff;
        box-shadow: $base-box-shadow;
        margin-bottom: 20px;
        .img_box {
          height: 352px;
          width: 352px;
          background: $base-background;
          margin-right: 17px;
          position: relative;
          .magnifier-thumb-wrapper {
            display: flex;
            height: 100%;
            width: 100%;
            img {
              height: 100%;
              width: 100%;
            }
            /deep/ .magnifier-lens {
              background: rgba(51, 51, 51, 0.4) !important;
              border: 0;
            }
            /deep/ .opaque {
              opacity: 1;
            }
          }
          .magnifier-preview {
            position: absolute;
            height: 352px;
            width: 352px;
            top: 0;
            // background: #f7f9fa;
            right: -362px;
            z-index: 100;
            pointer-events: none;
            /deep/ img {
              background: #f7f9fa !important;
            }
          }
          /deep/ .swiper-container {
            margin-top: 16px;
            height: 45px;
            width: 100%;
            padding: 0 31.5px;
            .swiper-wrapper {
              .swiper-slide {
                height: 45px;
                box-sizing: border-box;
                cursor: pointer;
                border: 2px solid #fff;
                img {
                  height: 100%;
                  width: 100%;
                }
                &:hover {
                  border: 2px solid $theme-color;
                }
              }
            }
            .swiper-button-prev,
            .swiper-button-next {
              background: none;

              background: #fff;
              height: 100%;
              display: flex;
              align-items: center;
              &.swiper-button-disabled {
                cursor: not-allowed !important;
              }
            }
            .swiper-button-prev {
              left: 0;
            }
            .swiper-button-next {
              right: 0;
              justify-content: flex-end;
            }
          }
        }
        .main {
          display: flex;
          flex: 1;
          flex-direction: column;

          h2 {
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #333333;
            font-weight: 600;
            margin-bottom: 10px;
            line-height: 28px;
            height: 56px;
          }
          .price {
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background: rgba(241, 2, 21, 0.05);
            padding-left: 30px;
            line-height: 50px;
            margin-bottom: 6px;
            span {
              font-size: 13px;
              color: #666666;
              line-height: 13px;

              &:nth-child(2) {
                font-size: 25px;
                color: #f10215;
                font-weight: 700;
                line-height: 24px;
                margin: 0 13px 0 4px;
                margin-bottom: 3px;
              }
              &:nth-child(3) {
                font-size: 14px;
                color: #f5a623;
                font-weight: 600;
                //cursor: pointer;
                width: 43px;
                height: 22px;
                background: #fef7ea;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
          .params {
            li {
              display: flex;
              justify-content: flex-start;
              margin: 16px 0;
              > span {
                display: flex;
                justify-content: flex-start;
                > span {
                  font-size: 14px;
                  color: #999;
                  font-weight: 500;
                  width: 75px;
                  display: flex;

                  justify-content: flex-end;
                }
                a {
                  font-size: 14px;
                  color: #333333;
                  display: flex;
                  font-weight: 600;
                  justify-content: flex-start;
                  text-decoration: none;
                  cursor: default;
                  flex: 1;
                  flex-wrap: wrap;
                  word-break: break-all;
                }

                &:first-child {
                  width: 200px;
                  margin-right: 5px;
                }
                &:last-child {
                  flex: 1;
                  > span {
                  }
                }
              }
            }
          }
          .btn {
            display: flex;
            justify-content: flex-start;
            margin-top: 3px;
            /deep/ .ant-btn-default {
              display: flex;
              background-image: linear-gradient(90deg, #ff4e1a 0%, #f10000 100%);
              border-radius: 3px;
              height: 42px;
              width: 154px;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              color: #ffffff;
              font-weight: 500;
              cursor: pointer;
              border: none;
              &:nth-child(1) {
                .icon {
                  height: 16px;
                  width: 16px;
                  margin-right: 6px;
                }
                &::after {
                  display: none;
                }
              }
              &:nth-child(2) {
                background: #f5a623;
                margin-left: 14px;
                width: 136px;
                border: 1px solid #f5a623;
              }
              &:hover {
                opacity: 0.7;
              }
            }
          }
        }
      }
      .introduce-tabs {
        background: #ffffff;
        box-shadow: $base-box-shadow;
        /deep/ .ant-tabs {
          .ant-tabs-bar {
            margin-bottom: 0;
            .ant-tabs-nav-container {
              height: 49px;
              border-bottom: 1px solid #e8e8e8;
              .ant-tabs-nav-wrap {
                width: 768px;
                z-index: 1000;
                border-bottom: 1px solid #e8e8e8;
                //background: #fff;
              }
              .ant-tabs-nav-scroll {
                background: #fff;
                border-bottom: 1px solid #e8e8e8;
                .ant-tabs-nav {
                  > div {
                    display: flex;
                    justify-content: flex-start;
                  }
                  .ant-tabs-ink-bar {
                    background: $theme-color;
                  }
                }
                .ant-tabs-tab {
                  padding: 0;
                  margin: 0;
                  background: #fff;
                  height: 50px;
                  width: 170px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 16px;
                  color: #666666;
                  &:hover {
                    //font-weight: 600;
                    font-size: 16px;
                    color: #f10215;
                  }
                  &.ant-tabs-tab-active {
                    font-weight: 600;
                    font-size: 16px;
                    color: #f10215;
                  }
                  &::before {
                    content: "";
                    position: absolute;

                    height: 21px;
                    border-left: 1px #979797 dashed;
                    right: 0;
                  }
                  &:last-child {
                    &::before {
                      display: none;
                    }
                  }
                }
              }
            }
          }
          .ant-tabs-content {
            padding: 20px 0;

            .ant-tabs-tabpane {
              padding: 0 20px;
              .introduce {
                font-size: 14px;
                color: #666666;
                letter-spacing: 0;
                line-height: 27px;
                img {
                  width: 100%;
                }

                > p {
                  width: 100%;
                  img {
                    width: 100%;
                  }
                }
              }
              .specification {
                width: 590px;
                border: #dddddd 1px solid;
                border-bottom: 0;
                li {
                  height: 46px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  border-bottom: #dddddd 1px solid;
                  span {
                    font-size: 14px;
                    color: #666666;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    &:first-child {
                      background: #f5f5f5;
                      width: 123px;
                      border-right: #dddddd 1px solid;
                      padding-left: 24px;
                    }
                    &:last-child {
                      flex: 1;
                      padding-left: 90px;
                      font-weight: 600;
                    }
                  }
                }
              }
              .evaluate {
                display: flex;
                justify-content: flex-start;
                > li {
                  display: flex;
                  justify-content: flex-start;
                  border-bottom: 1px solid #dddddd;
                  padding-bottom: 20px;
                  margin-bottom: 20px;
                  > .img_box {
                    height: 30px;
                    width: 30px;
                    border-radius: 16px;
                    background: $base-background;
                    margin-right: 8px;
                  }
                  .evaluate-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    .name {
                      font-size: 14px;
                      color: #333333;
                      font-weight: 600;
                      line-height: 14px;
                      margin-bottom: 5px;
                      span {
                        font-size: 12px;
                        color: #999999;
                        font-weight: 400;
                        margin-left: 10px;
                      }
                    }
                    ul.rate-container {
                      display: flex;
                      justify-content: flex-start;
                      li {
                        display: flex;
                        justify-content: flex-start;
                        font-size: 12px;
                        color: #666666;
                        height: 17px;
                        line-height: 17px;
                        align-items: center;
                        margin-right: 20px;
                        .rate {
                          display: flex;
                          justify-content: flex-start;
                          align-items: center;
                          margin-left: 10px;
                          span {
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            margin-bottom: 2px;
                          }
                          .icon {
                            width: 13px;
                            height: 13px;
                            margin-right: 5px;
                          }
                        }
                      }
                    }
                    > p {
                      font-size: 14px;
                      color: #333333;
                      line-height: 20px;
                      margin: 10px 0;
                    }
                    ul.evaluate-img {
                      display: flex;
                      justify-content: flex-start;
                      margin-bottom: 14px;
                      li {
                        height: 50px;
                        height: 50px;
                        background: #fff;
                        border: 1px solid #f5f5f5;
                        height: 50px;
                        width: 50px;
                        margin-right: 12px;
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: url("../../../../assets/images/magnifier.png"),
                          default;
                        .img_box {
                          height: 40px;
                          width: 40px;
                          background: $base-background;
                          margin: 0 auto;

                          img {
                            height: 100%;
                            width: 100%;
                          }
                        }
                        &.active {
                          cursor: url("../../../../assets/images/shrink.png"),
                            default;
                          border-width: 2px;
                          border-style: solid;
                          border-color: $theme-color;
                          border-image: initial;
                          border-radius: 2px;
                          i {
                            width: 0px;
                            height: 0px;
                            line-height: 0;
                            font-size: 0px;
                            position: absolute;
                            left: 50%;
                            margin-left: -6px;
                            opacity: 1;
                            bottom: -12px;
                            border-width: 6px;
                            border-style: solid dashed dashed;
                            border-color: $theme-color transparent transparent;
                            border-image: initial;
                            border-top: 6px solid $theme-color;
                            background: 0px 0px;
                          }
                        }
                      }
                    }
                    .big-image {
                      background: $base-background;
                      height: 0;
                      width: 0;
                      transition: all 0.3s;
                      &.active {
                        height: 352px;
                        width: 352px;
                      }
                      img {
                        height: 100%;
                        width: 100%;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      .ant-btn-default {
        height: 40px;
        width: 152px;
        background: #ffffff;
        border: 1px solid #f5a623;
        color: #f5a623;
        font-size: 16px;
        font-weight: 500;
        line-height: 40px;
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        a {
          display: flex;
          align-items: center;
          line-height: 38px;
          text-decoration: none;
          .icon {
            height: 15px;
            width: 15px;
            margin-right: 5px;
            margin-top: 1px;
          }
        }
        &:hover {
          opacity: 0.7;
        }
        > span {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 38px;
        }

        .icon {
          height: 15px;
          width: 15px;
          margin-right: 5px;
        }
      }
    }
  }
</style>