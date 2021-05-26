<template>
  <div>
    <GoogleMap>
      <GoogleMapMarker />
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
    methods: {
      recieveDataMarkerMap(e) {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if(data.markerList) {
          // to do
          console.log('sub iframe1 marker map: ', data.markerList);
        }
      }
    },

  };
</script>

<style lang="scss">

</style>
