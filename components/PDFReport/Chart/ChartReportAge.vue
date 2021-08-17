<template>
  <div
    :class="[
      'chart-report-age', {
      'is-info-compare': isInfoCompare,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-age-grid-lists">
      <!-- Age list -->
      <div v-for="(age, index) in ages" :key="index" class="report-age-grid-list">
        <div class="report-age-grid is-content">
          <div class="report-age-grid-column is-age-label">
            <span class="report-age-text font-semibold text-xs text-color-primary-1">{{ age.name }}</span>
          </div>
          <div class="report-age-grid-column is-age-duration" />
          <div class="report-age-grid-column is-chart">
            <div class="report-age-grid is-chart">
              <div class="report-age-grid-column is-chart-content">
                <div class="report-age-grid is-chart-bar-left">
                  <div class="report-age-grid-column is-chart-bar-label-left">
                    <span class="report-age-text text-xs font-semibold text-color-primary-1" style="font-size: 9px;">{{ age.femaleValue ? age.femaleValue.toFixed(2) : '' }}%</span>
                  </div>
                  <div class="report-age-grid-column is-chart-bar" :style="`width: ${age.femaleValue * 10}%`">
                    <div class="report-age-chart-bar is-pink font-semibold text-color-primary-1"></div>
                  </div>
                </div>
              </div>
              <div class="report-age-grid-column is-chart-content">
                <div class="report-age-grid is-chart-bar-right">
                  <div class="report-age-grid-column is-chart-bar" :style="`width: ${age.maleValue * 10}%`">
                    <div class="report-age-chart-bar is-blue font-semibold text-color-primary-1"></div>
                  </div>
                  <div class="report-age-grid-column is-chart-bar-label-right">
                    <span class="report-age-text text-xs font-semibold text-color-primary-1" style="font-size: 9px;">{{ age.maleValue ? age.maleValue.toFixed(2) : '' }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Legend -->
      <div class="report-age-grid-list">
        <div class="report-age-grid is-content">
          <div class="report-age-grid-column is-age-label" />
          <div class="report-age-grid-column is-age-duration" />
          <div class="report-age-grid-column is-chart">
            <div class="report-age-grid is-chart">
              <div class="report-age-grid-column is-chart-content">
                <div class="report-age-legend is-female">
                  <span class="report-age-text is-legend font-semibold text-color-primary-1">Female</span>
                </div>
              </div>
              <div class="report-age-grid-column is-chart-content">
                <div class="report-age-legend is-male">
                  <span class="report-age-text is-legend font-semibold text-color-primary-1">Male</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="report-age-grid-age-duration-2">
      <img :src="`${$path.static}/images/icons/ic-age-baby.svg`" alt="Icon" />
      <div class="age-arrow-down-1"></div>
      <img style="padding: 65px 0 65px 0;" :src="`${$path.static}/images/icons/ic-age-adult.svg`" alt="Icon" />
      <div class="age-arrow-down-2"></div>
      <div style="margin-left: -4px;">
        <img :src="`${$path.static}/images/icons/ic-age-middle-aged.svg`" alt="Icon" />
      </div>
    </div>
  </div>
</template>

<script>
  // import OTHER_FOLDER_COMPONENT_NAME from "./../OTHER_FOLDER_COMPONENT_NAME/index.js";
  // import SAME_FOLDER_COMPONENT_NAME from "./SAME_FOLDER_COMPONENT_NAME";
  export default {
    name: "ChartReportAge",
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
      isInfoCompare: {
        type: Boolean,
      },
      ages: {
        type: Array,
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/styleguides/styleguides";
  $chart-bar-height: 14px;
  .chart-report-age {
    /* Parent style   ------------------------------ */
    position: relative;
    /* Children style ------------------------------ */
    .report-age-grid {
      &.is-content {
        display: flex;
      }
      &.is-chart {
        position: relative;
        display: flex;
        align-items: center;
        &:after {
          content: " ";
          transform: translateX(-50%);
          position: absolute;
          z-index: $z-index-1;
          top: 0;
          bottom: -15px;
          left: 50%;
          display: block;
          width: 2px;
          background-color: $color-alpha-9;
        }
      }
      &.is-chart-bar-left {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &.is-chart-bar-right {
        display: flex;
        align-items: center;
      }
    }
    .report-age-grid-column {
      &.is-age-label {
        flex: none;
        width: 140px;
        text-align: right;
        @media (max-width: 1023px) {
          width: 50px;
        }
      }
      &.is-age-duration {
        flex: none;
        width: 40px;
      }
      &.is-chart {
        flex: 1;
      }
      &.is-chart-content {
        flex: none;
        width: 50%;
      }
      &.is-chart-bar-label-left {
        flex: none;
        width: 41px;
      }
      &.is-chart-bar-label-right {
        flex: none;
        width: 41px;
        text-align: right;
      }
      &.is-chart-bar {
      }
    }
    .report-age-chart-bar {
      height: $chart-bar-height;
      &.is-pink {
        @include bg-gradient-4;
        // border-radius: 10px 0 0 10px;
      }
      &.is-blue {
        @include bg-gradient-5;
        // border-radius: 0 10px 10px 0;
      }
    }
    .report-age-grid-lists {
      padding: 0px;
      .report-age-grid-list {
        margin: 0 0 5px;
        &:last-child {
          padding: 5px 0 0;
          margin: 0;
        }
        &:last-child,
        &:nth-last-child(2) {
          .report-age-grid {
            &.is-chart {
              &:after {
                display: none;
              }
            }
          }
        }
      }
    }
    .report-age-text {
      &.is-label {
        @include typography-primary-11;
        position: relative;
        top: 1px;
        color: $color-primary-1;
        white-space: nowrap;
      }
      &.is-percent {
        @include typography-primary-11;
        color: $color-primary-1;
        white-space: nowrap;
      }
      &.is-legend {
        @include typography-primary-11;
        color: $color-primary-1;
        &:before,
        &:after {
          content: " ";
          position: relative;
          top: -1px;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      }
    }
    .report-age-image {
      &.is-icon-baby,
      &.is-icon-adult,
      &.is-icon-middle-aged {
        position: absolute;
        z-index: $z-index-9;
      }
      &.is-icon-baby {
        top: -41px;
        left: -6px;
        width: 17px;
        height: 24px;
        @media (max-width: 1023px) {
          /* top: -46px; */
        }
      }
      &.is-icon-adult {
        top: calc(50% - 33px);
        left: -10px;
        width: 25px;
        height: 66px;
        padding: 13px 0;
        background-color: $color-white;
        text-align: center;
        @media (max-width: 1023px) {
          /* top: calc(50% - 23px); */
        }
      }
      &.is-icon-middle-aged {
        bottom: -53px;
        left: -9px;
        width: 23px;
        height: 35px;
        @media (max-width: 1023px) {
          /* bottom: -78px; */
        }
      }
    }
    .report-age-grid-age-duration-2 {
      position: absolute;
      z-index: $z-index-1;
      top: 5px;
      bottom: 84px;
      left: 30px;

      .age-arrow-down-1 {
        /* more triangle */
        top: 68px;
        left: 3px;
        position: absolute;
        height: 0px; width: 0px;
        border: 5px solid;
        border-color:
          #1bddc7
          #1bddc7
          transparent
          transparent;
        transform: rotate(135deg);
      }

      .age-arrow-down-1:before {
        content: '';
        position: absolute;
        top: 0px; right: 0px;
        display: block;
        height: 4px; width: 40px;
        background-color: #1bddc7;
        transform:
          rotate(-45deg)
          translate(-3px, 13px);
      }

      .age-arrow-down-2 {
        /* more triangle */
        top: 174px;
        left: 3px;
        position: absolute;
        height: 0px; width: 0px;
        border: 5px solid;
        border-color:
          #0096FE
          #0096FE
          transparent
          transparent;
        transform: rotate(135deg);
      }

      .age-arrow-down-2:before {
        content: '';
        position: absolute;
        top: 0px; right: 0px;
        display: block;
        height: 4px; width: 40px;
        background-color: #0096FE;
        transform:
          rotate(-45deg)
          translate(-3px, 13px);
      }
    }
    .report-age-grid-age-duration {
      @include bg-gradient-6;
      position: absolute;
      z-index: $z-index-1;
      top: 41px;
      bottom: 84px;
      left: 30px;
      width: 4px;
      @media (max-width: 1023px) {
        top: 57px;
        bottom: 98px;
        left: 68px;
      }
      &:before,
      &:after {
        content: " ";
        position: absolute;
        z-index: $z-index-1;
        display: block;
      }
      &:before {
        top: 27px;
        left: -3px;
        // width: 11px;
        // height: 10px;
        // background-image: url("~static/images/graphics/arrow-head-green.svg");
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid #1bddc7;
      }
      &:after {
        top: calc(100% - 4px);
        left: -3px;
        width: 11px;
        height: 10px;
        background-image: url("~static/images/graphics/arrow-head-blue.svg");
      }
    }
    .report-age-legend {
      position: relative;
      &:before,
      &:after {
        content: " ";
        position: absolute;
        z-index: $z-index-1;
        display: block;
      }
      &.is-female {
        padding: 0;
        text-align: right;
        .report-age-text {
          &.is-legend {
            &:before {
              content: " ";
              background-color: $color-pink-1;
              margin-right: 7px;
            }
          }
        }
      }
      &.is-male {
        padding: 0 0 0 10px;
        .report-age-text {
          &.is-legend {
            &:before {
              content: " ";
              background-color: $color-blue-11;
              margin-right: 7px;
            }
          }
        }
      }
    }
    /* Modifier style ------------------------------ */
    &.is-info-compare {
      .report-age-grid-column {
        &.is-age-label,
        &.is-chart-bar-label-right,
        &.is-chart-bar-label-left {
          @media (max-width: 1199px) {
            display: none;
          }
        }
        &.is-age-duration {
          @media (max-width: 1199px) {
            width: 35px;
          }
        }
      }
      .report-age-grid-lists {
        padding: 0;
        .report-age-grid-list {
          @media (max-width: 1199px) {
            margin: 0 0 12px;
          }
        }
      }
      .report-age-image {
        &.is-icon-baby {
          @media (max-width: 1199px) {
            top: -30px;
            left: -3px;
            width: 12px;
            height: 17px;
          }
        }
        &.is-icon-adult {
          @media (max-width: 1199px) {
            top: calc(50% - 23px);
            left: -10px;
            width: 23px;
            height: 53px;
            padding: 13px 0;
          }
          img {
            @media (max-width: 1199px) {
              width: 10px;
              height: 27px;
            }
          }
        }
        &.is-icon-middle-aged {
          @media (max-width: 1199px) {
            bottom: -40px;
            left: -5px;
            width: 15px;
            height: 23px;
          }
        }
      }
      .report-age-grid-age-duration {
        top: 39px;
        bottom: 86px;
        left: 0;
        @media (max-width: 1199px) {
          top: 29px;
          bottom: 69px;
        }
      }
      .report-age-chart-bar {
        @media (max-width: 1199px) {
          height: 15px;
        }
      }
      .report-age-legend {
        &.is-female {
          @media (max-width: 374px) {
            text-align: left;
          }
          @media (max-width: 479px) {
            padding: 0;
          }
          &:before {
            @media (max-width: 374px) {
              right: auto;
              bottom: 14px;
              left: 23px;
              height: 20px;
            }
          }
          &:after {
            @media (max-width: 374px) {
              display: none;
            }
          }
          .report-age-text {
            &.is-legend {
              @media (max-width: 374px) {
                white-space: nowrap;
              }
              @media (min-width: 375px) and (max-width: 479px) {
                position: relative;
                left: -23px;
              }
              &:after {
                @media (max-width: 374px) {
                  display: none;
                }
              }
            }
          }
        }
        &.is-male {
          @media (max-width: 374px) {
            text-align: right;
          }
          @media (max-width: 479px) {
            padding: 0;
          }
          &:before {
            @media (max-width: 374px) {
              right: 23px;
              bottom: 14px;
              left: auto;
              height: 20px;
            }
          }
          &:after {
            @media (max-width: 374px) {
              display: none;
            }
          }
          .report-age-text {
            &.is-legend {
              @media (max-width: 374px) {
                white-space: nowrap;
              }
              @media (min-width: 375px) and (max-width: 479px) {
                position: relative;
                left: 23px;
              }
              &:before {
                @media (max-width: 374px) {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
