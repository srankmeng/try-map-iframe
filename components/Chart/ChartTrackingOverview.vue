<script>
  import { Bar, mixins } from "vue-chartjs"
  import { isMobile } from "mobile-device-detect";
  import moment from 'moment'

  export default {
    name: "ChartTrackingOverview",
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: {
      chartData: {
        type: Object,
        required: true,
      }
    },
    mounted () {
      // Canvas gradient
      const gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, 'rgba(0, 87, 191, 1)');
      gradient.addColorStop(1, 'rgba(0, 40, 101, 1)');

      this.renderChart(
        // data
        {
          labels: this.chartData.labels,
          datasets: [
            {
              type: 'line',
              label: 'Reach',
              backgroundColor: '#FE9900',
              borderColor: '#FE9900',
              borderWidth: isMobile ? 1 : 3,
              fill: false,
              data: this.chartData.datasets[0].data,
            },
            {
              type: 'bar',
              label: 'Impressions',
              backgroundColor: gradient,
              barThickness: isMobile ? 8 : 18,
              data: this.chartData.datasets[1].data,
            },
          ]
        },
        // options
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                padding: isMobile ? 5 : 10,
                fontFamily: "'Montserrat', 'Kanit'",
                fontSize: isMobile ? 9 : 13,
                fontColor: '#4D6994',
              }
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                lineWidth: isMobile ? 1 : 2,
							  color: '#CCD4E0',
              },
              ticks: {
                beginAtZero: true,
                max: 200000000,
                min: 0,
                stepSize: 50000000,
                padding: isMobile ? 5 : 10,
                fontFamily: "'Montserrat', 'Kanit'",
                fontSize: isMobile ? 9 : 13,
                fontColor: '#4D6994',
                // Abbreviate the millions
                // - https://stackoverflow.com/questions/51108964/shorten-number-labels-in-charts-js
                // - https://www.chartjs.org/docs/latest/axes/labelling.html#creating-custom-tick-formats
                callback: function(value, index, values) {
                  return value / 1e6 + ' M';
                }
              }
            }]
          },
          legend: {
            display: false,
          },
          tooltips: {
            titleFontFamily: "'Montserrat', 'Kanit'",
            bodyFontFamily: "'Montserrat', 'Kanit'",
          },
        },
      )
    }
  };
</script>
