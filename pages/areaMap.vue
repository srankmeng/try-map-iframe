<template>
  <div>
    <GoogleMap>
        <GoogleMapArea :areas="areaList" />
      </GoogleMap>
  </div>
</template>

<script>
  import GoogleMap from "../components/GoogleMap";
  export default {
    name: "areaMap",
    components: {
      GoogleMap: GoogleMap.GoogleMap,
      GoogleMapArea: GoogleMap.GoogleMapArea,
    },
    layout: 'empty',
    created() {

      // recieve data form parent
      window.addEventListener('message', this.recieveDataAreaMap);

    },
    data() {
      return {
        areaList: [],
      }
    },
    methods: {
      recieveDataAreaMap(e) {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if(data.areaList) {
          // to do
          this.areaList = data.areaList;
          console.log('sub iframe1 area map: ', data.areaList);
        }
      }
    },

  };
</script>

<style lang="scss">

</style>
