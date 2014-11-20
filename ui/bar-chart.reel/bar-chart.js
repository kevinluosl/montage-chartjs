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
			this.selfRefesh = false;
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
	setSeriesFillColor: {
		value: function( serieIdx, fillClr ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				this.realPic.datasets[serieIdx].fillColor = fillClr;
				this.datasets[serieIdx].fillColor = fillClr;
				if ( this.realPic.datasets[serieIdx].bars ) {
					for ( var k = 0; k < this.realPic.datasets[serieIdx].bars.length; k++ ) {
						this.realPic.datasets[serieIdx].bars[k].fillColor = fillClr;
					}
				}
				this.needsDraw = true;
			}
			else {
				throw "Your index is out of the array length.";
			}
		}
	},
	getSeriesFillColor: {
		value: function( serieIdx ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				return  this.realPic.datasets[serieIdx].fillColor;
			}
			else {
				throw "Your index is out of the array length.";
			}
		}
	},
	setSeriesStrokeColor: {
		value: function( serieIdx, strokeClr ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				this.realPic.datasets[serieIdx].strokeColor = strokeClr;
				this.datasets[serieIdx].strokeColor = strokeClr;
				if ( this.realPic.datasets[serieIdx].bars ) {
					for ( var k = 0; k < this.realPic.datasets[serieIdx].bars.length; k++ ) {
						this.realPic.datasets[serieIdx].bars[k].strokeColor = strokeClr;
					}
				}
				this.needsDraw = true;
			}
			else {
				throw "Your serial index is out of the array length.";
			}
		}
	},
	getSeriesStrokeColor: {
		value: function( serieIdx ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				return  this.realPic.datasets[serieIdx].strokeColor;
			}
			else {
				throw "Your serial index is out of the array length.";
			}
		}
	},
	setLabels: {
		value: function( dataidx, label ) {
			if ( this.labels && dataidx < this.labels.length ) {
				this.labels[dataidx] = label;
				this.selfRefesh = true;
				this.needsDraw = true;
			}
			else {
				throw "Your label index is out of the array length.";
			}
		}
	},
	getLabels: {
		value: function( dataidx ) {
			if ( this.labels && dataidx < this.labels.length ) {
				return this.labels[dataidx];
			}
			else {
				throw "Your label index is out of the array length.";
			}
		}
	},
	setSeriesData: {
		value: function( serieIdx, dataidx, val ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				if ( this.realPic.datasets[serieIdx].bars && dataidx < this.realPic.datasets[serieIdx].bars.length ) {
					this.datasets[serieIdx].data[dataidx] = val;
					this.realPic.datasets[serieIdx].bars[dataidx].value = val;
					this.needsDraw = true;
				}
				else {
					throw "Your data index is out of the array length.";
				}
			}
			else {
				throw "Your data index is out of the array length.";
			}
		}
	},
	getSeriesData: {
		value: function( serieIdx, dataidx ) {
			if ( this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length ) {
				if ( this.realPic.datasets[serieIdx].bars && dataidx < this.realPic.datasets[serieIdx].bars.length ) {
					return this.realPic.datasets[serieIdx].bars[dataidx].value;
				}
				else {
					throw "Your data index is out of the array length.";
				}
			}
			else {
				throw "Your data index is out of the array length.";
			}
		}
	},
	destroy: {
		value: function() {
			this.realPic.destroy();
			this.chart.destroy();
			this.datasets = null;
			this.allData = null;
			this.labels = null;
			this.chart = null;
			this.realPic = null;
		}
	},
	setFreshData: {
		value: function( datasets, labels ) {
			this.datasets = datasets;
			this.labels = labels;
			this.selfRefesh = true;
			this.needsDraw = true;
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
	removeAllData: {
		value: function() {
			if ( this.realPic && this.realPic.datasets )
				for ( var k = 0; k < this.realPic.datasets.length; k++ ) {
					this.realPic.removeData();
				}
		}
	},
	drawChart: {
		value: function() {
			if ( this.chartContext == null ) return;
			this.allData = this.getDatasets();
			if ( !this.allData.labels || !this.allData.datasets ) return;
			if ( !this.realPic ) {
				this.chart = new Chart( this.chartContext );
				this.realPic = this.chart.Bar( this.allData, this.options );
			}
			else if ( this.selfRefesh ) {
				this.realPic.destroy();
				this.realPic = this.chart.Bar( this.allData, this.options );
				this.selfRefesh = false;
			}
			else {
				this.realPic.update();
			}
		}
	}

} );
