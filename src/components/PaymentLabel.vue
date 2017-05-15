<template>
  <td :class="$style.td">
    <svg :class="$style.icon">
      <use :xlink:href="`#${glyph}`"></use>
    </svg>
    <p :class="$style.text" v-text="purchase.payment.value"></p>
  </td>
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
  .td {
    padding: 0 1em;
  }

  @media screen and (max-width: 768px) {
    .td {
      display: inline-block;
      padding: 0;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 0.5em;
    fill: #9900ff;
    vertical-align: middle;
  }

  .text {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
