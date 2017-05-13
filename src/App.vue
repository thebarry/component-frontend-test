<template>
  <div id="app">
    <OrderList></OrderList>
  </div>
</template>

<script>
import OrderList from './components/OrderList';

export default {
  components: {
    OrderList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
