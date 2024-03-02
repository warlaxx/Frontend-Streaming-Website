<template>
  <div class="">
    <div class="h-10 flex my-3 mx-5">
      <h2>The News</h2>
    </div>
    <div class="border-gray-400 border-t-2 border-b-2 py-3 px-5">
      <div class="flex justify-between">
        <router-link to="/categorie1"> Categorie 1</router-link>

        <router-link to="/categorie2"> Categorie 2</router-link>

        <router-link to="/categorie3"> Categorie 3</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarMenu",
  props: {
    msg: String,
  },
  setup() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: gray;
}
</style>
