<template>
  <div class="field">
    <label class="label">{{ label ? label : field }}</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-hovered"
        :type="type"
        :name="field"
        :class="style(field)"
        :placeholder="`${field} input`"
        v-model="form[field]"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
      <span
        v-show="showPassword"
        class="icon is-small is-right"
        style="pointer-events: all"
        @click="togglePlainPasswordView()"
      >
        <i class="fas fa-eye-slash"></i>
      </span>
      <span
        v-show="!showPassword"
        class="icon is-small is-right"
        style="pointer-events: all"
        @click="togglePlainPasswordView()"
      >
        <i class="fas fa-eye"></i>
      </span>
      <p :text="type"></p>
    </div>
    <p
      class="help"
      :class="style(field)"
      v-if="form.errors.has(field)"
      v-text="form.errors.get(field)"
    ></p>
  </div>
</template>

<script>
export default {
  props: ["field", "form", "label"],
  data() {
    return {
      type: "password",
    };
  },
  computed: {
    showPassword() {
      return this.type == "text";
    },
    passwordViewerIconStyle() {
      return {
        "fa-eye-slash": this.type == "password",
        "fa-eye": this.type == "text",
      };
    },
  },
  methods: {
    style(field) {
      return {
        "is-danger": this.form.errors.has(field),
      };
    },
    togglePlainPasswordView() {
      this.type = this.type == "password" ? "text" : "password";
    },
  },
};
</script>
