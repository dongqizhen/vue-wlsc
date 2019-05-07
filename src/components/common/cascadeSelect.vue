<template>
  <div class="cascadeSelectBox">
    <div class="selectText">
      <span>
        <p v-for="item in defaultProviceData" :key="item.id">{{ item.name }}</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icontianjiaduibichanpinxiala"></use>
        </svg>
      </span>
    </div>
    <div class="selectValBox">
      <div class="left-box">
        <ul>
          <li
            v-for="item in proviceData"
            :key="item.id"
            :class="[addClass(item.id), currentId == item.id ? 'active' : '']"
            @click="activeEvent(item.id)"
          >
            <i></i>
            {{ item.name }}
            <span v-for="dataItem in defaultProviceData" :key="dataItem.id">
              <span v-if="dataItem.id == item.id">({{ dataItem.count }})</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="right-box">
        <cascade-right
          :data="cityData"
          :defaultSelect="defaultSelect"
        ></cascade-right>
      </div>
    </div>
  </div>
</template>
<script>
  import cascadeRight from "./cascadeSelectRight";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        proviceData: [
          { id: 1, name: "北京市" },
          { id: 3, name: "天津市" },
          { id: 4, name: "河北省" },
          { id: 5, name: "山西省" },
          { id: 6, name: "内蒙古自治区" },
          { id: 7, name: "辽宁省" },
          { id: 8, name: "吉林省" },
          { id: 9, name: "黑龙江省" },
          { id: 10, name: "上海市" },
          { id: 11, name: "江苏省" },
          { id: 12, name: "浙江省" },
          { id: 13, name: "安徽省" },
          { id: 14, name: "福建省" },
          { id: 15, name: "江西省" },
          { id: 16, name: "山东省" },
          { id: 17, name: "河南省" },
          { id: 18, name: "湖北省" },
          { id: 19, name: "湖南省" },
          { id: 20, name: "广东省" },
          { id: 21, name: "广西壮族自治区" },
          { id: 22, name: "海南省" },
          { id: 23, name: "重庆市" },
          { id: 24, name: "四川省" },
          { id: 25, name: "贵州省" },
          { id: 26, name: "云南省" },
          { id: 27, name: "西藏自治区" },
          { id: 28, name: "陕西省" },
          { id: 29, name: "甘肃省" },
          { id: 30, name: "青海省" },
          { id: 31, name: "宁夏回族自治区" },
          { id: 32, name: "新疆维吾尔自治区" },
          { id: 33, name: "台湾省" },
          { id: 34, name: "香港特别行政区" },
          { id: 35, name: "澳门特别行政区" },
          { id: 36, name: "全国" }
        ],
        cityData: [
          { id: 1, cityName: "菏泽市" },
          { id: 2, cityName: "烟台市" },
          { id: 3, cityName: "潍坊市" },
          { id: 4, cityName: "济南市" },
          { id: 5, cityName: "青岛市" },
          { id: 6, cityName: "泰安市" }
        ],
        defaultSelect: [],
        defaultProviceData: [{ id: -1, name: "请选择省/市" }],
        currentId: -1
      };
    },
    methods: {
      addClass(id) {
        for (const val of this.defaultProviceData) {
          if (id == val.id) {
            return "select-active";
          }
        }
      },
      activeEvent(id) {
        this.currentId = id;
      }
    },
    components: {
      cascadeRight
    },
    mounted() {
      _getData(this.$API_URL.merchantURL + "/api/address/getProvince", {}).then(
        data => {}
      );
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .cascadeSelectBox {
    .selectText {
      width: 390px;
      min-height: 33px;
      padding-left: 10px;
      padding-right: 20px;
      border: $border-style;
      border-radius: 3px;
      color: #ccc;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      span {
        &:first-child {
          min-height: 100%;
          p {
            height: 30px;
            line-height: 30px;
          }
        }
        &:last-child {
          display: flex;
          margin-top: 13px;
          .icon {
            width: 13px;
            height: 7px;
            vertical-align: middle;
          }
        }
      }
    }
    .selectValBox {
      width: 797px;
      height: 472px;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      position: absolute;
      background-color: #fff;
      z-index: 111;
      display: flex;
      .left-box {
        width: 175px;
        height: 100%;
        ul {
          height: 100%;
          overflow-y: scroll;
          padding: 16.5px 0;
          -ms-overflow-style: none;
          overflow: -moz-scrollbars-none;
          &::-webkit-scrollbar {
            width: 0 !important;
          }
          li {
            padding-left: 25px;
            height: 20px;
            margin-bottom: 16.5px;
            font-size: 14px;
            position: relative;
            display: flex;
            align-items: center;
            cursor: pointer;
            &.active {
              color: #019ddd;
              i {
                display: block;
              }
            }
            &.select-active {
              color: #019ddd;
              span {
                display: block;
              }
            }
            i {
              width: 3px;
              height: 15px;
              position: absolute;
              left: 0;
              top: center;
              background: #019ddd;
              display: none;
            }
            span {
              display: none;
            }
          }
        }
      }
    }
  }
</style>