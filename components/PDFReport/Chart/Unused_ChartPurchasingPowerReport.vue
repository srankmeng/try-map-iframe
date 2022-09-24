<script>
  import { Doughnut, mixins } from "vue-chartjs"

  export default {
    name: "ChartPurchasingPowerReport",
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
          aspectRatio: 1,
          layout: {
            margin: {
                top: -20,
            },
            padding: 50,
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
