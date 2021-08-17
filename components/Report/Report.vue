<template>
  <div
    :class="[
      'report', {
      'is-legend': isLegend,
      'is-fluid-mobile': isFluidMobile,
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
  // import OTHER_FOLDER_COMPONENT_NAME from "./../OTHER_FOLDER_COMPONENT_NAME/index.js";
  // import SAME_FOLDER_COMPONENT_NAME from "./SAME_FOLDER_COMPONENT_NAME";

  export default {
    name: "Report",

    // components: {
    //   OTHER_FOLDER_COMPONENT_NAME: OTHER_FOLDER_COMPONENT_NAME.OTHER_FOLDER_COMPONENT_NAME,
    //   SAME_FOLDER_COMPONENT_NAME,
    // },

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
      isLegend: {
        type: Boolean,
      },
      isFluidMobile: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .report-lists {
      &.is-legend {
        .report-list {
          margin: 0 0 13px;

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    .report-image {
      &.is-icon-block {
        display: block;
      }

      &.is-icon-impressions {
        @media (max-width: 1023px) {
          width: 9px;
          height: auto;
        }
      }

      &.is-icon-reach {
        @media (max-width: 1023px) {
          width: 19px;
          height: auto;
        }
      }
    }

    /* Modifier style ------------------------------ */
    &.is-legend {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &.is-fluid-mobile {
      .report-lists {
        &.is-legend {
          @media (max-width: 1023px) {
            width: 100%;
          }
        }
      }
    }
  }
</style>
