const fillZero = require('zhf.fill-zero');

/**
 * @description 日期格式化
 * @param {Number} date - 毫秒数
 * @param {String} result - 'year/month/day hours:minutes:seconds' - 格式
 * */
function dateFormat(date = 0, result = 'year/month/day hours:minutes:seconds') {
    const myDate = new Date();
    if ({}.toString.call(date).slice(8, -1).toLowerCase() === 'date') {
        date = date.getTime();
    }
    myDate.setTime(date);
    const obj = {
        year: myDate.getFullYear(), // 年
        month: fillZero(myDate.getMonth() + 1, 2), // 月
        day: fillZero(myDate.getDate(), 2), // 日
        hours: fillZero(myDate.getHours(), 2), // 时
        minutes: fillZero(myDate.getMinutes(), 2), // 分
        seconds: fillZero(myDate.getSeconds(), 2), // 秒
        milliseconds: myDate.getMilliseconds(), // 毫秒
        week1: `星期${['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()]}`, // 星期几
        week2: `周${['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()]}`, // 周几
        week3: `礼拜${['日', '一', '二', '三', '四', '五', '六'][myDate.getDay()]}`, // 礼拜几
    };
    Object.keys(obj).forEach(function (key) {
        result = result.replace(new RegExp(key), obj[key]);
    });
    obj.result = result;
    return obj;
}

module.exports = dateFormat;
