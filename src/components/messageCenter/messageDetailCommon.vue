<template>
  <div class="messageDetailCommon">
    <div class="content">
      <div class="title">{{ data.title }}</div>
      <div class="subTitle">
        {{ data.createdOn ? data.createdOn.substring(0, 16) : "" }}
      </div>
      <div class="introduce">
        <router-link
          target="_blank"
          v-if="data.messageModule.type == 1"
          :to="{
            path: '/merchant/orderManage',
            query: {
              keyId: '7',
              status: data.messageModule.status,
              orderNumber: data.messageModule.orderNumber
            }
          }"
        >
          {{ data.detail }}
        </router-link>
        <router-link
          target="_blank"
          v-else-if="data.messageModule.type == 2"
          :to="{
            path: '/merchant/inquiryManage',
            query: {
              keyId: '6',
              status: data.messageModule.status,
              inquiryNumber: 'sn2019070417154849341000'
            }
          }"
        >
          {{ data.detail }}
        </router-link>
        <span v-else>{{ data.detail }}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { _getData } from "../../config/getData";
  export default {
    data() {
      return {
        data: {}
      };
    },
    props: {
      detailId: {}
    },
    mounted() {
      //根据id获取相应的信息内容
      _getData("/message/detail", { id: this.$route.params.id }).then(data => {
        console.log(data);
        this.data = data;
      });
    }
  };
</script>
<style lang="scss" scoped>
  @import "../../assets/scss/_commonScss";
  .messageDetailCommon {
    .content {
      .title {
        text-align: center;
        font-size: 20px;
        color: #333333;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .subTitle {
        text-align: center;
        font-size: 14px;
        color: #999999;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: $border-style;
      }
      .introduce {
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 32px;
        a {
          color: #333;
        }
      }
    }
  }
</style>
