<template>
  <div class="article-details">
    <div class="left">
      <div class="article_box">
        <h2>
          涉违规接受企业医疗设备捐赠！市卫健委被责令整改！
          <p>
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
              </svg>
              30万
            </span>
            <span>2017-08-22 19:32</span>
          </p>
        </h2>

        <div class="introduce">
          <div class="content">
            据长江日报3月10日消息，根据武汉市党委统一部署，2月下旬，市委五个巡察组对武汉市第一医院、武汉市中心医院、原武汉市卫生和计划生育委员会（现武汉市卫生健康委员会）等11家单位整改落实情况进行了回访督查，被巡察单位已完成面上问题整改495个，整改率为90.7%。
            其中武汉市卫健委就被巡查出的“违规接受企业设备捐赠”问题接受整改，并进行了全面清查。
            在全系统18家委属医疗卫生单位全面清查违规接受企业免费捐赠、投放医疗设备，捆绑销售试剂、耗材等问题，对违规接受捐赠的215台设备，除1台报废外，清退121台、残值购回93台，31名相关责任人受到责任追究。
            并且武汉市还就此印发《关于加强医疗卫生机构接受医疗设备捐赠及规范耗材使用的通知》，明确受赠范围，严格医用耗材采购及使用监管，严令禁止违规接受捐赠、捆绑销售耗材等行为。
            捐赠设备是否构成违规，实际上很长时间以来在医药购销领域都比较难界定。原国家卫计委、国家中医药管理局《关于印发加强医疗卫生行风建设“九不准”的通知》中对“严禁接受附有影响公平竞争条件的捐赠资助，严禁将接受捐赠资助与采购商品(服务)挂钩”的要求，对于违规捐赠设备有了清楚界定。
            简单来说，如果假借租赁、捐赠、投放设备等形式，捆绑耗材和配套设备销售等就会涉嫌商业贿赂不正当竞争行为，属于违规捐赠。
            此次武汉市卫健委因直属医疗卫生单位存在违规接受设备捐赠，被党委巡视组直接要求整改，并且开展全面清查，对超30人进行追责，也看出对于医械购销领域涉及商业贿赂不正当竞争行为的试剂耗材捆绑设备销售、违规捐赠打击力度之大！
          </div>
          <ul>
            <li>标签字数</li>
            <li>标签字数</li>
            <li>最长显示多少再定</li>
          </ul>
          <share-menu-vue></share-menu-vue>
        </div>
      </div>
      <comment-vue :isLogin="isLogin"></comment-vue>
      <menu-vue></menu-vue>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  import shareMenuVue from "../../../../components/common/share/shareMenu.vue";
  import commentVue from "../../../../components/common/comment/comment.vue";
  import menuVue from "../../../../components/common/share/menu.vue";
  export default {
    data() {
      return {
        isLogin: true
      };
    },
    components: {
      shareMenuVue,
      commentVue,
      menuVue
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .left {
    width: $content-left;
    background: $base-background;
    padding-bottom: 0;

    position: relative;
    .article_box {
      padding: 20px;
      padding-bottom: 0px;
      margin-bottom: 10px;
      background: #fff;
      box-shadow: $base-box-shadow;
      > h2 {
        font-size: 24px;
        color: #333333;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        font-weight: bold;
        p {
          font-size: 14px;
          color: #999999;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: 5px;
          font-weight: normal;
          span {
            display: flex;
            height: 20px;
            align-items: center;
            margin-right: 20px;
            &:first-child {
              justify-content: flex-start;
              .icon {
                margin-right: 5px;
                width: 15px;
                height: 10px;
              }
            }
          }
        }
      }

      .introduce {
        margin-top: 24px;
        .content {
          border-top: 1px solid #dddddd;
          padding-top: 24px;
          letter-spacing: 1px;
          font-size: 16px;
          color: #333333;
          line-height: 32px;
        }
        > ul {
          display: flex;
          justify-content: flex-start;
          margin-top: 24px;
          margin-bottom: 24px;
          li {
            margin-right: 4px;
            height: 25px;
            padding: 0 10px;
            background: #f7f7f7;
            border-radius: 15px;

            font-size: 12px;
            color: #fb6441;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 25px;
          }
        }
        /deep/ .share {
          border-top: 0.5px solid #dddddd;
        }
      }
    }
    /deep/ .menu {
      border-top: 0;
      position: absolute;
      width: 50px;
      height: 240px;
      left: -60px;
      top: 0;
      flex-direction: column;
      padding: 12px 0;
      background: #fff;
      // justify-content: space-between;
      box-shadow: $base-box-shadow;
      span {
        display: flex;
        flex-direction: column;
        height: auto;
        margin-top: 0;
        line-height: 18px;
        // margin-bottom: 24px;
        cursor: pointer;
        i {
          margin-right: 0;
        }
      }
    }
  }
  .right {
  }
</style>