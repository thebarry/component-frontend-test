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

  @media screen and (max-width: 768px) {
    .td {
      border: none;
      display: block;
      padding: 0;
    }
  }

  .icon {
    margin-right: 0.5em;
    padding: 0.35em;
    border-radius: 50%;
    background: #3333cc;
    background: linear-gradient(135deg,  #3333cc 0%,#9966cc 100%);
    font-size: 0.8em;
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

  @media screen and (max-width: 768px) {
    .td {
      height: auto;
      margin-top: 0.75em;
      padding-top: 0.75em;
      border-top: 1px dashed #ccc;
      border-radius: 0;
    }
  }
</style>
