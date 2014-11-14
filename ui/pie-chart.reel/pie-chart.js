/**
 * @module ui/pie-chart.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class PieChart
 * @extends Component
 */
exports.PieChart = Component.specialize(/** @lends PieChart# */ {
    constructor: {
        value: function PieChart() {
            this.super();
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
    pieOrDoughnut:{
        value:false
    },
    enterDocument: {
        value: function (firstTime) {
            this.super(firstTime);
//
            Chart.defaults.global.responsive = true;
            Chart.defaults.global.maintainAspectRatio = true;

            this.chartContext = this.element.getContext("2d");
            this.drawChart();

            this.addRangeAtPathChangeListener('datasets', this, 'updateChart');
        }
    },
    options: {
        value: {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout : 0, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false,

            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        }
    },
    updateChart:{
        value:function(){
            if (this.chart!=null) {
                this.chart.destroy();
            }
            this.drawChart();
        }
    },
    datasets:{
        value:null
    },
    allData: {
        value:null
    },
    getDatasets: {
        value: function () {
            return this.datasets;
        }
    },
    drawChart: {
        value: function () {
            if (this.chartContext == null) return;
            this.allData = this.getDatasets();
            if (this.allData==null || this.allData=='undefined') return;
            if (this.pieOrDoughnut)
            {
                this.options.percentageInnerCutout=50;
            }
            else
            {
                this.options.percentageInnerCutout=0;
            }
            this.chart = new Chart(this.chartContext).Pie(this.allData, this.options);
        }
    }
});
