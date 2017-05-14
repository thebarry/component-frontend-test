<template>
  <div :class="$style.container">
    <svg :class="[$style.icon, {[$style.error]: !purchase.payment.status}]">
      <use :xlink:href="`#${glyph}`"></use>
    </svg>
    <p :class="$style.code" v-text="purchase.payment.code"></p>
  </div>
</template>

<script>
import icon from '../assets/label-check.svg';
import iconError from '../assets/label-error.svg';

export default {
  props: ['purchase'],
  computed: {
    glyph() {
      return this.purchase.payment.status ? icon.id : iconError.id;
    },
  },
};
</script>

<style module>
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  .icon {
    width: 22px;
    height: 22px;
    fill: #33cccc;
  }

  .icon.error {
    fill: #ff3366;
  }

  .code {
    width: calc(100% - 32px);
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
  }
</style>
