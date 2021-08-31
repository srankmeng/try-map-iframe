<template>
  <button
    :class="[
      'button-custom', {
      'is-fluid': isFluid,
      'is-no-padding': isNoPadding,
      'is-extra-small': isExtraSmall,
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge,
      'is-extra-large': isExtraLarge,
      'is-disabled': isDisabled,
      'is-disabled-click': isDisabledClick,
      'is-border-square': isBorderSquare,
      'is-white': isWhite,
      'is-blue': isBlue,
      'is-blue-light': isBlueLight,
      'is-orange': isOrange,
      'is-gray': isGray,
      'is-green-light': isGreenLight,
      'is-outline-orange': isOutlineOrange,
      'is-outline-blue': isOutlineBlue,
      'is-outline-blue-with-bg-gray': isOutlineBlueWithBgGray,
      'is-outline-white': isOutlineWhite,
      'is-outline-gray-light': isOutlineGrayLight,
      'is-text-color-primary': isTextColorPrimary,
      'is-text-color-orange': isTextColorOrange,
      'is-text-color-white': isTextColorWhite,
      'is-text-small': isTextSmall,
      'is-text-regular': isTextRegular,
      'is-text-regular-small': isTextRegularSmall,
      'is-download-report': isDownloadReport,
      }, className,
    ]"
    :style="[
      {
        width: width + 'px',
        height: height + 'px',
      },
      inlineStyles,
    ]"
    v-on="$listeners"
  >
    <span
      v-if="isShowIconFront"
      class="button-custom-icon is-front"
      :style="{
        marginRight: iconFrontSpacing + 'px',
      }"
    >
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconTop + 'px',
          left: iconLeft + 'px',
          width: iconWidth + 'px',
          height: iconHeight + 'px',
        }"
        :src="iconFrontSrc"
        :alt="iconAlt"
      >
    </span>
    <span
      class="button-custom-text"
      :style="{
        top: textTop + 'px',
      }"
    >
      <slot />
    </span>
    <span
      v-if="isShowIconBack"
      class="button-custom-icon is-back"
      :style="{
        marginLeft: iconBackSpacing + 'px',
      }"
    >
      <img
        class="button-custom-icon-image"
        :style="{
          top: iconTop + 'px',
          left: iconLeft + 'px',
          width: iconWidth + 'px',
          height: iconHeight + 'px',
        }"
        :src="iconBackSrc"
        :alt="iconAlt"
      >
    </span>
  </button>
</template>

<script>
  export default {
    name: "Button",

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
      isFluid: {
        type: Boolean,
      },
      isNoPadding: {
        type: Boolean,
      },
      isExtraSmall: {
        type: Boolean,
      },
      isSmall: {
        type: Boolean,
      },
      isMedium: {
        type: Boolean,
      },
      isLarge: {
        type: Boolean,
      },
      isExtraLarge: {
        type: Boolean,
      },
      isDisabled: {
        type: Boolean,
      },
      isDisabledClick: {
        type: Boolean,
      },
      isShowIconFront: {
        type: Boolean,
        default: false,
      },
      isShowIconBack: {
        type: Boolean,
        default: false,
      },
      isBorderSquare: {
        type: Boolean,
      },
      isWhite: {
        type: Boolean,
      },
      isBlue: {
        type: Boolean,
      },
      isBlueLight: {
        type: Boolean,
      },
      isOrange: {
        type: Boolean,
      },
      isGray: {
        type: Boolean,
      },
      isGreenLight: {
        type: Boolean,
      },
      isOutlineOrange: {
        type: Boolean,
      },
      isOutlineBlue: {
        type: Boolean,
      },
      isOutlineBlueWithBgGray: {
        type: Boolean,
      },
      isOutlineWhite: {
        type: Boolean,
      },
      isOutlineGrayLight: {
        type: Boolean,
      },
      isTextColorPrimary: {
        type: Boolean,
      },
      isTextColorOrange: {
        type: Boolean,
      },
      isTextColorWhite: {
        type: Boolean,
      },
      isTextSmall: {
        type: Boolean,
      },
      isTextRegular: {
        type: Boolean,
      },
      isTextRegularSmall: {
        type: Boolean,
      },
      isDownloadReport: {
        type: Boolean,
      },
      iconFrontSrc: {
        type: String,
      },
      iconBackSrc: {
        type: String,
      },
      iconAlt: {
        type: String,
        default: 'Icon',
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      iconTop: {
        type: Number,
      },
      iconLeft: {
        type: Number,
      },
      iconWidth: {
        type: Number,
      },
      iconHeight: {
        type: Number,
      },
      textTop: {
        type: Number,
      },
      iconFrontSpacing: {
        type: Number,
        default: 5,
      },
      iconBackSpacing: {
        type: Number,
        default: 5,
      },
    },
  };
</script>

<style lang="scss">
  @import '~assets/styleguides/styleguides';

  .button-custom {
    /* Parent style   ------------------------------ */
    cursor: pointer;
    transition: $global-transition;
    height: $button-height;
    padding: 0 15px;
    background-color: $color-black;
    border: none;
    border-radius: 5px;

    &:focus {
      outline: none;
    }

    &:active {
      opacity: 0.75;
    }

    /* Children style ------------------------------ */
    .button-custom-icon {
      display: inline-block;
      vertical-align: middle;

      &.is-front {}

      &.is-back {}
    }

    .button-custom-icon-image {
      position: relative;
      display: inline-block;
    }

    .button-custom-text {
      @include typography-primary-semibold-16;
      position: relative;
      color: $color-white;
    }

    /* Modifier style ------------------------------ */
    &.is-fluid {
      width: 100%;
    }

    &.is-no-padding {
      padding-right: 0;
      padding-left: 0;
    }

    &.is-border-square {
      border-radius: 0;
    }

    /* Size */
    &.is-extra-small {
      height: $button-extra-small-height;

      .button-custom-text {}
    }

    &.is-small {
      height: $button-small-height;

      .button-custom-text {}
    }

    &.is-medium {
      height: $button-medium-height;

      @media (max-width: 767px) {
        height: 40px;
      }

      .button-custom-text {}
    }

    &.is-large {
      height: $button-large-height;

      .button-custom-text {}
    }

    &.is-extra-large {
      height: $button-extra-large-height;

      .button-custom-text {
        @include typography-primary-semibold-24;
      }
    }

    /* Color */
    &.is-white {
      background: $color-white;
    }

    &.is-blue {
      background: $color-primary-1;
    }

    &.is-blue-light {
      background: $color-primary-2;
    }

    &.is-orange {
      background: $color-orange-1;
    }

    &.is-gray {
      background: $color-gray-5;
    }

    &.is-green-light {
      background: $color-green-5;
    }

    &.is-outline-orange {
      background: $color-white;
      border: 1px solid $color-orange-1;
    }

    &.is-outline-blue {
      background: $color-white;
      border: 1px solid $color-primary-1;
    }

    &.is-outline-blue-with-bg-gray {
      background: $color-gray-3;
      border: 1px solid $color-primary-1;
    }

    &.is-outline-white {
      background: transparent;
      border: 1px solid $color-white;
    }

    &.is-outline-gray-light {
      background: $color-white;
      border: 1px solid $color-blue-2;
    }

    /* Status */
    &.is-disabled {
      pointer-events: none;
      background: $color-disabled;
    }

    &.is-disabled-click {
      pointer-events: none;
    }

    /* Text */
    &.is-text-color-primary {
      .button-custom-text {
        color: $color-primary-1;
      }
    }

    &.is-text-color-orange {
      .button-custom-text {
        color: $color-orange-1;
      }
    }

    &.is-text-color-white {
      .button-custom-text {
        color: $color-white;
      }
    }

    &.is-text-small {
      .button-custom-text {
        @include typography-primary-semibold-14;
      }
    }

    &.is-text-regular {
      .button-custom-text {
        @include typography-primary-16;
      }
    }

    &.is-text-regular-small {
      .button-custom-text {
        @include typography-primary-14;
      }
    }

    /* Specific */
    &.is-download-report {
      @media (max-width: 479px) {
        width: 100% !important;
      }

      @media (max-width: 1023px) {
        padding: 0;
        height: 35px;
      }

      .button-custom-text {
        @media (max-width: 1023px) {
          @include typography-primary-14;
        }
      }

      .button-custom-icon {
        &.is-front {
          @media (max-width: 1023px) {
            margin-right: 8px !important;
          }

          .button-custom-icon-image {
            @media (max-width: 1023px) {
              position: relative;
              top: 1px;
              width: 16px !important;
              height: 15px !important;
            }
          }
        }
      }
    }
  }
</style>
