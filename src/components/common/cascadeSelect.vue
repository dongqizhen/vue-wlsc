<template>
  <div class="cascadeSelectBox">
    <div class="selectText">
      <span>
        <!-- <p v-for="item in defaultProviceData" :key="item.id">{{ item.name }}</p> -->
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
            @click="activeEvent(item.id, item)"
          >
            <i></i>
            {{ item.name }}
            <span v-for="dataItem in defaultProviceData" :key="dataItem.id">
              <span v-show="dataItem.id == item.id">
                ({{ dataItem.count }})
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="right-box">
        <cascade-right
          :data="cityData"
          :defaultCityData="defaultCityData"
          v-on:getSelectArr="getSelectArr"
          :provinceId="provinceId"
        ></cascade-right>
      </div>
    </div>
  </div>
</template>
<script>
  import cascadeRight from "./cascadeSelectRight";
  import { _getData } from "../../config/getData";
  import _ from "lodash";
  export default {
    data() {
      return {
        proviceData: [],
        cityData: [],
        defaultCityData: [],
        defaultProviceData: [
          {
            id: 1,
            name: "北京市",
            count: 2,
            defaultCityData: [
              { id: 1, name: "朝阳区" },
              { id: 11, name: "房山区" }
            ]
          },
          {
            id: 22,
            name: "海南省",
            count: "全部",
            defaultCityData: [
              { id: 230, name: "海口市" },
              { id: 231, name: "三亚市" },
              { id: 232, name: "东方市" }
            ]
          }
        ],
        currentId: -1,
        activeProvinceName: "",
        selectArr: [],
        provinceId: -1
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
      activeEvent(id, item) {
        this.currentId = id;
        this.getCityData(id);
        this.activeProvinceName = item.name;
      },
      getCityData(id) {
        _getData("/api/address/getCity", { provinceId: id }).then(data => {
          console.log(data);
          this.cityData = data;
          var IDArr = [];
          if (
            _.filter(this.defaultProviceData, value => {
              return id == value.id;
            }).length != 0
          ) {
            this.defaultCityData = _.filter(this.defaultProviceData, value => {
              return id == value.id;
            });
          } else {
            this.defaultCityData = [];
          }
          console.log(this.defaultProviceData);
          console.log(
            _.filter(this.defaultProviceData, value => {
              return id == value.id;
            })
          );
          //IDArr.push(value.id);
          // if (id == value.id) {
          //   console.log(111);
          //   console.log(value.defaultCityData);
          //   this.defaultCityData = value.defaultCityData;
          // } else {
          //   this.defaultCityData = [];
          // }
          // if(_.indexOf(IDArr, id)!=-1){

          //             }else{

          //             }
        });
      },
      getSelectArr(arr) {
        console.log(arr);
        let that = this;
        _.forEach(this.defaultProviceData, function(value) {
          if (value.id == that.currentId) {
            that.defaultProviceData = _.without(that.defaultProviceData, value);
          }
        });
        if (arr.length != 0) {
          that.defaultProviceData.push({
            id: that.currentId,
            name: that.activeProvinceName,
            count: arr.length
          });
          that.defaultProviceData.push({
            id: that.currentId,
            defaultCityData: arr
          });
        }
        console.log(that.defaultProviceData);
      }
    },
    components: {
      cascadeRight
    },
    mounted() {
      _getData("/api/address/getProvince", {}).then(data => {
        console.log(data);
        this.proviceData = data;
        _getData("/api/address/getCity", { provinceId: data[0].id }).then(
          data => {
            console.log(data);
            this.cityData = data;
            this.currentId = data[0].id;
            _.forEach(this.defaultProviceData, value => {
              if (data[0].id == value.id) {
                this.defaultCityData = value.defaultCityData;
              }
            });
          }
        );
      });
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