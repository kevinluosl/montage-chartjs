/**
 * @module ui/chartjs.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Chart = require("../../core/chart");

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
    options: {
        value: null
    },
    labels: {
        value: null
    },
    datasets: {
        value: null
    },
    constructor: {
        value: function Chart() {
            this.super();
        }
    },
    getDatasets: {
        value: null
    },
    contentController: {
        value: null
    },
    enterDocument: {
        value: function (isFirstTime) {
            this.super(isFirstTime);
            this.chartContext = this.element.getContext("2d");
//			this.drawChart();
//            this.addOwnPropertyChangeListener('labels', this);//, 'updateChart');
//            this.addRangeAtPathChangeListener('labels', this, 'updateChart');
//            this.addRangeAtPathChangeListener('contentController', this, 'updateChart');
        }
    },
//    handlePropertyChange:{
//      value:function(){
//          debugger
//          this.needsDraw = true;
//      }
//    },
//    setSeriesFillColor: {
//        value: null
//    },
//    getSeriesFillColor: {
//        value: null
//    },
//    setSeriesStrokeColor: {
//        value: null
//    },
//    getSeriesStrokeColor: {
//        value: null
//    },
//    setSeriesLabels: {
//        value: null
//    },
//    getSeriesLabels: {
//        value: null
//    },
//    setSeriesData: {
//        value: null
//    },
//    getSeriesData: {
//        value: null
//    },
//    setFreshData: {
//        value: null
//    },
//    addLocalData: {
//        value: null
//    },
//    addData: {
//        value: null
//    },
//    removeData: {
//        value: null
//    },
//    removeAllData: {
//        value: null
//    },
    selfRefesh: {
        value: false
    },
    realPic: {
        value: null
    },
    allData: {
        value: null
    },
    draw: {
        value: function () {
            this.drawChart();
        }
    },
    destroy: {
        value: null
    },
    updateChart: {
        value: function () {

        }
    },
    setRedraw: {
        value: null
    },
    drawChart: {
        value: function () {

        }
    }


});
