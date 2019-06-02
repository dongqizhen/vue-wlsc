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
                <a-input
                  placeholder="请输入产品名称"
                  v-model="submitData.name"
                />
              </div>
            </div>
            <div class="common productStatus">
              <div class="left-box">产品状态</div>
              <div class="right-box">
                <el-select
                  style="width: 112px;margin-right:10px;"
                  v-model="submitData.isOnSale"
                  placeholder="请选择状态"
                  @change="handleStatusChange"
                >
                  <el-option
                    v-for="item in statusOptions"
                    :key="item.id"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="common productType">
              <div class="left-box">产品分类</div>
              <div class="right-box">
                <el-select
                  style="width: 112px;margin-right:10px;"
                  v-model="submitData.bigCategoryId"
                  placeholder="请选择大类"
                  @change="handleProductBigTypeChange"
                >
                  <el-option
                    v-for="item in bigOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <el-select
                  style="width: 112px;margin-right:10px;"
                  v-model="submitData.categoryId"
                  placeholder="请选择小类"
                  @change="handleProductSmallTypeChange"
                >
                  <el-option
                    v-for="item in smallOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="selectBtn">
            <button class="search" @click="searchData">搜索</button>
            <button class="clear" @click="clearData">清除</button>
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
              <span><img :src="item.list_pic_url"/></span>
              <span>{{ item.name }}</span>
              <span>{{ item.category_name }}/{{ item.category_name }}</span>
              <span>{{ item.brand_name }}/{{ item.brand_model_name }}</span>
              <span>{{ item.is_on_sale == 1 ? "上架" : "未上架" }}</span>
              <span>{{ item.goods_number }}</span>
              <span>{{ item.add_time.substring(0, 16) }}</span>
              <span>
                <div @click="editProduct(item.id)">编辑</div>
                <div @click="obtained(item.id, item.is_on_sale)">
                  {{ item.is_on_sale == 1 ? "下架" : "上架" }}
                </div>
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
          <pagination
            :data="totalCount"
            v-on:onPaginationChange="getPaginationChange"
          ></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import _ from "lodash";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import pagination from "../../../../components/common/pagination";
  import checkAll from "../../../../components/common/checkAll";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        data: [],
        bigOptions: [],
        smallOptions: [],
        statusOptions: [
          { label: "全部", value: 0 },
          { label: "上架", value: 1 },
          { label: "下架", value: 2 }
        ],
        checkAll: false,
        checkedList: [],
        totalCount: { amount: 0 },
        submitData: {
          isOnSale: 0,
          name: "",
          bigCategoryId: "",
          categoryId: "",
          currentPage: 1,
          countPerPage: "10"
        }
      };
    },
    computed: {
      ...mapState(["userShopInfo"])
    },
    methods: {
      editProduct(id) {
        this.$router.replace({
          path: "/merchant/publishGoods",
          query: { id: id }
        });
      },
      obtained(id, is_on_sale) {
        console.log(id);
        console.log(is_on_sale);
        _getData("/goods/goodsIsOnSale", { id: id, isOnSale: is_on_sale }).then(
          data => {
            console.log(data);
          }
        );
      },
      searchData() {
        console.log(this.submitData);
        this.getProductList(this.submitData);
      },
      clearData() {
        this.submitData.isOnSale = 0;
        this.submitData.name = "";
        this.submitData.bigCategoryId = "";
        this.submitData.categoryId = "";
      },
      getPaginationChange(val) {
        console.log(val);
      },
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
        if (this.checkedList.length == this.data.length) {
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
          for (const val of this.data) {
            this.checkedList.push(val.id);
          }
        } else {
          this.checkAll = false;
          this.checkedList = [];
        }
      },
      handleStatusChange(value) {
        this.isOnSale = value;
      },
      handleProductBigTypeChange(value) {
        this.submitData.bigCategoryId = value;
        this.submitData.categoryId = "";
        this.getSmallType(value);
      },
      handleProductSmallTypeChange(value) {
        console.log(value);
        this.submitData.categoryId = value;
      },
      getSmallType(id) {
        _getData("/catalog/second", { id: id }).then(data => {
          console.log(data);
          _.each(data.subCategory, val => {
            val.label = val.name;
            val.value = val.id;
          });
          this.smallOptions = data.subCategory;
        });
      },
      getProductList(params) {
        _getData("/goods/sjGoodsList", params).then(data => {
          console.log("获取产品列表：", data);
          this.data = data.data;
          this.totalCount.amount = data.count;
        });
      }
    },
    mounted() {
      this.submitData = {
        ...this.submitData,
        storeId: this.userShopInfo.store_id
      };
      this.getProductList(this.submitData);
      _getData("/catalog/first", {}).then(data => {
        console.log("一级", data);
        _.each(data.categoryList, val => {
          val.label = val.name;
          val.value = val.id;
        });
        this.bigOptions = data.categoryList;
      });
    },
    components: {
      commonTitle,
      pagination,
      checkAll
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  @import "../../../../assets/scss/_input";
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
                  line-height: 27px;
                  font-size: 12px;
                }
                /deep/.el-select {
                  height: 27px;
                  line-height: 27px;
                  .el-input {
                    .el-input__inner {
                      font-size: 12px;
                    }
                    .el-input__suffix {
                      .el-input__suffix-inner {
                        .el-input__icon {
                          line-height: 27px;
                        }
                      }
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
