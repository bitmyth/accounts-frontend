<template>
  <main-layout>
    <side-menu></side-menu>
  </main-layout>
</template>

<script>
import SideMenu from "../../components/navbar/SideMenu.vue";
import MainLayout from "../../layouts/Main.vue";

export default {
  components: {
    MainLayout,
    SideMenu,
  },
  data() {
    return {}
  },
};
</script>