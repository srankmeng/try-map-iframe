<template>
  <div class="chartCard">
    <div v-if="chartImage">
      <img :src="chartImage" alt="">
    </div>
    <div v-else style="height: 120px;" :id="pieChartKey"></div>
  </div>
</template>

<script>

import { report } from '~/helpers/report'
export default {
  props: ['chartData', 'chartKey'],
  data() {
    return {
      chartImage: null,
      pieChartKey: null,
      // pieSeries: null,
      // chart: null,
      chart: null,
    }
  },
  created() {
    this.pieChartKey = `${this.chartKey}PurchasingPower`

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type == 'report/generateChartImage') {
        const options = this.chart.chart.exporting.getFormatOptions("jpg");
        options.scale = 5;

        this.chart.pieSeries.exporting.setFormatOptions("jpg", options);
        this.chart.pieSeries.exporting.getImage("jpg").then((data) => {
          console.log('generate image done')
          this.$store.commit('report/chartImageGenerated')
          this.chartImage = data
        })
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  async mounted() {
    console.log(this.pieChartKey, this.chartData);
    this.chart = report.createPieChart(this.pieChartKey, this.chartData)
  },
}
</script>
