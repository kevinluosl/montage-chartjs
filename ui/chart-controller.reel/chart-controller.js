/**
 * @module ui/chart-controller.reel
 * @requires montage/ui/component
 */
var RangeController = require("montage/core/range-controller").RangeController;

/**
 * @class ChartController
 * @extends Component
 */
exports.ChartController = RangeController.specialize(/** @lends ChartController# */ {
    constructor: {
        value: function ChartController(content, labels) {
            this.super(content);
            this.labels = labels;
            //this.addOwnPropertyChangeListener("content",this);
            //this.addPathChangeListener("content",this,"handleValuesChange");
            //this.addPathChangeListener("content",this,"handleValuesChange");
        }
    },
    //handleValuesChange:{
    //    value: function(plus,minus,index){
    //        debugger
    //    }
    //},
    //handlePropertyChange:{
    //    value:function(){
    //        debugger
    //    }
    //},
    labels: {
        value: null
    }
});
