<template>
  <main-layout>
    <section class="hero is-success is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile is-centered">
            <div class="column is-half has-background-light box">
              <h1 class="is-size-2">About this project</h1>
              <h1 class="is-size-5">description: {{ text }}</h1>
              <h1 class="is-size-5">
                link: <a :href="link" class="is-link">{{ link }}</a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";

export default {
  components: {
    MainLayout,
  },
  data() {
    return {
      text: "This is a demo project with vue",
      link: "https://github.com/bitmyth/account-frontend",
    };
  },
};
</script>