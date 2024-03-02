<template>
  <NavbarMenu />
  <router-view></router-view>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
export default {
  name: "App",
  components: { NavbarMenu },
};
</script>
