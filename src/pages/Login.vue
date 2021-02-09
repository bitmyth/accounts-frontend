<template>
  <main-layout>
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-mobile is-centered">
            <div class="column is-half has-background-light box">
              <form
                method="post"
                @submit.prevent="onSubmit"
                @keydown="clearFormError($event.target.name)"
              >
                <user-name :form="form" field="name" type="text"> </user-name>
                <password :form="form" field="password"> </password>

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

                  <!-- <div class="control"> -->
                  <!-- <button class="button is-link is-light">Cancel</button> -->
                  <!-- </div> -->
                </div>
                <div class="">
                  <a href="/register">register</a>
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
        .post("/v1/login")
        .then((data) => {
          console.log(data);
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