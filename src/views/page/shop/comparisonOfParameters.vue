<template>
  <div class="comparison-of-parameters">
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
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
            </ul>
          </div>
          <div class="col" v-for="(item, i) in arr" :key="item.id">
            <div class="header">
              <p :class="item.name || 'no-data'">
                {{ item.name || "暂无型号" }}
              </p>

              <span class="del-btn" v-if="item.name" @click="delbtnClick(i)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icontianjiaduibichanpinshanchu"></use>
                </svg>
              </span>
              <a-button type="primary">更换型号</a-button>
            </div>
            <ul>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
              <li>参数一</li>
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
  export default {
    data() {
      return {
        arr: [
          {
            name: "核磁共振MRI类 飞利浦 loge980-7890",
            id: 1
          },
          {
            name: "放射类 GE loge9",
            id: 2
          },
          {
            name: "",
            id: 3
          },
          {
            name: "",
            id: 4
          }
        ]
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
    methods: {
      delbtnClick(i) {
        if (this.arr.length > 4) {
          this.arr.splice(i, 1);

          return;
        }
        this.arr = _.flatMap(this.arr, (n, ind) => {
          if (ind == i) {
            n.name = "";
          }
          return [n];
        });
      },
      addbtnClick() {
        this.arr.push({
          name: "",
          id: this.arr.length + 1
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/_commonScss";
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
            p {
              display: flex;
              align-items: flex-start;
              text-align: center;
              padding-top: 30px;
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
          }
          ul {
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