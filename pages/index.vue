<template>
  <div>
    <GoogleMap isMarker v-if="isReady">
      <GoogleMapMarker
        :screen-locations="marketList"
        :current-screen="currentScreen"
        :height="mapHeight"
      />
    </GoogleMap>
  </div>
</template>

<script>
  import GoogleMap from "../components/GoogleMap";
  export default {
    name: "markerMap",
    components: {
      GoogleMap: GoogleMap.GoogleMap,
      GoogleMapMarker: GoogleMap.GoogleMapMarker,
    },
    layout: 'empty',
    created() {

      // recieve data form parent
      window.addEventListener('message', this.recieveDataMarkerMap);

    },
    data() {
      return {
        marketList: [],
        mapHeight: "410px",
        isReady: false,
        currentScreen: {
          index: null,
          thumbnailImgUrl: null,
        },
      }
    },
    methods: {
      recieveDataMarkerMap(e) {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if(data.markerList) {
          // to do
          this.marketList = data.markerList
          this.isReady = true
          // console.log('sub iframe1 marker map: ', data.markerList);
        }

        if (data.mapHeight) {
          this.mapHeight = data.mapHeight
        }

        if (data.currentScreen) {
          this.currentScreen.index = data.currentScreen.index
        }
      }
    },

  };
</script>

<style lang="scss">

</style>
