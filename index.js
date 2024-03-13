window.onload=function(){
    var jben = document.getElementById("i2");
    var chidouren= document.getElementById("i1")
    function check(){
        var a = document.body;
        var b = a.clientWidth;
        var c = a.clientHeight;
        if(b>c){
            jben.style.height=c.toString()+"px";
            jben.style.width=c.toString()+"px";
            document.querySelectorAll(".kongzhitai")[0].style.display="none";
        }else{
            jben.style.width=b.toString()+"px";
            jben.style.height=b.toString()+"px";
            document.querySelectorAll(".kongzhitai")[0].style.display="block";
        }
    }
    check();
    document.getElementById("i3").onclick=function(){
        check();
        
    };
    var right= document.getElementById("left");
    var left = document.getElementById("right");
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    var shuzu = [];
    shuzu.push(setInterval(function(){

    },1000));
    function myzeng(e){
        var u = shuzu.pop();
        clearInterval(u);
        let w=  setInterval(function(){
            e +=10;
            chidouren.style.left=e.toString()+"px";
        },100);
        
        shuzu.push(w);
    };
    function myjian(e){
        var u = shuzu.pop();
        clearInterval(u);
        var w=  setInterval(function(){
            e -=10;
            chidouren.style.left=e.toString()+"px";
        },100)
        
        shuzu.push(w)
    };
    function myzeng2(e){
        var u = shuzu.pop();
        clearInterval(u);
        let w=  setInterval(function(){
            e +=10;
            chidouren.style.top=e.toString()+"px";
        },100);
        
        shuzu.push(w);
    };
    function myjian2(e){
        var u = shuzu.pop();
        clearInterval(u);
        var w=  setInterval(function(){
            e -=10;
            chidouren.style.top=e.toString()+"px";
        },100)
        
        shuzu.push(w)
    };
    function myget(){

    };
    
    //定义按钮函数
    
    function xiangyou(){
        var x = chidouren.offsetLeft;
        
        myzeng(x);
        
    };
    function xiangzuo(){
        var x = chidouren.offsetLeft;
        
        myjian(x);
        
    };
    function xiangshang(){
        
        var y = chidouren.offsetTop;
        myjian2(y);
        
    };
    function xiangxia(){
        
        var y = chidouren.offsetTop;
        myzeng2(y);
        
    };
    right.addEventListener("click",function(){
        xiangyou();
        chidouren.style.transform="scaleX(1) rotate(0deg)";
        
    },false );
    left.addEventListener("click",function(){
        xiangzuo()
        chidouren.style.transform="scaleX(-1) rotate(0deg)";
        
    },false);
    top.addEventListener("click",function(){
        xiangshang();
        chidouren.style.transform="rotate(-90deg) scaleX(1)";
        
    },false);
    bottom.addEventListener("click",function(){
        xiangxia();
        chidouren.style.transform="rotate(90deg) scaleX(1)";
        
    },false);
   
    document.onkeydown=function(eve){
        
        if(eve.keyCode==68){
            xiangyou();
            chidouren.style.transform="scaleX(1) rotate(0deg)";
        }if(eve.keyCode==65){
            xiangzuo()
            chidouren.style.transform="scaleX(-1) rotate(0deg)";
        }if(eve.keyCode==87){
            xiangshang();
            chidouren.style.transform="rotate(-90deg) scaleX(1)";
        }if(eve.keyCode==83){
            xiangxia();
            chidouren.style.transform="rotate(90deg) scaleX(1)";
        };
        
    };
    var start = document.getElementById("start");
    var i = 1;
    var op = 0;
    start.onclick=function(){
        confirm("游戏即将开始");
        let chidou=setInterval(function(){
            var f = chidouren.clientHeight;
            var f1 = chidouren.clientWidth;
            var x = chidouren.offsetLeft;
            var y = chidouren.offsetTop;
            var allElements = document.getElementsByTagName('*');
           

            // 定义正则表达式
            var regExp = new RegExp('dou', 'i'); // i 代表不区分大小写, 'myClass'是你要匹配的类名

            // 遍历所有元素，检查类名是否符合正则表达式
            for (var i = 0, len = allElements.length; i < len; i++) {
                if (regExp.test(allElements[i].id)) {
                    var x1 = allElements[i].offsetLeft;
                    var  y1 = allElements[i].offsetTop;
                    
                    if(x1<=x+f1/2 && x1+f1/2>=x && y1<=y+f/2 && y1+f/2>=y ){
                        allElements[i].remove();
                        op+=1
                        document.getElementById("score").innerHTML="得分："+op.toString();
                    }


                };
                
            }

        },1000)
        let jieshu=setInterval(function(){
            var f = chidouren.clientHeight;
            var f1 = chidouren.clientWidth;
            var x = chidouren.offsetLeft;
            var y = chidouren.offsetTop;
            var x1 = document.getElementById("i2").clientWidth;
            var y1 = document.getElementById("i2").clientHeight;
            if(x+f1>x1||y+f>y1||x<0||y<0){
                clearInterval(shengcheng);
                clearInterval(chidou);
                clearInterval(jieshu);
                alert("游戏结束")
                window.location.reload();
            }
        },500)
        var dou1 = [1];
        let shengcheng=setInterval(function(){
            //获取豆子数量
            // 获取页面上所有的元素
            var allElements = document.getElementsByTagName('*');

            // 定义正则表达式
            var regExp = new RegExp('dou', 'i'); // i 代表不区分大小写, 'myClass'是你要匹配的类名
            var dou1 = [1];
            // 遍历所有元素，检查类名是否符合正则表达式
            for (var i = 0, len = allElements.length; i < len; i++) {
                if (regExp.test(allElements[i].id)) {
                    dou1.push(allElements[i]);
                };
                
            }
            
            if(dou1.length<=4){
                var w= document.createElement("img");
                w.style.width="10vw";
                w.style.position="absolute"
                w.src="/1/560776e61b157e1b3772fe4646e77a61.png";
                jben.appendChild(w);
                var f = chidouren.clientHeight;
                var f1 = chidouren.clientWidth;
                var r= Math.random();
                var r3 = Math.random();
                var t = jben.clientWidth;
                var t1 = jben.clientHeight;
                i+=1;
                w.id="dou"+i.toString();
                var r1=r*(t-f1);
                var r2= r3*(t1-f);
                w.style.transform="scale(0.5,0.5)";
                w.style.left= r1.toString()+"px";
                w.style.top= r2.toString()+"px";
            }
            
        },1000);
        

    };


};
