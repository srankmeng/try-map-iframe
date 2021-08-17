<template>
  <div
    :class="[
      'report-interest', {
      'is-info-compare': isInfoCompare,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-interest-lists">
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-movie" :src="`${this.$path.static}/images/icons/ic-interest-movie.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Movie Lover</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentMovie * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentMovie }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-bank" :src="`${this.$path.static}/images/icons/ic-interest-bank.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Bank</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentBank * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentBank }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-shopping" :src="`${this.$path.static}/images/icons/ic-interest-shopping.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Shopping</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentShopping * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentShopping }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-game" :src="`${this.$path.static}/images/icons/ic-interest-game.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Game</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentGame * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentGame }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-realestate" :src="`${this.$path.static}/images/icons/ic-interest-realestate.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Real estate</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentRealEstate * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentRealEstate }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-transport" :src="`${this.$path.static}/images/icons/ic-interest-transport.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Transport</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentTransport * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentTransport }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-fooddelivery" :src="`${this.$path.static}/images/icons/ic-interest-fooddelivery.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Food Delivery</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentFoodDelivery * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentFoodDelivery }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-health" :src="`${this.$path.static}/images/icons/ic-interest-health.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Health</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentHealth * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentHealth }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon-interest-travel" :src="`${this.$path.static}/images/icons/ic-interest-travel.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Travel</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentTravel * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentTravel }} %</div>
          </div>
        </div>
      </div>
      <!-- Interest list -->
      <div class="report-interest-list">
        <div class="report-interest-grid is-group">
          <div class="report-interest-grid-column is-group-content">
            <div class="report-interest-grid is-content">
              <div class="report-interest-grid-column is-content-icon">
                <div class="report-interest-image is-icon-container">
                  <img class="report-interest-image is-icon is-icon-interest-sport" :src="`${this.$path.static}/images/icons/ic-interest-sport.svg`" alt="Icon" />
                </div>
              </div>
              <div class="report-interest-grid-column is-content-label">
                <div class="report-interest-text is-label">Sport</div>
              </div>
              <div class="report-interest-grid-column is-content-bar">
                <div class="report-interest-bar" :style="{ width: +percentSport * 10 + '%' }" />
              </div>
            </div>
          </div>
          <div class="report-interest-grid-column is-group-percent">
            <div class="report-interest-text is-percent">{{ percentSport }} %</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReportInterest",

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
      percentMovie: {
        type: [String, Number],
        default: '0',
      },
      percentBank: {
        type: [String, Number],
        default: '0',
      },
      percentShopping: {
        type: [String, Number],
        default: '0',
      },
      percentGame: {
        type: [String, Number],
        default: '0',
      },
      percentRealEstate: {
        type: [String, Number],
        default: '0',
      },
      percentTransport: {
        type: [String, Number],
        default: '0',
      },
      percentFoodDelivery: {
        type: [String, Number],
        default: '0',
      },
      percentHealth: {
        type: [String, Number],
        default: '0',
      },
      percentTravel: {
        type: [String, Number],
        default: '0',
      },
      percentSport: {
        type: [String, Number],
        default: '0',
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report-interest {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .report-interest-lists {
      padding: 23px 0;

      @media (max-width: 1023px) {
        padding: 18px 0;
      }

      .report-interest-list {
        margin: 0 0 20px;

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
