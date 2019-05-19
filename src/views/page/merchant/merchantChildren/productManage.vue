<template>
  <div class="productManage">
    <div class="productContainer">
      <commonTitle title="产品列表">
        <span slot="titleRight" class="publishGood">
          <router-link to="/merchant/publishGoods">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icontianjiatupian1"></use>
            </svg>
            发布产品
          </router-link>
        </span>
      </commonTitle>
      <div class="listContainer">
        <div class="selectInfoBox">
          <div class="selectInfo">
            <div class="common productName">
              <div class="left-box">产品名称</div>
              <div class="right-box">
                <a-input placeholder="请输入产品名称" />
              </div>
            </div>
            <div class="common productStatus">
              <div class="left-box">产品状态</div>
              <div class="right-box">
                <a-select
                  placeholder="请选择状态"
                  style="width: 112px"
                  @change="handleChange"
                  :options="options"
                >
                  <a-icon slot="suffixIcon" class="icon">
                    <use xlink:href="#icontianjiaduibichanpinxiala"></use>
                  </a-icon>
                </a-select>
              </div>
            </div>
            <div class="common productType">
              <div class="left-box">产品分类</div>
              <div class="right-box">
                <a-select
                  placeholder="请选择大类"
                  style="width: 112px"
                  @change="handleProductBigTypeChange"
                  :options="options"
                >
                  <a-icon slot="suffixIcon" class="icon">
                    <use xlink:href="#icontianjiaduibichanpinxiala"></use>
                  </a-icon>
                </a-select>
                <a-select
                  placeholder="请选择小类"
                  style="width: 112px"
                  @change="handleProductSmallTypeChange"
                  :options="options"
                >
                  <a-icon slot="suffixIcon" class="icon">
                    <use xlink:href="#icontianjiaduibichanpinxiala"></use>
                  </a-icon>
                </a-select>
              </div>
            </div>
          </div>
          <div class="selectBtn">
            <button class="search">搜索</button>
            <button class="clear">清除</button>
            <button class="export">导出</button>
          </div>
        </div>
        <div class="listContent">
          <h2>
            <span></span>
            <span>产品图片</span>
            <span>产品名称</span>
            <span>产品分类</span>
            <span>品牌/型号</span>
            <span>产品状态</span>
            <span>库存数量</span>
            <span>发布时间</span>
            <span>操作</span>
          </h2>
          <ul>
            <li v-for="item in data" :key="item.id" :class="addClass(item.id)">
              <span>
                <a-checkbox
                  @change="onChange(item.id)"
                  :checked="checkedChange(item.id)"
                ></a-checkbox>
              </span>
              <span><img :src="item.img"/></span>
              <span>{{ item.name }}</span>
              <span>{{ item.productLine }}</span>
              <span>{{ item.brandOrmodel }}</span>
              <span>{{ item.status }}</span>
              <span>{{ item.number }}</span>
              <span>{{ item.createOn }}</span>
              <span>
                <div>编辑</div>
                <div>下架</div>
              </span>
            </li>
          </ul>
          <check-all
            :amount="checkedList.length"
            :checkAll="checkAll"
            v-on:isCheckAll="isCheckAllMethod"
          >
            <div slot="right-box" class="right-box">
              <button class="shelf">上架</button>
              <button class="obtained">下架</button>
            </div>
          </check-all>
          <pagination></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const data = [
    {
      id: "1",
      name: "John Brown",
      img: "http://file.haoyigong.com/server/upload/1533522814856.jpg",
      productLine: "配件/CT类",
      brandOrmodel: "GE/GE-101",
      status: "未上架",
      number: 111,
      createOn: "2019-03-28"
    },
    {
      id: "2",
      img: "http://file.haoyigong.com/server/upload/1554081863934.jpg",
      name: "Jim Green",
      productLine: "配件/CT类",
      brandOrmodel: "GE/GE-102",
      status: "未上架",
      number: 111,
      createOn: "2019-03-28"
    },
    {
      id: "3",
      img: "http://file.haoyigong.com/server/upload/1553495655746.png",
      name: "Joe Black",
      productLine: "配件/CT类",
      brandOrmodel: "GE/GE-103",
      status: "未上架",
      number: 111,
      createOn: "2019-03-28"
    }
  ];
  const defaultCheckedList = [];
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import pagination from "../../../../components/common/pagination";
  import checkAll from "../../../../components/common/checkAll";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data,
        checkAll: false,
        checkedList: defaultCheckedList,
        totalCount: 60,
        options: [
          {
            label: "北京",
            value: "Zhejiang",
            title: "北京 010",
            key: "010"
          },
          {
            label: "上海",
            value: "Jiangsu",
            key: "021"
          },
          {
            label: "杭州",
            value: "hangzhou",
            key: "0571",
            disabled: true
          }
        ]
      };
    },
    methods: {
      isCheckAllMethod(val) {
        if (val) {
          this.checkAll = true;
          this.checkedList = [];
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      onChange(id) {
        if (_.indexOf(this.checkedList, id) == -1) {
          this.checkedList.push(id);
        } else {
          this.checkedList = _.without(this.checkedList, id);
        }
        if (this.checkedList.length == data.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
      },
      addClass(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return "active";
          }
        }
      },
      checkedChange(id) {
        for (const val of this.checkedList) {
          if (val == id) {
            return true;
          }
        }
      },
      onCheckAllChange() {
        if (!this.checkAll) {
          this.checkAll = true;
          for (const val of data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      onPaginationChange() {},
      handleChange() {},
      handleShopTypeChange(value) {
        console.log(`selected ${value}`);
      },
      handleProductBigTypeChange(value) {
        this.cities = cityData[value];
        console.log(this.cities);
        this.secondCity = cityData[value][0];
      },
      handleProductSmallTypeChange(value) {
        console.log(value);
      },
      getProductList() {
        _getData("goods/goodslist", {}).then(data => {
          console.log(data);
        });
      }
    },
    components: {
      commonTitle,
      pagination,
      checkAll
    },
    mounted() {}
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .productManage {
    .productContainer {
      background-color: #fff;
      padding: 4px 20px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
      margin-bottom: 10px;
      .publishGood {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        height: 22px;
        display: flex;
        align-items: center;
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }
        a {
          color: #333333;
        }
      }
      .listContainer {
        .selectInfoBox {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          margin-bottom: 24px;
          .selectInfo {
            display: flex;
            .common {
              display: flex;
              align-items: center;
              height: 27px;
              margin-right: 30px;
              .left-box {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #333333;
                margin-right: 6px;
              }
              .right-box {
                @include placeholderStyle(12px);
                .ant-input {
                  width: 121px;
                  height: 27px;
                }
                .ant-select {
                  margin-right: 10px;
                  height: 27px;
                  /deep/.ant-select-selection--single {
                    height: 100%;
                    .ant-select-selection__rendered {
                      height: 100%;
                      line-height: 27px;
                    }
                    .ant-select-selection__placeholder,
                    .ant-select-search__field__placeholder {
                      font-size: 12px;
                    }
                  }
                }
              }
            }
          }
          .selectBtn {
            button {
              border: 0;
              outline: none;
              background-color: transparent;
              color: #fff;
              font-size: 12px;
              margin-right: 10px;
              padding: 0 18px;
              height: 27px;
              line-height: 27px;
              cursor: pointer;
              &:last-child {
                margin-right: 0;
              }
            }
            .search {
              background-color: $theme-color;
            }
            .clear {
              background-color: #999;
            }
            .export {
              background-color: #f5a623;
            }
          }
        }
        .listContent {
          %span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #666;
            &:first-child {
              width: 34px;
              padding-left: 20px;
            }
            &:nth-child(2) {
              width: 70px;
              margin-left: 12px;
              margin-right: 12px;
              img {
                width: 100%;
                height: 70px;
              }
            }
            &:nth-child(3) {
              width: 155px;
              margin-right: 30px;
            }
            &:nth-child(4) {
              width: 98px;
              margin-right: 30px;
            }
            &:nth-child(5) {
              width: 98px;
              margin-right: 18px;
            }
            &:nth-child(6) {
              width: 68px;
              margin-right: 30px;
            }
            &:nth-last-child(3) {
              width: 68px;
              margin-right: 30px;
            }
            &:nth-last-child(2) {
              width: 68px;
              margin-right: 30px;
            }
            &:last-child {
              width: 34px;
              margin-left: 50px;
              div {
                margin-bottom: 10px;
                cursor: pointer;
              }
            }
          }
          h2 {
            height: 40px;
            display: flex;
            align-items: center;
            background-color: #f8f8f8;
            border: 1px solid #ddd;
            margin-bottom: 12px;
            span {
              @extend %span;
            }
          }
          li {
            display: flex;
            height: 93px;
            border: 1px solid #ddd;
            margin-bottom: 12px;
            padding-top: 11px;
            &.active {
              background-color: rgba(245, 166, 35, 0.06);
            }
            span {
              @extend %span;
            }
          }
          .checkedAllBox {
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #dddddd;
            .left-box {
              span {
                &:first-child {
                  width: 34px;
                  margin-right: 12px;
                  padding-left: 20px;
                }
                &:nth-child(3) {
                  margin-right: 40px;
                  padding-left: 42px;
                }
                i {
                  font-style: normal;
                  color: $theme-color;
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
            .right-box {
              button {
                width: 76px;
                height: 42px;
                line-height: 42px;
                border: 0;
                outline: none;
                background-color: transparent;
                color: #fff;
                text-align: center;
                cursor: pointer;
                &.shelf {
                  background-color: $theme-color;
                }
                &.obtained {
                  background-color: #f5a623;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
