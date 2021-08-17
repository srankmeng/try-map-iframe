<script>
  import { Doughnut, mixins } from "vue-chartjs"
  import ChartDataLabels from 'chartjs-plugin-labels';

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

      this.addPlugin(ChartDataLabels);
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
            labels: {
              position: 'outside',
              render: (args) => {
                return `${args.value}%`;
              },
              fontStyle: 'bold',
              fontSize: 9,
              outsidePadding: 30,
              fontColor: '#002865',
              textMargin: 4,
              fontFamily: "Montserrat, Kanit"
            }
          },
          rotation: (-0.5 * Math.PI) - (-120/180 * Math.PI),
          devicePixelRatio: 2,
          aspectRatio: 1,
          layout: {
            margin: {
                top: -20,
            }
          },
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
