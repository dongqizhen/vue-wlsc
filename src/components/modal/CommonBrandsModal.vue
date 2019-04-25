<template>
  <div class="Common-Brands-Modal">
    <modal :isShow="visible" :options="options">
      <div slot="content">
        <div class="common_brand">
          <h2>常用品牌<span>鼠标拖拽可排序，点击“x”取消</span></h2>
          <draggable
            class="list-group"
            v-model="myArray2"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li v-for="(item, i) in myArray2" :key="`key-${i}`">
                <div class="img_box"></div>
                {{ item }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use
                      xlink:href="#iconguanlichangyongpinpaiquxiaochahao"
                    ></use>
                  </svg>
                </i>
              </li>
            </transition-group>
          </draggable>
        </div>
        <div class="all_brand">
          <h2>全部分类<span>点击即可设为常用分类</span></h2>
          <div class="word_nav">
            <span>全部</span>
            <ul>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
              <li>E</li>
              <li>F</li>
              <li>G</li>
              <li>H</li>
              <li>I</li>
              <li>J</li>
              <li>K</li>
              <li>L</li>
              <li>M</li>
              <li>N</li>
              <li>O</li>
              <li>P</li>
              <li>Q</li>
              <li>R</li>
              <li>S</li>
              <li>T</li>
              <li>U</li>
              <li>V</li>
              <li>W</li>
              <li>X</li>
              <li>Y</li>
              <li>Z</li>
            </ul>
            <div class="inp_box">
              <input type="text" placeholder="请输入品牌名称" />
              <span>搜索</span>
            </div>
          </div>

          <!-- <draggable
            v-model="myArray"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            > -->
          <ul class="common">
            <li v-for="(item, i) in myArray" :key="i">
              <div class="img_box"></div>
              {{ item }}
              <i>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#iconguanlichangyongpinpaitianjia"></use>
                </svg>
              </i>
            </li>
          </ul>

          <!--  </transition-group>
          </draggable> -->
        </div>
        <a-button
          key="submit"
          type="primary"
          @click="handleOk"
          :loading="false"
        >
          完成
        </a-button>
      </div>
    </modal>
  </div>
</template>

<script>
  import draggable from "vuedraggable";
  import modal from "./modal.vue";
  let myArray = [
    "迈瑞",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦",
    "飞利浦"
  ];

  let myArray2 = ["西门子", "奔腾"];
  export default {
    data() {
      return {
        visible: false,
        options: {
          title: "管理常用品牌",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand",
          centered: true
        },
        drag: false,
        myArray,
        myArray2
      };
    },
    props: {
      brandVisible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {},
    components: {
      modal,
      draggable
    },
    methods: {
      handleOk() {
        this.visible = false;
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    },
    watch: {
      brandVisible(newVal) {
        this.visible = newVal;
      },
      visible(newVal) {
        if (!newVal) {
          this.$parent.brandVisible = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>