<template>
  <li :class="$style.listItem"></li>
</template>


<script>
  export default {
    props: ['purchase'],
  };
</script>


<style module>
  .listItem {
    margin: 0;
  }
</style>
