/**
 * @module ui/charts/line-chart.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
//var Moment = require("node_modules/moment/moment").Moment;
/**
 * @class LineChart
 * @extends Component
 */
exports.LineChart = Component.specialize(/** @lends LineChart# */ {
    constructor: {
        value: function LineChart() {
            this.super();
        }
    },

    chart: {
        value: null
    },

    height: {
        value: 300
    },

    width: {
        value: 600
    },

    labels: {
        value: null
    },
    datasets: {
        value: null
    },
    allData: {
        value: null
    },

    options: {
        value: {
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines: true,

            //String - Colour of the grid lines
            scaleGridLineColor: "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        }
    },

    chartData: {
        value: {}
    },

    chartContext: {
        value: null
    },

    enterDocument: {
        value: function (firstTime) {
            this.super(firstTime);

            Chart.defaults.global.responsive = true;
            Chart.defaults.global.maintainAspectRatio = true;

            this.chartContext = this.element.getContext("2d");

            this.initChart();

            this.addRangeAtPathChangeListener('labels', this, 'updateChart');
            this.addRangeAtPathChangeListener('datasets', this, 'updateChart');
        }
    },

    exitDocument: {
        value: function () {
            this.super();
        }
    },

    initChart: {
        value: function () {
            if (this.chartContext == null) return;
            this.chartData = {labels: [], datasets: []};
            this.chartData.labels = this.getLabels();
            this.chartData.datasets = this.getDatasets();
            if (this.chartData.labels == null || this.chartData.labels == 'undefined') {
                return;
            }
            if (this.chartData == null || this.chartData == 'undefined') return;
            this.chart = new Chart(this.chartContext).Line(this.chartData, this.options);
        }
    },

    getLabels: {
        value: function () {
            return this.labels;

        }
    },

    getDatasets: {
        value: function () {
            return this.datasets;
        }
    },

    updateChart: {
        value: function () {
            if (this.chartContext === null) {
                return;
            }

            this.chart.destroy();
            this.initChart();
        }
    }
});