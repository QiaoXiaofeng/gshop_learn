<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.FooterGuide" />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapActions } from "vuex";

export default {
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(["getAddress"])
  },
  async mounted() {
    this.getAddress().then(() => {
      console.log("..sdfsdfsfs....xxxx");
    });
    // this.$store.dispatch("getAddress").then(() => {
    //   console.log("......xxxx");
    // });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
