<template>
  <div>
    <div v-for="(interest, interestIndex) in interests" :key="interestIndex" class="flex mb-2">
      <div class="font-semibold text-color-primary-1 w-24" style="font-size: 11px">{{ interestIndex + 1 }}. <span v-html="interest.name"></span></div>
      <div class="flex-1 flex items-center">
        <div class="bg-color-chart-blue-1 h-full" :style="{ width: +interest.percent * 10 + '%' }"></div>
        <div class="font-semibold text-color-primary-1 ml-2" style="font-size: 9px">{{ interest.percent ? interest.percent.toFixed(2) : '' }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChartReportInterest",

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
      isInfoCompare: {
        type: Boolean,
      },
      interests: {
        type: Array,
        default() {
          return []
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/styleguides/styleguides";

  .report-interest {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .report-interest-lists {
      padding: 10px 0;

      .report-interest-list {
        margin: 0 0 10px;

        &:last-child {
          margin: 0;
        }
      }
    }

    .report-interest-grid {
      display: flex;
      align-items: center;

      &.is-group {
        margin: 0 0 0 -30px;

        @media (max-width: 1023px) {
          margin: 0 0 0 -10px;
        }

        > .report-interest-grid-column {
          padding: 0 0 0 30px;

          @media (max-width: 1023px) {
            padding: 0 0 0 10px;
          }

          &.is-group-content {
            flex: 1;
          }

          &.is-group-percent {
            flex: none;
          }
        }
      }

      &.is-content {
        margin: 0 0 0 -15px;

        @media (max-width: 1023px) {
          margin: 0 0 0 -10px;
        }

        > .report-interest-grid-column {
          padding: 0 0 0 15px;

          @media (max-width: 1023px) {
            padding: 0 0 0 10px;
          }

          &.is-content-icon,
          &.is-content-label {
            flex: none;
          }

          &.is-content-label {
            @media (max-width: 1023px) {
              display: none;
            }
          }

          &.is-content-bar {
            flex: 1;
          }
        }
      }
    }

    .report-interest-text {
      &.is-percent {
        @include typography-primary-11;
        width: 30px;
        color: $color-primary-1;
        text-align: right;
        white-space: nowrap;
      }

      &.is-label {
        @include typography-primary-11;
        width: 65px;
        color: $color-primary-1;
        white-space: nowrap;
      }
    }

    .report-interest-image {
      &.is-icon-container {
        position: relative;
        width: 30px;
        height: 20px;
        text-align: center;
      }

      &.is-icon {
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        left: 50%;
      }

      &.is-icon-interest-movie {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }

      &.is-icon-interest-bank {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }

      &.is-icon-interest-shopping {
        @media (max-width: 1023px) {
          width: 20px;
        }
      }

      &.is-icon-interest-game {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }

      &.is-icon-interest-realestate {
        @media (max-width: 1023px) {
          width: 19px;
        }
      }

      &.is-icon-interest-transport {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }

      &.is-icon-interest-fooddelivery {
        @media (max-width: 1023px) {
          width: 21px;
        }
      }

      &.is-icon-interest-health {
        @media (max-width: 1023px) {
          width: 19px;
        }
      }

      &.is-icon-interest-travel {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }

      &.is-icon-interest-sport {
        @media (max-width: 1023px) {
          width: 23px;
        }
      }
    }

    .report-interest-bar {
      @include bg-gradient-7;
      height: 20px;
      border-radius: 10px;
    }

    /* Modifier style ------------------------------ */
    &.is-info-compare {
      .report-interest-lists {
        padding: 6px 0 0;
      }
    }
  }
</style>
