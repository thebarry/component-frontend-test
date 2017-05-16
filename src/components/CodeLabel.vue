<template>
  <td :class="$style.td" v-on:click="sort">
    <svg :class="[$style.icon, {[$style.error]: !purchase.payment.status}]">
      <use :xlink:href="`#${glyph}`"></use>
    </svg>
    <p :class="$style.text" v-text="purchase.payment.code"></p>
  </td>
</template>

<script>
  import { SORT_BY_STATUS } from '../store/mutation-types';
  import icon from '../assets/label-check.svg';
  import iconError from '../assets/label-error.svg';

  export default {
    props: ['purchase'],
    computed: {
      glyph() {
        return this.purchase.payment.status ? icon.id : iconError.id;
      },
    },
    methods: {
      sort() {
        this.$store.dispatch('sort', SORT_BY_STATUS);
      },
    },
  };
</script>

<style module>
  .td {
    border-radius: 50px 0 0 50px;
    padding: 0 1em;
  }

  @media screen and (max-width: 768px) {
    .td {
      display: block;
      margin-bottom: 0.75em;
      padding: 0;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 0.5em;
    fill: #33cccc;
    vertical-align: middle;
  }

  .icon.error {
    fill: #ff3333;
  }

  .text {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
