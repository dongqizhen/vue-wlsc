<template>
    <div class="brand-classific">
        <breadcrumb-vue :routes="routes"></breadcrumb-vue>
        <!--  <h2>
      <span class="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconchanpinfenlei"></use>
        </svg>
        品牌分类
      </span>
    </h2> -->
        <div class="main-content">
            <div class="left">
                <div class="left-L">
                    <ul class="clearfix">
                        <li v-for="(item, i) in [1, 2]" :key="`item-${i}`">
                            <h2>
                                <span class="title">
                                    <svg class="icon" aria-hidden="true">
                                        <use
                                            xlink:href="#iconpingjiashixinwujiaoxing"
                                        ></use>
                                    </svg>
                                    常用分类
                                </span>
                                <span class="btn" @click="visible = !visible">
                                    <svg class="icon" aria-hidden="true">
                                        <use
                                            xlink:href="#iconguanlichangyongfenlei"
                                        ></use>
                                    </svg>
                                    管理常用分类
                                    <common-categories-modal-vue
                                        :Visible="visible"
                                    ></common-categories-modal-vue>
                                </span>
                            </h2>
                            <ul :class="left_show_arr[i] && 'active'">
                                <router-link
                                    :to="
                                        $route.query.nav_index == 1
                                            ? {
                                                  path: 'oneOfBrandClassificne',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : $route.query.nav_index == 2
                                            ? {
                                                  path: 'brand',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : ''
                                    "
                                    append
                                    tag="li"
                                >
                                    <a>超声手术设备</a></router-link
                                >
                                <router-link
                                    :to="
                                        $route.query.nav_index == 1
                                            ? {
                                                  path: 'oneOfBrandClassificne',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : $route.query.nav_index == 2
                                            ? {
                                                  path: 'brand',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : ''
                                    "
                                    append
                                    tag="li"
                                >
                                    <a>高强度超声治疗设备</a></router-link
                                >
                                <router-link
                                    to="oneOfBrandClassificne"
                                    append
                                    tag="li"
                                >
                                    <a>激光手术设备</a></router-link
                                >
                                <router-link
                                    to="oneOfBrandClassificne"
                                    append
                                    tag="li"
                                >
                                    <a>手术辅助照明灯</a></router-link
                                >

                                <li>医用激光光纤</li>
                                <li>主电缆</li>
                                <li>手术无影灯</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                            </ul>

                            <span
                                @click="LeftMoreBtnClick(i)"
                                v-if="left_show_arr[i]"
                                class="active"
                            >
                                收起
                                <svg class="icon" aria-hidden="true">
                                    <use
                                        xlink:href="#icontianjiaduibichanpinxiala"
                                    ></use>
                                </svg>
                            </span>
                            <span @click="LeftMoreBtnClick(i)" v-else>
                                更多
                                <svg class="icon" aria-hidden="true">
                                    <use
                                        xlink:href="#icongengduoxialajiantou"
                                    ></use>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="left-R">
                    <ul class="clearfix">
                        <li v-for="(item, i) in [1, 2]" :key="`item1-${i}`">
                            <h2>
                                <span class="title">
                                    <svg class="icon" aria-hidden="true">
                                        <use
                                            xlink:href="#iconpingjiashixinwujiaoxing"
                                        ></use>
                                    </svg>
                                    常用分类
                                </span>
                                <span class="btn" @click="visible = !visible">
                                    <svg class="icon" aria-hidden="true">
                                        <use
                                            xlink:href="#iconguanlichangyongfenlei"
                                        ></use>
                                    </svg>
                                    管理常用分类
                                    <common-categories-modal-vue
                                        :Visible="visible"
                                    ></common-categories-modal-vue>
                                </span>
                            </h2>

                            <ul :class="right_show_arr[i] && 'active'">
                                <router-link
                                    :to="
                                        $route.query.nav_index == 1
                                            ? {
                                                  path: 'oneOfBrandClassificne',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : $route.query.nav_index == 2
                                            ? {
                                                  path: 'brand',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : ''
                                    "
                                    append
                                    tag="li"
                                >
                                    <a>超声手术设备</a></router-link
                                >
                                <router-link
                                    :to="
                                        $route.query.nav_index == 1
                                            ? {
                                                  path: 'oneOfBrandClassificne',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : $route.query.nav_index == 2
                                            ? {
                                                  path: 'brand',
                                                  query: {
                                                      nav_index:
                                                          $route.query.nav_index
                                                  }
                                              }
                                            : ''
                                    "
                                    append
                                    tag="li"
                                >
                                    <a>高强度超声治疗设备</a></router-link
                                >
                                <router-link
                                    to="oneOfBrandClassificne"
                                    append
                                    tag="li"
                                >
                                    <a>激光手术设备</a></router-link
                                >
                                <router-link
                                    to="oneOfBrandClassificne"
                                    append
                                    tag="li"
                                >
                                    <a>手术辅助照明灯</a></router-link
                                >

                                <li>医用激光光纤</li>
                                <li>主电缆</li>
                                <li>手术无影灯</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                                <li>手术辅助照明灯</li>
                                <li>医用射线防护用具</li>
                                <li>超声手术设备</li>
                                <li>高强度超声治疗设备</li>
                            </ul>
                            <span
                                @click="rightMoreBtnClick(i)"
                                v-if="right_show_arr[i]"
                                class="active"
                            >
                                收起
                                <svg class="icon" aria-hidden="true">
                                    <use
                                        xlink:href="#icontianjiaduibichanpinxiala"
                                    ></use>
                                </svg>
                            </span>
                            <span @click="rightMoreBtnClick(i)" v-else>
                                更多
                                <svg class="icon" aria-hidden="true">
                                    <use
                                        xlink:href="#icongengduoxialajiantou"
                                    ></use>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="right">
                <brand-card-vue
                    v-if="$route.query.nav_index == 2"
                ></brand-card-vue>
            </div>
        </div>
    </div>
</template>

<script>
import brandCardVue from "../../../../components/common/brandCard.vue";
import breadcrumbVue from "../../../../components/common/breadcrumb.vue";
import CommonCategoriesModalVue from "../../../../components/modal/CommonCategoriesModal.vue";

export default {
    data() {
        return {
            routes: "",
            visible: false,
            left_showMore: false,
            left_index: null,
            left_show_arr: [],
            right_show_arr: []
        };
    },
    components: {
        brandCardVue,
        breadcrumbVue,
        CommonCategoriesModalVue
    },
    methods: {
        LeftMoreBtnClick(i) {
            if (this.left_show_arr[i]) {
                this.left_show_arr.splice(i, 1, false);

                return;
            }
            this.left_show_arr.splice(i, 1, true);
        },
        rightMoreBtnClick(i) {
            if (this.right_show_arr[i]) {
                this.right_show_arr.splice(i, 1, false);

                return;
            }
            this.right_show_arr.splice(i, 1, true);
        }
    },
    created() {
        this.routes =
            this.$route.query.nav_index == 1
                ? (this.routes = [
                      {
                          name: "首页",
                          path: "/"
                      },
                      {
                          name: "找产品",
                          path: "/lookingProduct"
                      }
                  ])
                : [
                      {
                          name: "首页",
                          path: "/"
                      },
                      {
                          name: "找品牌",
                          path:
                              "/lookingProduct/oneOfBrandClassificne?nav_index=" +
                              this.$route.query.nav_index
                      },
                      {
                          name: "松下",
                          path: "/lookingProduct"
                      }
                  ];
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
        &:hover {
            opacity: 0.7;
        }
    }
}
.main-content {
    display: flex;
    justify-content: space-between;
    .left {
        margin-right: -24px;
        width: $content-left;
        display: flex;
        justify-content: space-between;
        .left-L,
        .left-R {
            width: 374px;
            > ul {
                // display: flex;
                // justify-content: space-between;
                // flex-wrap: wrap;
                margin-bottom: -24px;
                // float: left;
                margin-right: -30px;
                > li {
                    width: 374px;
                    box-shadow: $base-box-shadow;
                    background: #fff;
                    margin-bottom: 24px;
                    position: relative;
                    float: left;
                    margin-right: 20px;
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
                                margin-bottom: 0px;
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
                        height: 162px;
                        overflow: hidden;
                        transition: all 0.3s;
                        &.active {
                            height: auto;
                        }
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
                        &.active {
                            color: #999999;
                            .icon {
                                transform: rotate(180deg);
                            }
                        }
                        .icon {
                            height: 6px;
                            width: 10px;
                            margin-left: 4px;
                            margin-top: 1px;
                            transition: all 0.3s;
                            &.active {
                                transform: rotate(180deg);
                            }
                        }
                        &:hover {
                            opacity: 0.7;
                        }
                    }
                }
            }
        }
    }

    .right {
        width: 236px;
    }
}
</style>
