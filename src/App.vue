<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  ::-webkit-input-placeholder {
    color: #b2b2b2;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #b2b2b2;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #b2b2b2;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b2b2b2;
  }

  p {
    margin-bottom: 0;
  }
  ol,
  ul,
  li {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .commonWidth {
    width: 1024px;
    margin: 0 auto;
    height: 100%;
  }
  .el-picker-panel {
    .el-date-table {
      td.today {
        span {
          color: #f10215;
        }
      }
      td.start-date,
      td.end-date {
        span {
          background-color: #f10215;
        }
      }
    }
  }
</style>
