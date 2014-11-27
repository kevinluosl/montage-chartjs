/**
 * @module ui/chartjs.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;
var Chart = require( "../../core/chart" );

/**
 * @class Chartjs
 * @extends Component
 */
exports.Chartjs = Component.specialize( /** @lends Chartjs# */ {

	contentController: {
		set: function( val ) {
			this._contentController = val;
		},
		get: function() {
			return this._contentController;
		}
	},

	chartContext: {
		value: null
	},
	chart: {
		value: null
	},
	options: {
		value: null
	},
	labels: {
		value: null
	},
	datasets: {
		value: null
	},

	_needRefreshChart: {
		value: false
	},
	realPic: {
		value: null
	},

	constructor: {
		value: function Chart() {
			this.super();

			this.addPathChangeListener( "contentController", this, "handleContentControllerChange" );

			this.defineBindings( {
				"datasets": {
					"<-": "contentController.content"
				}, "labels": {
					"<-": "contentController.labels"
				}
			} );

			this.addRangeAtPathChangeListener( "datasets", this, "handleValuesChange" );
			this.addRangeAtPathChangeListener( "labels", this, "handleValuesChange" );
		}
	},
	getDatasets: {
		value: null
	},

	enterDocument: {
		value: function( isFirstTime ) {
			this.super( isFirstTime );
			this.chartContext = this.element.getContext( "2d" );
		}
	},

	draw: {
		value: function() {
			this.drawChart();
		}
	},

	handleContentControllerChange: {
		value: function() {
			this.reDraw();
		}
	},
	handleValuesChange: {
		value: function() {
			this.reDraw();
		}
	},

	destroy: {
		value: null
	},

	reDraw: {
		value: function() {
			this._needRefreshChart = true;
			this.needsDraw = true;
		}
	},
	drawChart: {
		value: function() {

		}
	}


} );
