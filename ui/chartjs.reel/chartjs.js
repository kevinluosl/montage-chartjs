/**
 * @module ui/chartjs.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Chart = require( "../../core/chart" );

/**
 * @class Chartjs
 * @extends Component
 */
exports.Chartjs = Component.specialize(/** @lends Chartjs# */ {

	chartContext: {
		value: null
	},

	chart: {
		value: null
	},

	//Chart datasets
	data: {
		value: null
	},

	constructor: {
		value: function Chart() {
			this.super();
		}
	}


});
