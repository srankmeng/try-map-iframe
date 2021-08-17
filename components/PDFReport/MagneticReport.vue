<template>
   <div>
    <Button @click="generateReport()">Foobar</Button>
    <section ref="pdfContent" style="width: 793.706px">
      <section class="pdf-item font-cover-page">
        <FrontCoverPage :periods="periods" />
      </section>

      <section class="pdf-item default-page">
        <DefaultPage>
          this is the default page
        </DefaultPage>
      </section>
      <section class="pdf-item default-page">
        <DefaultPage>
          this is the default page
        </DefaultPage>
      </section>
      <section class="pdf-item default-page">
        <DefaultPage>
          this is the default page
        </DefaultPage>
      </section>

      <!-- 1st month -->
      <section class="pdf-item divided-page">
        <DividedPage />
      </section>
      <section class="pdf-item default-page">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item default-page">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <!-- 2nd month -->
      <section class="pdf-item">
        <DividedPage />
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <!-- 3rd month -->
      <section class="pdf-item">
        <DividedPage />
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <!-- 4th month -->
      <section class="pdf-item">
        <DividedPage />
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <!-- 5th month -->
      <section class="pdf-item">
        <DividedPage />
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <!-- 6th month -->
      <section class="pdf-item">
        <DividedPage />
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <ChartReportPage />
        </DefaultPage>
      </section>
      <section class="pdf-item">
        <DefaultPage>
          <AreaReportPage />
        </DefaultPage>
      </section>

      <section class="pdf-item back-cover-page">
        <BackCoverPage />
      </section>
    </section>
   </div>
</template>

<script>
import html2pdf from 'html2pdf.js'
export default {
  data() {
    return {
      periods: ['JAN 2020', 'FEB 2020', 'MAR 2020', 'JAN 2021'],
    }
  },
  methods: {
    async generateReport () {
      const parentElement = this.$refs.pdfContent
      const pages = Array.from(parentElement.children)

      let worker = html2pdf().from(pages[0]).toPdf();

      for (let i = 0; i < pages.length; i++) {
        worker = worker.from(pages[i]).toContainer().toCanvas().toPdf().get('pdf').then((pdf) =>
        {
          console.log(i, pages.length - 1);
          if (i < pages.length - 1) { // Bump cursor ahead to new page until on last page
            pdf.addPage();
          }
        });
      }

      worker = worker.save();
    }
  },
}
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';
.detail-section {
  &.is-content {
    @include section-content;
  }

  &.is-media-detail {
    margin-bottom: 30px;

    @media (max-width: 1023px) {
      margin-bottom: 15px;
    }
  }

  &.is-heading {
    margin: 0 0 35px;

    @media (max-width: 1023px) {
      margin: 0 0 15px;
    }
  }

  &.is-report {
    margin: 0 0 30px;
  }

  &.is-chart-tracking-overview {
    padding: 35px 0 40px;

    @media (max-width: 1023px) {
      padding: 13px 0 15px;
    }
  }

  &.is-chart-visiting-frequency,
  &.is-chart-average-dwell-time,
  &.is-chart-purchasing-power {
    position: relative;

    &:after {
      content: " ";
      position: absolute;
      z-index: $z-index-1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background-color: $color-white;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 40, 101, 0.25);
    }
  }

  &.is-chart-visiting-frequency,
  &.is-chart-average-dwell-time {
    margin: 55px 75px 95px;

    @media (max-width: 1023px) {
      margin: 55px 60px 80px;
    }
  }

  &.is-chart-purchasing-power {
    margin: 35px 75px 50px;

    @media (max-width: 1023px) {
      margin: 30px 60px 50px;
    }
  }
}
</style>
