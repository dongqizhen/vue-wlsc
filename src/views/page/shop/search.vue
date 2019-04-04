<template>
  <div class="search">
    <Header></Header>
    <search></search>
    <Nav></Nav>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../../components/header/header.vue";
  import Footer from "../../../components/footer/footer.vue";
  import search from "../../../components/common/search.vue";
  import Nav from "../../../components/common/nav.vue";
  export default {
    data() {
      return {};
    },
    components: {
      Header,
      Footer,
      search,
      Nav
    }
  };
</script>

<style scoped lang="scss">
</style>