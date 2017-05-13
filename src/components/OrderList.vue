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
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
</style>
