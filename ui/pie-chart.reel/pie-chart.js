/**
 * @module ui/pie-chart.reel
 * @requires montage/ui/component
 */
var Chartjs = require("../chartjs.reel").Chartjs;
/**
 * @class PieChart
 * @extends Component
 */
exports.PieChart = Chartjs.specialize(/** @lends PieChart# */ {
    constructor: {
        value: function PieChart() {
            this.super();
        }
    },
    pieOrDoughnut: {
        value: false
    },
    drawChart: {
        value: function () {
            if (this.pieOrDoughnut) {
                this.options.percentageInnerCutout = 50;
            }
            else {
                this.options.percentageInnerCutout = 0;
            }
            this.super();
        }
    },
    options: {
        value: {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke: true,

            //String - The colour of each segment stroke
            segmentStrokeColor: "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth: 2,

            //Number - The percentage of the chart that we cut out of the middle
            percentageInnerCutout: 0, // This is 0 for Pie charts

            //Number - Amount of animation steps
            animationSteps: 100,

            //String - Animation easing effect
            animationEasing: "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale: false,
            responsive: true,
            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        }
    }
});
