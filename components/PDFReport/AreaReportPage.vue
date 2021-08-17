<template>
  <Grid isGutter30 isGutterVertical15 class="is-report">
    <GridColumn isColumn12 class="is-report-chart-tertiary">
      <ReportCard heading="Living area">
        <h3 class="text-center text-lg text-color-primary-1 font-bold pb-4">Top 10 Most Living Area</h3>
        <ChartReportArea :id="`living-${Math.random().toString(36).substring(7)}`" :areas="livingAreas" :top-areas="topLivingAreas" heading="Living" />
      </ReportCard>
    </GridColumn>
    <GridColumn isColumn12 class="is-report-chart-tertiary">
      <ReportCard heading="Working area">
        <h3 class="text-center text-lg text-color-primary-1 font-bold pb-4">Top 10 Most Working Area</h3>
        <ChartReportArea :id="`working-${Math.random().toString(36).substring(7)}`" :areas="workingAreas" :top-areas="topWorkingAreas" heading="Working" />
      </ReportCard>
    </GridColumn>
  </Grid>
</template>

<script>
export default {
  props: {
    livingAreas: {
      type: Array,
      default() {
        return []
      },
    },
    workingAreas: {
      type: Array,
      default() {
        return []
      },
    },
    topLivingAreas: {
      type: Array,
      default() {
        return []
      },
    },
    topWorkingAreas: {
      type: Array,
      default() {
        return []
      },
    },
  }
}
</script>

<style>

</style>
