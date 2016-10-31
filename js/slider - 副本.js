define("slider.js",["jquery.js"],function (require,exports,module){
    require("jquery.js");
    $(function () {
        var indexSlider = $(".indexSlider");
        var sliderNavSpan = $(".sliderNav").find("span");
        var sliderCont = $(".sliderCont");
        var goLeft = $(".goLeft");
        var goRight = $(".goRight");
        var timer = null;
        var iNow = 0;

        sliderNavSpan.on("click",function (){
            clearInterval(timer);
            iNow=$(this).index();
            sliderNavSpan.removeClass("active").eq(iNow).addClass("active");
            sliderCont.stop(true,true).css({
                "display":"none",
                "left":-1*iNow*sliderContLiW
            }).fadeIn("normal");


            timer=setInterval(function (){
                iNow++;
                if(iNow>(sliderContLiLength-2)){
                    iNow=sliderContLiLength-1;
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal").queue(function (next){
                        $(this).css({
                            "left":0
                        });
                        next();
                    });
                    iNow=0;
                }else{
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal");
                    console.log(iNow);
                }
                sliderNavSpan.removeClass("active").eq(iNow).addClass("active");
            },3000);

        });


        timer=setInterval(function (){
            iNow++;
            if(iNow>(sliderContLiLength-2)){
                iNow=sliderContLiLength-1;
                sliderCont.animate({
                    "left":-1*iNow*sliderContLiW
                },"normal").queue(function (next){
                    $(this).css({
                        "left":0
                    });
                    next();
                });
                iNow=0;
            }else{
                sliderCont.animate({
                    "left":-1*iNow*sliderContLiW
                },"normal");
                console.log(iNow);
            }
            sliderNavSpan.removeClass("active").eq(iNow).addClass("active");


        },3000);


        sliderCont.append(sliderCont.find("li:first").clone());
        var sliderContLi = sliderCont.find("li");
        var sliderContLiLength=sliderContLi.length;
        var sliderContLiW = sliderContLi.outerWidth();
        sliderCont.width(sliderContLiLength*sliderContLiW);

        goLeft.on("click",function (){
            clearInterval(timer);

            iNow--;
            if(iNow<0){
                iNow=sliderContLiLength-2;
                sliderCont.stop(true,true).queue(function (next){
                    $(this).css({
                        "left":-1*(iNow+1)*sliderContLiW
                    });
                    next();
                    console.log(-1*(iNow+1)*sliderContLiW);
                }).animate({
                    "left":-1*iNow*sliderContLiW
                },"normal");
            }
            sliderCont.animate({
                "left":-1*iNow*sliderContLiW
            },"normal");
            sliderNavSpan.removeClass("active").eq(iNow).addClass("active");



            timer=setInterval(function (){
                clearInterval(timer);


                iNow++;
                if(iNow>(sliderContLiLength-2)){
                    iNow=sliderContLiLength-1;
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal").queue(function (next){
                        $(this).css({
                            "left":0
                        });
                        next();
                    });
                    iNow=0;
                }else{
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal");
                }
                sliderNavSpan.removeClass("active").eq(iNow).addClass("active");
            },3000);

        });

        goRight.on("click",function (){
            clearInterval(timer);
            iNow++;
            if(iNow>(sliderContLiLength-2)){
                iNow=sliderContLiLength-1;
                sliderCont.animate({
                    "left":-1*iNow*sliderContLiW
                },"normal").queue(function (next){
                    $(this).css({
                        "left":0
                    });
                    next();
                });
                iNow=0;
            }else{
                sliderCont.animate({
                    "left":-1*iNow*sliderContLiW
                },"normal");
            }

            sliderNavSpan.removeClass("active").eq(iNow).addClass("active");

            timer=setInterval(function (){
                clearInterval(timer);

                iNow++;
                if(iNow>(sliderContLiLength-2)){
                    iNow=sliderContLiLength-1;
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal").queue(function (next){
                        $(this).css({
                            "left":0
                        });
                        next();
                    });
                    iNow=0;
                }else{
                    sliderCont.animate({
                        "left":-1*iNow*sliderContLiW
                    },"normal");
                }
                sliderNavSpan.removeClass("active").eq(iNow).addClass("active");
            },3000);

        });


        function action (){

        }


        function interval(){

        }

    });

});