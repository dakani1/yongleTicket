define("extra_index",["./jquery.js"],function (require,exports,module){
    require("./jquery.js");

    //more city part
    var cityMore=$(".cityMore");
    var cityMoreC=cityMore.find(".moreC");
    cityMore.state=0;

    cityMoreC.on("click",function (){
        var This=$(this);
        if(cityMore.state==0){
            This.parent().toggleClass("active").find(".cityList").slideToggle("normal");
            cityMore.state=1;
        }else{
            This.parent().find(".cityList")
                .slideToggle("normal")
                .queue(function (next){
                    This.parent().toggleClass("active");
                    next();
                });
            cityMore.state=0;
        }
    });
    //more city part

    //city switch part
    var cityTit=$(".cityTit");
    var arr=[
        {"a":607,"b":"北京站"},
        {"a":414,"b":"上海站"},
        {"a":160,"b":"深圳站"},
        {"a":106,"b":"广州站"},
        {"a":75,"b":"天津站"},
        {"a":102,"b":"武汉站"},
        {"a":100,"b":"重庆站"},
        {"a":93,"b":"成都站"},
        {"a":59,"b":"西安站"},
        {"a":63,"b":"南京站"}
    ];
    var cityTitLi=cityTit.find("li:not('.cityMore')");
    var cityDetail=$(".cityDetail");
    var str="";
    cityTitLi.on("click",function (){
        var index=$(this).index();
        cityTitLi.removeClass("active").eq(index).addClass("active");
        $(this).parents(".cityMain").find(".cityItem").removeClass("active").eq(index).addClass("active");
        str='目前南京共有演出项目'+arr[index]["a"]+' 个，进入 <a href="#">[&nbsp;'+ arr[index]["b"]+'&nbsp;]' +'</a>';
        cityDetail.html(str);
    });
    //city switch part


    //sideBar nav
    watchScroll();
    $(window).on("scroll",function (){
        watchScroll();
    });
    pageMove();

    function pageMove(){
        var unitWrap=$(".unitWrap,.globalTour");
        var BayWindowList=$("#BayWindowList");
        var BayWindowListLi=BayWindowList.find("li");

        var BayWindowListLiLength=BayWindowListLi.length;
        $.each(BayWindowListLi,function (index){
            $(this).on("click",function (ev){
                ev.preventDefault();
                if(index==BayWindowListLiLength-1){
                    $("body,html").animate({"scrollTop":0},"normal");
                }
                else{
                    $("body,html").animate({"scrollTop":unitWrap.eq(index).offset().top-20},"normal");
                }
            });

        });
    }

    function watchScroll(){
        var unitWrap=$(".unitWrap,.globalTour");
        var BayWindowList=$("#BayWindowList");
        var BayWindowListLi=BayWindowList.find("li");
        var offsetTop=unitWrap.eq(0).offset().top;
        var scrollTop=$(window).scrollTop();
        var windowH=$(window).height();
        var disH=offsetTop-(scrollTop+windowH);

        if(disH<0){
            BayWindowList.slideDown("normal");
            changeState(unitWrap,BayWindowListLi);
        }else{
            BayWindowList.slideUp("normal");
        }
    }


    function changeState(obj,target){
        $.each(obj,function (index){
            var offsetTop=obj.eq(index).offset().top;
            var scrollTop=$(window).scrollTop();
            var disH=offsetTop-scrollTop-100;
            if(disH<0){
                target.removeClass("active").eq(index).addClass("active");
            }
        });
    }
    //sideBar nav



});