'use strict';

var fillZero = require('zhf.fill-zero');

/**
 * @description 日期格式化
 * @param {Number} date - 毫秒数
 * @param {String} result - 'year/month/day hours:minutes:seconds' - 格式
 * */
function dateFormat() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'year/month/day hours:minutes:seconds';

    var myDate = new Date();
    if ({}.toString.call(date).slice(8, -1).toLowerCase() === 'date') {
        date = date.getTime();
    }
    myDate.setTime(date);
    var obj = {
        year: myDate.getFullYear(), // 年
        month: fillZero(myDate.getMonth() + 1, 2), // 月
        day: fillZero(myDate.getDate(), 2), // 日
        hours: fillZero(myDate.getHours(), 2), // 时
        minutes: fillZero(myDate.getMinutes(), 2), // 分
        seconds: fillZero(myDate.getSeconds(), 2), // 秒
        milliseconds: myDate.getMilliseconds(), // 毫秒
        week1: '\u661F\u671F' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()], // 星期几
        week2: '\u5468' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()], // 周几
        week3: '\u793C\u62DC' + ['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()] // 礼拜几
    };
    Object.keys(obj).forEach(function (key) {
        result = result.replace(new RegExp(key), obj[key]);
    });
    obj.result = result;
    return obj;
}

module.exports = dateFormat;