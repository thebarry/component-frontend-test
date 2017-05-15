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
    <tbody :class="$style.tbody">
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
    max-width: 678px;
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

  .row {
    border-radius: 50px;
    background-color: #fff;
    cursor: pointer;
  }

  .row:hover {
    box-shadow: 0 15px 14px -14px #000b2d;
  }

  .spacing {
    height: 16px;
  }

  .code {
    color: #333399;
  }

  @media screen and (max-width: 768px) {
    .td {
      padding: 0;
    }

    .thead {
      display: none;
    }

    .table,
    .tbody,
    .row {
      display: block;
    }

    .row {
      padding: 1em;
      border-radius: 10px;
    }
  }
</style>
