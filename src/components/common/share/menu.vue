<template>
  <div class="toolMenu menu">
    <span @click="toolMenuClick(1)">
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconpinglun"></use>
        </svg>
      </i>
      {{ item.commentNum }}
    </span>
    <span @click="toolMenuClick(2)">
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshoucang" v-if="!isCollect"></use>
          <use xlink:href="#iconpingjiashixinwujiaoxing" v-else></use>
        </svg>
      </i>
      {{ item.favoriteNum }}
    </span>
    <span @click="toolMenuClick(3)">
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzan" v-if="!isThumpUp"></use>
          <use xlink:href="#iconzanx" v-else></use>
        </svg>
      </i>
      {{ thumpUpNumber }}
    </span>
    <span @click="toolMenuClick(4)">
      <i>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconfenxiang"></use>
        </svg>
      </i>
      {{ item.shareNum }}
    </span>
  </div>
</template>

<script>
  import { _getData } from "../../../config/getData";
  export default {
    data() {
      return {
        isThumpUp: 0, //是否点赞
        thumpUpNumber: "", //点赞数
        isCollect: 0, //是否收藏
        collectNumber: "" //收藏数
      };
    },
    props: ["item", "type"],
    created() {
      if (this.type == "video") {
        this.isThumpUp = this.item.isDianzan;
      } else {
        this.isThumpUp = this.item.isDianZan;
      }

      this.thumpUpNumber = this.item.amount;
      this.isCollect = this.item.isFavorite;
    },
    methods: {
      async collect() {
        return await _getData(
          `${this.$API_URL.HYGPROURL}/server_pro/dianzan!request.action`,
          {
            method: "addOrDeleteFavorite_v27",
            token: "",
            version: 2.0,
            source: "iso",
            userid: this.$userid,
            params: {
              id: this.item.id,
              type: this.selectType, //
              controlflag: this.isCollect //1表示取消，0表示添加（传的是现在的状态）
            }
          }
        ).then(data => {
          this.isCollect = this.isCollect ? 0 : 1;
        });
      },
      async thumpUp() {
        return await _getData(
          `${this.$API_URL.HYGPROURL}/server_pro/dianzan!request.action`,
          {
            method: "addOrDeleteDianzan",
            token: "",
            userid: this.$userid,
            version: 2.0,
            source: "iso",
            params: {
              id: this.item.id,
              type: this.selectType, //
              controlflag: this.isThumpUp //1表示取消，0表示添加（传的是现在的状态）
            }
          }
        ).then(data => {
          this.thumpUpNumber = this.isThumpUp
            ? (this.thumpUpNumber -= 1)
            : (this.thumpUpNumber += 1);
          this.isThumpUp = this.isThumpUp ? 0 : 1;
        });
      },
      toolMenuClick(val) {
        switch (val) {
          case 1:
            break;
          case 2:
            this.collect();
            break;
          case 3:
            this.thumpUp();
            break;
          case 4:
            break;
        }
      }
    },
    computed: {
      selectType() {
        switch (this.type) {
          case "article":
            return 7;
          case "video":
            return 4;
          case "case":
            return 5;
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  .toolMenu {
    border-top: 0.5px solid #e0e7ea;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    line-height: 40px;
    span {
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 1px;
      height: 21px;
      line-height: 21px;
      i {
        margin-right: 4px;
        .icon {
          width: 16px;
          height: 16px;
        }
      }
      &::after {
        content: "回复";
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #ffffff;
        background: $theme-color;
        display: none;
      }
      &:nth-child(2) {
        &::after {
          content: "收藏";
        }
      }
      &:nth-child(3) {
        &::after {
          content: "点赞";
        }
      }
      &:nth-child(4) {
        &::after {
          content: "分享";
        }
      }
    }
  }
</style>