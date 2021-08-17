<template>
  <div
    :class="[
      'grid-column', {
      'is-column-1': isColumn1,
      'is-column-2': isColumn2,
      'is-column-3': isColumn3,
      'is-column-4': isColumn4,
      'is-column-5': isColumn5,
      'is-column-6': isColumn6,
      'is-column-7': isColumn7,
      'is-column-8': isColumn8,
      'is-column-9': isColumn9,
      'is-column-10': isColumn10,
      'is-column-11': isColumn11,
      'is-column-12': isColumn12,
      'is-grow': isGrow,
      'is-narrow': isNarrow,
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
    name: "GridColumn",

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
      isColumn1: {
        type: Boolean,
      },
      isColumn2: {
        type: Boolean,
      },
      isColumn3: {
        type: Boolean,
      },
      isColumn4: {
        type: Boolean,
      },
      isColumn5: {
        type: Boolean,
      },
      isColumn6: {
        type: Boolean,
      },
      isColumn7: {
        type: Boolean,
      },
      isColumn8: {
        type: Boolean,
      },
      isColumn9: {
        type: Boolean,
      },
      isColumn10: {
        type: Boolean,
      },
      isColumn11: {
        type: Boolean,
      },
      isColumn12: {
        type: Boolean,
      },
      isGrow: {
        type: Boolean,
      },
      isNarrow: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .grid-column {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    &.is-column-1 {
      width: calc((100% * 1)/12);
    }

    &.is-column-2 {
      width: calc((100% * 2)/12);
    }

    &.is-column-3 {
      width: calc((100% * 3)/12);
    }

    &.is-column-4 {
      width: calc((100% * 4)/12);
    }

    &.is-column-5 {
      width: calc((100% * 5)/12);
    }

    &.is-column-6 {
      width: calc((100% * 6)/12);
    }

    &.is-column-7 {
      width: calc((100% * 7)/12);
    }

    &.is-column-8 {
      width: calc((100% * 8)/12);
    }

    &.is-column-9 {
      width: calc((100% * 9)/12);
    }

    &.is-column-10 {
      width: calc((100% * 10)/12);
    }

    &.is-column-11 {
      width: calc((100% * 11)/12);
    }

    &.is-column-12 {
      width: calc((100% * 12)/12);
    }

    /* Modifier style ------------------------------ */
    &.is-grow {
      flex: 1;
    }

    &.is-narrow {
      flex: none;
    }
  }
</style>
