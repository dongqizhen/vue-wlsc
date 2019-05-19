<template>
  <div class="shop-left-side">
    <h2>品牌</h2>
    <div class="commonBrand" v-if="isLogin">
      <h3>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconpingjiashixinwujiaoxing"></use>
          </svg>
          常用品牌
        </span>
        <span>管理常用品牌</span>
      </h3>
      <div class="item-box">
        <ul>
          <li v-for="item in brandList.userbrandList" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
        <span>
          更多
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icongengduoxialajiantou"></use>
          </svg>
        </span>
      </div>
    </div>
    <div class="line-products">
      <h3>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyixianpinpai"></use>
          </svg>
          一线品牌
        </span>
      </h3>
      <ul>
        <li class="item-box">
          <ul>
            <li v-for="item in brandList.userbrandList" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
          <span>
            更多
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongengduoxialajiantou"></use>
            </svg>
          </span>
        </li>
        <li class="item-box" v-for="(val, key) in letterArr" :key="key">
          <h4>{{ key }}</h4>
          <ul>
            <li v-for="item in val" :key="key + item.id">{{ item.name }}</li>
          </ul>
          <span>
            更多
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongengduoxialajiantou"></use>
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        brandList: [],
        letterArr: [],
        arr: []
      };
    },
    props: ["categoryId"],
    computed: {
      ...mapState(["isLogin"])
    },
    methods: {
      async getBrandList() {
        return await _getData("brand/merge", { id: this.categoryId }).then(
          data => {
            console.log("456", data);
            this.brandList = data;
            this.arr = data.listAll;
            console.log(
              _.groupBy(this.arr, val => {
                return _.upperFirst(val.pinyin).substring(0, 1);
              })
            );
            this.letterArr = _.groupBy(this.arr, val => {
              return _.upperFirst(val.pinyin).substring(0, 1);
            });
          }
        );
      }
    },
    mounted() {
      this.getBrandList();
    }
  };
</script>


<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  h2 {
    height: 47px;
    display: flex;
    line-height: 47px;
    padding-left: 20px;
    font-size: 14px;
    color: #333333;
    font-weight: 600;
  }
  .commonBrand,
  .line-products {
    h3 {
      height: 48px;
      padding-left: 12.5px;
      padding-right: 10px;
      line-height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f5f5f5;
      span {
        font-size: 13px;
        color: #333333;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .icon {
          height: 13px;
          width: 13px;
          margin-right: 4.5px;
          margin-bottom: 1px;
        }
        &:nth-child(2) {
          font-size: 11px;
          color: #333333;
          cursor: pointer;
        }
      }
    }
    .item-box {
      padding: 20px 15px 0 20px;
      position: relative;

      h4 {
        background: #f5f5f5;
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: 14px;
        color: #019ddd;
        font-weight: 600;
      }
      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-right: -20px;
        height: 82px;
        overflow: hidden;
        li {
          font-size: 14px;
          color: #666666;
          margin-bottom: 20px;
          cursor: pointer;
          margin-right: 20px;
          &:hover {
            color: $theme-color;
          }
        }
      }
      > span {
        font-size: 12px;
        color: #019ddd;
        position: absolute;
        display: flex;
        height: 21px;
        bottom: 20px;
        right: 20px;
        line-height: 21px;
        align-items: center;
        display: flex;
        cursor: pointer;
        .icon {
          height: 5px;
          width: 9px;
          margin-left: 4px;
        }
      }
    }
  }
  .line-products {
    > ul {
      > li.item-box {
        padding: 0;

        > ul {
          padding: 20px 15px 0 20px;
          height: 102px;
          > li {
          }
        }
      }
    }
  }
</style>