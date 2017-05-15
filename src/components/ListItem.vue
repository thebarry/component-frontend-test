<template>
  <tr :class="$style.container">
    <CodeLabel :purchase="purchase"></CodeLabel>
    <PaymentLabel :purchase="purchase"></PaymentLabel>
    <UpdateLabel :purchase="purchase"></UpdateLabel>
    <ClientLabel :purchase="purchase"></ClientLabel>
  </tr>
</template>

<script>
  import CodeLabel from './CodeLabel';
  import PaymentLabel from './PaymentLabel';
  import ClientLabel from './ClientLabel';
  import UpdateLabel from './UpdateLabel';

  export default {
    props: ['purchase'],
    components: {
      CodeLabel,
      PaymentLabel,
      ClientLabel,
      UpdateLabel,
    },
  };
</script>

<style module>
  .container {
    background-color: #fff;
  }
</style>
