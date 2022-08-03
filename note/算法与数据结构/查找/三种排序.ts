//从小到大排序
let arr1 = [5,4,3,2,1];  //待排序数组，要求从小到大排
let arr2 = [10,8,6,4,2];
let arr3 = [15,14,13,12,11];

function exchang(arr:number[],value1:number,value2:number){
    let warehouse:number = 0;
    
    warehouse = arr[value1];
    arr[value1] = arr[value2];
    arr[value2] = warehouse;

    return arr;
}

//选择排序
function sortXuanZe(arr:number[]){
    for(var i:number=0;i<(arr.length-1);i++){
        for(var j:number=i+1;j<arr.length;j++){
            if(arr[i]-arr[j]>0){
                arr = exchang(arr,i,j)
            }
        }
    }
    return arr;
}

//冒泡排序
function sortMaoPao(arr:number[]){  //js数组或对象类型作为函数参数时，传地址
    // 以此类推，执行arr.length-1次，颗粒度为1
    for(var i:number=0;i<arr.length-1;i++){
        for(var j:number=0;j<(arr.length-1);j++){
            if(arr[j]>arr[j+1]){
                exchang(arr,j,j+1);
            }
        } 
    }
    return arr;
}
//插值排序  [5,3,4,2,3]
function sortChaZhi(arr:number[]){
    if(arr.length<2){
        return arr;
    }
    for(var i:number=1;i<arr.length;i++){
        for(var j:number=0;j<i;j++){  //i代表和谁交换，一共循环个数-1次，代表依次插值成功
            if(arr[i]<arr[j]){
              arr.splice(j,0,arr[i]);
              arr.splice(i+1,1);
            }
        }
    }
    return arr;
}

export = sortChaZhi;

