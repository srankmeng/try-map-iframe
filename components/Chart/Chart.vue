<template>
  <div
    :class="[
      'chart', {
      'is-tracking-overview': isTrackingOverview,
      'is-visiting-frequency': isVisitingFrequency,
      'is-average-dwell-time': isAverageDwellTime,
      'is-purchasing-power': isPurchasingPower,
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
    name: "Chart",

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
      isTrackingOverview: {
        type: Boolean,
      },
      isVisitingFrequency: {
        type: Boolean,
      },
      isAverageDwellTime: {
        type: Boolean,
      },
      isPurchasingPower: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .chart {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    /* Modifier style ------------------------------ */
    &.is-tracking-overview {
      > div {
        canvas {}
      }
    }

    &.is-visiting-frequency,
    &.is-average-dwell-time,
    &.is-purchasing-power {
      position: relative;
      z-index: $z-index-9;

      > div {
        canvas {}
      }
    }
  }
</style>
