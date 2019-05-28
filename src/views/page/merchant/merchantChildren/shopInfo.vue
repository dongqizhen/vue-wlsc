<template>
  <div class="shopInfo">
    <div class="container-box">
      <common-title title="店铺信息"></common-title>
      <div class="content">
        <div class="common">
          <div class="left-box"><span class="red">*</span>店铺名称</div>
          <div class="right-box">
            <a-input
              placeholder="请输入店铺名称"
              v-model="submitData.shopName"
            />
          </div>
        </div>
        <div class="common shopType">
          <div class="left-box"><span class="red">*</span>店铺类型</div>
          <div class="right-box">
            <el-select
              v-model="submitData.type"
              placeholder="请选择经营模式"
              @change="handleShopTypeChange"
              style="width:222px;"
            >
              <el-option
                v-for="item in shopTypeData"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="common shopIndexPicture">
          <div class="left-box"><span class="red">*</span>店铺首页图片</div>
          <div class="right-box">
            <upload v-on:getVal="getImgUrl" :imgUrl="submitData.image"></upload>
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>经营范围</div>
          <div class="right-box">
            <a-input
              placeholder="请输入店铺经营范围"
              v-model="submitData.shopScope"
            />
          </div>
        </div>
        <div class="common shopSaleArea">
          <div class="left-box"><span class="red">*</span>销售地区</div>
          <div class="right-box saleArea" @click="showSelectBox">
            <cascade-select
              :isShow="isShow"
              :defaultData="submitData.defaultProvinceData"
              v-on:getSaleArea="getSaleArea"
            ></cascade-select>
          </div>
        </div>
        <div class="common shopIntroduce">
          <div class="left-box">店铺介绍</div>
          <div class="right-box">
            <a-textarea
              placeholder="请在这里对店铺做一个介绍"
              type="textarea"
              v-model="submitData.introduce"
              class="noInput"
            />
          </div>
        </div>
        <div class="common submit">
          <div class="left-box"></div>
          <div class="right-box">
            <a-button @click="save">
              {{ isOpenShop ? "下一步" : "保存" }}
            </a-button>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="['modal-box', isShow ? 'active' : '']"
      @click="isShowModal"
    ></div>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import upload from "../../../../components/common/upload";
  import cascadeSelect from "../../../../components/common/casadeSelect/cascadeSelect";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        isShow: false,
        shopTypeData: [],
        submitData: {
          shopName: "",
          type: "",
          image: "",
          shopScope: "",
          defaultProvinceData: [],
          introduce: ""
        }
      };
    },
    props: {
      isOpenShop: {
        type: Boolean
      },
      current: {
        type: Number
      }
    },
    methods: {
      save() {
        console.log(this.submitData);
        console.log(this.isOpenShop);
        if (this.submitData.shopName == "") {
          alert("请输入店铺名称");
          return;
        }
        if (this.submitData.type == "") {
          alert("请选择店铺类型");
          return;
        }
        if (this.submitData.image == "") {
          alert("请上传店铺首页图片");
          return;
        }
        if (this.submitData.shopScope == "") {
          alert("请输入店铺经营范围");
          return;
        }
        if (this.submitData.defaultProvinceData.length == 0) {
          alert("请选择销售地区");
          return;
        }
        if (this.isOpenShop) {
          this.submitData = { ...this.submitData, current: this.current };
          this.$emit("getShopInfo", this.submitData);
        } else {
          _getData("/store/updateStore", {
            shopName: this.submitData.shopName,
            type: this.submitData.type,
            image: this.submitData.image,
            shopScope: this.submitData.shopScope,
            defaultProvinceData: this.submitData.defaultProvinceData,
            introduce: this.submitData.introduce
          }).then(data => {
            console.log("111", data);
          });
        }
      },
      getImgUrl(val) {
        // console.log(val);
        if (val.length == 0) {
          this.submitData.image = "";
        } else {
          this.submitData.image = val[0].url;
        }
      },
      handleShopTypeChange(value) {
        console.log(`selected ${value}`);
        this.submitData.type = value;
      },
      isShowModal() {
        this.isShow = false;
      },
      showSelectBox() {
        this.isShow = true;
      },
      getSaleArea(val) {
        console.log(val);
        this.submitData.defaultProvinceData = val;
      }
    },
    components: {
      commonTitle,
      upload,
      cascadeSelect
    },

    mounted() {
      _getData("/storeType/queryStoreType", {}).then(data => {
        console.log("店铺类型", data);
        _.each(data, val => {
          val.label = val.name;
          val.value = val.id;
        });
        this.shopTypeData = data;
        if (!this.isOpenShop) {
          _getData("/store/selectAllStore", {}).then(data => {
            console.log("获取已填写的店铺信息：", data);
            _.each(data.defaultProvinceData, val => {
              val.id = val.provinceId;
            });
            this.submitData = data;
          });
        }
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  @import "../../../../assets/scss/_input";
  .shopInfo {
    margin-bottom: 50px;
    .container-box {
      background-color: #fff;
      min-height: 693px;
      padding: 4px 20px;
      box-shadow: $base-box-shadow;
      .content {
        margin-top: 24px;
        .common {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          &:nth-last-child(2),
          &:nth-last-child(3) {
            align-items: flex-start;
            .left-box {
              margin-top: 6px;
            }
          }
          .left-box {
            margin-right: 24px;
            font-family: PingFangSC-Medium;
            font-weight: 600;
            font-size: 14px;
            color: #151515;
            .red {
              color: $theme-color;
              margin-left: -6.8px;
            }
          }
          .right-box {
            @include placeholderStyle;

            .ant-input {
              width: 390px;
              height: 34px;
              line-height: 34px;
              border: 1px solid #cccccc;
              border-radius: 3px;
            }
            .noInput {
              height: 109px;
              outline: none;
              resize: none;
              line-height: 22px;
            }
            /deep/.ant-select {
              .ant-select-arrow {
                right: 20px;
              }
            }
          }
          .saleArea {
            /deep/.selectText {
              &:hover {
                cursor: pointer;
                border: 1px solid $theme-color !important;
              }
            }
          }
        }
        .shopIndexPicture {
          .right-box {
            height: 118px;
          }
        }
        .ant-btn {
          // width: 65px;
          height: 33px;
          background: #f5a623;
          border-radius: 3px;
          border: 1px solid #f5a623;
          box-shadow: none;
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: #fff;
          margin-left: 58px;
        }
      }
    }
  }
  .modal-box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
    display: none;
    &.active {
      display: block;
    }
  }
</style>
