<template>
  <v-app id="inspire">
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import Content from "./components/Content";
  import Loader from "./components/Loader";

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
    components: {
      Loader,
      Content,
      Header
    }
  }
</script>
<style>
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }


</style>
