/**
 * @module ui/chart-controller.reel
 * @requires montage/ui/component
 */
var RangeController = require( "montage/core/range-controller" ).RangeController;

/**
 * @class ChartRangeController
 * @extends Component
 */
exports.ChartRangeController = RangeController.specialize( /** @lends ChartRangeController# */ {
	constructor: {
		value: function ChartRangeController( content, labels ) {
			this.super( content );
			this.labels = labels;

		}
	},
	labels: {
		value: null
	}
} );
