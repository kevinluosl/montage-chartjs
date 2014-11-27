/**
 * @module ui/chart-controller.reel
 * @requires montage/ui/component
 */
var RangeController = require( "montage/core/range-controller" ).RangeController;

/**
 * @class ChartController
 * @extends Component
 */
exports.ChartController = RangeController.specialize( /** @lends ChartController# */ {
	constructor: {
		value: function ChartController( content, labels ) {
			this.super( content );
			this.labels = labels;

		}
	},
	labels: {
		value: null
	}
} );
