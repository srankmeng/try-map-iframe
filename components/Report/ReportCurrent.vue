<template>
  <div
    :class="[
      'report-current', {
      'is-show-arrow': isShowArrow,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-current-lists is-stat">
      <div class="report-current-list">
        <div class="report-current-section is-icon flex justify-center">
          <img class="report-current-image is-icon is-icon-impression" :src="`${this.$path.static}/images/icons/ic-eye-blue.svg`" alt="Icon" />
        </div>
        <div class="report-current-section is-number-data">
          <span class="report-current-text is-number-data">
            {{ numberImpressionsPerMonth }}
          </span>
        </div>
        <div class="report-current-section is-label">
          <span class="report-current-text is-label">Impressions per month</span>
        </div>
        <div v-if="isShowArrow" class="report-current-section is-arrow">
          <img class="report-current-image is-icon-arrow" :src="`${this.$path.static}/images/icons/ic-arrow-up-gradient-green.svg`" alt="Icon" />
          <img class="report-current-image is-icon-arrow-mobile" :src="`${this.$path.static}/images/icons/ic-arrow-up-gradient-green-small.svg`" alt="Icon" />
        </div>
        <div class="report-current-section is-number-cost">
          <div class="report-current-badge is-cost">
            <span class="report-current-text is-number-data">
              {{ numberCpm }}
            </span>
          </div>
        </div>
        <div class="report-current-section is-label-cost">
          <span class="report-current-text is-label">CPM</span>
        </div>
      </div>
      <div class="report-current-list">
        <div class="report-current-section is-icon flex justify-center">
          <img class="report-current-image is-icon is-icon-reach" :src="`${this.$path.static}/images/icons/ic-smart-phone-blue.svg`" alt="Icon" />
        </div>
        <div class="report-current-section is-number-data">
          <span class="report-current-text is-number-data">
            {{ numberReachPerMonth }}
          </span>
        </div>
        <div class="report-current-section is-label">
          <span class="report-current-text is-label">Reach per month</span>
        </div>
        <div v-if="isShowArrow" class="report-current-section is-arrow">
          <img class="report-current-image is-icon-arrow" :src="`${this.$path.static}/images/icons/ic-arrow-up-gradient-green.svg`" alt="Icon" />
          <img class="report-current-image is-icon-arrow-mobile" :src="`${this.$path.static}/images/icons/ic-arrow-up-gradient-green-small.svg`" alt="Icon" />
        </div>
        <div class="report-current-section is-number-cost">
          <div class="report-current-badge is-cost">
            <span class="report-current-text is-number-data">
              {{ numberCpr }}
            </span>
          </div>
        </div>
        <div class="report-current-section is-label-cost">
          <span class="report-current-text is-label">CPR</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import OTHER_FOLDER_COMPONENT_NAME from "./../OTHER_FOLDER_COMPONENT_NAME/index.js";
  // import SAME_FOLDER_COMPONENT_NAME from "./SAME_FOLDER_COMPONENT_NAME";

  export default {
    name: "ReportCurrent",

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
      isShowArrow: {
        type: Boolean,
      },
      numberImpressionsPerMonth: {
        type: [String, Number],
        default: '0',
      },
      numberCpm: {
        type: [String, Number],
        default: '0',
      },
      numberReachPerMonth: {
        type: [String, Number],
        default: '0',
      },
      numberCpr: {
        type: [String, Number],
        default: '0',
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report-current {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .report-current-section {
      &.is-icon {
        margin: 0 0 13px;
        text-align: center;
      }

      &.is-number-data {
        margin: 0 0 10px;
        text-align: center;

        @media (max-width: 1023px) {
          margin: 0;
        }
      }

      &.is-label {
        margin: 0 0 20px;
        text-align: center;
      }

      &.is-number-cost {
        margin: 0 0 4px;
        text-align: center;
      }

      &.is-label-cost {
        text-align: center;
      }

      &.is-arrow {
        margin: -10px 0 15px;
        text-align: center;
      }
    }

    .report-current-text {
      &.is-number-data {
        @include typography-primary-semibold-28;
        color: $color-blue-3;

        @media (max-width: 1023px) {
          @include typography-primary-semibold-22;
        }
      }

      &.is-label {
        @include typography-primary-medium-14;
        color: $color-blue-1;

        @media (max-width: 1023px) {
          @include typography-primary-medium-12;
        }
      }
    }

    .report-current-image {
      &.is-icon {}

      &.is-icon-impression {
        @media (max-width: 1023px) {
          width: 26px;
          height: auto;
        }
      }

      &.is-icon-reach {
        @media (max-width: 1023px) {
          width: 11px;
          height: auto;
        }
      }

      &.is-icon-arrow {}

      &.is-icon-arrow-mobile {
        display: none;
      }
    }

    .report-current-badge {
      &.is-cost {
        display: inline-block;
        min-width: 135px;
        padding: 0 5px;
        background-color: $color-blue-10;
        border-radius: 5px;

        @media (max-width: 1023px) {
          padding: 4px 5px;
        }
      }
    }

    .report-current-lists {
      &.is-stat {
        padding: 13px 0 10px;

        .report-current-list {
          padding: 0 0 35px;
          margin: 0 0 25px;
          border-bottom: 1px solid $color-blue-2;

          @media (max-width: 1023px) {
            padding: 0 0 18px;
            margin: 0 0 16px;
          }

          &:last-child {
            padding: 0;
            margin: 0;
            border-bottom: none;
          }
        }
      }
    }

    /* Modifier style ------------------------------ */
    &.is-show-arrow {
      .report-current-section {
        &.is-arrow {
          @media (max-width: 1023px) {
            margin: -10px 0 7px;
          }
        }
      }

      .report-current-image {
        &.is-icon-arrow {
          @media (max-width: 1023px) {
            display: none;
          }
        }

        &.is-icon-arrow-mobile {
          @media (max-width: 1023px) {
            display: inline;
          }
        }
      }
    }
  }
</style>
