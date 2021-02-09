<template>
  <main-layout>
    <router-view></router-view>
  </main-layout>
</template>

<script>
import MainLayout from './layouts/Main.vue'

export default {
  name: 'App',
  data() {
    return {
      currentRoute: window.location.pathname
      }
  },
  components: {
    MainLayout
  }
}
</script>