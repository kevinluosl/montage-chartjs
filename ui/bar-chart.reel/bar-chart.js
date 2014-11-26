/**
 * @module ui/bar-chart.reel
 * @requires montage/ui/component
 */
var Chartjs = require("../chartjs.reel").Chartjs;

/**
 * @class BarChart
 * @extends Component
 */
exports.BarChart = Chartjs.specialize(/** @lends BarChart# */ {
    constructor: {
        value: function BarChart() {
            this.super();
            this.selfRefesh = false;

            this.addPathChangeListener("contentController", this, "handleContentControllerChange");
            this.addPathChangeListener("datasets", this, "handleValuesChange");
            this.addPathChangeListener("labels", this, "handleValuesChange");
            this.defineBindings({
                "datasets": {
                    "<-": "contentController.content"
                }, "labels": {
                    "<-": "contentController.labels"
                }
            });
        }
    },
    setRedraw: {
        value: function () {
            this.selfRefesh = true;
            this.needsDraw = true;
        }
    },
    scaleBeginAtZero: {
        set: function (val) {
            this._scaleBeginAtZero = val;
            this.options.scaleBeginAtZero = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._scaleBeginAtZero;
        }
    },

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: {
        set: function (val) {
            this._scaleShowGridLines = val;
            this.options.scaleShowGridLines = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._scaleShowGridLines;
        }
    },

    //String - Colour of the grid lines
    scaleGridLineColor: {
        set: function (val) {
            this._scaleGridLineColor = val;
            this.options.scaleGridLineColor = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._scaleGridLineColor;
        }
    },

    //Number - Width of the grid lines
    scaleGridLineWidth: {
        set: function (val) {
            this._scaleGridLineWidth = val;
            this.options.scaleGridLineWidth = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._scaleGridLineWidth;
        }
    },

    //Boolean - If there is a stroke on each realPic
    barShowStroke: {
        set: function (val) {
            this._barShowStroke = val;
            this.options.barShowStroke = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._barShowStroke;
        }
    },

    //Number - Pixel width of the realPic stroke
    barStrokeWidth: {
        set: function (val) {
            this._barStrokeWidth = val;
            this.options.barStrokeWidth = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._barStrokeWidth;
        }
    },

    //Number - Spacing between each of the X value sets
    barValueSpacing: {
        set: function (val) {
            this._barValueSpacing = val;
            this.options.barValueSpacing = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this._barValueSpacing;
        }
    },
    //Number - Spacing between data sets within X values
    barDatasetSpacing: {
        set: function (val) {
            this._barDatasetSpacing = val;
            this.options.barDatasetSpacing = val;
            this.selfRefesh = true;
            this.needsDraw = true;
        },
        get: function () {
            return this.barDatasetSpacing;
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
    //initLocalData: {
    //    value: function () {
    //        this.labels = this.contentController.labels;
    //        this.datasets = this.contentController.datasets;
    //    }
    //},
    contentController: {
        set: function (val) {
            this._contentController = val;
        },
        get: function () {
            return this._contentController;
        }
    },
//    setSeriesFillColor: {
//        value: function (serieIdx, fillClr) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                this.realPic.datasets[serieIdx].fillColor = fillClr;
//                this.datasets[serieIdx].fillColor = fillClr;
//                if (this.realPic.datasets[serieIdx].bars) {
//                    for (var k = 0, len = this.realPic.datasets[serieIdx].bars.length; k < len; k++) {
//                        this.realPic.datasets[serieIdx].bars[k].fillColor = fillClr;
//                    }
//                }
//                this.needsDraw = true;
//            }
//            else {
//                throw "Your index is out of the array length.";
//            }
//        }
//    },
//    getSeriesFillColor: {
//        value: function (serieIdx) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                return this.realPic.datasets[serieIdx].fillColor;
//            }
//            else {
//                throw "Your index is out of the array length.";
//            }
//        }
//    },
//    setSeriesStrokeColor: {
//        value: function (serieIdx, strokeClr) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                this.realPic.datasets[serieIdx].strokeColor = strokeClr;
//                this.datasets[serieIdx].strokeColor = strokeClr;
//                if (this.realPic.datasets[serieIdx].bars) {
//                    for (var k = 0, len = this.realPic.datasets[serieIdx].bars.length; k < len; k++) {
//                        this.realPic.datasets[serieIdx].bars[k].strokeColor = strokeClr;
//                    }
//                }
//                this.needsDraw = true;
//            }
//            else {
//                throw "Your serial index is out of the array length.";
//            }
//        }
//    },
//    getSeriesStrokeColor: {
//        value: function (serieIdx) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                return this.realPic.datasets[serieIdx].strokeColor;
//            }
//            else {
//                throw "Your serial index is out of the array length.";
//            }
//        }
//    },
//    setLabels: {
//        value: function (dataidx, label) {
////            if (this.realPic && this.realPic.datasets && this.realPic.datasets[0].bars && dataidx < this.realPic.datasets[0].bars.length) {
////                for (var s = 0; s < this.realPic.datasets.length; s++) {
////                    this.realPic.datasets[s].label = label;
////                    if (this.realPic.datasets[s].bars) {
////                        this.realPic.datasets[s].bars[dataidx].label = label;
////                        this.needsDraw = true;
////                    }
////                }
////            }
//            if (dataidx < 0) dataidx = 0;
//            if (this.labels && dataidx < this.labels.length) {
//                this.labels[dataidx] = label;
//                this.selfRefesh = true;
//                this.needsDraw = true;
//            }
//            else {
//                throw "Your label index is out of the array length.";
//            }
//        }
//    },
//    getLabels: {
//        value: function (dataidx) {
//            if (dataidx < 0) dataidx = 0;
////            if (this.realPic && this.realPic.datasets && this.realPic.datasets[0].bars && dataidx < this.realPic.datasets[0].bars.length) {
////                return  this.realPic.datasets[0].bars[dataidx].label;
//            if (this.labels && dataidx < this.labels.length) {
//                return this.labels[dataidx];
//            }
//            else {
//                throw "Your label index is out of the array length.";
//            }
//        }
//    },
//    setSeriesData: {
//        value: function (serieIdx, dataidx, val) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (dataidx < 0) dataidx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                if (this.realPic.datasets[serieIdx].bars && dataidx < this.realPic.datasets[serieIdx].bars.length) {
//                    this.datasets[serieIdx].data[dataidx] = val;
//                    this.realPic.datasets[serieIdx].bars[dataidx].value = val;
//                    this.needsDraw = true;
//                }
//                else {
//                    throw "Your data index is out of the array length.";
//                }
//            }
//            else {
//                throw "Your data index is out of the array length.";
//            }
//        }
//    },
//    getSeriesData: {
//        value: function (serieIdx, dataidx) {
//            if (serieIdx < 0) serieIdx = 0;
//            if (dataidx < 0) dataidx = 0;
//            if (this.realPic && this.realPic.datasets && serieIdx < this.realPic.datasets.length) {
//                if (this.realPic.datasets[serieIdx].bars && dataidx < this.realPic.datasets[serieIdx].bars.length) {
//                    return this.realPic.datasets[serieIdx].bars[dataidx].value;
//                }
//                else {
//                    throw "Your data index is out of the array length.";
//                }
//            }
//            else {
//                throw "Your data index is out of the array length.";
//            }
//        }
//    },
    destroy: {
        value: function () {
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
        value: function (datasets, labels) {
            this.datasets = datasets;
            this.labels = labels;
            this.selfRefesh = true;
            this.needsDraw = true;
        }
    },
    getDatasets: {
        value: function () {

            var dataset = null;
            dataset = {labels: [], datasets: []};
            dataset.labels = this.labels;
            dataset.datasets = this.datasets;
            return dataset;
        }
    },
    //addLocalData: {
    //    value: function (darr) {
    //        if (!this.datasets) return;
    //        for (var k = 0, len = this.datasets.length; k < len; k++) {
    //            this.datasets[k].data.splice(-1, 0, darr[k]);
    //        }
    //    }
    //},
    //addData: {
    //    value: function (darr, label) {
    //        if (!darr || !label) return;
    //        if (this.realPic && darr.length == this.realPic.datasets.length) {
    //            this.labels.splice(-1, 0, label);
    //            this.addLocalData(darr);
    //            this.realPic.addData(darr, label);
    //            this.needsDraw = true;
    //        }
    //        else {
    //            throw "Your data array is not suitable for series.";
    //        }
    //    }
    //},
    //removeData: {
    //    value: function (dataidx) {
    //        if (dataidx > 0 && dataidx < this.labels.length) {
    //            this.labels.splice(dataidx, 1);
    //            for (var k = 0, len = this.realPic.datasets.length; k < len; k++) {
    //                this.datasets[k].data.splice(dataidx, 1);
    //                this.realPic.datasets[k].bars.splice(dataidx, 1);
    //            }
    //            this.needsDraw = true;
    //        }
    //        else {
    //            throw "Your data index is out of bounds.";
    //        }
    //    }
    //},
    handleContentControllerChange: {
        value: function () {
            //debugger
            this.needsDraw = true;
        }
    },
    handleValuesChange: {
        value: function () {
            this.needsDraw = true;
        }
    },
    removeAllData: {
        value: function () {
            this.destroy();
        }
    },
    drawChart: {
        value: function () {
            if (this.chartContext == null) return;
            this.allData = this.getDatasets();
            if (!this.allData.labels || !this.allData.datasets) return;
            if (!this.realPic) {
                this.chart = new Chart(this.chartContext);
                this.realPic = this.chart.Bar(this.allData, this.options);
            }
            else if (this.selfRefesh) {
                this.realPic.destroy();
                this.realPic = this.chart.Bar(this.allData, this.options);
                this.selfRefesh = false;
            }
            else {
                this.realPic.update();
            }
        }
    }

});
