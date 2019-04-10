const mixin = {
    data() {
        return {
            defaultNav: 0
        }
    },
    created() {
        this.defaultNav = this.$route.query.nav_index;
    }
}

export { mixin }