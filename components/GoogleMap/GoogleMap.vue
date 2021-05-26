<template>
  <div
    :class="[
      'google-map', {
      'is-area': isArea,
      'is-marker': isMarker,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: "GoogleMap",

    // Props types: String, Number, Boolean, Array, Object, Function, Promise
    props: {
      className: {
        type: String,
      },
      inlineStyles: {
        type: Object,
        default: function() {
          return {
            // Style
          };
        },
      },
      isArea: {
        type: Boolean,
      },
      isMarker: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .google-map {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Modifier style ------------------------------ */
    &.is-area {}

    &.is-marker {}
  }
</style>
