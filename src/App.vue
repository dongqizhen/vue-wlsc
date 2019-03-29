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
</style>
