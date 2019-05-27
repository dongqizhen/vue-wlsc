<template>
  <div class="comparison-of-parameters" @click.stop.prevent="hideClick">
    <Header></Header>
    <search></search>
    <Nav :defaultNav="defaultNav"></Nav>
    <div class="container">
      <div class="commonWidth">
        <h2><span></span>参数对比</h2>
        <transition-group name="list-complete" tag="div" class="content">
          <div class="col" key="first">
            <div class="header">
              <p>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconcanshuduibi"></use>
                </svg>
                主要参数
              </p>
            </div>
            <ul>
              <li v-for="item in paramas" :key="item.specificationId">
                {{ item.specificationName }}
              </li>
            </ul>
          </div>
          <div
            class="col"
            v-for="(item, i) in arr"
            :key="`${item.categoryId}-${i}`"
          >
            <div class="header">
              <p :class="item.modelName ? '' : 'no-data'">
                {{
                  item.modelName
                    ? item.categoryName +
                      "&nbsp;&nbsp;" +
                      item.brandName +
                      "&nbsp;&nbsp;" +
                      item.modelName
                    : "暂无型号"
                }}
              </p>

              <span
                class="del-btn"
                v-if="item.modelName && i != 0"
                @click="delbtnClick(i)"
              >
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontianjiaduibichanpinshanchu"></use>
                </svg>
              </span>
              <a-button
                type="primary"
                @click.self.stop="changeModel(i)"
                v-if="i != 0"
              >
                选择型号
              </a-button>
              <transition name="bounce">
                <div
                  class="modal-content"
                  v-if="defaultShowIndex == i"
                  @click.stop=""
                >
                  <h2>
                    <span @click.stop="brandTitleClick">品牌</span>
                    <svg class="icon" aria-hidden="true" v-if="isShowModel">
                      <use xlink:href="#iconwangyelujing"></use>
                    </svg>
                    <span v-if="isShowModel">型号</span>
                  </h2>
                  <div v-if="!isModelLoading">
                    <ul class="index-list" v-if="!isShowModel">
                      <li v-for="(v, key) in brandList" :key="key">
                        <h3>{{ key }}</h3>
                        <ul>
                          <li
                            v-for="value in v"
                            :key="value.id"
                            @click.stop="selectBrand(value)"
                          >
                            <div class="img_box">
                              <img
                                :src="value.app_list_pic_url"
                                alt=""
                                v-if="value.app_list_pic_url"
                              />
                            </div>
                            <p>{{ value.name }}</p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="index-list" v-else>
                      <li>
                        <ul>
                          <li
                            v-for="v in modelList"
                            :key="v.id"
                            @click="selectModel(v)"
                          >
                            {{ v.name }}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </transition>
            </div>
            <ul v-if="item.modelSpecificationInfo">
              <li v-for="val in item.modelSpecificationInfo" :key="val.id">
                {{ val.value }}
              </li>
            </ul>
            <ul v-else>
              <li v-for="val in paramas" :key="val.specificationId"></li>
            </ul>
          </div>
        </transition-group>
        <a-button type="primary" @click="addbtnClick" v-if="arr.length < 6">
          添加型号
        </a-button>
      </div>
    </div>
    <Footer></Footer>
    <side-bar />
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";
  import sideBar from "../../../components/sideBar/sideBar.vue";
  import { mixin } from "../../../components/mixin/mixin";
  import _ from "lodash";
  import { _getData } from "../../../config/getData";

  export default {
    data() {
      return {
        arr: [],
        paramas: [],
        brandList: [], //全部品牌
        defaultShowIndex: null, //显示的modal层index
        isShowModel: false, //是否展示型号层
        modelList: [], //型号列表
        isModelLoading: false
      };
    },
    mixins: [mixin],
    components: {
      Header,
      Footer,
      search,
      Nav,
      sideBar
    },
    created() {
      this.arr = _.fill(Array(4), {
        categoryId: this.$route.query.categoryId,
        categoryName: this.$route.query.categoryName
      });
    },
    mounted() {
      //参数对比
      this.getModelspecification(this.$route.query.modelId);
      //根据分类获取品牌
      _getData("brand/merge", { id: this.$route.query.categoryId })
        .then(data => {
          this.brandList = _.groupBy(
            _.orderBy(
              data.listAll,
              val => {
                return _.upperFirst(val.pinyin).substring(0, 1);
              },
              ["asc"]
            ),
            val => {
              return _.upperFirst(val.pinyin).substring(0, 1);
            }
          );

          console.log(this.brandList);
        })
        .then(() => {
          // console.log(this.navArr);
          // this.arr = this.navArr.listAll;
          // this.letterArr = _.groupBy(this.arr, val => {
          //   return _.upperFirst(val.pinyin).substring(0, 1);
          // });
          // //console.log(this.letterArr, _.keys(this.letterArr));
          // this.letter = _.orderBy(_.keys(this.letterArr), val => val, ["asc"]);
        });
    },
    methods: {
      //参数对比
      async getModelspecification(modelId) {
        return await _getData("modelspecification/query", {
          modelId
        }).then(data => {
          console.log(data);
          this.paramas = data.modelSpecificationInfo;
          // this.arr = [data, ..._.drop(this.arr)];
          console.log(this.defaultShowIndex);
          this.arr.splice(this.defaultShowIndex || 0, 1, data);
          console.log(this.arr);
        });
      },
      selectBrand(val) {
        console.log(val);
        this.isShowModel = true;
        console.log(this.arr[this.defaultShowIndex]);
        this.arr.splice(this.defaultShowIndex, 1, {
          categoryId: this.$route.query.categoryId,
          categoryName: this.$route.query.categoryName,
          brandName: val.name
        });
        // this.arr[this.defaultShowIndex]["brandName"] = val.name;
        console.log(this.defaultShowIndex, this.arr);
        this.getModelListByBrand(val.id).then(data => {
          this.modelList = data.brandModelList;
        });
      },
      selectModel(val) {
        console.log(val);
        this.arr[this.defaultShowIndex]["modelName"] = val.name;
        //;
        this.getModelspecification(val.id).then(data => {
          this.defaultShowIndex = null;
        });
      },
      //点击品牌按钮
      brandTitleClick() {
        this.isShowModel = false;
      },
      //点击删除按钮
      delbtnClick(i) {
        console.log(i);
        if (this.arr.length > 4) {
          this.arr.splice(i, 1);

          return;
        }
        // this.arr = _.flatMap(this.arr, (n, ind) => {
        //   if (ind == i) {
        //     n.name = "";
        //   }
        //   return [n];
        // });
        this.arr.splice(i, 1, {
          categoryId: this.$route.query.categoryId,
          categoryName: this.$route.query.categoryName
        });
      },
      //获取品牌下型号列表
      async getModelListByBrand(id) {
        return await _getData("brandmodel/list", {
          categoryId: this.$route.query.categoryId,
          brandId: id
        });
      },
      //点击添加型号按钮
      addbtnClick() {
        this.arr.push({
          categoryId: this.$route.query.categoryId,
          categoryName: this.$route.query.categoryName
        });
      },
      changeModel(i, e) {
        // e.stopPropagation();
        if (i != this.defaultShowIndex) {
          this.isShowModel = false;
        }
        this.defaultShowIndex = i;
      },
      hideClick() {
        this.defaultShowIndex = null;
        this.isShowModel = false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .container {
    .commonWidth {
      > h2 {
        height: 66px;
        padding-top: 9px;
        font-size: 20px;
        color: #2b3e50;
        font-weight: 600;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 8px;
        span {
          display: flex;
          height: 20px;
          width: 4px;
          background: #f5a623;
          margin-right: 8px;
        }
      }
      .content {
        background: #ffffff;
        box-shadow: $base-box-shadow;
        display: flex;
        .col {
          display: flex;
          flex-direction: column;
          flex: 1;
          transition: all 0.5s;
          .header {
            position: relative;
            height: 133px;
            border-right: 1px solid #e0e7ea;
            display: flex;

            justify-content: center;
            font-size: 14px;
            color: #666666;
            flex-wrap: wrap;
            font-weight: 600;
            padding: 0 10px;
            > p {
              display: flex;
              align-items: flex-start;
              text-align: center;
              padding-top: 25px;
              &.no-data {
                font-size: 14px;
                color: #999999;
                font-weight: normal;
              }
              .icon {
                margin-right: 5px;
              }
            }

            .del-btn {
              position: absolute;
              top: 8px;
              right: 8px;
              cursor: pointer;
              .icon {
                height: 12px;
                width: 12px;
              }
              &:hover {
                opacity: 0.7;
              }
            }
            /deep/ .ant-btn-primary {
              height: 30px;
              width: 101px;
              background: #f5f5f5;
              border-radius: 16px;
              border: #f5f5f5 1px solid;
              text-shadow: 0 -0.5px 0 #f5a623;
              position: absolute;
              bottom: 14.5px;
              span {
                font-size: 13px;
                color: #f5a623;
                display: flex;
                line-height: 30px;
                text-align: center;
                justify-content: center;
                align-items: center;
              }
              &:hover {
                opacity: 0.7;
              }
              &::after {
                border-color: #f5f5f5;
              }
            }
            .modal-content {
              width: 100%;
              width: 241px;
              height: 405px;
              background: #fff;
              box-shadow: $base-box-shadow;
              position: absolute;
              top: 133px;
              left: 50%;
              z-index: 9999;
              border-radius: 3px;
              display: flex;
              flex-direction: column;
              border: 1px solid #dddddd;
              h2 {
                height: 30px;
                border-bottom: 1px solid #dddddd;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 12px;
                color: #666666;
                padding-left: 12px;
                font-weight: 600;
                .icon {
                  height: 8px;
                  width: 8px;
                  margin: 0 7px;
                  margin-top: 2px;
                }
                span {
                  &:first-child {
                    cursor: pointer;
                    &:hover {
                      color: $theme-color;
                    }
                  }
                }
              }
              > div > ul {
                flex: 1;
                overflow: auto;
                &::-webkit-scrollbar {
                  width: 2px;
                  height: 2px;

                  background-color: #b5b1b1;
                }
                &::-webkit-scrollbar-track {
                  background: #f6f6f6;
                  border-radius: 2px;
                }
                &::-webkit-scrollbar-thumb {
                  background: #aaa;
                  border-radius: 2px;
                }
                > li {
                  h3 {
                    height: 23px;
                    background: #f5f5f5;
                    font-size: 12px;
                    color: #999999;
                    font-weight: 600;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 12px;
                  }
                  ul {
                    li {
                      padding-left: 12px;
                      display: flex;
                      justify-content: flex-start;
                      align-items: center;
                      height: 34px;
                      border-bottom: 1px solid #dddddd;
                      cursor: pointer;
                      font-size: 12px;
                      color: #999999;
                      &:hover {
                        color: $theme-color;
                        background: rgba(245, 166, 35, 0.03);
                      }
                      .img_box {
                        height: 18px;
                        width: 25px;
                        background: $base-background;
                        margin-right: 6px;
                        img {
                          width: 100%;
                          height: 100%;
                        }
                      }
                      p {
                        display: flex;
                        line-height: 34px;
                      }
                      &:last-child {
                        border: 0;
                      }
                    }
                  }
                }
              }
            }
            .fix-box {
              position: fixed;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              z-index: 0;
            }
          }
          > ul {
            li {
              border-top: 1px solid #e0e7ea;
              border-right: 1px solid #e0e7ea;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #666666;
              &:nth-child(2n) {
                background: rgba(245, 166, 35, 0.03);
              }
              &:last-child {
                border-bottom: 0;
              }
            }
          }
          &:first-child {
            .header {
              align-items: center;
              p {
                padding: 0;
                align-items: center !important;
              }
            }
          }
          &:last-child {
            .header {
              border-right: 0;
            }
            ul {
              li {
                border-right: 0;
              }
            }
          }
        }
      }
      /deep/ & > .ant-btn-primary {
        height: 90px;
        width: 32px;
        background: #f5a623;
        border-radius: 0 9px 9px 0;
        border: #f5a623 solid 1px;
        position: fixed;
        left: 50%;
        top: 400px;
        margin-left: 512px;
        padding: 0;
        cursor: pointer;
        display: flex;
        z-index: 2;
        span {
          font-size: 14px;
          color: #ffffff;
          display: flex;
          width: 30px;
          height: 90px;
          text-align: center;
          justify-content: center;
          align-items: center;
          line-height: 30px;
          word-break: break-all;
          writing-mode: tb-rl;
          margin-right: 2px;
        }
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  .list-complete-enter,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    // position: absolute;
  }
</style>