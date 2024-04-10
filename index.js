window.onload=function(){
    var href= document.querySelectorAll(".incident");
    var map = document.querySelectorAll(".mainmap")[0];
    var img = document.querySelectorAll("img")[0];
    var mainmenu =  document.querySelectorAll(".mainmenu")[0];
    var dynasty = document.querySelectorAll(".dynasty");
    var chao = ["夏","商","周","春秋 战国","秦","汉","三国","晋","隋","唐","五代十国","宋","元","明","清"];
    for(i=0;i<dynasty.length;i+=1){
        dynasty[i].innerHTML="●";
        var a = [];
        dynasty[i].name=a;
        
        for(q=0;q<=i;q+=1){
            
            a.push(1);
        };
        dynasty[i].name=a.length;
        dynasty[i].addEventListener('mouseover',function(){
            console.log(this.name);
            
            this.innerHTML=chao[this.name-1];
            this.style.transform="scale(1.9)";
            map.style.transform="scale(1.9)";
            img.src="./中国 历史地图/"+this.name+".jpg";
        },false);
        dynasty[i].addEventListener('mouseout',function(){
            this.innerHTML="●";
            this.style.transform="scale(1)";
            map.style.transform="scale(1)";
        },false);
        map.addEventListener('mouseover',function(){
            map.style.transform="scale(1.9)";

            
        },false);
        map.addEventListener('mouseout',function(){
            map.style.transform="scale(1)";
        },false);
        dynasty[i].addEventListener('click',function(){
            
        },false);
    };
    
    var aa = setInterval(function(){
        var aaaa = /\/1.jpg$/g;
        var bbbb = /\/2.jpg$/g;
        var cccc = /\/3.jpg$/g;
        var dddd = /\/4.jpg$/g;
        var eeee = /\/5.jpg$/g;
        var ffff = /\/6.jpg$/g;
        var gggg = /\/7.jpg$/g;
        var hhhh = /\/8.jpg$/g;
        var iiii = /\/9.jpg$/g;
        var jjjj = /\/10.jpg$/g;
        var kkkk = /\/11.jpg$/g;
        var llll = /\/12.jpg$/g;
        var nnnn = /\/13.jpg$/g;
        var mmmm = /\/14.jpg$/g;
        var oooo = /\/15.jpg$/g;
        if(map.style.transform=="scale(1.9)"){
            if(aaaa.test(img.src)){
                
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[1].href="./夏/1.html";
                href[1].innerHTML="夏朝建立";
                href[1].style.left="30vw";
                href[1].style.top="24vh";
                href[1].style.display="block";
                href[0].href="./夏/1.html";
                href[0].innerHTML="大禹治水";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(bbbb.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                };
                href[1].href="./商/2.html";
                href[1].innerHTML="商朝建立";
                href[1].style.left="30vw";
                href[1].style.top="24vh";
                href[1].style.display="block";
                href[1].style.backgroundColor="transparent";
            }else if(cccc.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./西周/1.html";
                href[0].innerHTML="周朝建立";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(dddd.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./春秋战国/1.html";
                href[0].innerHTML="卧薪尝胆";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(eeee.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./秦/1.html";
                href[0].innerHTML="巨鹿之战";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(ffff.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./汉/1.html";
                href[0].innerHTML="汉武盛世";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(gggg.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./三国/1.html";
                href[0].innerHTML="三顾茅庐";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(hhhh.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./晋/1.html";
                href[0].innerHTML="淝水之战";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(iiii.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./隋/1.html";
                href[0].innerHTML="隋朝建立";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(jjjj.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./唐/1.html";
                href[0].innerHTML="贞观之治";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(kkkk.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./五代十国/1.html";
                href[0].innerHTML="延州之战";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(llll.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./宋/1.html";
                href[0].innerHTML="杯酒释兵权";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(mmmm.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./明/1.html";
                href[0].innerHTML="靖难之役";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(nnnn.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./元/1.html";
                href[0].innerHTML="崖山海战";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            }else if(oooo.test(img.src)){
                for(i=0;i<href.length;i+=1){
                    href[i].style.display="none";
                    href[i].style.backgroundColor="rgb(238,234,222)";
                };
                href[0].href="./清/1.html";
                href[0].innerHTML="鸦片战争";
                href[0].style.left="25vw";
                href[0].style.top="20vh";
                href[0].style.display="block";
            };
        }else{
            for(i=0;i<href.length;i+=1){
                href[i].style.display="none";
            }
        };
    },500)
    
}



