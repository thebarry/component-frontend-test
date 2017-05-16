<template>
  <td :class="$style.td" v-on:click="sort">
    <p :class="$style.text" v-text="date.date"></p>
    <p :class="$style.text" v-text="date.hours"></p>
  </td>
</template>

<script>
  import { SORT_BY_DATE } from '../store/mutation-types';

  export default {
    props: ['purchase'],
    computed: {
      date() {
        const timestamp = Date.parse(this.purchase.payment.date);
        const date = new Date(timestamp);
        const day = date.getUTCDate();
        const year = date.getFullYear();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const month = date.getUTCMonth() + 1;
        return {
          date: `${day}/${month}/${year}`,
          hours: `${hours}h${minutes}`,
        };
      },
    },
    methods: {
      sort() {
        this.$store.dispatch('sort', SORT_BY_DATE);
      },
    },
  };
</script>

<style module>
  .td {
    padding: 0 1em;
  }

  @media screen and (max-width: 768px) {
    .td {
      display: inline-block;
      padding: 0;
    }
  }

  .text {
    position: relative;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1em;
  }

  .text::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto auto auto -0.7em;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #3333cc;
  }

  @media screen and (min-width: 768px) {
    .text:first-of-type::before {
      background-color: #fff;
    }
  }
</style>
