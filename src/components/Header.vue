<template>
  <header :class="$style.header">
    <template v-if="purchases">
      <h2 :class="$style.title">
        <span :class="$style.highlight">{{ purchases.number }}</span>
        <span :class="$style.text">pedidos encontrados | no valor total de</span>
        <span :class="$style.highlight">{{ purchases.total }}</span>
      </h2>
      <a :class="$style.link" href="#">Exportar planilha</a>
    </template>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        purchases: 'totalPurchases',
      }),
    },
  };
</script>

<style module>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 678px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2em;
    border-bottom: 1px solid #fff;
  }

  .text {
    font-size: 0.7em;
  }

  .highlight {
    vertical-align: middle;
    font-weight: 400;
  }

  .link {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
    color: #333399;
  }
</style>
