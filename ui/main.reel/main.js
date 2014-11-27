/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require( "montage/ui/component" ).Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize( /** @lends Main# */ {
	constructor: {
		value: function Main() {
			this.super();
		}
	},
	lineLabels: {
		value: null
	},
	lineDatasets: {
		value: null
	},
	barLabels: {
		value: null
	},
	barDatasets: {
		value: null
	},
	radarLabels: {
		value: null
	},
	radarDatasets: {
		value: null
	},
	pieDatasets: {
		value: null
	},
	polarDatasets: {
		value: null
	},
	templateDidLoad: {
		value: function() {
			this.barLabels = ["January", "February", "March", "April", "May", "June", "July"];
			this.barDatasets = [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.5)",
					strokeColor: "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.5)",
					strokeColor: "rgba(151,187,205,0.8)",
					highlightFill: "rgba(151,187,205,0.75)",
					highlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 86, 27, 96]
				}
			];

			this.lineLabels = this.barLabels;
			this.lineDatasets = [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 86, 27, 98]
				}

			];

			this.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
			this.radarDatasets = [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 90, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 96, 27, 100]
				}
			];

			this.pieDatasets = [
				{
					value: 300,
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];

			this.polarDatasets = [
				{
					value: 300,
					color: "#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}
			];

			//Testing
			var self = this;
			setTimeout( function() {
//                self.barLabels[1] = "TestLabel";
//                self.barDatasets[0].data[0]=96;
//                self.barDatasets[0].fillColor="rgba(100,220,220,0.5)";
//                self.templateObjects.barChart.reDraw();
//				self.barDatasets[0].label = 'Meg';
//
				self.templateObjects.chartRangeController.content[0].label = 'New Label Test';

			}, 5000 );

		}
	}
} );
