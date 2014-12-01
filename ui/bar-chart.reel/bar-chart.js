/**
 * @module ui/bar-chart.reel
 * @requires montage/ui/component
 */
var Chartjs = require( "../chartjs.reel" ).Chartjs;

/**
 * @class BarChart
 * @extends Component
 */
exports.BarChart = Chartjs.specialize( /** @lends BarChart# */ {
	constructor: {
		value: function BarChart() {
			this.super();
			this._needRefreshChart = false;

		}
	},

	scaleBeginAtZero: {
		set: function( val ) {
			this.options.scaleBeginAtZero = val;
			this.reDraw();
		},
		get: function() {
			return this.options.scaleBeginAtZero;
		}
	},

	//Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines: {
		set: function( val ) {
			this.options.scaleShowGridLines = val;
			this.reDraw();
		},
		get: function() {
			return this.options.scaleShowGridLines;
		}
	},

	//String - Colour of the grid lines
	scaleGridLineColor: {
		set: function( val ) {
			this.options.scaleGridLineColor = val;
			this.reDraw();
		},
		get: function() {
			return this.options.scaleGridLineColor;
		}
	},

	//Number - Width of the grid lines
	scaleGridLineWidth: {
		set: function( val ) {
			this.options.scaleGridLineWidth = val;
			this.reDraw();
		},
		get: function() {
			return this.options.scaleGridLineWidth;
		}
	},

	//Boolean - If there is a stroke on each realPic
	barShowStroke: {
		set: function( val ) {
			this.options.barShowStroke = val;
			this.reDraw();
		},
		get: function() {
			return this.options.barShowStroke;
		}
	},

	//Number - Pixel width of the realPic stroke
	barStrokeWidth: {
		set: function( val ) {
			this.options.barStrokeWidth = val;
			this.reDraw();
		},
		get: function() {
			return this.options.barStrokeWidth;
		}
	},

	//Number - Spacing between each of the X value sets
	barValueSpacing: {
		set: function( val ) {
			this.options.barValueSpacing = val;
			this.reDraw();
		},
		get: function() {
			return this.options.barValueSpacing;
		}
	},
	//Number - Spacing between data sets within X values
	barDatasetSpacing: {
		set: function( val ) {
			this.options.barDatasetSpacing = val;
			this.reDraw();
		},
		get: function() {
			return this.options.barDatasetSpacing;
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

			//Boolean - If there is a stroke on each realPic
			barShowStroke: true,

			//Number - Pixel width of the realPic stroke
			barStrokeWidth: 2,

			//Number - Spacing between each of the X value sets
			barValueSpacing: 5,

			//Number - Spacing between data sets within X values
			barDatasetSpacing: 1,

			responsive: true,
			//String - A legend template
			legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		}
	},

	getDatasets: {
		value: function() {
			var dataset = null;
			dataset = {labels: [], datasets: []};
			dataset.labels = this.labels;
			dataset.datasets = this.datasets;
			return dataset;
		}
	},

	drawChart: {
		value: function() {
			if ( this.chartContext == null ) return;
			var allData = this.getDatasets();
			if ( !allData.labels || !allData.datasets ) return;
			if ( !this.realPic ) {
				this.chart = new Chart( this.chartContext );
				this.realPic = this.chart.Bar( allData, this.options );
			}
			else if ( this._needRefreshChart ) {
				//this.realPic.initialize(allData);
				//this.realPic.update();
				this.realPic.destroy();
				this.realPic = this.chart.Bar( allData, this.options );
				this._needRefreshChart = false;
			}
			else { // We don't go here now, see if we have a way to know some items are change in RangeController.content, than we can do something here
				this.realPic.update();
			}
		}
	}



} );
