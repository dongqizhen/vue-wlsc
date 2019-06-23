<template>
  <tr>
    <td
      v-for="item in array"
      :key="item.id"
      @click="change(item.id, item.flag)"
    >
      <span>{{ item.name }}</span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use v-bind:xlink:href="item.icon"></use>
        </svg>
      </span>
    </td>
  </tr>
</template>
<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        upSvg: "#iconpaixu1",
        downSvg: "#iconpaixu",
        initSvg: "#iconpaixucopy",
        array: [
          { id: 1, name: "时间", icon: "#iconpaixu", flag: -1 },
          { id: 2, name: "新增访问店铺数", icon: "#iconpaixucopy", flag: -1 },
          { id: 3, name: "新增收藏店铺数", icon: "#iconpaixucopy", flag: -1 },
          { id: 4, name: "新增询价单数", icon: "#iconpaixucopy", flag: -1 },
          { id: 5, name: "新增订单数", icon: "#iconpaixucopy", flag: -1 }
        ]
      };
    },
    methods: {
      change(id, flag) {
        _.map(this.array, o => {
          if (o.id == id) {
            o.flag = flag + 1;
            if (o.flag % 2) {
              o.icon = this.upSvg;
            } else {
              o.icon = this.downSvg;
            }
          } else {
            o.flag = -1;
            o.icon = this.initSvg;
          }
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  tr {
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    td {
      flex: 1;
      text-align: center;
      span {
        &:first-child {
          margin-right: 4px;
        }
      }
    }
  }
</style>
