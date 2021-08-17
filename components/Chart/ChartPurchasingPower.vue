<script>
  import { Doughnut, mixins } from "vue-chartjs"

  export default {
    name: "ChartPurchasingPower",
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
      this.gradient1 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 147, 258, 0);
      this.gradient1.addColorStop(0, 'rgba(255, 104, 0, 1)');
      this.gradient1.addColorStop(1, 'rgba(255, 138, 88, 1)');
      // #2
      this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient2.addColorStop(0, 'rgba(255, 150, 0, 1)');
      this.gradient2.addColorStop(1, 'rgba(255, 192, 95, 1)');
      // #3
      this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 300, 0);
      this.gradient3.addColorStop(0, 'rgba(251, 226, 53, 1)');
      this.gradient3.addColorStop(0.5, 'rgba(244, 228, 73, 1)');
      this.gradient3.addColorStop(1, 'rgba(244, 228, 73, 1)');
      // #4
      this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 210, 210, 0);
      this.gradient4.addColorStop(0, 'rgba(254, 227, 155, 1)');
      this.gradient4.addColorStop(1, 'rgba(255, 218, 120, 1)');

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
          ]
        },
        // options
        {
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
          cutoutPercentage: 45,
        },
      )
    }
  };
</script>
