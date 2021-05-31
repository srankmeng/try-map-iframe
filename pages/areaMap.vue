<template>
  <div>
    <div id="map">
      <GoogleMap>
          <GoogleMapArea :areas="areaList" />
        </GoogleMap>
    </div>
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
        iframeId: '',
      }
    },
    methods: {
      recieveDataAreaMap(e) {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if(data.areaList) {
          // to do
          this.areaList = data.areaList;
          this.iframeId = data.iframeId;
          console.log('sub iframe1 area map: ', data.areaList);
        }
        if(data.isGenerateImage) {
          this.convertasbinaryimage();
        }
      },
      convertasbinaryimage() {
        const el = document.getElementById('map');
        const self = this

        html2canvas(el, {
          useCORS: true,
          onrendered: function (canvas) {
            let img = canvas.toDataURL('image/png');
            img = img.replace('data:image/png;base64,', '');
            const finalImageSrc = 'data:image/png;base64,' + img;
            el.style.display = 'none';

            // send image url to parent
            const message = JSON.stringify({
              imageUrl: finalImageSrc,
              iframeId: self.iframeId,
            });
            window.parent.postMessage(message, '*');
          }
        });

      },
    },

  };
</script>

<style lang="scss">

</style>
