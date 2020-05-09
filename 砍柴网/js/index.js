///**
/* * Created by helong on 2019/12/30.
 */
//var warper =document.getElementsByClassName("warper")[0];
//var header=warper.children[0];
//var login=header.getElementsByClassName("login")[0];
//var inp=login.getElementsByTagName("login")[0];
//var time;
//var temp;
//var inoff;
//console.log(inp);
//console.log("....");
//inp.onmouseover=function(){
//    clearInterval(time)
//    time=setInterval(function(){
//        temp=1;
//        inoff=inp.offsetLeft;
//        inp.style.left=inoff+temp;
//    },1000)
//}
//

window.onload=function(){
    var navbox=document.getElementsByClassName("bannerl-nav")[0];
    var spanobj=navbox.children;
    var bodyobj=document.getElementsByClassName("banner-nav-body")[0];
    var bodys=bodyobj.children;
    console.log(bodys)
    //console.log(spanobj)
    for(let i=0;i<spanobj.length;i++){
        //spanobj[i].index=i;
        spanobj[i].onclick=function(){
            for(var j=0;j<spanobj.length;j++){
                spanobj[j].classList.remove("bannerl-nav-span-pt");
                spanobj[j].classList.add("bannerl-nav-span");
                bodys[j].classList.remove("banner-nav-body11");
                console.log(bodys[j])
            }
            this.classList.add("bannerl-nav-span-pt");
            this.classList.remove("bannerl-nav-span");

            bodys[i].classList.add("banner-nav-body11");

            //console.log(bodys[i])
        }
    }
}
////
////实现轮播
//var ulimg=document.getElementById("bannerlId");
//console.log(ulimg)
//var foc=document.getElementById("focu");
//console.log(foc)
////var right=focu.children[1];
////console.log(right)
//




//var war=document.getElementById("div");
//console.log(war)
////var ulobj=war.children[0];
////for (let k=0;k<ulobj.children.length;k++){
////    ulobj.children[k].onclick=function(){
////        console.log("...")
////        for (let t=0;t<ulobj.children.length;t++){
////            ulobj.children[t].classList.remove("r3-li-style")
////        }
////        this.classList.add("r3-li-style")
////    }
////}
