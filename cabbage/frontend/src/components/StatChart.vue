<template>
  <canvas id="chart"></canvas>
</template>

<script>
  export default {
    name: 'StatChart',
    props: {
      chartId: String,
      labelList: Array,
      dataList: Array
    },
    data() {
      return {
        chartId: '',
        chart: [],
        chartLabels: [],
        chartData: [],
      };
    },
    methods: {
      createChart() {
        var ctx = document.getElementById(this.chartId);
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labelList,
            datasets: [{
              label: this.labelList,
              data: this.dataList,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            title: {
              display: true,
              text: "Total Kills",
              fontSize: 48,
              fontColor: "white"
            },
            scales: {
              yAxes: [{
                gridLines: {
                  display: false,
                  color: "white"
                },
                ticks: {
                    beginAtZero:true,
                    fontColor: "white",
                    fontSize: 18
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false,
                  color: "white"
                }
              }],
            },
            legend: {
              labels: {
                fontColor: "white",
                fontSize: 18
              }
            }
          }
        });
      },
      updateChart() {
        this.chart.update();
      }
    },
    mounted() {
      this.createChart('chart');
    },
  }
</script>

<style scoped>
</style>
