<template>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
  </head>
  <body>
    <div id="app">
        <slot></slot>
    </div>
  </body>
</html>

</template>

<script>
  // import VLink from '../components/VLink.vue'
  export default {
    components: {
      // VLink
    }
  }
</script>