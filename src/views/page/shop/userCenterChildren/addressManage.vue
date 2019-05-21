<template>
  <div class="addressManage">
    <common-title title="地址管理">
      <span slot="titleRight" class="addAddress" @click="addCarSuccess">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icontianjiatupian1"></use>
        </svg>
        新增地址
      </span>
    </common-title>
    <div class="listContainer">
      <ul>
        <li v-for="item in userAddressList" :key="item.id">
          <div class="left-box">
            <div class="itemTr">{{ item.userName }}<span>收</span></div>
            <div class="itemTr">{{ item.address }}</div>
            <div class="itemTr">{{ item.phone }}</div>
          </div>
          <div class="right-box">
            <div class="edit" @click="addCarSuccess(item.id)">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconbianjidizhi"></use>
              </svg>
              编辑
            </div>
            <div>
              <a-checkbox
                @change="onChange(item.id)"
                :checked="item.status != 0"
                >{{ item.status ? "默认地址" : "设为默认地址" }}</a-checkbox
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <add-address-modal
      :Visible="visible"
      :type="type"
      :editId="editId"
    ></add-address-modal>
  </div>
</template>

<script>
  import _ from "lodash";
  import { mapState } from "vuex";
  import { _getData } from "../../../../config/getData";
  import commonTitle from "../../../../components/common/merchantRightCommonTitle";
  import addAddressModal from "../../../../components/modal/addAddressModal";
  export default {
    data() {
      return {
        visible: false,
        type: "",
        userAddressList: [],
        editId: 0
      };
    },
    computed: {
      ...mapState(["isLogin"])
    },
    methods: {
      onChange(id) {
        console.log(id);
        _.each(this.userAddressList, (val, index) => {
          if (val.id == id) {
            if (val.status == 0) {
              _.each(this.userAddressList, (val, index) => {
                val.status = 0;
              });
              val.status = 1;
            } else {
              val.status = 0;
            }
          }
        });
      },
      addCarSuccess(id) {
        if (!this.isLogin) {
          this.type = "login";
        }
        this.visible = true;
        this.editId = id;
      },
      getAddressList() {
        _getData(
          `${this.$API_URL.HYGLOGINURL}/server/userAddress!request.action`,
          {
            method: "appPageList",
            userid: "15301",
            token: "09a52ead-ef25-411d-8ac2-e3384fceed68",
            params: { currentPage: 1, countPerPage: 10 }
          }
        ).then(data => {
          console.log(data);
          this.userAddressList = data.data.result.UserAddressList;
        });
      }
    },
    mounted() {
      this.getAddressList();
    },
    components: {
      commonTitle,
      addAddressModal
    },
    watch: {
      visible(newVal) {
        if (!newVal) {
          this.getAddressList();
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .addressManage {
    min-height: 693px;
    background-color: #fff;
    padding: 4px 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
    margin-bottom: 10px;
    .addAddress {
      cursor: pointer;
    }
    .listContainer {
      margin-top: 12px;
      ul {
        li {
          width: 100%;
          height: 130px;
          border: $border-style;
          display: flex;
          margin-bottom: 10px;
          .left-box {
            width: 814px;
            padding: 20px 40px;
            .itemTr {
              margin-bottom: 10px;
              color: #333;
              font-size: 16px;
              font-weight: 600;
              &:last-child {
                margin-bottom: none;
                font-weight: normal;
              }
              span {
                font-size: 12px;
                color: #666666;
                margin-left: 8px;
                font-weight: normal;
              }
            }
          }
          .right-box {
            width: 152px;
            height: 100%;
            border-left: $border-style;
            background-color: #fbfbfb;
            padding-left: 28px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 12px;
            color: #666666;
            .edit {
              margin-bottom: 10px;
            }
            /deep/.ant-checkbox-wrapper {
              .ant-checkbox-inner {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                &:after {
                  width: 4px;
                  height: 8px;
                  left: 3.8px;
                  top: 0.65px;
                }
              }
              span {
                &:last-child {
                  padding-left: 5px;
                  font-size: 12px;
                  color: #666666;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
