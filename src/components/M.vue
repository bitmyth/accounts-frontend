<template>
<div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
</div>
</template>

<script>
export default {
  name: 'M',
  props: {
    message: String
  }
}
</script>
