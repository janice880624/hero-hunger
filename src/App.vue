<template>
  <v-app>
    <div>
      <header>B+C 創造你的無限</header>
    </div>
    <v-container fluid class="pa-0">
      <div class="mx-auto" style="max-width: 800px;">
        <show class="mt-5" />
      </div>
    </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import show from "./components/Show";

export default {
  name: "App",

  components: {
    show
  },

  data: () => ({
    //
  })
};
</script>

<style>
* {
  font-family: "微軟正黑體" !important;
}

header {
  font-size: 30px;
  background-color: #b4eeb4;
  padding: 10px;
}
</style>
