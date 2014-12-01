/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
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

//            Object.observe(this.barDatasets, function() {
//                console.log("Datasets fill color has been changed.");
//            });

            //Testing
            var self = this;
            setTimeout(function() {
//                self.barLabels[1] = "TestLabel";
//                self.barDatasets[0].data[0] = 96;
//                self.barDatasets[0].fillColor = "rgba(100,220,220,0.5)";
                //self.templateObjects.barChart.reDraw();
//
                self.templateObjects.chartController.content[0].label = 'New Label Test';
                debugger
//                self.templateObjects.chartController.content[0].fillColor="rgba(100,220,220,0.5)";
            }, 3000);

        }
    }
});
