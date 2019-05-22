<template>
  <div class="myStore">
    <common-title title="我的收藏">
      <div slot="titleRight" class="right-box">
        <div class="search-box">
          <a-input placeholder="请输入搜索内容"></a-input>
          <a-button class="searchBtn">搜索</a-button>
          <a-button class="clearBtn">清空</a-button>
        </div>
        <div class="tab-box">
          <div :class="current == 0 ? 'active' : ''" @click="getTab(0)">
            产品(1)
          </div>
          <div :class="current == 1 ? 'active' : ''" @click="getTab(1)">
            店铺(2)
          </div>
        </div>
      </div>
    </common-title>
    <div class="listContainer">
      <div class="listContent">
        <ul v-if="current == 0">
          <product-item
            v-for="item in data"
            :key="item.id"
            :list="item"
          ></product-item>
        </ul>
        <ul v-else>
          <shop-item
            v-for="item in data"
            :key="item.id"
            :item="item"
          ></shop-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import { _getData } from "../../../../config/getData";
  import productItem from "../../../../components/common/item/productItem";
  import shopItem from "../../../../components/common/item/shopItem";
  export default {
    data() {
      return {
        data: [],
        current: 0
      };
    },
    methods: {
      getTab(val) {
        this.current = val;
        this.getList(val);
      },
      getList(typeId) {
        _getData("/collect/list", {
          typeId: typeId,
          currentPage: 1,
          countPerPage: 1000000
        }).then(data => {
          console.log("获取收藏数据：", data);
          this.data = data.data;
        });
      }
    },
    components: {
      commonTitle,
      productItem,
      shopItem
    },
    mounted() {
      this.getList(0);
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .myStore {
    width: 1036px;
    min-height: 693px;
    margin-bottom: 10px;
    .common-title {
      height: 59px;
      background-color: #fff;
      padding: 0 13px 0 20px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      border-bottom: none;
      .right-box {
        width: 774px;
        display: flex;
        justify-content: space-between;
        .search-box {
          display: flex;
          /deep/.ant-input {
            height: 27px;
            line-height: 27px;
            font-size: 12px;
            &:hover {
              border-color: $theme-color;
            }
            &:focus {
              border-color: $theme-color;
              box-shadow: 0 0 0 2px rgba(241, 2, 21, 0.2);
            }
          }
          /deep/.ant-btn {
            margin-right: 10px;
            height: 27px;
            font-size: 12px;
            color: #ffffff;
            border-radius: 0%;
          }
          .searchBtn {
            background-color: $theme-color;
            border-color: $theme-color;
            margin-left: 10px;
          }
          .clearBtn {
            background-color: #999;
            border-color: #999;
          }
        }
        .tab-box {
          display: flex;
          > div {
            width: 69px;
            height: 27px;
            line-height: 27px;
            font-size: 12px;
            color: #333333;
            font-weight: normal;
            border: $border-style;
            text-align: center;
            cursor: pointer;
            &:first-child {
              border-right: none;
            }
            &.active {
              background: #ffdfaa;
              border: 1px solid #f5a623;
            }
          }
        }
      }
    }

    .listContainer {
      margin-top: 12px;
      margin-right: -50px;

      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 254px;
          margin-right: 8px;
          float: left;
        }
      }
    }
  }
</style>
