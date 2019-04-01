<template>
  <div class="index">
    <!-- 头部 -->
    <div class="header">
      <div class="content">
        <div class="left">
          <p>欢迎来到网来商城</p>
          <router-link to="#">请登录</router-link>
          <router-link to="#" tag="span"><a>免费注册</a></router-link>
        </div>
        <ul class="right">
          <router-link tag="li" to="#">
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icongouwuche"></use>
              </svg>
              我的选购单
            </a>
          </router-link>
          <router-link tag="li" to="#"><a>商家中心</a></router-link>
          <router-link tag="li" to="#">
            <a>
              <i></i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconwanglaishangchengapp"></use>
              </svg>
              网来商城App
            </a>
          </router-link>
        </ul>
      </div>
    </div>
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
      <div class="banner">
        <div class="commonWidth">
          <swiper ref="mySwiper" :options="swiperOption">
            <!-- slides -->
            <swiper-slide
              ><img src="../assets/images/banner.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/banner.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/banner.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/banner.png"
            /></swiper-slide>
            <swiper-slide
              ><img src="../assets/images/banner.png"
            /></swiper-slide>
            <!-- Optional controls -->
            <ul class="swiper-pagination" slot="pagination"></ul>
          </swiper>
          <div class="login">
            <div class="avatar">
              <h2>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconweidenglutouxiang"></use>
                </svg>
              </h2>
              <p>Hi,下午好</p>
              <div class="btn">
                <span class="login_in">登录</span>
                <span class="sign_in">注册</span>
              </div>
            </div>
            <div class="notice">
              <h2>
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconxingzhuang"></use>
                  </svg>
                </i>
                系统公告
              </h2>
              <ul>
                <li>
                  <span>【公告】</span>
                  <p>2017十一假期暂停什么十一假期暂停什么…</p>
                </li>
                <li>
                  <span>【公告】</span>
                  <p>2017十一假期暂停什么…</p>
                </li>
                <li>
                  <span>【公告】</span>
                  <p>2017十一假期暂停什么…</p>
                </li>
                <li>
                  <span>【公告】</span>
                  <p>2017十一假期暂停什么…</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
            <span class="btn">
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
                      <p>超声探头这里最多可以显示两行字，多余的用…展示</p>
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
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->

    <div class="footer">
      <div class="commonWidth">
        <div class="link">
          <div class="left">
            <ul>
              <li>
                <h2>入门指南</h2>
                <router-link tag="span" to="#">
                  <a>关于我们</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>如何注册</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>卖家入门</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>买家入门</a>
                </router-link>
              </li>
              <li>
                <h2>采购专家</h2>
                <router-link tag="span" to="#">
                  <a>询价系统</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>快速下单</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>如何采购</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>投诉维权</a>
                </router-link>
              </li>
              <li>
                <h2>购货商家</h2>
                <router-link tag="span" to="#">
                  <a>开通店铺</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>营销中心</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>发布新品</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>商家服务</a>
                </router-link>
              </li>
              <li>
                <h2>平台服务</h2>
                <router-link tag="span" to="#">
                  <a>支付方式</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>交易维权</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>客服中心</a>
                </router-link>
                <router-link tag="span" to="#">
                  <a>网来商城规则</a>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="right">
            <img src="../assets/images/logo.png" alt="" />
            <i></i>
            <div></div>
          </div>
        </div>
        <div class="copyright"></div>
      </div>
    </div>

    <!-- 侧边栏 -->
    <div id="components-back-top-demo-custom" class="sidebar">
      <a-back-top>
        <div class="back-top-inner">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconhuidingbu1"></use>
          </svg>
        </div>
      </a-back-top>
      <div class="online_server">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzaixianzixun"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import Swiper from "swiper";
  export default {
    data() {
      return {
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true

          notNextTick: true,

          //循环

          loop: true,

          //设定初始化时slide的索引

          initialSlide: 0,

          //自动播放

          autoplay: {
            delay: 4000,

            stopOnLastSlide: false,

            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            bulletElement: "li",
            // type: "custom",
            clickable: true
          }
        }
      };
    },
    components: {
      swiper,
      swiperSlide
    },
    methods: {},
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
    }
  };
</script>

<style scoped lang="scss">
  @import "../assets/scss/_commonScss";
  .index {
    .header {
      height: 40px;
      width: 100%;
      background: #f5f5f5;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 14px;
      .content {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          color: #333333;

          display: flex;
          justify-content: flex-start;
          p {
            display: flex;
          }
          a {
            padding: 0 20px 0 10px;
            color: $theme-color;
            text-decoration: none;
          }
          span {
            > a {
              color: #999999;
              padding: 0;
              &:hover {
                color: $theme-color;
              }
            }
          }
        }
        .right {
          display: flex;
          justify-content: flex-start;
          li {
            a {
              color: #666666;
              text-decoration: none;
              line-height: 14px;
              &:hover {
                color: $theme-color;
              }
              svg {
                margin-right: 5px;
              }
            }
            &:nth-child(2) {
              margin: 0 30px;
            }
          }
        }
      }
    }
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
      .banner {
        padding-top: 30px;
        margin-bottom: 14px;
        .commonWidth {
          height: 300px;
          //background: $theme-color;
          position: relative;
          /deep/ .swiper-container {
            height: 100%;
            cursor: pointer;
            .swiper-pagination {
              height: 8px;
              width: 100%;
              bottom: 16px;
              display: flex;
              justify-content: center;
              li {
                background: #fff;
                border-radius: 5px;
                border-radius: 5px;
                height: 8px;
                width: 8px;
                margin: 0;
                opacity: 0.65;
                margin-right: 8px;
                transition: opacity 0.5s, background-color 0.5s, width 0.5s;
                transition-delay: 0.5s, 0.5s, 0s;
                &.swiper-pagination-bullet-active {
                  width: 24px;
                  transition-delay: 0s;
                }
              }
            }
          }
          .login {
            height: 100%;
            width: 218px;
            position: absolute;
            right: 0;
            background: rgba(51, 51, 51, 0.64);
            top: 0;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            .avatar {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              h2 {
                height: 50px;
                width: 50px;
                border-radius: 26px;
                background: #cbcbcb;
                border: 1px solid #979797;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 16px;
                margin-bottom: 10px;
                .icon {
                  height: 32px;
                  width: 28px;
                }
              }
              p {
                font-size: 14px;
                font-family: $base-font-family;
                color: #ffffff;
                margin-bottom: 9px;
              }
              .btn {
                width: 100%;
                padding: 0 34px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;
                span {
                  background: rgba(255, 255, 255, 0.36);
                  border: 0.5px solid #ffffff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 59px;
                  height: 27px;
                  font-family: PingFangSC-Regular;
                  font-size: 14px;
                  color: #ffffff;
                  cursor: pointer;
                }
              }
            }
            .notice {
              padding: 0 13px;
              width: 100%;
              h2 {
                border-bottom: #d8d8d8 1px solid;
                height: 25px;
                font-size: 12px;
                color: #ffffff;
                font-family: $base-font-family;
                display: flex;
                align-items: center;
                line-height: 25px;
                i {
                  margin-top: 1px;
                  margin-right: 2.5px;
                  .icon {
                    height: 13px;
                    width: 12px;
                  }
                }
              }
              ul {
                width: 100%;
                li {
                  height: 30px;
                  font-family: PingFangSC-Regular;
                  font-size: 12px;
                  color: #ffffff;
                  line-height: 30px;
                  border-bottom: 0.5px dotted rgba(255, 255, 255, 0.52);
                  display: flex;
                  justify-content: flex-start;
                  cursor: pointer;
                  &:hover {
                    color: $theme-color;
                  }
                  p {
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
        }
      }

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
          }
        }
      }
    }

    .footer {
      height: 300px;
      border-top: 2px solid $theme-color;
      .commonWidth {
        width: 1200px;
        .link {
          padding: 43px 0 33px;
          border-bottom: 1px solid #ddd;
          display: flex;
          .left {
            flex: 1;
            ul {
              display: flex;
              justify-content: flex-start;
              li {
                width: 104px;
                display: flex;
                flex-direction: column;
                h2 {
                  font-family: PingFangSC-Regular;
                  font-size: 16px;
                  color: #333333;
                  height: 22px;
                  line-height: 22px;
                  margin-bottom: 25px;
                }
                span {
                  display: flex;
                  height: 17px;
                  align-items: center;
                  margin-bottom: 10px;
                  a {
                    display: flex;
                    height: 17px;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #666666;
                    &:hover {
                      color: $theme-color;
                    }
                  }
                }
              }
            }
          }
          .right {
            flex: 1;
          }
        }
      }
    }

    .sidebar {
      height: 102px;
      width: 48px;
      position: fixed;
      right: 50px;
      bottom: 110px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //background: red;
      /deep/ .ant-back-top {
        position: static;
        width: 100%;
        height: 47px;
        .back-top-inner {
          height: 100%;
          width: 100%;
          // background: rgba(241, 2, 21, 0.22);
          opacity: 0.22;
          .icon {
            height: 100%;
            width: 100%;
          }
          &:hover {
            opacity: 1;
          }
        }
      }
      .online_server {
        width: 100%;
        height: 47px;
        position: absolute;
        bottom: 0;
        opacity: 0.22;
        font-family: PingFangSC-Medium;
        font-size: 13px;
        color: #ffffff;
        display: flex;
        align-items: center;
        cursor: pointer;
        .icon {
          height: 100%;
          width: 100%;
        }
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>