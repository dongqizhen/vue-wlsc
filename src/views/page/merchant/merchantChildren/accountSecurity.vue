<template>
  <div class="accountSecurity">
    <account-security :isAlready="isAlready"></account-security>
  </div>
</template>

<script>
  import accountSecurity from "../../../../components/accountSecurity/accountSecurity";

  export default {
    data() {
      return {
        isAlready: false
      };
    },
    methods: {},
    components: {
      accountSecurity
    }
  };
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/_commonScss";
  .accountSecurity {
    height: 609px;
  }
</style>
