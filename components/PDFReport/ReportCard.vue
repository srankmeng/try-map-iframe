<template>
  <div class="report-card">
    <div v-if="heading" class="report-card-heading mb-1 text-color-primary-1 font-medium">
      {{ heading }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="scss">
.report-card {
  background: white;
  border-radius: 10px;
  padding: 10px 16px 16px 16px;
  // -webkit-box-shadow: 0px 0px 4px 2px rgba(176,173,176,0.5);
  // -moz-box-shadow: 0px 0px 4px 2px rgba(176,173,176,0.5);
  // box-shadow: 0px 0px 4px 2px rgba(176,173,176,0.5);

  &-heading {
    text-align: center;
    padding-bottom: 10px;
  }
}
</style>
