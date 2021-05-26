<template>
  <div
    :class="[
      'google-map-area', {
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <client-only>
      <GmapMap
        ref="map"
        :style="{
          width: width,
          height: height,
        }"
        :center="center"
        :zoom="zoom"
        :options="{
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: false,
        }"
      >
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        />
        <GmapMarker
          v-for="(m, i) in markers"
          :key="`mediaList_${i}`"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :icon="'./images/ic-marker-media.svg'"
          @click="toggleInfoWindow(m,i)"
        />
      </GmapMap>
    </client-only>
    <!-- Marker information template -->
    <!-- <div class="google-map-area-info">
      <div class="google-map-area-section is-info-heading">
        <div class="google-map-area-text is-info-heading">Screen_Name</div>
      </div>
      <div class="google-map-area-section is-info-description">
        <div class="google-map-area-text is-info-description">Screen_Description</div>
      </div>
      <div class="google-map-area-grid is-info">
        <div class="google-map-area-grid-column">
          <div class="google-map-area-image is-media">
            <img src="/images/graphics/placeholder-media-screen.svg" alt="Media" />
          </div>
        </div>
        <div class="google-map-area-grid-column">
          <div class="google-map-area-grid is-dimension-link">
            <div class="google-map-area-grid-column">
              <div class="google-map-area-text is-info-dimension">Width : xxx m.</div>
              <div class="google-map-area-text is-info-dimension">Height : xxx m.</div>
            </div>
            <div class="google-map-area-grid-column is-link">
              <a class="google-map-area-text is-info-link" href="">เส้นทาง</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "GoogleMapMarker",
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
      width: {
        type: String,
        default: "100%",
      },
      height: {
        type: String,
        default: "410px",
      },
    },
    data() {
      return {
        // GmapMap
        center: { lat: 13.7646948, lng: 100.5374692 },
        zoom: 11,
        // GmapInfoWindow
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: {
          content: '',
          //optional: offset infowindow so it visually sits nicely on top of our marker
          pixelOffset: {
            width: 8,
            height: -47
          }
        },
        // GmapMarker + GmapInfoWindow (infoText)
        markers: [
          {
            position: { lat: 13.7646948, lng: 100.5374692 },
            infoText:
              '<div class="google-map-area-info">' +
                '<div class="google-map-area-section is-info-heading">' +
                  '<div class="google-map-area-text is-info-heading">Screen_Name</div>' +
                '</div>' +
                '<div class="google-map-area-section is-info-description">' +
                  '<div class="google-map-area-text is-info-description">Screen_Description</div>' +
                '</div>' +
                '<div class="google-map-area-grid is-info">' +
                  '<div class="google-map-area-grid-column">' +
                    '<div class="google-map-area-image is-media">' +
                      '<img src="./images/placeholder-media-screen.svg" alt="Media" />' +
                    '</div>' +
                  '</div>' +
                  '<div class="google-map-area-grid-column">' +
                    '<div class="google-map-area-grid is-dimension-link">' +
                      '<div class="google-map-area-grid-column">' +
                        '<div class="google-map-area-text is-info-dimension">Width : xxx m.</div>' +
                        '<div class="google-map-area-text is-info-dimension">Height : xxx m.</div>' +
                      '</div>' +
                      '<div class="google-map-area-grid-column is-link">' +
                        '<a class="google-map-area-text is-info-link" href="">เส้นทาง</a>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>',
          },
          {
            position: { lat: 13.7646948, lng: 100.4374692 },
            infoText:
              '<div class="google-map-area-info">' +
                '<div class="google-map-area-section is-info-heading">' +
                  '<div class="google-map-area-text is-info-heading">Screen_Name</div>' +
                '</div>' +
                '<div class="google-map-area-section is-info-description">' +
                  '<div class="google-map-area-text is-info-description">Screen_Description</div>' +
                '</div>' +
                '<div class="google-map-area-grid is-info">' +
                  '<div class="google-map-area-grid-column">' +
                    '<div class="google-map-area-image is-media">' +
                      '<img src="./images/placeholder-media-screen.svg" alt="Media" />' +
                    '</div>' +
                  '</div>' +
                  '<div class="google-map-area-grid-column">' +
                    '<div class="google-map-area-grid is-dimension-link">' +
                      '<div class="google-map-area-grid-column">' +
                        '<div class="google-map-area-text is-info-dimension">Width : xxx m.</div>' +
                        '<div class="google-map-area-text is-info-dimension">Height : xxx m.</div>' +
                      '</div>' +
                      '<div class="google-map-area-grid-column is-link">' +
                        '<a class="google-map-area-text is-info-link" href="">เส้นทาง</a>' +
                      '</div>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
              '</div>',
          }
        ],
      }
    },
    methods: {
      toggleInfoWindow: function(marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoOptions.content = marker.infoText;
        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
    },
  };
</script>

<style lang="scss">
  @import "~assets/styleguides/styleguides";
  .google-map-area {
    /* Parent style   ------------------------------ */
    /* Children style ------------------------------ */
    .google-map-area-section {
      &.is-info-heading {
        margin: 0 0 9px;
      }
      &.is-info-description {
        margin: 0 0 11px;
      }
    }
    .google-map-area-info {}
    .google-map-area-text {
      &.is-info-heading {
        @include typography-primary-bold-14;
        color: $color-primary-1;
      }
      &.is-info-description {
        @include typography-primary-medium-12;
        color: $color-primary-1;
      }
      &.is-info-dimension {
        @include typography-primary-12;
        color: $color-primary-1;
      }
      &.is-info-link {
        @include typography-primary-medium-12;
        color: $color-blue-3;
      }
    }
    .google-map-area-image {
      &.is-media {
        overflow: hidden;
        position: relative;
        width: 120px;
        padding-bottom: 68px;
        border-radius: 5px;
        img {
          position: absolute;
          z-index: $z-index-1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .google-map-area-grid {
      &.is-info {
        display: flex;
        margin-left: -12px;
        > .google-map-area-grid-column {
          padding-left: 12px;
        }
      }
      &.is-dimension-link {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        > .google-map-area-grid-column {
          &.is-link {
            text-align: right;
          }
        }
      }
    }
    /* Hide element in Google Map */
    .gm-style {
      [rel="noopener"],
      .gmnoprint,
      .gm-style-cc {
        visibility: hidden;
      }
    }
    /* Modifier style ------------------------------ */
  }
</style>
