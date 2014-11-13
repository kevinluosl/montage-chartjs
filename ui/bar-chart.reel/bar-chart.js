/**
 * @module ui/bar-chart.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class BarChart
 * @extends Component
 */
exports.BarChart = Component.specialize(/** @lends BarChart# */ {
    constructor: {
        value: function BarChart() {
            this.super();

//            var labels=["January", "February", "March", "April", "May", "June", "July"];
//            var data= [
//                {
//                    label: "My First dataset",
//                    fillColor: "rgba(220,220,220,0.5)",
//                    strokeColor: "rgba(220,220,220,0.8)",
//                    highlightFill: "rgba(220,220,220,0.75)",
//                    highlightStroke: "rgba(220,220,220,1)",
//                    data: [65, 59, 80, 81, 56, 55, 40]
//                },
//                {
//                    label: "My Second dataset",
//                    fillColor: "rgba(151,187,205,0.5)",
//                    strokeColor: "rgba(151,187,205,0.8)",
//                    highlightFill: "rgba(151,187,205,0.75)",
//                    highlightStroke: "rgba(151,187,205,1)",
//                    data: [28, 48, 40, 19, 86, 27, 90]
//                }
//            ];
//            this.labels=labels;
//            this.datasets=data;
        }
    },
    chartContext: {
        value: null
    },
    chart: {
        value: null
    },

    height: {
        value: 400
    },

    width: {
        value: 600
    },
    enterDocument: {
        value: function (firstTime) {
            this.super(firstTime);

            Chart.defaults.global.responsive = true;
            Chart.defaults.global.maintainAspectRatio = true;

            this.chartContext = this.element.getContext("2d");
            this.drawChart();

            this.addPathChangeListener('labels', this, 'updateChart');
            this.addPathChangeListener('datasets', this, 'updateChart');
        }
    },
    options: {
        value: {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero: true,

            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - If there is a stroke on each bar
            barShowStroke: true,

            //Number - Pixel width of the bar stroke
            barStrokeWidth: 2,

            //Number - Spacing between each of the X value sets
            barValueSpacing: 5,

            //Number - Spacing between data sets within X values
            barDatasetSpacing: 1,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        }
    },
    updateChart:{
      value:function(){
          this.chart.destroy();
          this.drawChart();
      }
    },
    labels: {
        value:null
    },
    datasets: {
       value:null
    },
    allData: {
       value:null
    },
    getDatasets: {
        value: function () {

            var dataset = {labels: [], datasets: []};
            dataset.labels = this.labels;
            dataset.datasets = this.datasets;
            return dataset;
        }
    },
    drawChart: {
        value: function () {
            if (this.chartContext == null) return;
            this.allData = this.getDatasets();
            this.chart = new Chart(this.chartContext).Bar(this.allData, this.options);
        }
    }
});
