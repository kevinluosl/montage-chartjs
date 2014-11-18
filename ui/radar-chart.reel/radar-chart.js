/**
 * @module ui/radar-chart.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;
var Chart = require( "../../core/chart" );
/**
 * @class RadarChart
 * @extends Component
 */
exports.RadarChart = Component.specialize( /** @lends RadarChart# */ {
	constructor: {
		value: function RadarChart() {
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
		value: null
	},
	width: {
		value: null
	},
	enterDocument: {
		value: function( firstTime ) {
			this.super( firstTime );

			Chart.defaults.global.responsive = true;
			Chart.defaults.global.maintainAspectRatio = true;

			this.chartContext = this.element.getContext( "2d" );
			this.drawChart();

			this.addRangeAtPathChangeListener( 'labels', this, 'updateChart' );
			this.addRangeAtPathChangeListener( 'datasets', this, 'updateChart' );
		}
	},
	options: {
		value: {
			//Boolean - Whether to show lines for each scale point
			scaleShowLine: true,

			//Boolean - Whether we show the angle lines out of the radar
			angleShowLineOut: true,

			//Boolean - Whether to show labels on the scale
			scaleShowLabels: false,

			// Boolean - Whether the scale should begin at zero
			scaleBeginAtZero: true,

			//String - Colour of the angle line
			angleLineColor: "rgba(0,0,0,.1)",

			//Number - Pixel width of the angle line
			angleLineWidth: 1,

			//String - Point label font declaration
			pointLabelFontFamily: "'Arial'",

			//String - Point label font weight
			pointLabelFontStyle: "normal",

			//Number - Point label font size in pixels
			pointLabelFontSize: 10,

			//String - Point label font colour
			pointLabelFontColor: "#666",

			//Boolean - Whether to show a dot for each point
			pointDot: true,

			//Number - Radius of each point dot in pixels
			pointDotRadius: 3,

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
	updateChart: {
		value: function() {
			if ( this.chart != null ) {
				this.chart.destroy();
			}
			this.drawChart();
		}
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
	getDatasets: {
		value: function() {

			var dataset = {labels: [], datasets: []};
			dataset.labels = this.labels;
			dataset.datasets = this.datasets;
			return dataset;
		}
	},
	drawChart: {
		value: function() {
			if ( this.chartContext == null ) return;
			this.allData = this.getDatasets();
			if ( !this.allData.labels || !this.allData.datasets ) return;
			this.chart = new Chart( this.chartContext ).Radar( this.allData, this.options );
		}
	}
} );
