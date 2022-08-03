"use strict";
//从小到大排序
var arr1 = [5, 4, 3, 2, 1]; //待排序数组，要求从小到大排
var arr2 = [10, 8, 6, 4, 2];
var arr3 = [15, 14, 13, 12, 11];
function exchang(arr, value1, value2) {
    var warehouse = 0;
    warehouse = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = warehouse;
    return arr;
}
//选择排序
function sortXuanZe(arr) {
    for (var i = 0; i < (arr.length - 1); i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] - arr[j] > 0) {
                arr = exchang(arr, i, j);
            }
        }
    }
    return arr;
}
//冒泡排序
function sortMaoPao(arr) {
    // 以此类推，执行arr.length-1次，颗粒度为1
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < (arr.length - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                exchang(arr, j, j + 1);
            }
        }
    }
    return arr;
}
//插值排序  [5,3,4,2,3]
function sortChaZhi(arr) {
    if (arr.length < 2) {
        return arr;
    }
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < i; j++) { //i代表和谁交换，一共循环个数-1次，代表依次插值成功
            if (arr[i] < arr[j]) {
                arr.splice(j, 0, arr[i]);
                arr.splice(i + 1, 1);
            }
        }
    }
    return arr;
}
module.exports = sortChaZhi;
