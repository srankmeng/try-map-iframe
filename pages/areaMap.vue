<template>
  <div>
    <div id="map" ref="map">
      <GoogleMap>
          <GoogleMapArea :areas="areaList" />
        </GoogleMap>
    </div>
    <div id="map-img"></div>
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

          if(data.isImage) {
            this.convertasbinaryimage();
          }
        }
      },
      convertasbinaryimage() {
        setTimeout(function () {
          html2canvas(document.getElementById('map'), {
            useCORS: true,
            onrendered: function (canvas) {
              let img = canvas.toDataURL('image/png');
              img = img.replace('data:image/png;base64,', '');
              const finalImageSrc = 'data:image/png;base64,' + img;

              const imageTag = document.createElement('img');
              imageTag.setAttribute('src', finalImageSrc);
              document.getElementById('map-img').appendChild(imageTag);
              document.getElementById('map').style.display = 'none';
            }
          });
        }, 5000);
      },
    },

  };
</script>

<style lang="scss">

</style>
