/**
 * @module ui/polar-chart.reel
 * @requires montage/ui/component
 */
var Chartjs = require("../chartjs.reel").Chartjs;
/**
 * @class PolarChart
 * @extends Component
 */
exports.PolarChart = Chartjs.specialize( /** @lends PolarChart# */ {
	constructor: {
		value: function PolarChart() {
			this.super();
		}
	},
	options: {
		value: {
			//Boolean - Show a backdrop to the scale label
			scaleShowLabelBackdrop: true,

			//String - The colour of the label backdrop
			scaleBackdropColor: "rgba(255,255,255,0.75)",

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero: true,

			//Number - The backdrop padding above & below the label in pixels
			scaleBackdropPaddingY: 2,

			//Number - The backdrop padding to the side of the label in pixels
			scaleBackdropPaddingX: 2,

			//Boolean - Show line for each value in the scale
			scaleShowLine: true,

			//Boolean - Stroke a line around each segment in the chart
			segmentShowStroke: true,

			//String - The colour of the stroke on each segement.
			segmentStrokeColor: "#fff",

			//Number - The width of the stroke value in pixels
			segmentStrokeWidth: 2,

			//Number - Amount of animation steps
			animationSteps: 100,

			//String - Animation easing effect.
			animationEasing: "easeOutBounce",

			//Boolean - Whether to animate the rotation of the chart
			animateRotate: true,

			//Boolean - Whether to animate scaling the chart from the centre
			animateScale: false,
            responsive: true,
			//String - A legend template
			legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

		}
	}
} );
