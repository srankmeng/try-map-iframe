<template>
  <div>
    <GoogleMap isMarker v-if="isReady">
      <GoogleMapMarker :screen-locations="marketList" :current-screen-index="currentScreenIndex" />
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
        currentScreenIndex: null,
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

        if (data.currentScreenIndex) {
          this.currentScreenIndex = data.currentScreenIndex
        }
      }
    },

  };
</script>

<style lang="scss">

</style>
