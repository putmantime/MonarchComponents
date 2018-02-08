<template>
  <div id="LandingPage">
    <table-view annotationType='phenotypes' identifier="MGI:104873"></table-view>
  </div>
</template>
<script>
/* eslint-disable */
  import TableView from "./TableView.vue";
  export default {
    components: {
      'table-view': TableView,
    },
    name: 'LandingPage',
    data() {
      return {
        msg: 'hi',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
