<template>
  <div class="report" v-if="isReportReady">
    <Button v-if="iframeObject.saveToStorage == 'true'" @click="sendEmail()" class="my-4 mx-2">Send Email</Button>
    <Button @click="downloadReport()" class="my-4 mx-2">Download Report</Button>
    <div>
      <section ref="pdfContent" style="width: 793.706px">
        <!-- <section class="pdf-item font-cover-page">
          <FrontCoverPage :periods="periods" />
        </section> -->
        <!-- <section class="pdf-item default-page media-list-page">
          <DefaultPage>
            <div v-for="media in iframeObject.productsGroupedByMonth" :key="media.month" class="mediaListTable" ref="mediaListTable">
              <MediaListTable :month="media" class="mb-4" />
            </div>
          </DefaultPage>
        </section> -->
        <template v-for="(month, monthIndex) in iframeObject.productsGroupedByMonth">
          <!-- <section class="pdf-item divided-page">
            <DividedPage :index="monthIndex + 1" :month="month.month" />
          </section> -->
            <template v-for="(product, productIndex) in month.products">
              <template v-if="product.mediaReport">
                <template v-for="(aud, audIndex) in product.mediaReport.auds">
                  <section class="pdf-item default-page">
                    <DefaultPage :month="month.month">
                      <NewLayoutChartReportPage
                        v-if="aud.isNewReportLayout"
                        :media-report="aud.mediaReport"
                        :visiting-frequency="aud.visitingFrequency"
                        :visiting-frequency-chart-data="aud.visitingFrequencyChartData"
                        :ages="aud.ages"
                        :average-dwell-times="aud.averageDwellTimes"
                        :average-dwell-times-chart-data="aud.averageDwellTimesChartData"
                        :purchasing-powers="aud.purchasingPowers"
                        :purchasing-powers-chart-data="aud.purchasingPowersChartData"
                        :visitor-types="aud.visitorTypes"
                        :interests="aud.interests"
                        :isNewReportLayout="aud.isNewReportLayout"
                        :user="iframeObject.user.contact"
                        :amChartAverageDwellTimes="aud.amChartAverageDwellTimes"
                        :amChartVisitingFrequency="aud.amChartVisitingFrequency"
                        :amChartPurchasingPowers="aud.amChartPurchasingPowers"
                        :chartKey="`newlayout${monthIndex}${productIndex}${audIndex}`"
                      />
                      <ChartReportPage
                      v-else
                        :media-report="aud.mediaReport"
                        :visiting-frequency="aud.visitingFrequency"
                        :visiting-frequency-chart-data="aud.visitingFrequencyChartData"
                        :ages="aud.ages"
                        :average-dwell-times="aud.averageDwellTimes"
                        :average-dwell-times-chart-data="aud.averageDwellTimesChartData"
                        :purchasing-powers="aud.purchasingPowers"
                        :purchasing-powers-chart-data="aud.purchasingPowersChartData"
                        :visitor-types="aud.visitorTypes"
                        :interests="aud.interests"
                        :isNewReportLayout="aud.isNewReportLayout"
                        :user="iframeObject.user.contact"
                        :amChartAverageDwellTimes="aud.amChartAverageDwellTimes"
                        :amChartVisitingFrequency="aud.amChartVisitingFrequency"
                        :amChartPurchasingPowers="aud.amChartPurchasingPowers"
                        :chartKey="`oldlayout${monthIndex}${productIndex}${audIndex}`"
                      />
                    </DefaultPage>
                  </section>
                  <section class="pdf-item default-page">
                    <DefaultPage :month="month.month">
                      <AreaReportPage
                        :living-areas="aud.livingAreas"
                        :working-areas="aud.workingAreas"
                        :top-living-areas="aud.topLivingAreas"
                        :top-working-areas="aud.topWorkingAreas"
                      />
                    </DefaultPage>
                  </section>
                </template>
              </template>
            </template>
        </template>
        <!-- <section class="pdf-item back-cover-page">
          <BackCoverPage />
        </section> -->
      </section>
    </div>
    <OverlayProgress v-if="generatingReport" :percent="generatingPercent" />
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import moment from 'moment'

export default {
  name: 'magnetic-report',
  layout: 'empty',
  data() {
    return {
      totalGeneratingStep: 0,
      generatingStepDone: 0,
      generatingReport: false,
      isReportReady: false,
      iframeObject: null,
      unsubscribe: null,
    }
  },
  async created() {
    this.unsubscribe = this.$store.subscribe(async (mutation, state) => {
      if (mutation.type == 'report/mapLoaded') {
        if ((this.iframeObject.allProductCount * 2) == state.report.mapLoadedCount) {
          window.parent.postMessage({
            isReportReady: true
          }, '*');
        }
      }

      if (mutation.type == 'report/chartImageGenerated') {
        if ((this.iframeObject.allProductCount * 3) == state.report.imageGeneratedCount) {
          await this.generateReport()
        }
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  async mounted() {
    const self = this
    this.$receiveMessage((e) => {
      if (e.data.reportObject) {
        console.log('reportObject', e.data.reportObject);

        self.iframeObject = e.data.reportObject;
        self.isReportReady = true

        this.$store.commit('report/resetMapLoadedCount')

        self.$nextTick(async () => {
          self.checkElement('.mediaListTable').then(async (selector) => {
            const pageMaxHeight = 930;
            let runningHeight = 0;
            let pageNo = 1;

            selector.each(function () {
              if ((runningHeight + $(this).height()) > pageMaxHeight) {
                  runningHeight = 0;
                  pageNo += 1;
              }

              runningHeight += $(this).height()

              $(this).attr('data-page-no', pageNo);
            })

            for(let i = 1; i <= pageNo; i++) {
              $('.media-list-page').before(`
                <section class="pdf-item default-page" id="media-list-page-${i}">
                  <div class="report-gradient-bg pdf-layout-page relative">
                    <div class="top-logo">
                      <img src="${self.$path.static}/images/pdf-report/logo-color.png">
                      <div class="report-text">REPORT</div>
                    </div>
                    <div class="px-4 pt-32">
                      <div class="list-table"></div>
                    </div>
                    <div class="absolute bottom-4 left-4 text-xs">
                      *Note: Eyeballs and grid reach are reported by the entire month – not actual purchase period
                    </div>
                    <div class="bottom-logo">
                      <img src="${self.$path.static}/images/pdf-report/bottom-logo.png">
                    </div>
                  </div>

                </section>`
              )

              var tables = $(`.mediaListTable[data-page-no="${i}"]`)

              if (i === 1) {
                $('.list-table').before('<h1 class="text-center text-2xl text-color-primary-1 font-bold pb-10">MEDIA LIST</h1>')
              }

              $(`#media-list-page-${i}`).find('.list-table').append(tables);
            }

            $('.media-list-page').remove()
          })
        })
      }
    }, false)

  },
  computed: {
    periods() {
      return this.iframeObject.productsGroupedByMonth.map((month) => moment(`01 ${month.month}`).format('MMMYYYY'))
    },
    generatingPercent() {
      if (this.totalGeneratingStep > 0) {
        return (this.generatingStepDone / this.totalGeneratingStep * 100).toFixed(0)
      }

      return 0
    }
  },
  methods: {
    sendEmail() {
      window.parent.postMessage({
        sendEmail: true
      }, '*');
    },
    async downloadReport() {
      this.generatingReport = true
      this.$store.commit('report/generateChartImage')
      // const msg = JSON.stringify({
      //   isGenerateImage: true,
      // });

      // const els = document.querySelectorAll('[id^="map-area-iframe-"]')

      // if (els && els.length > 0) {
      //   els.forEach((el) => {
      //     el.contentWindow.postMessage(msg, '*');
      //   })
      // }

      // wait for all images to be generated
      // setTimeout(async () => {
      //   await this.generateReport()
      // }, 2000);
    },
    async generateReport () {
      const parentElement = this.$refs.pdfContent
      const pages = Array.from(parentElement.children)
      this.totalGeneratingStep = pages.length

      const productName = this.iframeObject.productsGroupedByMonth[0]?.products[0]?.mediaReport?.auds[0]?.mediaReport?.Network_name__c.replaceAll('.', '_');
      const formattedMonth = moment(`01 ${this.iframeObject.productsGroupedByMonth[0]?.month}`).format('YYYYMM');
      var opt = {
        filename: `Magnetic_${productName}_${formattedMonth}`,
        // filename: `Magnetic_${this.}_202105`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 3,
          useCORS: true,
        },
      };

      let worker = html2pdf().set(opt).from(pages[0]).toPdf();

      for (let i = 0; i < pages.length; i++) {
        const startTime = new Date()
        const pdf = await worker.from(pages[i]).toContainer().toCanvas().toPdf().get('pdf')

        console.log(`generating page ${i} out of ${this.totalGeneratingStep}`);
        this.increaseGeneratingStepDone()

        if (i < pages.length - 1) { // Bump cursor ahead to new page until on last page
          pdf.addPage();
          const endTime = new Date()
          const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
          console.log(`page ${i + 1} took ${seconds} seconds`);
        }
      }

      // save history log
      if (this.iframeObject.saveToStorage == 'true') {
        window.parent.postMessage({
          saveHistoryLog: true
        }, '*');
      }

      worker.save()
    },
    async checkElement(selector) {
      while (!$(selector).height() || $(selector).height() <= 0) {
        await new Promise(resolve => requestAnimationFrame(resolve))
      }

      return $(selector);
    },
    increaseGeneratingStepDone() {
      this.generatingStepDone += 1
    }
  }
}
</script>

<style lang="scss">
.top-logo {
    position: absolute;
    top: 37px;
    left: 42px;
    border-right: 1px solid rgb(164, 164, 164);
    padding-right: 18px;

    img {
      width: 164px;
    }

    .report-text {
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 5px;
    }
  }

  .bottom-logo {
    position: absolute;
    bottom: 0px;
    right: 1px;

    img {
      width: 100px;
    }
  }

html {
    scrollbar-width: none !important; /* For Firefox */
    -ms-overflow-style: none !important; /* For Internet Explorer and Edge */
}

html::-webkit-scrollbar {
    width: 0px !important; /* For Chrome, Safari, and Opera */
}
</style>
