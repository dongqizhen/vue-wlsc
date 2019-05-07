<template>
  <div class="cascadeSelectLeft">
    <ul>
      <li><i></i>安徽省</li>
      <li class="select-active"><i></i>北京市<span>(全部)</span></li>
      <li><i></i>山东省</li>
      <li class="select-active"><i></i>广西壮族自治区<span>(12)</span></li>
      <li class="active"><i></i>新疆维吾尔自治区<span>(全部)</span></li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
      <li><i></i>重庆市</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectArr: this.defaultSelect,
        checkedAll: false
      };
    },
    props: {
      data: {
        type: Array,
        required: true
      },
      defaultSelect: {
        type: Array
      }
    },
    methods: {
      checkAll(e) {
        if (e.target.checked) {
          for (const val of this.data) {
            this.selectArr.push(val.id);
          }
          this.checkedAll = true;
        } else {
          this.selectArr = [];
          this.checkedAll = false;
        }
      },
      checkedChange(id) {
        if (_.indexOf(this.selectArr, id) == -1) {
          this.selectArr.push(id);
        } else {
          this.selectArr = _.without(this.selectArr, id);
        }
        if (this.selectArr.length == this.data.length) {
          this.checkedAll = true;
        } else {
          this.checkedAll = false;
        }
      },
      checkedVal(id) {
        for (const val of this.selectArr) {
          if (val == id) {
            return true;
          }
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
  .cascadeSelectRight {
    width: 622px;
    height: 100%;
    overflow: auto;
    background: #f7f7f7;
    padding: 20px 14px 14px 26px;
    .upBox {
      span {
        /deep/.ant-checkbox-wrapper {
          margin-right: 3.5px;
        }
      }
    }
    .downBox {
      margin-top: 20px;
      span {
        display: inline-block;
        width: 134.5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
        color: #666;
        margin-right: 10px;
        margin-bottom: 20px;
      }
    }
  }
</style>
