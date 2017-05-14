<template>
  <div :class="$style.container">
    <svg :class="$style.icon">
      <use :xlink:href="`#${glyph}`"></use>
    </svg>
    <p :class="$style.value" v-text="purchase.payment.value"></p>
  </div>
</template>

<script>
import iconDebitCard from '../assets/debit-card.svg';
import iconCreditCard from '../assets/credit-card.svg';
import iconCash from '../assets/bar-codel.svg';

export default {
  props: ['purchase'],
  computed: {
    glyph() {
      let glyph;
      switch (this.purchase.payment.mode) {
        case 'cash':
          glyph = iconCash.id;
          break;
        case 'debit-card':
          glyph = iconDebitCard.id;
          break;
        case 'credit-card':
          glyph = iconCreditCard.id;
          break;
        default:
      }
      return glyph;
    },
  },
};
</script>

<style module>
  .container {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 22px;
    height: 22px;
    fill: #9900ff;
  }

  .value {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
  }
</style>
