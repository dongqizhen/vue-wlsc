<template>
  <div class="shopInfo">
    <div class="container-box">
      <common-title title="店铺信息"></common-title>
      <div class="content">
        <div class="common">
          <div class="left-box"><span class="red">*</span>店铺名称</div>
          <div class="right-box">
            <a-input placeholder="请输入店铺名称" v-model="shopName" />
          </div>
        </div>
        <div class="common shopType">
          <div class="left-box">店铺类型</div>
          <div class="right-box">
            <a-select
              placeholder="请选择经营模式"
              style="width: 222px"
              @change="handleShopTypeChange"
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
              <a-select-option
                v-for="item in shopTypeData"
                :key="item.id"
                :value="item.id"
              >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="common shopIndexPicture">
          <div class="left-box">店铺首页图片</div>
          <div class="right-box">
            <upload v-on:getVal="getImgUrl"></upload>
          </div>
        </div>
        <div class="common ">
          <div class="left-box"><span class="red">*</span>经营范围</div>
          <div class="right-box">
            <a-input
              placeholder="请输入店铺经营范围"
              v-model="shopBusinessScope"
            />
          </div>
        </div>
        <div class="common shopSaleArea">
          <div class="left-box"><span class="red">*</span>销售地区</div>
          <div class="right-box saleArea">
            <a-cascader
              :options="options"
              @change="onChange"
              placeholder="请选择省/市/区"
              :defaultValue="defaultCascaderValue"
              style="width: 390px"
            >
              <a-icon slot="suffixIcon" class="icon">
                <use xlink:href="#icontianjiaduibichanpinxiala"></use>
              </a-icon>
            </a-cascader>
          </div>
        </div>
        <div class="common shopIntroduce">
          <div class="left-box">店铺介绍</div>
          <div class="right-box">
            <a-textarea
              placeholder="请在这里对店铺做一个介绍"
              type="textarea"
              v-model="introduce"
              class="noInput"
            />
          </div>
        </div>
        <div class="common submit">
          <div class="left-box"></div>
          <div class="right-box">
            <a-button @click="save">保存</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import upload from "../../../../components/common/upload";

  export default {
    data() {
      return {
        shopName: "",
        shopBusinessScope: "",
        defaultCascaderValue: [],
        introduce: "",
        shopType: "",
        shopTypeData: [
          { id: 1, value: "111" },
          { id: 2, value: "222" },
          { is: 3, value: "333" }
        ],
        options: [
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                  {
                    value: "xihu",
                    label: "West Lake"
                  }
                ]
              }
            ]
          },
          {
            value: "jiangsu",
            label: "Jiangsu",
            children: [
              {
                value: "nanjing",
                label: "Nanjing",
                children: [
                  {
                    value: "zhonghuamen",
                    label: "Zhong Hua Men"
                  }
                ]
              }
            ]
          }
        ]
      };
    },
    methods: {
      save() {
        console.log(this.shopName);
        console.log(this.shopType);
        console.log(this.shopBusinessScope);
        console.log(this.shopName);
        console.log(this.shopName);
      },
      getImgUrl(val) {
        console.log(val);
      },
      onChange(value) {
        console.log(value);
      },
      handleShopTypeChange(value) {
        console.log(`selected ${value}`);
        this.shopType = value;
      }
    },
    components: {
      commonTitle,
      upload
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  @import "../../../../assets/scss/_input";
  .shopInfo {
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
        &:nth-last-child(2) {
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
          /deep/.ant-select {
            margin-right: 14px;
          }
          .ant-cascader-picker-arrow {
            right: 20px;
          }
          /deep/.ant-cascader-picker .ant-cascader-picker-clear {
            display: none;
          }
        }
      }
      .shopIndexPicture {
        .right-box {
          height: 118px;
        }
      }
      .ant-btn {
        width: 65px;
        height: 33px;
        background: #f5a623;
        border-radius: 3px;
        border: none;
        box-shadow: none;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #fff;
        margin-left: 58px;
      }
    }
  }
</style>
