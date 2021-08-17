<template>
  <div
    :class="[
      'report-visitingtype', {
      'is-small-mobile': isSmallMobile,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-visitingtype-bar is-passerby" :style="{ height: percentPasserBy + '%' }">
      <div class="report-visitingtype-percent is-passerby">{{ percentPasserBy }} %</div>
    </div>
    <div class="report-visitingtype-bar is-work" :style="{ height: percentWork + '%' }">
      <div class="report-visitingtype-percent is-work">{{ percentWork }} %</div>
    </div>
    <div class="report-visitingtype-bar is-home" :style="{ height: percentHome + '%' }">
      <div class="report-visitingtype-percent is-home">{{ percentHome }} %</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReportVisitingType",

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
      isSmallMobile: {
        type: Boolean,
      },
      percentPasserBy: {
        type: [String, Number],
        default: '0',
      },
      percentWork: {
        type: [String, Number],
        default: '0',
      },
      percentHome: {
        type: [String, Number],
        default: '0',
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report-visitingtype {
    /* Parent style   ------------------------------ */
    width: 110px;
    height: 240px;
    margin: 45px auto;
    border-radius: 5px;

    @media (max-width: 1023px) {
      width: 100px;
      margin: 5px auto 45px;
    }

    /* Children style ------------------------------ */
    .report-visitingtype-bar {
      position: relative;

      &:first-child {
        border-radius: 5px 5px 0 0;
      }

      &:last-child {
        border-radius: 0 0 5px 5px;
      }

      &.is-passerby {
        @include bg-gradient-8;
      }

      &.is-work {
        background-color: $color-chart-orange-2;
      }

      &.is-home {
        background-color: $color-chart-purple-1;
      }
    }

    .report-visitingtype-percent {
      @include typography-primary-12;
      position: absolute;
      z-index: $z-index-1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 50px;
      height: 18px;
      background-color: $color-primary-1;
      border-radius: 9px;
      color: $color-white;

      &:before,
      &:after {
        content: " ";
        transform: translateY(-50%);
        position: absolute;
        z-index: $z-index-1;
        top: 50%;
        display: block;
      }

      &:before {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: $color-primary-1;
      }

      &:after {
        width: 30px;
        border-bottom: 1px solid $color-primary-1;
      }

      /* Right line */
      &.is-passerby,
      &.is-home {
        &:before {
          right: calc(100% + 30px);
        }

        &:after {
          right: 100%;
        }
      }

      &.is-work {
        &:before {
          left: calc(100% + 30px);
        }

        &:after {
          left: 100%;
        }
      }

      &.is-passerby {
        top: 30%;
        left: calc(100% + 20px);
      }

      &.is-work {
        transform: translateY(-50%);
        top: 50%;
        right: calc(100% + 20px);
      }

      &.is-home {
        transform: translateY(-50%);
        top: 50%;
        left: calc(100% + 20px);
      }
    }

    /* Modifier style ------------------------------ */
    &.is-small-mobile {
      @media (max-width: 1023px) {
        width: 60px;
        margin: 20px auto 30px;
      }

      .report-visitingtype-percent {
        @media (max-width: 479px) {
          min-width: 1px;
          padding: 1px 5px 0;
          white-space: nowrap;
        }

        @media (min-width: 480px) and (max-width: 1023px) {
          min-width: 45px;
          padding: 1px 0 0 0;
        }

        @media (max-width: 1023px) {
          @include typography-primary-10;
        }

        &:after {
          @media (max-width: 1023px) {
            width: 20px;
          }
        }

        /* Right line */
        &.is-passerby,
        &.is-home {
          @media (max-width: 1023px) {
            left: calc(100% + 10px);
          }

          &:before {
            @media (max-width: 1023px) {
              right: calc(100% + 20px);
            }
          }
        }

        &.is-work {
          @media (max-width: 1023px) {
            right: calc(100% + 10px);
          }

          &:before {
            @media (max-width: 1023px) {
              left: calc(100% + 20px);
            }
          }
        }
      }
    }
  }
</style>
