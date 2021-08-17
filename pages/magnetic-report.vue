<template>
  <div class="report">
    <Button v-if="saveToStorage == 'true'" @click="sendEmail()" class="m-4">Send Email</Button>
    <Button @click="downloadReport()" class="m-4">Download Report</Button>
    <div v-if="isReady">
      <section ref="pdfContent" style="width: 793.706px">
        <section class="pdf-item font-cover-page">
          <FrontCoverPage :periods="periods" />
        </section>
        <section class="pdf-item default-page media-list-page">
          <DefaultPage>
            <div v-for="media in productsGroupedByMonth" :key="media.month" class="mediaListTable" ref="mediaListTable">
              <MediaListTable :month="media" class="mb-4" />
            </div>
          </DefaultPage>
        </section>
        <template v-for="(month, monthIndex) in productsGroupedByMonth">
          <section class="pdf-item divided-page">
            <DividedPage :index="monthIndex + 1" :month="month.month" />
          </section>
            <template v-for="(product, productIndex) in month.products">
              <template v-if="product.mediaReport">
                <section class="pdf-item default-page">
                  <DefaultPage :month="month.month">
                    <ChartReportPage
                      :media-report="product.mediaReport.mediaReport"
                      :visiting-frequency="product.mediaReport.visitingFrequency"
                      :visiting-frequency-chart-data="product.mediaReport.visitingFrequencyChartData"
                      :ages="product.mediaReport.ages"
                      :average-dwell-times="product.mediaReport.averageDwellTimes"
                      :average-dwell-times-chart-data="product.mediaReport.averageDwellTimesChartData"
                      :purchasing-powers="product.mediaReport.purchasingPowers"
                      :purchasing-powers-chart-data="product.mediaReport.purchasingPowersChartData"
                      :visitor-types="product.mediaReport.visitorTypes"
                      :interests="product.mediaReport.interests"
                      :user="user.contact"
                    />
                  </DefaultPage>
                </section>
                <section class="pdf-item default-page">
                  <DefaultPage :month="month.month">
                    <AreaReportPage
                      :living-areas="product.mediaReport.livingAreas"
                      :working-areas="product.mediaReport.workingAreas"
                      :top-living-areas="product.mediaReport.topLivingAreas"
                      :top-working-areas="product.mediaReport.topWorkingAreas"
                    />
                  </DefaultPage>
                </section>
              </template>
            </template>
        </template>
        <section class="pdf-item back-cover-page">
          <BackCoverPage />
        </section>
      </section>
    </div>
    <!-- <OverlayProgress v-if="processingReport" :percent="processPercent" />
    <OverlayProgress v-if="generatingReport" :percent="generatingPercent" /> -->
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
import mediaApi from '~/api/media';
import accountApi from '~/api/account'
import reportApi from '~/api/report'
import { report } from '~/helpers/report'
import moment from 'moment'
const { split } = require('moment-range-split')
import sortBy from 'lodash/sortBy'

export default {
  name: 'magnetic-report',
  layout: 'empty',
  data() {
    return {
      visitingFrequency: [],
      visitingFrequencyChartData: [],
      ages: [],
      averageDwellTimes: [],
      averageDwellTimesChartData: null,
      purchasingPowers: [],
      purchasingPowersChartData: null,
      visitorTypes: [],
      livingAreas: [],
      workingAreas: [],
      mediaReport: null,
      productIds:  !Array.isArray(this.$route.query.productIds) ? [this.$route.query.productIds] : this.$route.query.productIds,
      durations: !Array.isArray(this.$route.query.durations) ? [this.$route.query.durations] : this.$route.query.durations,
      contactId: this.$route.query.contactId,
      contactName: this.$route.query.contactName,
      saveToStorage: this.$route.query.saveToStorage || false,
      activityName: this.$route.query.activityName,
      refIdForRelatedPackage: this.$route.query.refIdForRelatedPackage,
      salesforceUserId: this.$route.query.salesforceUserId,
      productsGroupedByMonth: [],
      isReady: false,
      totalGeneratingStep: 0,
      generatingStepDone: 0,
      generatingReport: false,
      user: null,
      mapsLoadedCount: 0,
      allProductCount: 0,
      isAtBottomOfPage: false,
      totalProcessStep: 5,
      processStepDone: 0,
    }
  },
  async mounted() {
    this.isReady = false
    this.user = await accountApi.getProfile(this.contactId)
    this.productsGroupedByMonth = this.groupProductsByMonth(this.productIds, this.durations)

    this.increaseProcessStepDone()

    const mediaProductPromises = [];
    const productPromises = [];
    const mediaReportPromises = [];
    for (const month of this.productsGroupedByMonth) {
      for (const product of month.products) {
        this.allProductCount++

        mediaProductPromises.push(this.getMediaProduct(product.id, product.date.start, product.date.end, this.user.contact.Id))
        productPromises.push(mediaApi.getProductById(product.id))
        mediaReportPromises.push(this.getMediaReport(product.id, product.date.selectedMonth))
      }
    }

    const mediaProductResponses = await Promise.all(mediaProductPromises);
    const productResponses = await Promise.all(productPromises);
    const mediaReportResponses = await Promise.all(mediaReportPromises);

    this.increaseProcessStepDone()

    for (const month of this.productsGroupedByMonth) {
        for (const product of month.products) {
          product.mediaProduct = mediaProductResponses.find((response) => response?.package?.Product__c == product.id)

          const productResponse = productResponses.find((response) => response?.Id == product.id)

          if (productResponse) {
            product.product = productResponse
            // product.mediaReport = mediaReportResponses.find((response) =>
            //     response?.mediaReport?.Network_id__c == productResponse.network_id__c &&
            //     response.mediaReport.Partition_month__c == product.date.selectedMonth
            //   )
            product.mediaReport = mediaReportResponses.find((response) =>
                response?.mediaReport?.Network_id__c == productResponse.network_id__c
              )
          }
        }
    }

    this.isReady = true

    this.$nextTick(async () => {
      this.checkElement('.mediaListTable').then(async (selector) => {
        const pageMaxHeight = 930;
        let runningHeight = 0;
        let pageNo = 1;

        selector.each(function () {
          if (runningHeight + $(this).height() > pageMaxHeight) {
              runningHeight = 0;
              pageNo += 1;
          }

          runningHeight += $(this).height()

          $(this).attr('data-page-no', pageNo);
        })

        for(let i = 1; i <= pageNo; i++){
          $('.media-list-page').before(`
            <section class="pdf-item default-page" id="media-list-page-${i}">
              <div class="report-gradient-bg pdf-layout-page relative">
                <div class="top-logo">
                  <img src="${this.$path.static}/images/pdf-report/logo-color.png">
                  <div class="report-text">REPORT</div>
                </div>
                <div class="px-4 pt-32">
                  <div class="list-table"></div>
                </div>
                <div class="absolute bottom-4 left-4 text-xs">
                  *Note: Eyeballs and grid reach are reported by the entire month – not actual purchase period
                </div>
                <div class="bottom-logo">
                  <img src="${this.$path.static}/images/pdf-report/bottom-logo.png">
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

        // await this.generateReport()
        // const parentElement = this.$refs.pdfContent
        // const pages = Array.from(parentElement.children)
        // this.totalSteps = (pages.length - 1) + 4

        // this.increaseStepDone()

        // await this.downloadReport()
        this.increaseProcessStepDone()
      })
    })
  },
  computed: {
    periods() {
      return this.productsGroupedByMonth.map((month) => moment(month.month).format('MMMYYYY'))
    },
    processPercent() {
      if (this.totalProcessStep > 0) {
        return (this.processStepDone / this.totalProcessStep * 100).toFixed(0)
      }

      return 0
    },
    generatingPercent() {
      if (this.totalGeneratingStep > 0) {
        return (this.generatingStepDone / this.totalGeneratingStep * 100).toFixed(0)
      }

      return 0
    }
  },
  methods: {
    // loadMap(e) {
    //   const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
    //   if(data.mapsLoaded) {
    //     this.mapsLoadedCount++

    //     console.log('this.mapsLoadedCount', this.mapsLoadedCount);

    //     // if all maps are completely loaded
    //     if (this.allProductCount * 2 == this.mapsLoadedCount) {
    //       this.increaseProcessStepDone()
    //       const self = this

    //       // $('html, body').animate({ scrollTop: $(document).height() }, this.allProductCount * 2500).promise().then(async function () {
    //       //   $(this).animate({ scrollTop: 0 }, self.allProductCount * 2500).promise().then(function(){
    //       //     self.increaseProcessStepDone()
    //       //     self.processingReport = false
    //       //   });
    //       // })
    //     }
    //   }
    // },
    sendEmail() {
      let redirectUrl
      const pdfUrl = this.removeURLParameter(window.parent.location.href, ['activityName', 'contactName', 'refIdForRelatedPackage'])

      switch(this.activityName) {
        case 'Pre-Campaign':
            redirectUrl = `${process.env.appUrl2}/lightning/cmp/c__MINTEL_dashboardPreview?c__activityName=Pre-Campaign&c__refIdForRelatedPackage=${this.refIdForRelatedPackage}&c__pdfUrl=${pdfUrl}`
        break;
        case 'Post-Campaign':
            redirectUrl = `${process.env.appUrl2}/lightning/cmp/c__MINTEL_dashboardPreview?c__activityName=Post-Campaign&c__ContactId=${this.contactId}&c__ContactName=${this.contactName}&c__refIdForRelatedPackage=${this.refIdForRelatedPackage}&c__pdfUrl=${pdfUrl}`
        break;
      }

      redirectUrl = redirectUrl.replace('saveToStorage=true', 'saveToStorage=false')

      window.open(redirectUrl)
    },
    async downloadReport() {
      const msg = JSON.stringify({
        isGenerateImage: true,
      });

      const els = document.querySelectorAll('[id^="map-area-iframe-"]')

      if (els && els.length > 0) {
        els.forEach((el) => {
          el.contentWindow.postMessage(msg, '*');
        })
      }

      await this.generateReport()
    },
    groupProductsByMonth(productIds, durations) {
      const queryStrings = []

      productIds.forEach((productId) => {
        queryStrings.push({ productId })
      })

      durations.forEach((duration, durationIndex) => {
        const [startDate, endDate] = duration.split('-')
        const range = moment.range(moment(startDate, 'YYYYMMDD'), moment(endDate, 'YYYYMMDD'));
        const ranges = split(range, 'months');
        const dateRanges = []

        ranges.forEach((dateRange, dateRangeIndex) => {
          const start = dateRange.start
          const end = dateRange.end.subtract(1, 'days')

          if (dateRangeIndex === 0) {
            dateRanges.push({ month: start.format('MMMM YYYY'), selectedMonth: start.format('YYYYMM'), start: startDate, end: endDate })
          } else if (dateRangeIndex === ranges.length - 1) {
            dateRanges.push({ month: start.format('MMMM YYYY'), selectedMonth: start.format('YYYYMM'), start: start.format('YYYYMMDD'), end: endDate })
          } else {
            dateRanges.push({ month: start.format('MMMM YYYY'), selectedMonth: start.format('YYYYMM'), start: start.format('YYYYMMDD'), end: end.format('YYYYMMDD') })
          }
        })

        queryStrings[durationIndex].dates = dateRanges;
      })

      const groupedMonths = queryStrings.reduce((groupedMonth, queryString) => {
        queryString.dates.forEach((date) => {
          const includedDates = queryString.dates.find((d) => d.month === date.month)

          if (groupedMonth.map((month) => month.month).includes(date.month)) {
            groupedMonth.find((month) => month.month === date.month).products.push({ id: queryString.productId, date: includedDates })
          }else {
            groupedMonth.push({ month: date.month, products: [{ id: queryString.productId, date: includedDates }] })
          }
        })

        return groupedMonth
      }, [])

      return sortBy(groupedMonths, (month) => {
        return new moment(month.month)
      })
    },
    getMediaProduct(productId, startDateStr, endDateStr, contactId) {
      return mediaApi.getMedia({
        productId,
        startDateStr,
        endDateStr,
        contactId,
      })
    },
    async getMediaReport(productId, selectedMonth) {
      try {
        this.mediaReport = await mediaApi.getAudienceWithProductId(productId, selectedMonth)

        const visitingFrequency = report.setVisitingFrequency(this.mediaReport).visitingFrequency
        const visitingFrequencyChartData = report.setVisitingFrequency(this.mediaReport).visitingFrequencyChartData
        const ages = report.setAges(this.mediaReport)
        const averageDwellTimes = report.setAverageDwellTimes(this.mediaReport).averageDwellTimes
        const averageDwellTimesChartData = report.setAverageDwellTimes(this.mediaReport).averageDwellTimesChartData
        const purchasingPowers = report.setPurchasingPowers(this.mediaReport).purchasingPowers
        const purchasingPowersChartData = report.setPurchasingPowers(this.mediaReport).purchasingPowersChartData
        const visitorTypes = report.setVisitorTypes(this.mediaReport)
        const livingAreas = report.setAreas(this.mediaReport).livingAreas
        const workingAreas = report.setAreas(this.mediaReport).workingAreas
        const topLivingAreas = report.setTopAreas(this.mediaReport).topLivingAreas
        const topWorkingAreas = report.setTopAreas(this.mediaReport).topWorkingAreas
        const interests = report.setInterests(this.mediaReport)

        return {
          mediaReport: this.mediaReport,
          visitingFrequency,
          visitingFrequencyChartData,
          ages,
          averageDwellTimes,
          averageDwellTimesChartData,
          purchasingPowers,
          purchasingPowersChartData,
          visitorTypes,
          livingAreas,
          workingAreas,
          topLivingAreas,
          topWorkingAreas,
          interests,
        }
      } catch (error) {
        console.log('mediaReport Error', error);
      }
    },
    async generateReport () {
      this.generatingReport = true
      const parentElement = this.$refs.pdfContent
      const pages = Array.from(parentElement.children)
      this.totalGeneratingStep = pages.length

      const productName = this.productsGroupedByMonth[0]?.products[0]?.mediaReport?.mediaReport?.Network_name__c.replace('.', '_');

      var opt = {
        filename: `Magnetic_${productName}_${moment(this.productsGroupedByMonth[0]?.month).format('YYYYMM')}`,
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
      if (this.saveToStorage == 'true') {
        await reportApi.createLog({
          activityName: this.activityName,
          refIdForRelatedPackage: this.refIdForRelatedPackage,
          salesforceUserId: this.salesforceUserId,
        })
      }

      worker.save()

      // this.$router.back()
    },
    async checkElement(selector) {
      while (!$(selector).height() || $(selector).height() <= 0) {
        await new Promise(resolve => requestAnimationFrame(resolve))
      }

      return $(selector);
    },
    removeURLParameter(url, parameters) {
      //prefer to use l.search if you have a location/link object
      var urlparts = url.split('?');
      if (urlparts.length >= 2) {
          var pars = urlparts[1].split(/[&;]/g);

          parameters.forEach((parameter) => {
            var prefix = encodeURIComponent(parameter) + '=';

              //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }
          })

          return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
      }

      return url;
    },
    increaseProcessStepDone() {
      this.processStepDone += 1

      console.log(`total process steps: ${this.totalProcessStep}, process step done: ${this.processStepDone}`);
    },
    increaseGeneratingStepDone() {
      this.generatingStepDone += 1

      console.log(`total generating steps: ${this.totalGeneratingStep}, generating step done: ${this.generatingStepDone}`);
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
