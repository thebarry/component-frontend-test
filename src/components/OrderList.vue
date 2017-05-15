<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <tr>
        <th>Status <span :class="$style.code">Código</span></th>
        <th>Meio R$</th>
        <th>Atualizado</th>
        <th>Cliente</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="purchase in purchases">
        <tr :class="$style.row" :key="purchase.id">
          <CodeLabel :purchase="purchase"></CodeLabel>
          <PaymentLabel :purchase="purchase"></PaymentLabel>
          <UpdateLabel :purchase="purchase"></UpdateLabel>
          <ClientLabel :purchase="purchase"></ClientLabel>
        </tr>
        <tr :class="$style.spacing"></tr>
      </template>
    </tbody>
  </table>
</template>

<script>
  import { mapGetters } from 'vuex';
  import CodeLabel from './CodeLabel';
  import PaymentLabel from './PaymentLabel';
  import ClientLabel from './ClientLabel';
  import UpdateLabel from './UpdateLabel';

  export default {
    components: {
      CodeLabel,
      PaymentLabel,
      ClientLabel,
      UpdateLabel,
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
  .table {
    max-width: 768px;
    margin-right: auto;
    margin-left: auto;
    border-collapse: collapse;
  }

  .thead {
    text-align: left;
  }

  .thead th {
    padding: 1em;
    color: #fff;
  }

  .code {
    color: #333399;
  }

  .row {
    background-color: #fff;
    cursor: pointer;
  }

  .spacing {
    height: 16px;
  }
</style>
