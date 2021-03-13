<template>
  <main-layout>
    <section class="hero is-info is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half has-background-light box">
              <form
                method="post"
                @submit.prevent="onSubmit"
                @keydown="clearFormError($event.target.name)"
              >
                <user-name :form="form" field="name" type="text"> </user-name>
                <password :form="form" field="password"> </password>
                <password :form="form" field="passwordConfirm" label="confirm password"> </password>
                

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" />
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button
                      class="button is-link"
                      :class="{ 'is-loading': isLoading }"
                      :disabled="isDisabled"
                    >
                      Submit
                    </button>
                  </div>

                  <div class="control">
                    <a class="button is-link is-light " href="/login"> login </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import Password from "../components/login/Password.vue";
import UserName from "../components/login/UserName.vue";
import Form from "../models/Form.js";
import LocalStore from "../localstorage";

export default {
  components: {
    MainLayout,
    UserName,
    Password,
  },

  data() {
    return {
      form: new Form({
        name: "",
        password: "",
        passwordConfirm: "",
      }),
      isLoading: false,
      isDisabled: false,
    };
  },

  methods: {
    clearFormError(name) {
      this.form.errors.clear(name);
      this.isDisabled = this.form.errors.any();
    },

    onSubmit() {
      this.isLoading = true;
      this.form
        .post("/v1/register")
        .then((data) => {
          console.log(data);
          LocalStore.user = data.user;
          LocalStore.token = data.token;
          this.$store.commit("login", data.user);
          this.$router.push('profile')

        })
        .catch((error) => {
          console.log(error);
          this.isDisabled = this.form.errors.any();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>