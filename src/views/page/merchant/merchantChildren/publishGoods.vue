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
            <a-select
              defaultValue="请选择大类"
              style="width: 136px;margin-right:10px;"
              @change="handleProductBigTypeChange"
              :options="options"
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
            </a-select>
            <a-select
              defaultValue="请选择小类"
              style="width: 136px"
              @change="handleProductSmallTypeChange"
              :options="options"
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
            </a-select>
          </div>
        </div>
        <div class="common">
          <div class="left-box">产品类型</div>
          <div class="right-box">
            <a-select
              defaultValue="请选择类型"
              style="width: 136px"
              @change="handleProductTypeChange"
              :options="options"
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
            </a-select>
          </div>
        </div>
        <div class="common">
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
        </div>
        <div class="common guidePrice">
          <div class="left-box">指导价</div>
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
        <div class="common">
          <div class="left-box"><span class="red">*</span>备件号</div>
          <div class="right-box">
            <a-input
              placeholder="请输入备件号"
              v-model="submitData.sparePartNumber"
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
      </div>
    </div>
    <div class="commonBoxStyle specification">
      <div class="title">产品规格参数</div>
      <div class="specificationContent">
        <list-title :titleArr="titleArr"></list-title>
        <div class="table-body">
          <div class="itemType" v-for="item in params" :key="item.id">
            <div v-if="item.id" class="itemBox">
              <div class="typeName">{{ item.typeName }}</div>
              <div class="typeValue">
                <div class="paramsBox">
                  <ul>
                    <li
                      v-for="(paramItem, index) in item.paramsArr"
                      :key="index"
                    >
                      <div class="paramItemBox" v-if="paramItem.paramName">
                        <span>{{ paramItem.paramName }}</span>
                        <span>{{ paramItem.paramValue }}</span>
                      </div>
                      <div class="addBtn" v-else>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icontianjiashangpin"></use>
                        </svg>
                        添加参数 (编辑参数名称和参数值)
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="delete">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconshanchu"></use>
                  </svg>
                  删除
                </div>
              </div>
            </div>
            <div v-else class="itemBox">
              <div class="typeName">
                <div class="addBtn">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icontianjiashangpin"></use>
                  </svg>
                  添加参数类型
                </div>
              </div>
              <div class="typeValue">
                <div class="addBtn">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icontianjiashangpin"></use>
                  </svg>
                  添加参数 (编辑参数名称和参数值)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <div v-if="uploadList.length < 3">
            <a-icon class="icon">
              <use xlink:href="#icontianjiatupian1"></use>
            </a-icon>
            <div class="ant-upload-text">点击添加图片</div>
          </div>
        </a-upload>
      </div>
    </div>
    <div class="commonBoxStyle productIntroduce">
      <div class="title">商品介绍</div>
      <div class="introduceContent">
        <a-input
          type="textarea"
          placeholder="请输入商品描述"
          class="noInput"
          v-model="submitData.introduce"
        ></a-input>
      </div>
    </div>
    <div class="submit">
      <a-button class="release">直接发布并上架</a-button>
      <a-button class="save">保存</a-button>
      <a-button class="reset">重置</a-button>
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
  export default {
    data() {
      return {
        titleArr: ["参数类型", "参数名称", "参数值", "操作"],
        params: [],
        uploadList: [],
        defaultCascaderValue: [],
        options: [],
        submitData: {
          name: "",
          goodsSn: "",
          brand: "",
          model: "",
          minPrice: "",
          maxPrice: "",
          sparePartNumber: "",
          goodsNumber: "",
          manufacturer: "",
          capacity: "",
          unit: "",
          minOrderQuantity: "",
          introduce: ""
        }
      };
    },
    methods: {
      handleRemove(file) {
        this.uploadList.splice(this.uploadList.indexOf(file), 1);
      },
      handleChange(info) {
        for (const val of info.fileList) {
          val.url =
            "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
        }
        this.uploadList = info.fileList;
        // if (info.file.status === "uploading") {
        //   this.loading = true;
        //   return;
        // }
        // if (info.file.status == "done") {
        //   getBase64(info.file.originFileObj, imageUrl => {
        //     info.fileList[0].imageUrl = imageUrl;
        //     this.loading = false;
        //   });
        //   this.fileList = info.fileList;
        //   console.log(this.fileList);
        // }
      },
      onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      },
      handleProductBigTypeChange() {},
      handleProductSmallTypeChange() {},
      handleProductTypeChange(value) {
        console.log(`selected ${value}`);
      },
      handleProductAddressChange(value) {
        this.cities = cityData[value];
        console.log(this.cities);
        this.secondCity = cityData[value][0];
      },
      beforeUpload(file) {
        // const isJPG = file.type === "image/jpeg";
        // if (!isJPG) {
        //   this.$message.error("You can only upload JPG file!");
        // }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("Image must smaller than 2MB!");
        }
        return isLt2M;
        // return isJPG && isLt2M;
      }
    },
    components: {
      commonTitle,
      listTitle
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
          .itemType {
            border-bottom: $border-style;
            display: flex;
            .itemBox {
              display: flex;
            }
            &:last-child {
              border-bottom: none;
            }
            .addBtn {
              height: 29px;
              background: #f5f5f5;
              border-radius: 14.5px;
              font-size: 13px;
              color: #f5a623;
              margin: 10px 0;
              padding: 6px 11px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: normal;
              .icon {
                width: 10px;
                height: 10px;
                margin-right: 2px;
              }
            }
            .typeName {
              width: 145px;
              padding: 0 16px;
              font-size: 14px;
              color: #333333;
              font-weight: 600;
              border-right: $border-style;
              display: flex;
              align-items: center;
            }
            .typeValue {
              width: 822px;
              display: flex;
              justify-content: center;
              .paramsBox {
                display: flex;
                li {
                  display: flex;
                  justify-content: center;
                  border-bottom: $border-style;
                  border-right: $border-style;
                  &:last-child {
                    border-bottom: none;
                  }
                  .paramItemBox {
                    display: flex;
                    span {
                      display: flex;
                      align-items: center;
                      padding: 14px 16px;
                      &:first-child {
                        width: 174px;
                        border-right: $border-style;
                      }
                      &:last-child {
                        width: 568px;
                      }
                    }
                  }
                }
              }
              .delete {
                width: 79px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: #333333;
                .icon {
                  margin-right: 4px;
                }
              }
            }
          }
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
      background-image: linear-gradient(90deg, #f10000 0%, #ff4e1a 100%);
    }
    .save {
      background: #f5a623;
    }
    .reset {
      background: #999;
    }
  }
</style>
