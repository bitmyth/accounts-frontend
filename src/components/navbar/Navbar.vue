<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../../assets/apple-touch-icon.png" width="28" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" href="/about"> About </a>
            <a class="navbar-item" href="/profile"> Profile </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" href="/contact"> Contact </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item" v-if="!$store.state.user">
          <div class="buttons">
            <a class="button is-primary" href="/register">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/login"> Log in </a>
          </div>
        </div>

        <div class="navbar-item" v-if="$store.state.user">
          <div class="buttons">
            <a class="button is-light" @click="logout">
              <strong>Logout</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

import LocalStore from "../../localstorage";
export default {
  methods: {
    logout() {
      LocalStore.user = null;
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>