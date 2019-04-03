<template>
  <div class="index">
    <!-- 头部 -->
    <Header />
    <!-- 搜索 -->
    <div class="search">
      <div class="commonWidth">
        <h1><img src="../assets/images/logo.png" alt="" /></h1>
        <div class="ipt_box">
          <div class="search_box">
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconfangdajing"></use>
              </svg>
            </i>
            <input type="text" placeholder="请输入商品名或店铺" />
            <span>搜索</span>
          </div>
          <div class="nav">
            <h2>热门产品：</h2>
            <ul>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>呼吸机</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>CT</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>B超</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>手术钳</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>缝合器</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
              <router-link tag="li" to="#">
                <a>血压仪</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部TAB -->
    <div class="top_nav">
      <ul class="commonWidth">
        <li class="active">首页</li>
        <li>找产品</li>
        <li>找品牌</li>
        <li>找店铺</li>
        <li>关于我们</li>
      </ul>
    </div>
    <div class="container">
      <!-- 轮播图 -->
      <banner />
      <!-- 产品分类 -->
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
      <!-- 品牌分类 -->
      <div class="brand">
        <div class="commonWidth">
          <h2>
            <span class="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconchanpinfenlei"></use>
              </svg>
              品牌分类
            </span>
            <span class="btn" @click="handleClick">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconguanlichangyongfenlei"></use>
              </svg>
              管理常用品牌
            </span>
          </h2>
          <div class="product_container">
            <div class="swiper-container nav_slide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">常用分类</div>
                <div class="swiper-slide">电子超声</div>
                <div class="swiper-slide">临床检验</div>
                <div class="swiper-slide">实验仪器</div>

                <div class="bar"><i></i></div>
              </div>
            </div>
            <div class="swiper-container page">
              <div class="swiper-wrapper">
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
                <div class="swiper-slide">实验仪器</div>
                <div class="swiper-slide">医学影像</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐产品 -->
      <div class="recommend">
        <div class="commonWidth">
          <div class="swiper-container recommend_tabs">
            <div class="swiper-wrapper">
              <div class="swiper-slide active">推荐产品(12)</div>
              <div class="swiper-slide">推荐文章(9)</div>
              <div class="swiper-slide">推荐视频(8)</div>
              <div class="swiper-slide">推荐案例(8)</div>

              <div class="bar"></div>
            </div>
          </div>
          <div class="recommend_page">
            <ul class="floor">
              <li>
                <h2>
                  <p>1F 电子超声</p>
                  <ul>
                    <li>心电图机</li>
                    <li>心电图工作站</li>
                    <li>心电工作站</li>
                    <li>心电工作站</li>
                  </ul>
                  <span>
                    更多
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconhuangsegengduo"></use>
                    </svg>
                  </span>
                </h2>
                <div class="content">
                  <div class="left"></div>
                  <ul class="right">
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <h2>
                  <p>1F 电子超声</p>
                  <ul>
                    <li>心电图机</li>
                    <li>心电图工作站</li>
                    <li>心电工作站</li>
                    <li>心电工作站</li>
                  </ul>
                  <span>
                    更多
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconhuangsegengduo"></use>
                    </svg>
                  </span>
                </h2>
                <div class="content">
                  <div class="left"></div>
                  <ul class="right">
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <h2>
                  <p>1F 电子超声</p>
                  <ul>
                    <li>心电图机</li>
                    <li>心电图工作站</li>
                    <li>心电工作站</li>
                    <li>心电工作站</li>
                  </ul>
                  <span>
                    更多
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconhuangsegengduo"></use>
                    </svg>
                  </span>
                </h2>
                <div class="content">
                  <div class="left"></div>
                  <ul class="right">
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <h2>
                  <p>1F 电子超声</p>
                  <ul>
                    <li>心电图机</li>
                    <li>心电图工作站</li>
                    <li>心电工作站</li>
                    <li>心电工作站</li>
                  </ul>
                  <span>
                    更多
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconhuangsegengduo"></use>
                    </svg>
                  </span>
                </h2>
                <div class="content">
                  <div class="left"></div>
                  <ul class="right">
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                    <li>
                      <a href="#" class="img"></a>
                      <div class="price">
                        ¥799
                        <span>
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#iconxiaoliang"></use>
                          </svg>
                          销量: <span>99</span>
                        </span>
                      </div>
                      <p>
                        超声探头这里最多可以显示两行字，多余的用…展示
                      </p>
                      <div class="brand_small">
                        <span>品牌：GE</span>
                        <span>型号：DR UPGRADE…</span>
                      </div>
                      <div class="address">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icondianpu"></use>
                        </svg>
                        北京华脉诚信科技有限公司
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div class="recommend_article_box">
              <div class="left">
                <ul class="recommend_article">
                  <li>
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
                  </li>
                </ul>
                <a-button>
                  查看全部
                  <a-icon type="right" />
                </a-button>
              </div>
              <div class="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer />
    <!-- 侧边栏 -->
    <side-bar />
    <modal :isShow="visible" :options="options">
      <div slot="content">
        <div class="common_brand">
          <h2>常用品牌<span>鼠标拖拽可排序，点击“x”取消</span></h2>
          <draggable
            class="list-group"
            v-model="myArray2"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li v-for="(item, i) in myArray2" :key="`key-${i}`">
                <div class="img_box"></div>
                {{ item }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use
                      xlink:href="#iconguanlichangyongpinpaiquxiaochahao"
                    ></use>
                  </svg>
                </i>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="all_brand">
          <h2>全部分类<span>点击即可设为常用分类</span></h2>
          <div class="word_nav">
            <span>全部</span>
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
            </ul>
            <div class="inp_box">
              <input type="text" placeholder="请输入品牌名称" />
              <span>搜索</span>
            </div>
          </div>

          <draggable
            v-model="myArray"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li v-for="(item, i) in myArray" :key="i">
                <div class="img_box"></div>
                {{ item }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanlichangyongpinpaitianjia"></use>
                  </svg>
                </i>
              </li>
            </transition-group>
          </draggable>
        </div>
        <a-button
          key="submit"
          type="primary"
          @click="handleOk"
          :loading="false"
        >
          完成
        </a-button>
      </div>
    </modal>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import Header from "../components/header/header.vue";
  import Footer from "../components/footer/footer.vue";
  import sideBar from "../components/sideBar/sideBar.vue";
  import banner from "../components/common/banner.vue";
  import modal from "../components/common/modal.vue";
  import draggable from "vuedraggable";

  let myArray = [
    "迈瑞",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦"
  ];

  let myArray2 = ["西门子", "奔腾"];

  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "管理常用品牌",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand",
          centered: true
        },
        myArray,
        myArray2,
        drag: false
      };
    },
    components: {
      Header,
      Footer,
      sideBar,
      banner,
      modal,
      draggable
    },
    methods: {
      handleClick() {
        this.visible = true;
      },
      handleOk() {
        this.visible = false;
      }
    },
    mounted() {
      // console.log(Swiper);

      new Swiper(".swiper-container.nav_slide", {
        slidesPerView: "auto",
        // freeMode: true,
        direction: "horizontal",
        slideToClickedSlide: true,
        on: {
          init: function() {
            console.log(this);
            // this.marginLeft = $(this.slides.eq(0)).css("margin-left");

            this.navSlideWidth = this.slides[0].clientWidth; //导航字数需要统一,每个导航宽度一致
            console.log(this.navSlideWidth);
            /*  bar = this.$el.find('.bar')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   bar.css('width', this.navSlideWidth)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   bar.transition(tSpeed) */
            this.navSum = this.slides[this.slides.length - 1].offsetLeft; //最后一个slide的位置

            this.clientWidth = parseInt(this.$wrapperEl.clientWidth); //Nav的可视宽度

            this.navWidth = this.navSlideWidth * this.slides.length;
            /*  for (i = 0; i < this.slides.length; i++) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            this.navWidth += parseInt($(this.slides.eq(i)).outerWidth(true));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          } */
            //topBar = this.$el.parents('body').find('#top') //页头
          },
          touchStart: function() {
            this.updateSlides();
          },
          tap: function(e) {
            console.log(this);
            if (this.clickedIndex == undefined) return;
            // mySwiper.slideTo(this.clickIndex, 0);

            /* $(this.slides[this.clickedIndex])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .addClass("active")
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .siblings()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        .removeClass("active"); */
            //导航居中
            let navActiveSlideLeft = this.slides[this.clickedIndex].offsetLeft; //activeSlide距左边的距离
            this.setTransition(300);

            if (parseInt(this.navWidth) <= this.clientWidth) {
              this.setTranslate(0);
            } else {
              if (
                navActiveSlideLeft <
                (this.clientWidth - parseInt(this.navSlideWidth)) / 2
              ) {
                this.setTranslate(0);
              } else if (
                navActiveSlideLeft >
                this.navWidth -
                  (parseInt(this.navSlideWidth) + this.clientWidth) / 2
              ) {
                this.setTranslate(this.clientWidth - this.navWidth);
              } else {
                this.setTranslate(
                  (this.clientWidth - parseInt(this.navSlideWidth)) / 2 -
                    navActiveSlideLeft +
                    parseInt(this.marginLeft)
                );
              }
            }
          }
        }
      });
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/_commonScss";
  .index {
    .search {
      height: 134px;
      .commonWidth {
        padding-top: 23px;
        display: flex;
        justify-content: flex-start;
        h1 {
          margin-right: 41px;
        }
        .ipt_box {
          > div.search_box {
            height: 46px;
            border: 2px solid $theme-color;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 713px;
            i {
              margin: 0 9px 0 12px;
              .icon {
                height: 15px;
                width: 15px;
              }
            }
            input {
              font-size: 14px;
              font-family: $base-font-family;
              flex: 1;
              height: 100%;
              line-height: 42px;
            }
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 152px;
              background: $theme-color;
              height: 100%;
              cursor: pointer;
              font-size: 18px;
              font-family: $base-font-family;
              color: #ffffff;
            }
          }
          > div.nav {
            display: flex;
            justify-content: flex-start;
            height: 20px;
            align-items: center;
            margin-top: 15px;
            h2 {
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #999999;
              line-height: 14px;
            }
            ul {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              height: 100%;
              li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                a {
                  line-height: 14px;
                  font-family: $base-font-family;
                  color: #666666;
                  font-size: 14px;
                  text-decoration: none;
                  padding: 0 16px;
                  border-right: 1px solid #d8d8d8;
                  &:hover {
                    color: $theme-color;
                  }
                }
                &:last-child {
                  a {
                    border-right: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
    .top_nav {
      height: 60px;
      border-bottom: 2px solid $theme-color;
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li {
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 58px;
          font-family: Helvetica-Bold;
          font-size: 18px;
          color: #333333;
          cursor: pointer;
          &.active {
            background: $theme-color;
            color: #ffffff;
          }
        }
      }
    }
    .container {
      background: #f7f9fa;
      padding-bottom: 80px;

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
          font-family: PingFangSC-Medium;
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
          font-family: PingFangSC-Regular;
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
                  font-family: PingFangSC-Medium;
                  font-size: 18px;
                  color: #999999;
                }
                .bar {
                  position: absolute;
                  height: 3px;
                  width: 180px;
                  background: #f5a623;
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

                    border-bottom: 6px solid #f5a623;
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
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: #666666;
                  margin-bottom: 20px;
                  margin-right: 30px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .brand {
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
                  font-family: PingFangSC-Medium;
                  font-size: 18px;
                  color: #999999;
                }
                .bar {
                  position: absolute;
                  height: 3px;
                  width: 180px;
                  background: #f5a623;
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

                    border-bottom: 6px solid #f5a623;
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
                padding: 18px 20px;
                padding-bottom: 0;
                li {
                  font-family: PingFangSC-Regular;
                  font-size: 13px;
                  color: #666666;
                  margin-bottom: 20px;
                  margin-right: 30px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .recommend {
        .commonWidth {
          .recommend_tabs {
            height: 35px;
            margin-bottom: 24px;
            margin-top: 40px;

            .swiper-wrapper {
              position: relative;
            }
            .swiper-slide {
              width: 116px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              color: #666666;
              cursor: pointer;
              margin-right: 34px;
              border-radius: 16.5px;
              &.active {
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: $theme-color;
                background: #fff;
              }
            }
            .bar {
              position: absolute;
              height: 35px;
              width: 116px;
              border: 1px solid $theme-color;
              border-radius: 16.5px;

              //background: #ffffff;
            }
          }
          .recommend_page {
            .floor {
              display: none;
              > li {
                margin-bottom: 30px;
                h2 {
                  display: flex;
                  justify-content: space-between;
                  height: 43px;
                  align-items: center;
                  p {
                    width: 224px;
                    background: #f5a623;
                    height: 100%;
                    border-radius: 20px 20px 0 0;
                    display: flex;
                    align-items: center;
                    font-family: PingFangSC-Medium;
                    font-size: 18px;
                    color: #ffffff;
                    padding-left: 27px;
                  }
                  ul {
                    display: flex;
                    justify-content: flex-end;
                    flex: 1;
                    height: 100%;
                    align-items: flex-end;
                    border-bottom: 1px solid #f5a623;
                    padding-bottom: 3px;
                    li {
                      font-family: PingFangSC-Regular;
                      font-size: 14px;
                      color: #333333;
                      margin-right: 30px;
                      cursor: pointer;
                      &:hover {
                        color: $theme-color;
                      }
                    }
                  }
                  span {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #666666;
                    display: flex;
                    align-items: flex-end;
                    cursor: pointer;
                    height: 100%;
                    border-bottom: 1px solid #f5a623;
                    padding-bottom: 3px;
                    .icon {
                      margin-left: 7px;
                      margin-bottom: 3px;
                    }
                  }
                }
                .content {
                  height: 382px;
                  display: flex;
                  justify-content: flex-start;
                  .left {
                    width: 224px;
                    background: #fff;
                    box-shadow: $base-box-shadow;
                  }
                  .right {
                    flex: 1;
                    padding-left: 17px;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 4px;
                    li {
                      //margin-right: 12px;
                      //flex: 1;
                      width: 253px;
                      background: #fff;
                      box-shadow: $base-box-shadow;
                      padding: 15px 15px;
                      padding-bottom: 10px;
                      .img {
                        display: flex;
                        height: 224px;
                        width: 224px;
                        background: #f7f9fa;
                        margin-bottom: 8.6px;
                      }
                      .price {
                        height: 28px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-family: PingFangSC-Semibold;
                        font-size: 20px;
                        color: $theme-color;
                        margin-bottom: 5px;
                        > span {
                          font-family: PingFangSC-Regular;
                          font-size: 13px;
                          color: #666666;

                          .icon {
                            width: 14px;
                            height: 14px;
                          }
                          > span {
                            font-family: PingFangSC-Medium;
                            font-size: 12px;
                            color: #2a2a2a;
                            line-height: 16px;
                          }
                        }
                      }
                      > p {
                        font-family: PingFangSC-Medium;
                        font-size: 12px;
                        color: #333333;
                        font-weight: 600;
                        line-height: 17px;
                        margin-bottom: 7px;
                      }
                      .brand_small {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 10px;
                        span {
                          font-family: PingFangSC-Regular;
                          font-size: 12px;
                          color: #999999;
                        }
                      }
                      .address {
                        font-family: PingFangSC-Regular;
                        font-size: 13px;
                        color: #333333;
                        display: flex;
                        justify-content: flex-start;
                        height: 18px;
                        align-items: center;
                        .icon {
                          margin-right: 6px;
                          margin-top: 2px;
                        }
                      }
                    }
                  }
                }
              }
            }
            .recommend_article_box {
              display: flex;
              justify-content: flex-start;
              .left {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
              }
              .recommend_article {
                margin-bottom: 30px;
                > li {
                  width: 768px;
                  height: 192px;
                  margin-bottom: 12px;
                  background: #ffffff;
                  padding: 16px;
                  display: flex;
                  cursor: pointer;
                  justify-content: flex-start;
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
              }
              .ant-btn {
                width: 127px;
                height: 39px;
                background: #ffffff;
                border-radius: 32px;
                font-family: PingFangSC-Regular;
                //font-size: 16px;
                color: #333333;
                margin: 0 auto;
                &:hover {
                  color: $theme-color;
                  border-color: $theme-color;
                }
                &:active {
                  border-color: $theme-color;
                }
                &:focus {
                  border-color: $theme-color;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
