<script>
  import { Doughnut, mixins } from "vue-chartjs"
  import ChartDataLabels from 'chartjs-plugin-labels';

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
              ],
              data: this.chartData.datasets[0].data,
            },
          ],
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
              fontFamily: "Montserrat, Kanit"
            }
          },
          rotation: (-0.5 * Math.PI) - (-120/180 * Math.PI),
          aspectRatio: 1,
          layout: {
            margin: {
                top: -20,
            }
          },
          devicePixelRatio: 2,
          // scales: {
          //     yAxes: [{ ticks: { fontFamily: "'Roboto', sans-serif" }}],
          //     xAxes: [{ ticks: { fontFamily: "'Roboto', sans-serif" }}]
          // },
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: false,
          },
          tooltips: {
            titleFontFamily: "'Montserrat', 'Kanit'",
            bodyFontFamily: "'Montserrat', 'Kanit'",
          },
          animation: {
              duration: 0, // general animation time
          },
          hover: {
              animationDuration: 0, // duration of animations when hovering an item
          },
          responsiveAnimationDuration: 0, // animation duration after a resize
          cutoutPercentage: 60,
        },
      )
    }
  };
</script>
