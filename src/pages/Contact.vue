<template>
  <main-layout>
    <section class="hero is-success is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half has-background-light box">
              <h1 class="is-size-2">Contact infomation</h1>

              <text-field :form="form" field="email"> </text-field>

              <text-field :form="form" field="wechat"> </text-field>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import TextField from "../components/input/TextField.vue";
import Form from "../models/Form";

export default {
  components: {
    MainLayout,
    TextField,
  },
  data() {
    return {
      form: new Form({
        email: "fishis@163.com",
        wechat: "bitmyth",
      }),
    };
  },
};
</script>