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
            @end="end"
            v-if="myArray2.length"
          >
            <transition-group
              tag="ul"
              class="common"
              type="transition"
              :name="!drag ? 'flip-list' : null"
            >
              <li
                v-for="(item, i) in myArray2"
                :key="`key-${i}`"
                @click="delHandleClick(item)"
              >
                <div class="img_box">
                  <img
                    :src="item.list_pic_url || item.app_list_pic_url"
                    alt=""
                  />
                </div>
                {{ item.name }}
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
          <no-data v-else></no-data>
        </div>
        <div class="all_brand">
          <h2>全部分类<span>点击即可设为常用分类</span></h2>
          <div class="word_nav" ref="search">
            <span
              :class="defaultsNav == '全部' && 'active'"
              @click="navClick('全部')"
              >全部</span
            >
            <ul>
              <li
                v-for="item in letter"
                :key="item"
                @click="letterClick(item)"
                :class="item == defaultsNav && 'active'"
              >
                {{ item }}
              </li>
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
          <div>
            <ul class="common">
              <li
                v-for="(item, i) in myArray"
                :key="i"
                @click="handleClick(item)"
              >
                <div class="img_box">
                  <img :src="item.list_pic_url" alt="" />
                </div>
                {{ item.name }}
                <i>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#iconguanlichangyongpinpaitianjia"></use>
                  </svg>
                </i>
              </li>
            </ul>
          </div>

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
  import _ from "lodash";
  import { _getData } from "../../config/getData";

  export default {
    data() {
      return {
        visible: false,
        letterArr: "",
        options: {
          title: "管理常用品牌",
          closable: true,
          maskClosable: true,
          wrapClassName: "commonBrand",
          centered: true
        },
        navArr: "",
        drag: false,
        myArray: [], //全部分类
        myArray2: [], //常用品牌
        letter: [], //字母索引
        defaultsNav: "全部" //默认高亮的nav
      };
    },
    props: {
      brandVisible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      _getData("brand/merge", { id: this.$route.query.categoryId })
        .then(data => {
          this.navArr = data;
        })
        .then(() => {
          console.log(this.navArr);
          this.myArray2 = this.navArr.userbrandList;
          this.myArray = this.navArr.listAll;
          this.letterArr = _.groupBy(this.myArray, val => {
            return _.upperFirst(val.pinyin).substring(0, 1);
          });
          //console.log(this.letterArr, _.keys(this.letterArr));
          this.letter = _.orderBy(_.keys(this.letterArr), val => val, ["asc"]);
        });
    },
    components: {
      modal,
      draggable
    },
    methods: {
      end(e) {
        this.drag = false;
        this.saveBrand();
      },
      //删除常用品牌
      delHandleClick(item) {
        this.myArray2 = _.without(this.myArray2, item);
        console.log(this.myArray2);
        this.saveBrand();
      },
      navClick(val, i) {
        this.defaultsNav = val;
        console.log(this.defaultsNav);
        switch (val) {
          case "全部":
            this.myArray = this.navArr.listAll;
            break;
          case "一线品牌":
            this.myArray = this.navArr.firstLineList;
            break;
          case "常用品牌":
            this.myArray = this.navArr.userbrandList;
            break;
        }
      },
      //保存品牌分类
      async saveBrand() {
        return await _getData("ubrand/custom", {
          brandStr: _.join(_.map(this.myArray2, "id"), ",")
        }).then(data => {
          this.$emit("success");
        });
      },
      handleClick(item) {
        let commonArr = _.intersectionBy(this.myArray2, [item], "name");
        if (commonArr.length) {
          this.$message.warning("已添加至常用分类", 1);
          return;
        } else {
          this.myArray2.push(item);
        }
        this.saveBrand();
      },
      handleOk() {
        this.visible = false;
      },
      letterClick(item) {
        this.defaultsNav = item;
        this.myArray = _.pick(this.letterArr, [item])[item];
        console.log(this.myArray);
        [...this.$refs.search.childNodes].map((val, i) => {
          val.classList.remove("active");
        });
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