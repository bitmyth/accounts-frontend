<template>
  <main-layout>
    <navbar />
    <router-view></router-view>
  </main-layout>
</template>

<script>
import MainLayout from "./layouts/Main.vue";
import Navbar from "./components/navbar/Navbar.vue";

export default {
  name: "App",
  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },
  components: {
    MainLayout,
    Navbar,
  },
};
</script>