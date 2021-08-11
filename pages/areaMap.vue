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
  import canvas2Image from '@/helpers/canvas2image'
  import html2canvas from '@/helpers/html2canvas'
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
        const self = this

        var div = document.querySelector('#map');
        html2canvas(div, {
          useCORS:true,
          allowTaint: true,
          async:false,
          scale: 2,
        }).then(function(canvas) {
          let img = canvas2Image.convertToPNG(canvas);
          img = img.replace('data:image/png;base64,', '');
          const finalImageSrc = 'data:image/png;base64,' + img;
          div.style.display = 'none';

          // send image url to parent
          const message = JSON.stringify({
            imageUrl: finalImageSrc,
            iframeId: self.iframeId,
          });
          window.parent.postMessage(message, '*');
        });
        // var node = document.getElementById('map');
        // const self = this

        // domtoimage.toJpeg(node).then(function (dataUrl) {
        //     // console.log(dataUrl);
        //     // send image url to parent
        //     // const img = dataUrl.replace('data:image/png;base64,', '');
        //     // const finalImageSrc = 'data:image/png;base64,' + img;
        //     node.style.display = 'none';
        //     const message = JSON.stringify({
        //       imageUrl: dataUrl,
        //       iframeId: self.iframeId,
        //     });
        //     window.parent.postMessage(message, '*');
        //   })
        //   .catch(function (error) {
        //     console.error('oops, something went wrong!', error);
        //   });
        // const el = document.getElementById('map');
        // const self = this

        // var scaleBy = 5;
        // var w = 1000;
        // var h = 1000;
        // var div = document.querySelector('#map');
        // var canvas2 = document.createElement('canvas');
        // canvas2.width = w * scaleBy;
        // canvas2.height = h * scaleBy;
        // canvas2.style.width = w + 'px';
        // canvas2.style.height = h + 'px';
        // var context = canvas2.getContext('2d');
        // context.scale(scaleBy, scaleBy);

        // window.devicePixelRatio = 2;

        // html2canvas(div, {
        //   canvas: canvas2,
        //   useCORS: true,
        //   scale: 5,
        //   onrendered: function () {
        //     let img = canvas2Image.convertToPNG(canvas2);
        //     img = img.replace('data:image/png;base64,', '');
        //     const finalImageSrc = 'data:image/png;base64,' + img;
        //     el.style.display = 'none';

        //     // send image url to parent
        //     const message = JSON.stringify({
        //       imageUrl: finalImageSrc,
        //       iframeId: self.iframeId,
        //     });
        //     window.parent.postMessage(message, '*');
        //   },
        // });

      },
    },

  };
</script>

<style lang="scss">

</style>
