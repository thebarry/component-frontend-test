<template>
  <ul :class="$style.list">
    <ListItem v-for="purchase in purchases" :key="purchase.id" :purchase="purchase"></ListItem>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ListItem from './ListItem';

  export default {
    components: {
      ListItem,
    },
    computed: {
      ...mapGetters({
        purchases: 'allPurchases',
      }),
    },
    created() {
      this.$store.dispatch('getAllPurchases');
    },
  };
</script>

<style module>
  .list {
    max-width: 400px;
    margin: 0 auto;
    padding-left: 0;
    list-style: none;
  }
</style>
