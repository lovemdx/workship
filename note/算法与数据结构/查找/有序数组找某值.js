"use strict";
exports.__esModule = true;
//二分法找有序数组中某个数是否存在
//导入数组生成器，生成数组后排序
var arrCreater = require("./\u6570\u7EC4\u751F\u6210\u5668.js");
var sort = require("./\u4E09\u79CD\u6392\u5E8F.js");
//随机生成一个从小到大的数组
var arr = sort(arrCreater(1, 20, -10, 10)[0]);
//[3,5]
//目标数字
var targetNum = 5;
//you can search the index of target number from the array or know the element does not exist
function findNum(arr, targetNum) {
    var index = 0;
    var startIndex = 0;
    var endIndex = arr.length - 1;
    while ((endIndex - startIndex) >= 0) {
        index = (endIndex + startIndex) >> 1;
        if (arr[index] == targetNum) {
            return [index, arr[index]];
        }
        if (arr[index] < targetNum) {
            startIndex = index + 1;
        }
        if (arr[index] > targetNum) {
            endIndex = index - 1;
        }
    }
    return '无此元素';
}
var arrResult = findNum(arr, 5);
console.log('随机数组是[' + arr + ']');
console.log('目标元素是' + String(targetNum));
if (arrResult === '无此元素') {
    console.log(arrResult);
}
else {
    console.log('目标元素在第' + arrResult[0] + '位，值为' + arrResult[1]);
}
