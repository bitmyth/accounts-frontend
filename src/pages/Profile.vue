<template>
  <main-layout>
    <section class="hero is-success is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half has-background-light box">
              <user-name :form="form" field="Name"></user-name>
              <user-name :form="form" field="Email"></user-name>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import UserName from "../components/profile/UserName.vue";

export default {
  components: {
    MainLayout,
    UserName,
  },
  data() {
    return {
      form: this.$store.state.user,
    };
  },
};
</script>