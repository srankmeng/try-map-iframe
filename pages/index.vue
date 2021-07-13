<template>
  <div>
    <GoogleMap isMarker v-if="isReady">
      <GoogleMapMarker :screen-locations="marketList" :current-screen="currentScreen" />
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

        console.log('data', data);

        if (data.currentScreen) {
          this.currentScreen.index = data.currentScreen.index
          this.currentScreen.thumbnailImgUrl = data.currentScreen.thumbnailImgUrl
        }
      }
    },

  };
</script>

<style lang="scss">

</style>
