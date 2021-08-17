<template>
  <div
    :class="[
      'report-legend', {
      'is-label-large': isLabelLarge,
      'is-label-horizontal': isLabelHorizontal,
      'is-label-nowrap': isLabelNowrap,
      'is-label-stack': isLabelStack,
      'is-label-stack-partial': isLabelStackPartial,
      'is-blue-1': isBlue1,
      'is-blue-2': isBlue2,
      'is-blue-3': isBlue3,
      'is-blue-4': isBlue4,
      'is-blue-5': isBlue5,
      'is-blue-6': isBlue6,
      'is-orange-1': isOrange1,
      'is-orange-2': isOrange2,
      'is-orange-3': isOrange3,
      'is-orange-4': isOrange4,
      'is-orange-5': isOrange5,
      'is-orange-6': isOrange6,
      'is-orange-7': isOrange7,
      'is-purple-1': isPurple1,
      'is-purple-2': isPurple2,
      'is-purple-3': isPurple3,
      'is-green-1': isGreen1,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-legend-grid">
      <div v-if="isShowIcon" class="report-legend-grid-column is-circle">
        <div class="report-legend-shape is-circle" />
      </div>
      <div class="report-legend-grid-column is-label">
        <div class="report-legend-text is-label" :style="{minWidth: labelWidth}">{{ label }}</div>
        <div v-if="subLabel" class="report-legend-text is-sublabel">{{ subLabel }}</div>
      </div>
      <div v-if="percent" class="report-legend-grid-column is-percent">
        <div class="report-legend-text is-label">{{ percent }} %</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReportLegend",

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
      labelWidth: {
        type: String,
        default: '1px',
      },
      isShowIcon: {
        type: Boolean,
        default: true,
      },
      isLabelLarge: {
        type: Boolean,
      },
      isLabelHorizontal: {
        type: Boolean,
      },
      isLabelNowrap: {
        type: Boolean,
      },
      isLabelStack: {
        type: Boolean,
      },
      isLabelStackPartial: {
        type: Boolean,
      },
      isBlue1: {
        type: Boolean,
      },
      isBlue2: {
        type: Boolean,
      },
      isBlue3: {
        type: Boolean,
      },
      isBlue4: {
        type: Boolean,
      },
      isBlue5: {
        type: Boolean,
      },
      isBlue6: {
        type: Boolean,
      },
      isOrange1: {
        type: Boolean,
      },
      isOrange2: {
        type: Boolean,
      },
      isOrange3: {
        type: Boolean,
      },
      isOrange4: {
        type: Boolean,
      },
      isOrange5: {
        type: Boolean,
      },
      isOrange6: {
        type: Boolean,
      },
      isOrange7: {
        type: Boolean,
      },
      isPurple1: {
        type: Boolean,
      },
      isPurple2: {
        type: Boolean,
      },
      isPurple3: {
        type: Boolean,
      },
      isGreen1: {
        type: Boolean,
      },
      label: {
        type: String,
        default: '-',
      },
      subLabel: {
        type: String,
      },
      percent: {
        type: [String, Number],
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report-legend {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .report-legend-grid {
        display: flex;
        align-items: center;
        margin: 0 0 0 -10px;

        > .report-legend-grid-column {
            padding: 0 0 0 10px;

            &.is-label {
              flex: 1;
            }
        }
    }

    .report-legend-shape {
      &.is-circle {
        width: 16px;
        height: 16px;
        border-radius: 8px;
      }
    }

    .report-legend-text {
      &.is-label {
        @include typography-primary-11;
        color: $color-primary-1;
      }

      &.is-sublabel {
        @include typography-primary-9;
        color: $color-gray-5;
      }
    }

    /* Modifier style ------------------------------ */
    &.is-label-large {
      .report-legend-text {
        &.is-label {
          @include typography-primary-14;

          @media (max-width: 1023px) {
            @include typography-primary-11;
          }
        }
      }
    }

    &.is-label-horizontal {
      .report-legend-grid {
          > .report-legend-grid-column {
              &.is-label {
                display: flex;
                align-items: center;
              }
          }
      }

      .report-legend-text {
        &.is-label {
          margin-right: 3px;
        }

        &.is-sublabel {
          position: relative;
          top: 1px;
        }
      }
    }

    &.is-label-nowrap {
      .report-legend-text {
        &.is-label,
        &.is-percent {
          white-space: nowrap;
        }
      }
    }

    &.is-label-stack,
    &.is-label-stack-partial {
      .report-legend-grid {
        @media (max-width: 479px) {
          flex-wrap: wrap;
          margin: 0 0 -5px -10px;
        }

        @media (min-width: 480px) and (max-width: 1023px) {
          margin: 0 0 -15px -10px;
        }

        > .report-legend-grid-column {
          @media (max-width: 479px) {
            width: 100%;
            padding: 0 0 5px 10px;
          }

          @media (min-width: 480px) and (max-width: 1023px) {
            padding: 0 0 15px 10px;
          }
        }
      }

      .report-legend-shape {
        @media (max-width: 479px) {
          margin: auto;
        }
      }
    }

    &.is-label-stack {
      .report-legend-text {
        @media (max-width: 479px) {
          text-align: center;
        }

        &.is-label {
          @media (max-width: 479px) {
            margin-right: 0;
          }
        }
      }

      &.is-label-horizontal {
        .report-legend-grid {
          > .report-legend-grid-column {
            &.is-label {
              @media (max-width: 479px) {
                flex-wrap: wrap;
              }
            }
          }
        }

        .report-legend-text {
          @media (max-width: 479px) {
            width: 100%;
          }
        }
      }
    }

    &.is-label-stack-partial {
      .report-legend-grid {
        > .report-legend-grid-column {
          &.is-label,
          &.is-percent {
            @media (max-width: 479px) {
              width: 50%;
            }
          }
        }
      }
    }

    &.is-blue-1 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-1;
        }
      }
    }

    &.is-blue-2 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-2;
        }
      }
    }

    &.is-blue-3 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-3;
        }
      }
    }

    &.is-blue-4 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-4;
        }
      }
    }

    &.is-blue-5 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-5;
        }
      }
    }

    &.is-blue-6 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-blue-6;
        }
      }
    }

    &.is-orange-1 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-1;
        }
      }
    }

    &.is-orange-2 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-2;
        }
      }
    }

    &.is-orange-3 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-3;
        }
      }
    }

    &.is-orange-4 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-4;
        }
      }
    }

    &.is-orange-5 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-5;
        }
      }
    }

    &.is-orange-6 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-6;
        }
      }
    }

    &.is-orange-7 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-orange-7;
        }
      }
    }

    &.is-purple-1 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-purple-1;
        }
      }
    }

    &.is-purple-2 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-purple-2;
        }
      }
    }

    &.is-purple-3 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-purple-3;
        }
      }
    }

    &.is-green-1 {
      .report-legend-shape {
        &.is-circle {
          background-color: $color-chart-green-1;
        }
      }
    }
  }
</style>
