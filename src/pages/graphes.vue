<template>
  <div>

    <Header/>
    <b-row>
      <b-col md="auto" sm="12" lg="4">
        <ApexCharts  classname="mx-auto"
          :options="line.chartOptions"
          :series="line.chartSeries"
          :height="260"
          :width="300"
          :chart-id="line.chartId"
        />
      </b-col>
      <b-col md="12" sm="12" lg="4">
        <ApexCharts
          :options="dou.chartOptions"
          :series="dou.chartSeries"
          :height="260"
          :width="300"
          :chart-id="dou.chartId"
        />
      </b-col>
      <b-col md="12" sm="12" lg="4">
        <ApexCharts
          :options="scatter.chartOptions"
          :series="scatter.chartSeries"
          :height="260"
          :width="300"
          :chart-id="scatter.chartId"
        />
      </b-col>
      <b-col md="12" sm="12" lg="4">
        <ApexCharts
          :options="pie.chartOptions"
          :series="pie.chartSeries"
          :height="260"
          :width="300"
          :chart-id="pie.chartId"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      dou:{
        chartOptions: {
          chart: {
            toolbar: { show: false },
            id: 'vuechart-example',
            type: 'donut',
          },
          labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8'], // Labels for the donut segments
          tooltip: {
            theme: 'light',
            fillSeriesColor: false,
          },
        },
        chartSeries: [30, 40, 45, 50, 49, 60, 70, 81],
        chartId: 'donutChart',
      },
     line:{
       chartOptions: {
         chart: {
           toolbar: { show: false },
           id: "vuechart-example",
           type: "line",
         },
         xaxis: {
           categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
         },
         tooltip: {
           theme: "light",
           fillSeriesColor: false,
         },
       },
       chartSeries: [
         {
           name: "series-1",
           data: [30, 40, 45, 50, 49, 60, 70, 81],
         },
       ],
       chartId: "lineChart",
     },
      scatter:{
        chartOptions: {
          chart: {
            toolbar: { show: false },
            id: 'vuechart-example',
            type: 'scatter',
          },
          xaxis: {
            type: 'numeric',
          },
          tooltip: {
            theme: 'light',
            fillSeriesColor: false,
          },
        },
        chartSeries: [
          {
            name: 'series-1',
            data: [
              { x: 1991, y: 30 },
              { x: 1992, y: 40 },
              { x: 1993, y: 45 },
              { x: 1994, y: 50 },
              { x: 1995, y: 49 },
              { x: 1996, y: 60 },
              { x: 1997, y: 70 },
              { x: 1998, y: 81 },
            ],
          },
        ],
        chartId: 'scatterChart',
      },
      pie:{
        chartOptions: {
          chart: {
            toolbar: { show: false },
            id: 'vuechart-example',
            type: 'pie',
          },
          labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8'], // Labels for the pie chart segments
          tooltip: {
            theme: 'light',
            fillSeriesColor: false,
          },
        },
        chartSeries: [30, 40, 45, 50, 49, 60, 70, 81],
        chartId: 'pieChart',
      }
    };
  },
};
</script>
