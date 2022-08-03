"use strict";
//生成 arrNum 数量，arrLengthRange长度范围，arrValueRange数值范围的数组
//假设生成10个，10个长度范围，(-10,10)范围的数组
var arrNum = 0;
var arrLengthRange = 0;
var arrValueRangeMax = 0;
var arrValueRangeMin = 0;
//随机生成指定范围内的正负整数()
function randomInt(arrValueRangeMin, arrValueRangeMax) {
    var num = 0;
    num = Math.floor(Math.random() * (arrValueRangeMax - arrValueRangeMin)) + arrValueRangeMin;
    return num;
}
function randomArr(arrLengthRange, arrValueRangeMin, arrValueRangeMax) {
    //生成一个指定长度范围的数组,填充为0
    var arr = new Array(Math.floor((Math.random() * arrLengthRange) + 1));
    //给每个数组内每一个值赋指定范围内随机值
    for (var value = 0; value < arr.length; value++) {
        arr[value] = randomInt(arrValueRangeMin, arrValueRangeMax);
    }
    return arr; //返回一个指定长度范围内虽，指定值范围内随机的整数数组
}
function buildArr(arrNum, arrLengthRange, arrValueRangeMin, arrValueRangeMax) {
    //生成n个数组，并保存到一个数组里 
    var arrs = new Array(Math.floor((Math.random() * arrNum) + 1));
    var tempArr = [];
    for (var i = 0; i < arrs.length; i++) {
        arrs[i] = randomArr(arrLengthRange, arrValueRangeMin, arrValueRangeMax);
    }
    return arrs;
}
module.exports = buildArr;
