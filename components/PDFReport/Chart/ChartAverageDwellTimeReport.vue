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
    this.pieChartKey = `${this.chartKey}DwellTime`

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
    this.chart = report.createPieChart(this.pieChartKey, this.chartData)
    // // Create chart instance
    // this.chart = am4core.create(this.pieChartKey, am4charts.PieChart);

    // this.chart.width = am4core.percent(100);
    // this.chart.height = am4core.percent(100);

    // this.chart.seriesContainer.align = "center";
    // // this.chart.posi
    // // Add data
    // this.chart.data = this.chartData;

    // const colors = [
    //   am4core.color('#f6dc4c'),
    //   am4core.color('#dd5dc1'),
    //   am4core.color('#fa9c4c'),
    //   am4core.color('#00b2f6'),
    //   am4core.color('#76c64c'),
    //   am4core.color('#7a59bf'),
    // ];

    // // Add and configure Series
    // this.pieSeries = this.chart.series.push(new am4charts.PieSeries());
    // this.pieSeries.colors.list = colors;
    // this.pieSeries.dataFields.value = "value";
    // this.pieSeries.dataFields.category = "label";
    // this.pieSeries.innerRadius = am4core.percent(60);
    // // this.pieSeries.labels.template.text = "{value.value}%";
    // this.pieSeries.labels.template.adapter.add("text", (text, target) =>  target.dataItem.values.value.percent > 0 ? "{value.value}%" : "");
    // this.pieSeries.labels.template.fontSize = 10;
    // this.pieSeries.labels.template.fontFamily = 'Kanit';
    // this.pieSeries.labels.template.fontWeight = 'bold';
    // this.pieSeries.labels.template.maxWidth = 130;
    // this.pieSeries.labels.template.wrap = true;
    // this.pieSeries.labels.template.adapter.add('fill', function (color, target) {
    //   return am4core.color(colors[target.dataItem.index]);
    // })
  },
  }
</script>
<!-- <script>
  import { Doughnut, mixins } from "vue-chartjs"

  export default {
    name: "ChartAverageDwellTimeReport",
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        required: true,
      }
    },
    data () {
      return {
        gradient: null,
      }
    },
    mounted () {
      // Canvas gradient
      // #1
      this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 147, 258, 0);
      this.gradient1.addColorStop(0, 'rgba(246, 220, 53, 1)');
      this.gradient1.addColorStop(1, 'rgba(255, 231, 141, 1)');
      // #2
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient2.addColorStop(0, 'rgba(214, 83, 185, 1)');
      this.gradient2.addColorStop(1, 'rgba(240, 117, 213, 1)');
      // #3
      this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient3.addColorStop(0, 'rgba(255, 194, 156, 1)');
      this.gradient3.addColorStop(0.5, 'rgba(248, 141, 44)');
      this.gradient3.addColorStop(1, 'rgba(248, 141, 44)');
      // #4
      this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 210, 210, 0);
      this.gradient4.addColorStop(0, 'rgba(0, 204, 255, 1)');
      this.gradient4.addColorStop(1, 'rgba(6, 186, 231, 1)');
      // #5
      this.gradient5 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 210, 210, 0);
      this.gradient5.addColorStop(0, 'rgba(110, 176, 81, 1)');
      this.gradient5.addColorStop(1, 'rgba(132, 240, 67, 1)');
      // #6
      this.gradient6 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 210, 210, 0);
      this.gradient6.addColorStop(0, 'rgba(122, 89, 191, 1)');
      this.gradient6.addColorStop(1, 'rgba(159, 130, 221, 1)');

      // this.addPlugin(ChartDataLabels);
      this.renderChart(
        // data
        {
          labels: this.chartData.labels,
          datasets: [
            {
              backgroundColor: [
                this.gradient1,
                this.gradient2,
                this.gradient3,
                this.gradient4,
                this.gradient5,
                this.gradient6,
              ],
              data: this.chartData.datasets[0].data
            },
          ]
        },
        // options
        {
          plugins: {
            // labels: {
            //   position: 'outside',
            //   render: (args) => {
            //     return `${args.value}%`;
            //   },
            //   fontStyle: 'bold',
            //   fontSize: 9,
            //   outsidePadding: 26,
            //   fontColor: '#002865',
            //   textMargin: 4,
            //   fontFamily: "Montserrat, Kanit"
            // }
            outlabels: {
                text: (context) => {
                  const index = context.dataIndex;
                  const value = context.dataset.data[index];
                  return `${value}%`;
                },
                color: '#002865',
                backgroundColor: null,
                stretch: 10,
                font: {
                    resizable: true,
                    minSize: 10,
                    maxSize: 10,
                    family: "Montserrat, Kanit",
                    weight: "bold",
                },
                lineWidth: 1,
                padding: 0,
            },
          },
          rotation: (-0.5 * Math.PI) - (-120/180 * Math.PI),
          devicePixelRatio: 2,
          aspectRatio: 1,
          layout: {
            margin: {
                top: -20,
            },
            padding: 0
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips: {
            titleFontFamily: "'Montserrat', 'Kanit'",
            bodyFontFamily: "'Montserrat', 'Kanit'",
          },
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          cutoutPercentage: 60,
        },
      )
    }
  };
</script> -->
