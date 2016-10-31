define("mouseFlow.js",["./jquery.js"],function (require,exports,module) {
    require("./jquery.js");



    function mashMove(obj){
        var shellIt=obj.find(".shellItem");
        var hgt=shellIt.height();
        shellIt.css({
            "top":-1*hgt,
            "left":0
        });
        $.each(obj, function (index) {
            $(this).state = {};
            $(this).on("mouseenter", function (e) {
                var This = $(this);
                var startX = e.pageX - This.offset().left;
                var startY = e.pageY - This.offset().top;
                var direction = action($(this), startX, startY);
                enterDirction(This,direction);
                This.on("mousemove", function (ev) {
                    var endX = ev.pageX - This.offset().left;
                    var endY = ev.pageY - This.offset().top;
                    This.state = {"endX": endX, "endY": endY};
                });
                This.on("mouseleave", function () {
                    var direction = action($(this), This.state.endX, This.state.endY);
                    leaveDirction(This,direction);
                })
            });
        });
    }

    function enterDirction(obj,direction){
        var shellItem = obj.find(".shellItem").eq(0);
        var shellItemW = shellItem.width();
        var shellItemH = shellItem.height();
        if (direction == "top") {
            shellItem.stop(true, true).css({
                "top": (-1 * shellItemH),
                "left": 0
            }).animate({"top": 0}, 300);
        } else if (direction == "right") {
            shellItem.stop(true, true).css({
                "left": shellItemW,
                "top": 0
            }).animate({"left": 0}, 300);
        } else if (direction == "bottom") {
            shellItem.stop(true, true).css({
                "top": shellItemH,
                "left": 0
            }).animate({"top": 0}, 300);
        } else if (direction == "left") {
//                            shellItem.css("background-color","blue");
            shellItem.stop(true, true).css({
                "left": -1 * shellItemW,
                "top": 0
            }).animate({"left": 0}, 300);
        }
    }

    function leaveDirction(obj,direction){
        var shellItem = obj.find(".shellItem").eq(0);
        var shellItemW = obj.width();
        var shellItemH = obj.height();
        if (direction == "top") {
            shellItem.animate({
                "top": (-1 * shellItemH),
                "left": 0
            }, 300);
        } else if (direction == "right") {
            shellItem.animate({
                "left": shellItemW,
                "top": 0
            }, 300);
        } else if (direction == "bottom") {
            shellItem.animate({
                    "top": shellItemH,
                    "left": 0},
                300);
        } else if (direction == "left") {
            shellItem.animate({
                "left": -1 * shellItemW,
                "top": 0
            }, 300);
        }
    }

    function action(obj, disX, disY) {
        var thisW = obj.width();
        var thisH = obj.height();
        var sinQ = thisW / thisH;
        var sinB = thisW / thisH;
        var nowsinQ = (disY != 0) ? (disX / disY) : 0;
        var nowsinB = (thisH != disY) ? disX / (thisH - disY) : 0;

        if (nowsinQ <= sinQ && nowsinB <= sinB) {
            return "left";
        } else if (nowsinQ <= sinQ && nowsinB >= sinB) {
            return "bottom";
        } else if (nowsinQ >= sinQ && nowsinB <= sinB) {
            return "top";
        } else if (nowsinQ >= sinQ && nowsinB >= sinB) {
            return "right";
        }
    }


    module.exports={
        mashMove:mashMove
    };

});
