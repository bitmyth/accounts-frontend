<template>
  <div class="field">
    <label class="label">{{ label ? label : field }}</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input"
        type="password"
        :name="field"
        :class="style(field)"
        :placeholder="`${field} input`"
        v-model="form[field]"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
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
  props: ["field", "form", "type","label"],
  methods: {
    style(field) {
      return {
        "is-danger": this.form.errors.has(field),
      };
    },
  },
};
</script>
