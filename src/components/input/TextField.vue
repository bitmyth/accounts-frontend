<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ field }}</label>
    </div>
    <div class="field-body">
      <div class="control has-icons-right">
        <input
          class="input is-static"
          :type="type"
          :name="field"
          v-model="form[field]"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["field", "form", "type"],
  methods: {},
};
</script>
