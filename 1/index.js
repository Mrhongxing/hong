window.onload=function(){
    function chekkk(){
        var e = document.getElementById("i2").clientWidth;
        
        var r = e.toString();
        
        var w = r.concat("px");
        
        document.getElementById("i2").style.height=w
    };
    chekkk();
};
