<template>
  <div
    :class="[
      'grid', {
      'is-gutter-5': isGutter5,
      'is-gutter-3': isGutter3,
      'is-gutter-10': isGutter10,
      'is-gutter-15': isGutter15,
      'is-gutter-15-fixcolumnwidth': isGutter15FixColumnWidth,
      'is-gutter-20': isGutter20,
      'is-gutter-25': isGutter25,
      'is-gutter-30': isGutter30,
      'is-gutter-35': isGutter35,
      'is-gutter-40': isGutter40,
      'is-gutter-45': isGutter45,
      'is-gutter-50': isGutter50,
      'is-gutter-55': isGutter55,
      'is-gutter-60': isGutter60,
      'is-gutter-100': isGutter100,
      'is-gutter-vertical-3': isGutterVertical3,
      'is-gutter-vertical-5': isGutterVertical5,
      'is-gutter-vertical-10': isGutterVertical10,
      'is-gutter-vertical-15': isGutterVertical15,
      'is-gutter-vertical-20': isGutterVertical20,
      'is-gutter-vertical-25': isGutterVertical25,
      'is-gutter-vertical-30': isGutterVertical30,
      'is-gutter-vertical-35': isGutterVertical35,
      'is-gutter-vertical-40': isGutterVertical40,
      'is-gutter-vertical-45': isGutterVertical45,
      'is-gutter-vertical-50': isGutterVertical50,
      'is-gutter-vertical-55': isGutterVertical55,
      'is-gutter-vertical-60': isGutterVertical60,
      'is-gutter-vertical-100': isGutterVertical100,
      'is-center': isCenter,
      'is-right': isRight,
      'is-space-between': isSpacebetween,
      'is-vertical-center': isVerticalCenter,
      'is-vertical-bottom': isVerticalBottom,
      'is-fluid': isFluid,
      'is-nowrap': isNoWrap,
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
    name: "Grid",

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
      isGutter3: {
        type: Boolean,
      },
      isGutter5: {
        type: Boolean,
      },
      isGutter10: {
        type: Boolean,
      },
      isGutter15: {
        type: Boolean,
      },
      isGutter15FixColumnWidth: {
        type: Boolean,
      },
      isGutter20: {
        type: Boolean,
      },
      isGutter25: {
        type: Boolean,
      },
      isGutter30: {
        type: Boolean,
      },
      isGutter35: {
        type: Boolean,
      },
      isGutter40: {
        type: Boolean,
      },
      isGutter45: {
        type: Boolean,
      },
      isGutter50: {
        type: Boolean,
      },
      isGutter55: {
        type: Boolean,
      },
      isGutter60: {
        type: Boolean,
      },
      isGutter100: {
        type: Boolean,
      },
      isGutterVertical3: {
        type: Boolean,
      },
      isGutterVertical5: {
        type: Boolean,
      },
      isGutterVertical10: {
        type: Boolean,
      },
      isGutterVertical15: {
        type: Boolean,
      },
      isGutterVertical20: {
        type: Boolean,
      },
      isGutterVertical25: {
        type: Boolean,
      },
      isGutterVertical30: {
        type: Boolean,
      },
      isGutterVertical35: {
        type: Boolean,
      },
      isGutterVertical40: {
        type: Boolean,
      },
      isGutterVertical45: {
        type: Boolean,
      },
      isGutterVertical50: {
        type: Boolean,
      },
      isGutterVertical55: {
        type: Boolean,
      },
      isGutterVertical60: {
        type: Boolean,
      },
      isGutterVertical100: {
        type: Boolean,
      },
      isCenter: {
        type: Boolean,
      },
      isRight: {
        type: Boolean,
      },
      isSpacebetween: {
        type: Boolean,
      },
      isVerticalCenter: {
        type: Boolean,
      },
      isVerticalBottom: {
        type: Boolean,
      },
      isFluid: {
        type: Boolean,
      },
      isNoWrap: {
        type: Boolean,
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .grid {
    /* Parent style   ------------------------------ */
    display: flex;
    flex-wrap: wrap;

    /* Children style ------------------------------ */
    /* Modifier style ------------------------------ */
    /* Gutter */
    &.is-gutter-3 {
      margin-left: -3px;

      > .grid-column {
        padding-left: 3px;
      }
    }

    &.is-gutter-5 {
      margin-left: -5px;

      > .grid-column {
        padding-left: 5px;
      }
    }

    &.is-gutter-10 {
      margin-left: -10px;

      > .grid-column {
        padding-left: 10px;
      }
    }

    &.is-gutter-15 {
      margin-left: -15px;

      > .grid-column {
        padding-left: 15px;
      }
    }

    /* Fix width % in flex display container eg. in swiper carousel */
    &.is-gutter-15-fixcolumnwidth {
      margin-left: -15px;

      > .grid-column {
        padding-left: 15px;

        &.is-column-1 { width: calc(((100% * 1)/12) - 15px); }
        &.is-column-2 { width: calc(((100% * 2)/12) - 15px); }
        &.is-column-3 { width: calc(((100% * 3)/12) - 15px); }
        &.is-column-4 { width: calc(((100% * 4)/12) - 15px); }
        &.is-column-5 { width: calc(((100% * 5)/12) - 15px); }
        &.is-column-6 { width: calc(((100% * 6)/12) - 15px); }
        &.is-column-7 { width: calc(((100% * 7)/12) - 15px); }
        &.is-column-8 { width: calc(((100% * 8)/12) - 15px); }
        &.is-column-9 { width: calc(((100% * 9)/12) - 15px); }
        &.is-column-10 { width: calc(((100% * 10)/12) - 15px); }
        &.is-column-11 { width: calc(((100% * 11)/12) - 15px); }
        &.is-column-12 { width: calc(((100% * 12)/12) - 15px); }
      }
    }

    &.is-gutter-20 {
      margin-left: -20px;

      > .grid-column {
        padding-left: 20px;
      }
    }

    &.is-gutter-25 {
      margin-left: -25px;

      > .grid-column {
        padding-left: 25px;
      }
    }

    &.is-gutter-30 {
      margin-left: -30px;

      > .grid-column {
        padding-left: 30px;
      }
    }

    &.is-gutter-35 {
      margin-left: -35px;

      > .grid-column {
        padding-left: 35px;
      }
    }

    &.is-gutter-40 {
      margin-left: -40px;

      > .grid-column {
        padding-left: 40px;
      }
    }

    &.is-gutter-45 {
      margin-left: -45px;

      > .grid-column {
        padding-left: 45px;
      }
    }

    &.is-gutter-50 {
      margin-left: -50px;

      > .grid-column {
        padding-left: 50px;
      }
    }

    &.is-gutter-55 {
      margin-left: -55px;

      > .grid-column {
        padding-left: 55px;
      }
    }

    &.is-gutter-60 {
      margin-left: -60px;

      > .grid-column {
        padding-left: 60px;
      }
    }

    &.is-gutter-100 {
      margin-left: -100px;

      > .grid-column {
        padding-left: 100px;
      }
    }

    /* Gutter vertical */
    &.is-gutter-vertical-3 {
      margin-bottom: -3px;

      > .grid-column {
        padding-bottom: 3px;
      }
    }

    &.is-gutter-vertical-5 {
      margin-bottom: -5px;

      > .grid-column {
        padding-bottom: 5px;
      }
    }

    &.is-gutter-vertical-10 {
      margin-bottom: -10px;

      > .grid-column {
        padding-bottom: 10px;
      }
    }

    &.is-gutter-vertical-15 {
      margin-bottom: -15px;

      > .grid-column {
        padding-bottom: 15px;
      }
    }

    &.is-gutter-vertical-20 {
      margin-bottom: -20px;

      > .grid-column {
        padding-bottom: 20px;
      }
    }

    &.is-gutter-vertical-25 {
      margin-bottom: -25px;

      > .grid-column {
        padding-bottom: 25px;
      }
    }

    &.is-gutter-vertical-30 {
      margin-bottom: -30px;

      > .grid-column {
        padding-bottom: 30px;
      }
    }

    &.is-gutter-vertical-35 {
      margin-bottom: -35px;

      > .grid-column {
        padding-bottom: 35px;
      }
    }

    &.is-gutter-vertical-40 {
      margin-bottom: -40px;

      > .grid-column {
        padding-bottom: 40px;
      }
    }

    &.is-gutter-vertical-45 {
      margin-bottom: -45px;

      > .grid-column {
        padding-bottom: 45px;
      }
    }

    &.is-gutter-vertical-50 {
      margin-bottom: -50px;

      > .grid-column {
        padding-bottom: 50px;
      }
    }

    &.is-gutter-vertical-55 {
      margin-bottom: -55px;

      > .grid-column {
        padding-bottom: 55px;
      }
    }

    &.is-gutter-vertical-60 {
      margin-bottom: -60px;

      > .grid-column {
        padding-bottom: 60px;
      }
    }

    &.is-gutter-vertical-100 {
      margin-bottom: -100px;

      > .grid-column {
        padding-bottom: 100px;
      }
    }

    /* Align */
    &.is-center {
      justify-content: center;
    }

    &.is-right {
      justify-content: flex-end;
    }

    &.is-space-between {
      justify-content: space-between;
    }

    &.is-vertical-center {
      align-items: center;
    }

    &.is-vertical-bottom {
      align-items: flex-end;
    }

    /* Width */
    &.is-fluid {
      flex: 1;
    }

    &.is-nowrap {
      flex-wrap: nowrap;
    }
  }
</style>
