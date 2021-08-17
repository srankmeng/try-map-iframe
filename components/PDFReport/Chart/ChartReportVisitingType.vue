<template>
  <div>
    <div
      class="chart-report-visitingtype flex justify-end"
    >

      <div class="chart-report-visitingtype-bar is-passerby" :style="{ width: percentPasserBy + '%' }">
        <div class="badge-center">
          <div class="chart-report-visitingtype-percent is-passerby arrow-bottom arrow-passerby">{{ percentPasserBy }}%</div>
        </div>
      </div>
      <div class="chart-report-visitingtype-bar is-work" :style="{ width: percentWork + '%' }">
        <div class="badge-center">
          <div class="chart-report-visitingtype-percent is-work arrow-top arrow-work">{{ percentWork }}%</div>
        </div>
      </div>
      <div class="chart-report-visitingtype-bar is-home" :style="{ width: percentHome + '%' }">
        <div class="badge-center">
          <div class="chart-report-visitingtype-percent is-home arrow-bottom arrow-home">{{ percentHome }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChartReportVisitingType",

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

<style lang="scss" scoped>
  @import "~assets/styleguides/styleguides";

  .chart-report-visitingtype {
    /* Parent style   ------------------------------ */
    width: 100%;
    height: 20px;
    margin: 0;

    /* Children style ------------------------------ */
    .chart-report-visitingtype-bar {
      position: relative;

      &.is-passerby {
        background-color: rgb(0,84,213);
      }

      &.is-work {
        background-color: $color-chart-orange-2;
      }

      &.is-home {
        background-color: $color-chart-purple-1;
      }
    }

    .badge-center {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .chart-report-visitingtype-percent {
      @include typography-primary-12;
      position: absolute;
      z-index: $z-index-1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 45px;
      height: 18px;
      border-radius: 3px;
      color: $color-white;

      // &:before,
      // &:after {
      //   content: " ";
      //   transform: translateX(50%);
      //   position: absolute;
      //   z-index: $z-index-1;
      //   right: 50%;
      //   display: block;
      // }

      // &:before {
      //   width: 5px;
      //   height: 5px;
      //   border-radius: 50%;
      //   background-color: $color-primary-1;
      // }

      // &:after {
      //   height: 30px;
      //   border-right: 1px solid $color-primary-1;
      // }

      // /* Right line */
      // &.is-passerby,
      // &.is-home {
      //   &:before {
      //     top: calc(100% + 30px);
      //   }

      //   &:after {
      //     top: 100%;
      //   }
      // }

      // &.is-work {
      //   &:before {
      //     left: calc(100% + 30px);
      //   }

      //   &:after {
      //     left: 100%;
      //   }
      // }

      &.arrow-bottom:after {
        content: " ";
        position: absolute;
        right: 18px;
        bottom: -5px;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        border-bottom: none;
      }

      &.arrow-top:after {
        content: " ";
        position: absolute;
        right: 18px;
        top: -5px;
        border-top: none;
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
      }

      &.arrow-passerby:after {
        border-top: 5px solid rgb(0,84,213);
      }

      &.arrow-work:after {
        border-bottom: 5px solid $color-chart-orange-2;
      }

      &.arrow-home:after {
        border-top: 5px solid $color-chart-purple-1;
      }

      &.is-passerby {
        bottom: calc(100% + 5px);
        background-color: rgb(0,84,213);
      }

      &.is-work {
        top: calc(100% + 5px);
        background-color: $color-chart-orange-2;
      }

      &.is-home {
        bottom: calc(100% + 5px);
        background-color: $color-chart-purple-1;
      }
    }
  }
</style>
