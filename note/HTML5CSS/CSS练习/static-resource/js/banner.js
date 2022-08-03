var nowIndex = 0;
var smallBannersIndex = 0;

//初始化banner状态
function initilizeBanners(){
    let banners = document.querySelector('.bigbanner ul').children;
    for(let i=0;i<banners.length;i++){
        banners[i].style.zIndex = 0;
    }
}

//初始化pointers的状态
function initilizePointers(){
    let pointers = document.querySelector('.pointers').children;
    for(let z=0;z<pointers.length;z++){
        pointers[z].style.width='';
        pointers[z].style.height='';
        pointers[z].style.marginRight='';
        pointers[z].style.backgroundColor='';
        pointers[z].style.outline='';
    }

}
//选中的状态
function choosePointers(){
    let pointers = document.querySelector('.pointers').children;
    pointers[nowIndex].style.width=9+'px';
    pointers[nowIndex].style.height=9+'px';
    pointers[nowIndex].style.marginRight=4+'px';
    pointers[nowIndex].style.backgroundColor='rgb(255,255,255)';
    pointers[nowIndex].style.outline=3+'px '+'rgb(255, 255, 255,0.5) '+'solid';
}

//自动轮播功能
function autoChangBanner(){
    var banners = document.querySelector('.bigbanner ul').children;  //为什么要定义在里面？
    var pointers = document.querySelector('.pointers').children;
    //初始第一个元素的z-index就是999    
    if(nowIndex==0){        //当序号到1时，把序号4的图片放最底下，序号1提上来。当序号在2-4时，把2-4放最上面，前一张放到底下
        initilizeBanners();
        banners[nowIndex].style.zIndex = 10;

        //设置pointers未选中的状态
        initilizePointers();
        //设置pointers选中的状态
        choosePointers();

//       pointers[nowIndex].style.outline=

        nowIndex++;
    }else if(nowIndex>0 && nowIndex<banners.length){       
        initilizeBanners();
        banners[nowIndex].style.zIndex = 10;
        //初始化pointers
        initilizePointers();
        //设置pointers选中的状态
        choosePointers();
        nowIndex++;
        if(nowIndex==4){               //序号溢出，index回到0
            nowIndex = 0;
        }
    }
    return autoChangBanner;
}

//手动切换功能
function manualChangeBanner(){
    var pointers = document.querySelector('.pointers').children;
    var banners = document.querySelector('.bigbanner ul').children;

    for(var index2=0;index2<banners.length;index2++){
        pointers[index2].num = index2;   //本质是把序号传进另外一个序列中
        pointers[index2].onmouseover = function(){
            initilizePointers();
            for(var y=0;y<pointers.length;y++){
                banners[y].style.zIndex = 0;
            };
            banners[this.num].style.zIndex = 999;
            nowIndex = this.num;
        }
    }
}

function bindButtom(){
    let leftButtom = document.querySelector('.bigbanner .leftbuttom');
    let rightButtom = document.querySelector('.bigbanner .rightbuttom');

    let banners = document.querySelector('.bigbanner ul').children;
    let smallbanners = document.querySelector('.smallbanners');
    let smallbannersbox1 = document.querySelector('.marker li:first-of-type').children;
    let smallbannersbox2 = document.querySelector('.marker li:nth-of-type(2)').children;
    let smallbannersbox3 = document.querySelector('.marker li:last-of-type').children;


    let leftButtom2 = document.querySelector('.smallbanners .leftbuttom');
    let rightButtom2 = document.querySelector('.smallbanners .rightbuttom');

    leftButtom2.onclick = function(){
        if(smallBannersIndex==0){
            smallbannersbox1[smallBannersIndex].style.zIndex = '';
            smallbannersbox2[smallBannersIndex].style.zIndex = '';
            smallbannersbox3[smallBannersIndex].style.zIndex = '';
            smallBannersIndex++;
            smallbannersbox1[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox2[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox3[smallBannersIndex].style.zIndex = 1000;
        }else if(smallBannersIndex==1){
            smallbannersbox1[smallBannersIndex].style.zIndex = '';
            smallbannersbox2[smallBannersIndex].style.zIndex = '';
            smallbannersbox3[smallBannersIndex].style.zIndex = '';
            smallBannersIndex--;
            smallbannersbox1[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox2[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox3[smallBannersIndex].style.zIndex = 1000;
        }
    }

    rightButtom2.onclick = function(){
        if(smallBannersIndex==0){
            smallbannersbox1[smallBannersIndex].style.zIndex = '';
            smallbannersbox2[smallBannersIndex].style.zIndex = '';
            smallbannersbox3[smallBannersIndex].style.zIndex = '';
            smallBannersIndex++;
            smallbannersbox1[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox2[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox3[smallBannersIndex].style.zIndex = 1000;
        }else if(smallBannersIndex==1){
            smallbannersbox1[smallBannersIndex].style.zIndex = '';
            smallbannersbox2[smallBannersIndex].style.zIndex = '';
            smallbannersbox3[smallBannersIndex].style.zIndex = '';
            smallBannersIndex--;
            smallbannersbox1[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox2[smallBannersIndex].style.zIndex = 1000;
            smallbannersbox3[smallBannersIndex].style.zIndex = 1000;
        }
    }

    smallbanners.onmouseover = function(){
        leftButtom2.style.opacity = 1;
        rightButtom2.style.opacity = 1;
    }

    smallbanners.onmouseout = function(){
        leftButtom2.style.opacity = '';
        rightButtom2.style.opacity = '';
    }

    leftButtom.onclick = function(){
        nowIndex--;
        if(nowIndex==-1){
            nowIndex = 3;
            banners[nowIndex].style.zIndex = 10;
            //设置pointers未选中的状态
            initilizePointers();
            //设置pointers选中的状态
            choosePointers();
        }else{
            initilizeBanners();
            banners[nowIndex].style.zIndex = 10;
            //初始化pointers
            initilizePointers();
            //设置pointers选中的状态
            choosePointers();
        }
    }

    rightButtom.onclick = function(){
        nowIndex++;
        if(nowIndex==4){        //当序号到1时，把序号4的图片放最底下，序号1提上来。当序号在2-4时，把2-4放最上面，前一张放到底下
            nowIndex = 0;
            initilizeBanners();
            banners[nowIndex].style.zIndex = 10;
            //设置pointers未选中的状态
            initilizePointers();
            //设置pointers选中的状态
            choosePointers();
        }else{       
            initilizeBanners();
            banners[nowIndex].style.zIndex = 10;
            //初始化pointers
            initilizePointers();
            //设置pointers选中的状态
            choosePointers();
        }
    }
}
 //循环播放banner

