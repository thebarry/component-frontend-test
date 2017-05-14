<template>
  <li :class="$style.container">
    <CodeLabel :purchase="purchase"></CodeLabel>
    <div :class="$style.wrap">
      <PaymentLabel :purchase="purchase"></PaymentLabel>
      <UpdateLabel :purchase="purchase"></UpdateLabel>
    </div>
    <ClientLabel :purchase="purchase"></ClientLabel>
  </li>
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
    overflow-x: auto;
    padding: 16px;
    border-radius: 5px;
    background-color: #fff;
    letter-spacing: 2px;
  }

  .container:not(:first-child) {
    margin-top: 16px;
  }

  .wrap {
    display: flex;
  }
</style>
