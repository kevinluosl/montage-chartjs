/**
 * @module ui/charts/line-chart.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Moment = require("node_modules/moment/moment").Moment;
/**
 * @class LineChart
 * @extends Component
 */
exports.LineChart = Component.specialize( /** @lends LineChart# */ {
    constructor: {
        value: function LineChart() {
            this.super();
        }
    },

    chart: {
        value: null
    },

    height: {
        value: 600
    },

    width: {
        value: 800
    },

    data: {
        value: []
    },

    label: {
        value: "label"
    },

    labelFormat: {
        value: null
    },

    fields: {
        value: []
    },

    colors: {
        value: [{
            //GREEN
            strokeColor: "#69cca9",
            pointStrokeColor: "#69cca9",
            pointColor: "#69cca9",
            fillColor: "rgba(181,231,213,0.4)"
        }, {
            //BLUE
            strokeColor: "#5f89c7",
            pointStrokeColor: "#5f89c7",
            pointColor: "#5f89c7",
            fillColor: "rgba(169,193,227,0.4)"
        }, {
            //VIOLET
            strokeColor: "#8568ca",
            pointStrokeColor: "#8568ca",
            pointColor: "#8568ca",
            fillColor: "rgba(193,178,230,0.4)"
        }, {
            //BROWN
            strokeColor: "#77312a",
            pointStrokeColor: "#77312a",
            pointColor: "#77312a",
            fillColor: "rgba(216,143,136,0.4)"
        }]
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
        value: function(firstTime) {
            this.super(firstTime);

            Chart.defaults.global.responsive = true;
            Chart.defaults.global.maintainAspectRatio = true;

            this.chartContext = this.element.getContext("2d");

            this.initChart();

            this.addPathChangeListener('label', this, 'updateChart');
            this.addPathChangeListener('fields', this, 'updateChart');
            this.addRangeAtPathChangeListener('fields', this, 'updateChart');
            this.addPathChangeListener('data', this, 'updateChart');
            this.addRangeAtPathChangeListener('data', this, 'updateChart');
        }
    },

    exitDocument: {
        value: function() {
            this.super();
        }
    },

    initChart: {
        value: function(){
            this.chartData = {};
            this.chartData.labels = this.getLabels();
            this.chartData.datasets = this.getDatasets();

            this.chart = new Chart(this.chartContext).Line(this.chartData, this.options);
        }
    },

    getLabels: {
        value: function() {
            var self = this;

            return self.data.map(function(elt) {
                if (self.labelFormat === null){
                    return elt[self.label];
                } else {
                    return new Moment(elt[self.label]).format(self.labelFormat);
                }
            });
        }
    },

    getDatasets: {
        value: function() {
            var self = this;

            // Build datasets :
            var datasets = [];

            for (var i = 0; i < self.fields.length; i++) {
                var dataset = {
                    label: self.fields[i],
                    fillColor: self.colors[i].fillColor,
                    strokeColor: self.colors[i].strokeColor,
                    pointColor: self.colors[i].pointColor,
                    pointStrokeColor: self.colors[i].pointStrokeColor,
                    data: self.data.map(function(elt) {
                        return elt[self.fields[i]]
                    })
                };

                datasets.push(dataset);
            }

            return datasets;
        }
    },

    updateChart: {
        value: function() {
            if (this.chartContext === null){
                return;
            }

            this.chart.destroy();
            this.initChart();
        }
    }
});