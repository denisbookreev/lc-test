<template>
  <div class="layout">
    <div class="layout__inner">
      <div class="layout__title"
           v-if="!!title"
           v-html="title">
      </div>

      <div class="layout__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    width: 100vw;
    min-height: 100vh;
    background-color: $c_black;
    padding: 20px;

    &__title {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
</style>
