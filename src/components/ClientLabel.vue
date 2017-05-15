<template>
  <td :class="$style.td">
    <div :class="$style.icon">
      <span>NC</span>
    </div>
    <div :class="$style.content">
      <p :class="[$style.text, $style.name]" v-text="purchase.client.name"></p>
      <p :class="$style.text" v-text="purchase.client.email"></p>
    </div>
  </td>
</template>

<script>
export default {
  props: ['purchase'],
};
</script>

<style module>
  .td {
    height: 60px;
    padding: 0 1em;
    border-radius: 0 50px 50px 0;
    border-left: 1px dashed #ccc;
  }

  .icon {
    margin-right: 0.5em;
    padding: 0.5em;
    border-radius: 50%;
    background: #3333cc;
    background: linear-gradient(135deg,  #3333cc 0%,#9966cc 100%);
    color: #fff;
  }

  .icon,
  .content {
    display: inline-block;
    vertical-align: middle;
  }

  .name {
    font-weight: bold;
  }

  .text {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
