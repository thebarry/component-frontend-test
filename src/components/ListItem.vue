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
    padding: 1em;
    border-radius: 5px;
    background-color: #fff;
    letter-spacing: 2px;
    transition: box-shadow 250ms;
    cursor: pointer;
  }

  @media (hover) {
    .container:hover {
      box-shadow: 0 10px 20px -7px #003546;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      padding: 0;
      border-radius: 50px
    }
  }

  .container:not(:first-child) {
    margin-top: 16px;
  }

  .wrap {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    .wrap {
      justify-content: center;
      width: 40%;
      height: 100%;
    }
  }
</style>
