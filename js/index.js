define("index.js",["./slider.js","./sliderOne.js","./mouseFlow.js","./imgLoad.js","./extra_index.js"],function (require,exports,module){

    //banner model
    require("./slider.js");




    //switch the tabs
    var sliderOne=require("./sliderOne.js");
    var hotTitItemDot=$(".hotTit").find(".itemDot").find("span");
    var hotContItem=$(".hotCont").find(".hotItem");
    sliderOne.tabs(hotTitItemDot,hotContItem);


    var aSideMain=$(".aSideMain");
    var aSideMainItemDot=aSideMain.find(".itemDot").find("span");
    var aSideMainItem=aSideMain.find(".item").find("dl");
    sliderOne.tabs(aSideMainItemDot,aSideMainItem);


    var tabs=$(".tabs");
    tabs.on("click",function (){
        var operate=$(this).find("ul").find("li");
        var target=$(this).find(".tabsMain").find(".tabsItem");
        sliderOne.swit(operate,target);
    });




    //move in and out with the mouse
    var mouseFlowLi = $("#mouseFlow").find("li");
    require("./mouseFlow.js").mashMove(mouseFlowLi);



    //lazyload Image load and show
    require("./imgLoad.js");


    require("./extra_index.js");




});