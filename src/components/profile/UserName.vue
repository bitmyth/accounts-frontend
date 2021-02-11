<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">{{ field }}</label>
    </div>

    <div class="field-body">
      <div class="field">
        <div class="control has-icons-right">
          <p class="input is-static">
            {{ $store.state.user?$store.state.user[field]:'' }}
          </p>
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["field"] ,
  methods: {},
};
</script>
