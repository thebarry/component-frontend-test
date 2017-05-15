<template>
  <div id="app" :class="$style.container">
    <MainHeader></MainHeader>
    <OrderList></OrderList>
  </div>
</template>

<script>
  import OrderList from './components/OrderList';
  import MainHeader from './components/Header';

  export default {
    components: {
      OrderList,
      MainHeader,
    },
  };
</script>

<style module>
  .container {
    padding: 30px 16px;
    background: #33cccc;
    background: linear-gradient(to bottom, #33cccc 0%,#0099cc 100%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    color: #333399;
  }
</style>
