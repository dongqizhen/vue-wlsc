<template>
  <div class="publishGoods">
    <div class="commonBoxStyle basicInformation">
      <commonTitle title="发布商品"></commonTitle>
      <div class="informationContent">
        <div class="title">基本信息</div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>产品名称</div>
          <div class="right-box">
            <a-input placeholder="请输入产品名称" v-model="submitData.name" />
          </div>
        </div>
        <div class="common">
          <div class="left-box">产品编号</div>
          <div class="right-box">
            <a-input
              placeholder="请输入产品编号"
              v-model="submitData.goodsSn"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>产品分类</div>
          <div class="right-box">
            <el-select
              style="width: 136px;margin-right:10px;"
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
              style="width: 136px;margin-right:10px;"
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
        <div class="common">
          <div class="left-box">产品类型</div>
          <div class="right-box">
            <el-select
              style="width: 136px;margin-right:10px;"
              v-model="submitData.goodsType"
              placeholder="请选择类型"
              @change="handleProductTypeChange"
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>品牌</div>
          <div class="right-box">
            <el-select
              style="width: 136px;margin-right:10px;"
              v-model="submitData.brandId"
              placeholder="请选择品牌"
              @change="handleBrandChange"
            >
              <el-option
                v-for="item in brandOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>型号</div>
          <div class="right-box">
            <el-select
              style="width: 136px;margin-right:10px;"
              v-model="submitData.modelId"
              placeholder="请选择型号"
              @change="handleModelChange"
            >
              <el-option
                v-for="item in modelOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>

        <!-- <div class="common">
          <div class="left-box"><span class="red">*</span>品牌</div>
          <div class="right-box">
            <a-input placeholder="请输入品牌" v-model="submitData.brand" />
          </div>
        </div>
        <div class="common">
          <div class="left-box"><span class="red">*</span>型号</div>
          <div class="right-box">
            <a-input placeholder="请输入型号" v-model="submitData.model" />
          </div>
        </div> -->
        <div class="common guidePrice">
          <div class="left-box"><span class="red">*</span>指导价</div>
          <div class="right-box">
            <a-input
              placeholder="区间最低"
              class="priceMin"
              v-model="submitData.minPrice"
            />
            <div class="joiner">一</div>
            <a-input
              placeholder="区间最高"
              class="priceMax"
              v-model="submitData.maxPrice"
            />
            <a-checkbox @change="onChange">询价</a-checkbox>
          </div>
        </div>
        <div class="common" v-if="isSparePart">
          <div class="left-box"><span class="red">*</span>备件号</div>
          <div class="right-box">
            <a-input
              placeholder="请输入备件号"
              v-model="submitData.sparePart"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box">库存数量</div>
          <div class="right-box">
            <a-input
              placeholder="请输入库存数量"
              v-model="submitData.goodsNumber"
            />
          </div>
        </div>
        <div class="common">
          <div class="left-box">产地</div>
          <div class="right-box">
            <a-input placeholder="请输入产地" v-model="submitData.origin" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="commonBoxStyle specification">
      <div class="title">产品规格参数</div>
      <div class="specificationContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="table-body">
          <div v-for="(item, index) in params" :key="index">
            <div v-if="index < params.length - 1">
              <new-param></new-param>
            </div>
            <div v-else>
              <add-btn v-on:getParams="addParams"></add-btn>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="commonBoxStyle productPicture">
      <div class="title">
        商品图片
        <span>
          (图片尺寸为600*400，仅之处jpg.jpeg.png格式，单张大小不超过1M。)
        </span>
      </div>
      <div class="pictureContent">
        <div
          v-for="file in uploadList"
          :key="file.uid"
          class="uploadItem"
          :data-id="file.uid"
        >
          <img :src="file.url" />
          <div class="demo-upload-list-cover">
            <svg class="icon" aria-hidden="true" @click="handleRemove(file)">
              <use xlink:href="#iconshangchuanshangpinguanbi"></use>
            </svg>
          </div>
        </div>
        <a-upload
          ref="upload"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          action="//jsonplaceholder.typicode.com/posts/"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <div v-if="uploadList.length < 6">
            <a-icon class="icon">
              <use xlink:href="#icontianjiatupian1"></use>
            </a-icon>
            <div class="ant-upload-text">点击添加图片</div>
          </div>
        </a-upload>
      </div>
    </div>
    <div class="commonBoxStyle productIntroduce">
      <div class="title"><i>*</i>商品介绍</div>
      <div class="introduceContent">
        <a-input
          type="textarea"
          placeholder="请输入商品描述"
          class="noInput"
          v-model="submitData.goodsDesc"
        ></a-input>
      </div>
    </div>
    <div class="submit">
      <a-button class="release" @click="release">直接发布并上架</a-button>
      <a-button class="save" @click="save">保存</a-button>
      <a-button class="reset" @click="reset">重置</a-button>
    </div>
  </div>
</template>

<script>
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import listTitle from "../../../../components/common/listTitle";
  import addBtn from "../../../../components/common/productParams/addBtn";
  import paramItem from "../../../../components/common/productParams/paramItem";
  import newParam from "../../../../components/common/productParams/newParam";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        titleArr: ["参数类型", "参数名称", "参数值", "操作"],
        params: [{}],
        defaultCascaderValue: [],
        bigOptions: [],
        smallOptions: [],
        typeOptions: [],
        brandOptions: [],
        modelOptions: [],
        categoryId: -1,
        brandId: -1,
        isSparePart: 0,
        uploadList: [],
        submitData: {
          name: "",
          goodsSn: "",
          bigCategoryId: "", //大类
          categoryId: "", //小类
          goodsType: "", //产品类型
          brandId: "",
          modelId: "",
          minPrice: "",
          maxPrice: "",
          sparePart: "", //备件号
          goodsNumber: "", //库存
          origin: "", //产地
          goodsDesc: "",
          isOnSale: "1",
          isEnquiry: 0,
          listPicUrl: [] //商品图片
        }
      };
    },
    methods: {
      release() {
        if (this.submitData.name == "") {
          alert("请输入商品名称");
          return;
        }
        if (this.submitData.bigCategoryId == "") {
          alert("请选择大类");
          return;
        }
        if (this.submitData.categoryId == "") {
          alert("请选择小类");
          return;
        }
        if (this.submitData.brandId == "") {
          alert("请选择品牌");
          return;
        }
        if (this.submitData.modelId == "") {
          alert("请选择型号");
          return;
        }
        if (!this.submitData.isEnquiry) {
          if (this.submitData.minPrice == "") {
            alert("请输入最小指导价");
            return;
          }
          if (this.submitData.maxPrice == "") {
            alert("请输入最大指导价");
            return;
          }
          if (
            Number(this.submitData.minPrice) > Number(this.submitData.maxPrice)
          ) {
            alert("最小指导价不能大于最大值");
            return;
          }
        }
        if (this.isSparePart) {
          if (this.submitData.sparePart == "") {
            alert("请输入备件号");
            return;
          }
        }
        if (this.submitData.goodsDesc == "") {
          alert("请输入商品描述");
          return;
        }
        if (this.uploadList.length > 0) {
          _.map(this.uploadList, val => {
            this.submitData.listPicUrl.push(val.url);
          });
        } else {
          this.submitData.listPicUrl = [];
        }
        _getData("/goods/addGoods", this.submitData).then(data => {
          console.log(data);
          alert("产品发布成功");
          return;
        });
      },
      save() {},
      reset() {},
      addParams() {
        this.params.push({});
      },
      handleRemove(file) {
        this.uploadList.splice(this.uploadList.indexOf(file), 1);
      },
      handleChange(info) {
        for (const val of info.fileList) {
          val.url =
            "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
        }
        this.uploadList = info.fileList;
      },
      onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked) {
          this.submitData.minPrice = "";
          this.submitData.maxPrice = "";
          this.submitData.isEnquiry = 1;
        } else {
          this.submitData.isEnquiry = 0;
        }
      },
      handleProductBigTypeChange(value) {
        console.log(`selected ${value}`);
        this.submitData.bigCategoryId = value;
        this.getSmallType(value);
      },
      handleProductSmallTypeChange(value) {
        console.log(`selected ${value}`);
        this.submitData.categoryId = value;
        this.getModelData(value);
      },
      handleProductTypeChange(value) {
        console.log(`selected ${value}`);
        this.submitData.goodsType = value;
        console.log(this.typeOptions);
        _.map(this.typeOptions, val => {
          if (val.id == value) {
            this.isSparePart = val.isSparePart;
          }
        });
      },
      handleBrandChange(value) {
        console.log(`selected ${value}`);
        this.submitData.brandId = value;
        this.getModelData(this.submitData.categoryId, value);
      },
      handleModelChange(value) {
        console.log(`selected ${value}`);
        this.submitData.modelId = value;
      },
      beforeUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 1;
        if (!isLt2M) {
          this.$message.error("Image must smaller than 1MB!");
        }
        return isLt2M;
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
      getModelData(categoryId, brandId) {
        _getData("/brandmodel/list", {
          categoryId: categoryId,
          brandId: brandId
        }).then(data => {
          console.log(data);
          _.each(data.brandModelList, val => {
            val.label = val.name;
            val.value = val.id;
          });
          this.modelOptions = data.brandModelList;
        });
      }
    },
    components: {
      commonTitle,
      listTitle,
      addBtn,
      newParam,
      paramItem
    },
    mounted() {
      _getData("/catalog/first", {}).then(data => {
        console.log("一级", data);
        _.each(data.categoryList, val => {
          val.label = val.name;
          val.value = val.id;
        });
        this.bigOptions = data.categoryList;
      });
      _getData("/goods/getGoodsType", {}).then(data => {
        console.log("产品类型：", data);
        _.each(data, val => {
          val.label = val.name;
          val.value = val.id;
        });
        this.typeOptions = data;
      });
      _getData("/brand/listAll", { firstLine: null }).then(data => {
        console.log("产品品牌：", data);
        _.each(data.brandList, val => {
          val.label = val.name;
          val.value = val.id;
        });
        this.brandOptions = data.brandList;
      });
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  @import "../../../../assets/scss/_input";
  .publishGoods {
    .commonBoxStyle {
      padding: 4px 20px;
      background: #ffffff;
      box-shadow: $base-box-shadow;
      margin-bottom: 10px;
      .title {
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #f5a623;
        border-bottom: 1px solid #ddd;
        padding-left: 10px;
        padding-bottom: 11px;
        margin-bottom: 28px;
        margin-top: 24px;
        span {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #999999;
          margin-left: 9px;
        }
        i {
          font-style: normal;
          color: $theme-color;
          // font-size: 14px;
        }
      }
    }
    .common {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .left-box {
        width: 84px;
        font-family: PingFangSC-Medium;
        font-weight: 600;
        font-size: 14px;
        color: #333;
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
        .bigType {
          margin-right: 10px;
        }
      }
    }
    .basicInformation {
      .certificationStatus {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333333;
      }
      .informationContent {
        margin-bottom: 10px;
        .companyIntroduce {
          align-items: flex-start;
          .left-box {
            margin-top: 6px;
          }
        }
        .guidePrice {
          .right-box {
            display: flex;
            align-items: center;
            .ant-input {
              width: 88px;
            }
            .priceMin {
              margin-right: 10px;
            }
            .joiner {
              color: #cccccc;
            }
            .priceMax {
              margin-left: 10px;
              margin-right: 46px;
            }
            /deep/.ant-checkbox {
              .ant-checkbox-inner {
                border-radius: 50%;
              }
            }
            /deep/.ant-checkbox-wrapper:hover,
            .ant-checkbox:hover,
            .ant-checkbox-input:focus {
              .ant-checkbox-inner {
                border-color: $theme-color;
              }
            }
            /deep/.ant-checkbox-checked {
              .ant-checkbox-inner {
                background-color: $theme-color;
                border-color: $theme-color;
              }
            }
          }
        }
      }
    }
    .specification {
      .specificationContent {
        /deep/.listTitle {
          ul {
            li {
              justify-content: center;
              margin: 0;
              &:first-child {
                width: 144px;
              }
              &:nth-child(2) {
                width: 173px;
              }
              &:nth-child(3) {
                width: 567px;
              }
              &:nth-child(4) {
                width: 78px;
              }
            }
          }
        }

        .table-body {
          border: $border-style;
          margin-top: 10px;
          margin-bottom: 57px;
        }
      }
    }
    .productPicture {
      .pictureContent {
        height: 118px;
        margin-bottom: 18px;
        display: flex;
        .demo-upload-list {
          width: 118px;
          height: 118px;
          margin-right: 30px;
          border: 1px dashed #ccc;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          &:hover {
            cursor: pointer;
            .demo-upload-list-cover {
              display: block;
            }
          }
        }
        .demo-upload-list-cover {
          display: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          .icon {
            width: 23px;
            height: 23px;
            position: absolute;
            right: 4px;
            top: 4px;
          }
        }
        .uploadItem {
          width: 118px;
          height: 118px;
          margin-right: 30px;
          position: relative;
          img {
            width: 100%;
          }
          &:hover {
            cursor: pointer;
            .demo-upload-list-cover {
              display: block;
            }
          }
        }
        /deep/.avatar-uploader {
          .ant-upload.ant-upload-select-picture-card {
            width: 118px;
            height: 118px;
            border: none;
            .anticon {
              width: 18px;
              height: 18px;
              svg {
                width: 100%;
                height: 100%;
              }
            }
            .ant-upload-text {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #ccc;
            }
            img {
              width: 100%;
            }
          }
          .ant-upload-list {
            .ant-upload-list-item {
              width: 118px;
              height: 118px;
              margin-right: 30px;
              padding: 0;
              img {
                width: 100%;
              }
            }
          }
        }
      }
    }
    .productIntroduce {
      .introduceContent {
        .noInput {
          height: 203px;
          outline: none;
          resize: none;
          line-height: 22px;
          margin-bottom: 56px;
        }
      }
    }
    .ant-btn {
      height: 33px;
      border-radius: 3px;
      border: none;
      box-shadow: none;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #fff;
      margin-top: 34px;
      margin-bottom: 111px;
      margin-left: 30px;
      padding: 0 24px;
      letter-spacing: 0;
    }
    .release {
      border: 1px solid $theme-color;
      background-image: linear-gradient(90deg, #f10000 0%, #ff4e1a 100%);
    }
    .save {
      border: 1px solid #f5a623;
      background: #f5a623;
    }
    .reset {
      background: #999;
    }
  }
</style>
