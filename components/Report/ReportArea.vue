<template>
  <div
    :class="[
      'report-area', {
      'is-column-info-small': isColumnInfoSmall,
      'is-info-minimum-mobile': isInfoMinimumMobile,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="report-area-section is-map" :style="{height: mapHeight}">
      <!-- <GoogleMap isArea>
        <GoogleMapArea :areas="areas" />
      </GoogleMap> -->
      <iframe :id="`map-area-iframe-${id}`" src="http://d272wao43r3lfs.cloudfront.net/areaMap" height="400px" width="100%"></iframe>
    </div>
    <div class="report-area-section is-information">
      <div class="report-area-section is-heading">
        <span class="report-area-text is-heading">Top 10 Most {{ heading }} Area</span>
      </div>
      <div class="report-area-lists">
        <!-- List for loop -->
        <div v-for="(area, index) in topAreas" :key="index" class="report-area-list">
          <div class="report-area-grid is-area">
            <div class="report-area-grid-column is-order">
              <div class="report-area-text is-info">{{ index + 1 }}</div>
            </div>
            <div class="report-area-grid-column is-province">
              <div class="report-area-text is-province">{{ area.province || null }}</div>
            </div>
            <div class="report-area-grid-column is-area">
              <div class="report-area-text is-area">{{ area.district || null }}</div>
            </div>
            <div class="report-area-grid-column is-percent">
              <div class="report-area-text is-percent">{{ area.value || null }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoogleMap from "./../GoogleMap/index.js";
  import { isMobile } from "mobile-device-detect";

  export default {
    name: "ReportArea",

    components: {
      GoogleMap: GoogleMap.GoogleMap,
      GoogleMapArea: GoogleMap.GoogleMapArea,
    },

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
      isColumnInfoSmall: {
        type: Boolean,
      },
      isInfoMinimumMobile: {
        type: Boolean,
      },
      heading: {
        type: String,
        default: '-',
      },
      mapHeight: {
        type: String,
        default: isMobile ? '245px' : '375px',
      },
      areas: {
        type: Array,
      },
      topAreas: {
        type: Array,
      },
      id: {
        type: String,
      }
    },
    mounted() {
      this.sendDataToAreaMap()
    },
    methods: {
      sendDataToAreaMap() {

        const self = this;
        $(`#map-area-iframe-${this.id}`).on('load', function(){
          console.log('############# Area Map ############');
          const message = JSON.stringify({
            areaList: self.areas || [],
          });
          this.contentWindow.postMessage(message, '*');
        });
      }
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";

  .report-area {
    /* Parent style   ------------------------------ */
    padding: 0 0 20px;

    @media (max-width: 1023px) {
      padding: 0 0 5px;
    }

    /* Children style ------------------------------ */
    .report-area-section {
      &.is-heading {
        padding: 0 0 5px 10px;
        border-bottom: 1px solid $color-blue-2;

        @media (max-width: 1023px) {
          padding: 0 0 5px 5px;
        }
      }

      &.is-map {
        overflow: hidden;
        margin: 0 0 22px;
        border-radius: 10px;
        box-shadow: 0 0 5px $color-alpha-2;
      }

      &.is-information {
        padding: 0 5px;
      }
    }

    .report-area-text {
      &.is-heading {
        @include typography-primary-semibold-14;
        color: $color-primary-1;
      }

      &.is-info,
      &.is-province,
      &.is-area,
      &.is-percent {
        height: 100%;
      }

      &.is-info,
      &.is-area {
        @include typography-primary-11;
        color: $color-primary-1;
      }

      &.is-info {
        justify-content: center;
      }

      &.is-province {
        @include typography-primary-semibold-11;
        color: $color-primary-1;
      }

      &.is-percent {
        @include typography-primary-bold-11;
        color: $color-primary-1;
      }
    }

    .report-area-lists {
      .report-area-list {
      }
    }

    .report-area-grid {
      &.is-area {
        display: flex;
        align-items: flex-start;

        > .report-area-grid-column {
          padding: 7px 5px 6px 15px;

          @media (max-width: 1024px) {
            padding: 7px 5px 6px 10px;
          }

          &.is-order,
          &.is-percent {
            flex: none;
          }

          &.is-province,
          &.is-area {
            word-break: break-all;
          }

          &.is-province,
          &.is-area,
          &.is-percent {
            position: relative;
            align-self: stretch;

            &:after {
              content: " ";
              position: absolute;
              z-index: $z-index-1;
              display: block;
              top: 0;
              left: 0;
              bottom: 0;
              border-left: 1px solid $color-blue-2;
            }
          }

          &.is-order {
            width: 50px;
            padding: 7px 5px 6px;
            text-align: center;

            @media (max-width: 1023px) {
              width: 25px;
            }
          }

          &.is-province {
            flex: 1;
          }

          &.is-area {
            flex: 2;
          }

          &.is-percent {
            width: 90px;

            @media (max-width: 1023px) {
              width: 57px;
            }
          }
        }
      }
    }

    /* Modifier style ------------------------------ */
    &.is-column-info-small {
      padding: 0;

      .report-area-grid {
        &.is-area {
          > .report-area-grid-column {
            &.is-order {
              width: 30px;
            }

            &.is-percent {
              width: 65px;
            }
          }
        }
      }
    }

    &.is-info-minimum-mobile {
      .report-area-section {
        &.is-information {
          @media (max-width: 1023px) {
            padding: 0;
          }
        }
      }

      .report-area-grid {
        &.is-area {
          > .report-area-grid-column {
            &.is-order,
            &.is-province {
              @media (max-width: 1023px) {
                display: none;
              }
            }

            &.is-area {
              @media (max-width: 1023px) {
                padding: 7px 5px 6px 0;
              }

              &:after {
                @media (max-width: 1023px) {
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
