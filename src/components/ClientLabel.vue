<template>
  <div :class="$style.container">
    <div :class="$style.icon">
      <span>NC</span>
    </div>
    <div :class="$style.content">
      <p :class="[$style.text, $style.name]" v-text="purchase.client.name"></p>
      <p :class="$style.text" v-text="purchase.client.email"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['purchase'],
};
</script>

<style module>
  .container {
    display: flex;
    align-items: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px dashed #ccc;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    background: #3333cc;
    background: linear-gradient(135deg,  #3333cc 0%,#9966cc 100%);
    border-radius: 50%;
    font-size: 10px;
    color: #fff;
  }

  .content {
    width: calc(100% - 25px);
  }

  .text {
    word-break: break-all;
    margin-top: 0;
    margin-bottom: 0;
  }

  .name {
    font-weight: bold;
  }
</style>
