define("imgLoad.js",["./jquery.js"],function (require,exports,module){

    require("./jquery.js");



    var lazyload=$(".lazyload");

    var IM=[];
    for(var i=0;i<lazyload.length;i++){
        IM[i]=new Image();
        IM[i].loaded=false;
    }
    load(lazyload);

    $(window).on("scroll",function (){
        load(lazyload);
    });

    $("body,html").on("click",function (){
        load(lazyload);
    });


    function load(obj){
        var scrollTop=$(window).scrollTop();
        var windowH=$(window).height();


        $.each(obj,function (index){
            var This=$(this);
            var thisH=This.offset().top-(scrollTop+windowH);
            var idx=index;
            if(thisH<0&&!(IM[idx].loaded)&&$(this).is(":visible")){
                IM[idx].src=This.attr("data-src");
                IM[idx].onload=function (){
                    This.css("display","none")
                        .attr("src",This.attr("data-src"))
                        .fadeIn("fast");
                    IM[idx].loaded=true;
                };
            }


            IM[idx].onerror=function (){
                This.attr("src","image/lazy_default.gif");
            };
        });
    }


});