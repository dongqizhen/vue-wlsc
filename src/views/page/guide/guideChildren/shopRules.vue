<template>
  <div class="shopRules">
    <guide-right title="网来商城规则">
      <div class="info" slot="contentInfo" v-html="htmlData"></div>
    </guide-right>
  </div>
</template>
<script>
  import guideRight from "../../../../components/common/guideRight";
  import { _getData } from "../../../../config/getData";
  export default {
    data() {
      return {
        htmlData: ""
      };
    },
    created() {
      _getData("/topic/queryTopicObject", {
        topicCategoryId: this.$route.query.topTitle.substring(3),
        topicId: this.$route.query.keyId
      }).then(data => {
        //console.log(data);
        this.htmlData = data.topicVoList[0].content;
      });
    },
    components: {
      guideRight
    }
  };
</script>
<style lang="scss" scoped>
</style>
