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
    <div class="flex">
      <div class="report-area-section is-map w-1/2 h-80">
        <GoogleMap isArea>
          <GoogleMapArea :areas="areas" />
        </GoogleMap>
        <!-- <iframe :id="`map-area-iframe-${id}`" src="http://d272wao43r3lfs.cloudfront.net/areaMap" height="320px" width="365px"></iframe> -->
        <!-- <iframe :id="`map-area-iframe-${id}`" src="http://localhost:3004/areaMap" height="320px" width="100%"></iframe> -->
        <div :id="`res-${id}`">
        </div>

      </div>
      <div :id="`test-${id}`" class="report-area-section is-information w-1/2">
        <div class="report-area-lists">
          <!-- List for loop -->
          <div class="report-area-list">
            <div class="report-area-grid is-area">
              <div class="report-area-grid-column is-order">
                <div class="text-color-primary-1 font-semibold text-xs is-info">Rank</div>
              </div>
              <div class="report-area-grid-column is-province">
                <div class="text-color-primary-1 font-semibold text-xs is-province">Province</div>
              </div>
              <div class="report-area-grid-column is-area">
                <div class="text-color-primary-1 font-semibold text-xs is-area">District</div>
              </div>
              <div class="report-area-grid-column is-percent">
                <div class="text-color-primary-1 font-semibold text-xs is-percent"></div>
              </div>
            </div>
          </div>
          <div v-for="(area, index) in topAreas" :key="index" class="report-area-list">
            <div class="report-area-grid is-area">
              <div class="report-area-grid-column is-order">
                <div class="is-info text-color-chart-blue-4 text-xs font-semibold">{{ index + 1 }}</div>
              </div>
              <div class="report-area-grid-column is-province">
                <div class="report-area-text is-province">{{ area && area.province ? startCase(area.province) : null }}</div>
              </div>
              <div class="report-area-grid-column is-area">
                <div class="text-color-chart-blue-4 text-xs font-semibold is-area">{{ area && area.district ? startCase(area.district) : null }}</div>
              </div>
              <div class="report-area-grid-column is-percent">
                <div class="report-area-text is-percent">{{ area && area.value ? `${area.value}%` : null }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoogleMap from "./../../GoogleMap/index.js";
  import startCase from 'lodash/startCase'
  export default {
    name: "ChartReportArea",

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
      areas: {
        type: Array,
      },
      topAreas: {
        type: Array,
      },
      id: {
        type: String,
      },
    },
    data() {
      return {
        startCase,
        imageUrl: '',
      }
    },
    mounted() {
      this.sendDataToAreaMap()
      const self = this
      // recieve image url form iframe
      window.addEventListener('message', function(e) {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if(data.iframeId === `map-area-iframe-${self.id}`) {
          const imageTag = document.createElement('img');
          imageTag.setAttribute('src', data.imageUrl);
          document.getElementById(`res-${self.id}`).appendChild(imageTag);
          // document.getElementById(`map-area-iframe-${self.id}`).style.display = 'none';
          document.getElementById(`map-area-iframe-${self.id}`).remove();
        }
      });
    },
    methods: {
      setImageUrl(url) {
        this.imageUrl = url
      },
      sendDataToAreaMap() {
        const self = this;
        $(`#map-area-iframe-${this.id}`).on('load', function(){
          console.log('############# Area Map ############');
          const message = JSON.stringify({
            areaList: self.areas || [],
            iframeId: `map-area-iframe-${self.id}`,
            isReport: true,
          });

          this.contentWindow.postMessage(message, '*');
            const el = document.getElementById(`map-area-iframe-${self.id}`);
            // setTimeout(function() {
            //   el.scrollIntoView(true);

            //   setTimeout(function() {
            //     el.scrollIntoView(false);

            //     setTimeout(function() {
                  // $("html, body").animate({ scrollTop: $(document).height() }, 2000);
                  // $("html, body").animate({ scrollTop: 0 }, 2000);
                  // setTimeout(function() {
                  //   const msg = JSON.stringify({
                  //     isGenerateImage: true,
                  //   });
                  //   el.contentWindow.postMessage(msg, '*');

                  // }, 2000)

            //     }, 2000)

            //   }, 1500)
            // }, 1500)

        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~assets/styleguides/styleguides";

  .report-area {
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
        margin: 0 0 0px;
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
          padding: 2px 6px;

          &.is-order,
          &.is-percent {
            flex: none;
          }

          &.is-province,
          &.is-area {
            word-break: normal;
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
            padding: 4px 6px;
            text-align: center;

            @media (max-width: 1023px) {
              width: 25px;
            }
          }

          &.is-province {
            flex: 1;
            // width: 120px;
          }

          &.is-area {
            flex: 2;
            // width: 140px;
          }

          &.is-percent {
            width: 50px;

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
