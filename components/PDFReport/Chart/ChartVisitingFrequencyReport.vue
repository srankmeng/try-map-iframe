<!-- <template>
<div id="chart-wrapper">
    <canvas id="outlabeledChart"></canvas>
</div>
</template>
<script>
  import 'chartjs-plugin-piechart-outlabels'

  export default {
    mounted() {
      var chart = new Chart('outlabeledChart', {
        type: 'outlabeledPie',
        data: {
            labels: [
                'ONE',
                'TWO',
                'THREE',
                'FOUR',
            ],
            datasets: [{
                backgroundColor: [
                    '#FF3784',
                    '#36A2EB',
                    '#4BC0C0',
                    '#F77825',
                ],
                data: [7, 8, 9, 10]
            }]
        },
        options: {
            zoomOutPercentage: 55, // makes chart 40% smaller (50% by default, if the preoprty is undefined)
            plugins: {
                legend: false,
                outlabels: {
                    text: '%l %p',
                    color: 'white',
                    stretch: 45,
                    font: {
                        resizable: true,
                        minSize: 12,
                        maxSize: 18
                    }
                }
            }
        }
    });
    },
  }
</script> -->
<script>
  import { Doughnut, mixins } from "vue-chartjs"
  import 'chartjs-plugin-piechart-outlabels'

  export default {
    name: "ChartVisitingFrequencyReport",
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    data () {
      return {
        gradient: null,
      }
    },
    mounted () {
      // Canvas gradient
      // #1
      this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 210, 210, 0);
      this.gradient1.addColorStop(0, 'rgba(161, 254, 249, 1)');
      this.gradient1.addColorStop(1, 'rgba(126, 255, 249, 1)');
      // #2
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient2.addColorStop(0, 'rgba(0, 255, 239, 1)');
      this.gradient2.addColorStop(0.5, 'rgba(92, 210, 254, 1)');
      this.gradient2.addColorStop(1, 'rgba(92, 210, 254, 1)');
      // #3
      this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient3.addColorStop(0, 'rgba(37, 212, 255, 1)');
      this.gradient3.addColorStop(1, 'rgba(66, 141, 255, 1)');
      // #4
      this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 147, 258, 0);
      this.gradient4.addColorStop(0, 'rgba(65, 140, 255, 1)');
      this.gradient4.addColorStop(1, 'rgba(0, 80, 203, 1)');

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
              ],
              data: this.chartData.datasets[0].data,
            },
          ],
        },
        // options
        {
          plugins: {
            // display: false,
            // labels: {
            //   // overlap: false,
            //   position: 'outside',
            //   render: (args) => {
            //     return `${args.value}%`;
            //   },
            //   fontStyle: 'bold',
            //   fontSize: 9,
            //   outsidePadding: 26,
            //   fontColor: '#002865',
            //   fontFamily: "Montserrat, Kanit",
            //   display: 'auto',
            // },
            outlabels: {
                display: true,
                text: (context) => {
                  const index = context.dataIndex;
                  const value = context.dataset.data[index];
                  return `${value}%`;
                },
                color: '#002865',
                backgroundColor: null,
                stretch: 4,
                font: {
                    resizable: true,
                    minSize: 10,
                    maxSize: 10,
                    family: "Montserrat, Kanit",
                    weight: "bold",
                },
                lineWidth: 1,
                padding: 0,
            }
          },
          rotation: (-0.5 * Math.PI) - (-120/180 * Math.PI),
          aspectRatio: 1,
          layout: {
            margin: {
                top: -20,
            },
            padding: 50
          },
          devicePixelRatio: 2,
          responsive: true,
          // maintainAspectRatio: false,
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
</script>
