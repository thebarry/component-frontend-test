<template>
  <div :class="$style.container">
    <p :class="$style.text" v-text="date.date"></p>
    <p :class="$style.text" v-text="date.minutes"></p>
  </div>
</template>

<script>
export default {
  props: ['purchase'],
  computed: {
    date() {
      const date = new Date(this.purchase.payment.timestamp);
      const day = date.getDate();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const month = date.getMonth();
      return {
        date: `${day}/${month}/${year}`,
        minutes: `${hours}h${minutes}`,
      };
    },
  },
};
</script>

<style module>
  .container {
    display: flex;
    align-items: center;
  }

  .text {
    position: relative;
    margin: 0 0 0 20px;
  }

  .text::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -12px;
    margin: auto;
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #483ecc;
  }
</style>
