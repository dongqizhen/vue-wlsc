<template>
  <li class="case-item">
    <div class="photo">
      <div class="img_box"></div>
      <p>
        张峰
        <a
          >2019-02-18
          <span>
            <i>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxinghaoliebiaoliulanliang"></use>
              </svg>
            </i>
            178
          </span>
        </a>
      </p>
      <span>
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconzuanshi"></use>
          </svg>
        </i>
        100
      </span>
    </div>
    <h2>
      扫描床体边盖插头、座变形导通不良，保护边盖电路故障，造成主机正常扫描中经常突然…
    </h2>
    <p>
      这不仅仅是一篇简单的文章，这个文章是前辈日积月累的新的，重要的地方读三遍，写三遍。这里展示两行，多余的用…来表示。
    </p>
    <div class="tip">
      <ul>
        <li>标签字数</li>
        <li>标签字数</li>
        <li>最长显示多少再定</li>
      </ul>
      <div class="toolMenu">
        <span>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconpinglun"></use>
            </svg>
          </i>
          167
        </span>
        <span>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconshoucang"></use>
            </svg>
          </i>
          999
        </span>
        <span>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconzan"></use>
            </svg>
          </i>
          89
        </span>
        <span>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconfenxiang"></use>
            </svg>
          </i>
          89
        </span>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../assets/scss/_commonScss";
  li {
    height: 181px;
    margin-bottom: 16px;
    background: #fff;
    box-shadow: $base-box-shadow;
    padding: 10px 20px;
    padding-bottom: 0;
    cursor: pointer;
    .photo {
      display: flex;
      justify-content: space-between;
      height: 38px;
      align-items: center;
      .img_box {
        height: 30px;
        width: 30px;
        border-radius: 16px;
        background: #f7f9fa;
        margin-right: 8px;
      }
      p {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #2b3e50;
        a {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #7e8c8d;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span {
            margin-left: 17px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            i {
              margin-right: 5px;
              .icon {
                width: 14px;
                height: 10px;
              }
            }
          }
        }
      }
      > span {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #bd10e0;
      }
    }
    h2 {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #333333;
      height: 43px;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 43px;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #999999;
    }
    .tip {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul {
        display: flex;
        justify-content: flex-start;
        li {
          margin-right: 4px;
          height: 25px;
          padding: 0 10px;
          background: #f7f7f7;
          border-radius: 15px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #fb6441;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 25px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .toolMenu {
        display: flex;

        justify-content: flex-end;
        flex: 1;

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
          margin-right: 20px;
          i {
            margin-right: 4px;
            .icon {
              width: 16px;
              height: 16px;
            }
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>