define("sliderOne.js",["./jquery.js"],function (require,exports,module){

    require("./jquery.js");

    function tabs(operate,target){

        var iNow=0;
        var timer=null;

        operate.on("click",function (){
            clearInterval(timer);
            var index=$(this).index();
            iNow=index;
            operate.removeClass("active").eq(index).addClass("active");
            target.removeClass("active").eq(index).addClass("active");

            timer=setInterval(function (){
                interval(operate,target);
            },3000);
        });

        target.hover(function (){
            clearInterval(timer);
        },function (){
            timer=setInterval(function (){
                interval(operate,target);
            },3000);
        });

        timer=setInterval(function (){
            interval(operate,target);
        },3000);


        function interval(obj,tgt){
            iNow++;
            if(iNow>obj.length-1){
                iNow=0;
            }
            obj.removeClass("active").eq(iNow).addClass("active");
            tgt.removeClass("active").eq(iNow).addClass("active");
        }
    }



    function swit(operate,target){
        operate.on("click",function (){
            var index=$(this).index();
            operate.removeClass("active").eq(index).addClass("active");
            target.removeClass("active").eq(index).addClass("active");
        });


    }



    module.exports={
        tabs:tabs,
        swit:swit
    };


});