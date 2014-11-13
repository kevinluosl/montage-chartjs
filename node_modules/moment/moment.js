/**
 * @module core/moment
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
var defaultLocalizer = require("montage/core/localizer").defaultLocalizer;
var MomentJS = require("moment/min/moment-with-locales.min");

MomentJS.locale(defaultLocalizer.locale);
exports.Moment = MomentJS;
