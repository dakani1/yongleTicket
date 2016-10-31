define("slider.js",["jquery.js"],function (require,exports,module){
    require("jquery.js");
    var indexSlider = $(".indexSlider");
    var sliderNavSpan = $(".sliderNav").find("span");
    var sliderCont = $(".sliderCont");
    var goLeft = $(".goLeft");
    var goRight = $(".goRight");
    var timer = null;
    var iNow = 0;

    indexSlider.hover(function (){
        clearInterval(timer);
    },function (){
        clearInterval(timer);
        timer=setInterval(function (){
            action(sliderCont,sliderNavSpan,1);
        },3000);
    });


    sliderNavSpan.on("click",function (){
        clearInterval(timer);
        iNow=$(this).index();
        sliderNavSpan.removeClass("active").eq(iNow).addClass("active");
        sliderCont.stop(true,true).css({
            "display":"none",
            "left":-1*iNow*sliderContLiW
        }).fadeIn("normal");


        timer=setInterval(function (){
            action(sliderCont,sliderNavSpan,1);
        },3000);
    });


    timer=setInterval(function (){
        action(sliderCont,sliderNavSpan,1);
    },3000);

    sliderCont.append(sliderCont.find("li:first").clone());
    var sliderContLi = sliderCont.find("li");
    var sliderContLiLength=sliderContLi.length;
    var sliderContLiW = sliderContLi.outerWidth();
    sliderCont.width(sliderContLiLength*sliderContLiW);

    goLeft.on("click",function (){
        clearInterval(timer);
        action(sliderCont,sliderNavSpan,-1);
        timer=setInterval(function (){
            action(sliderCont,sliderNavSpan,1);
        },3000);
    });

    goRight.on("click",function (){
        clearInterval(timer);
        action(sliderCont,sliderNavSpan,1);
        timer=setInterval(function (){
            action(sliderCont,sliderNavSpan,1);
        },3000);
    });



    function action (obj,target,num){
        var objChild=obj.children();
        iNow+=num;
        if(num>0){
            if(iNow>(objChild.length-2)){
                iNow=objChild.length-1;
                obj.animate({
                    "left":-1*iNow*objChild.width()
                },"normal").queue(function (next){
                    $(this).css({
                        "left":0
                    });
                    next();
                });
                iNow=0;
            }else{
                obj.animate({
                    "left":-1*iNow*objChild.width()
                },"normal");
            }
        }else if(num<0){
            if(iNow<0){
                iNow=objChild.length-2;
                obj.stop(true,true).queue(function (next){
                    $(this).css({
                        "left":-1*(iNow+1)*objChild.width()
                    });
                    next();
                });
            }
            obj.animate({
                "left":-1*iNow*objChild.width()
            },"normal");
        }
        target.removeClass("active").eq(iNow).addClass("active");
    }



});