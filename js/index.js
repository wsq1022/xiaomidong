/*
* @Author: lenovo
* @Date:   2017-12-27 18:45:21
* @Last Modified by:   lenovo
* @Last Modified time: 2017-12-28 08:24:11
*/
{
var banners=document.querySelectorAll(".img-box li");
var pagers=document.querySelectorAll(".yuan li");
var br=document.querySelector(".banner");
var bannerzuo=document.querySelector(".zuoxiaokuang");
var banneryou=document.querySelector(".youxiaokuang")
// console.log(pagers);
console.log(bannerzuo);
 pagers.forEach(function (ele,index) {
     ele.onclick=function () {
         for(var i=0;i<banners.length;i++){
             pagers[i].classList.remove("active");
             banners[i].classList.remove("active");
         }
         ele.classList.add("active");
         banners[index].classList.add("active");
         p=index;
     }

 });
    var p=0;
   function fn(bir="r") {
           if(bir==="r"){
               p++;
               console.log("p");
           }else if(bir==="l"){
               p--;
           }
           if(p === banners.length){
               p=0;
           }
           if(p === -1){
               p=banners.length-1;
           }
           console.log(p);
       if (p === banners.length){
           p=0;
       }
       for(var i=0;i<banners.length;i++){
           pagers[i].classList.remove("active");
           banners[i].classList.remove("active");
       }
       banners[p].classList.add("active");
       pagers[p].classList.add("active");
   }
   var b=setInterval(fn,1000);
    br.onmouseover=function(){
        clearInterval(b);
    }
    br.onmouseout=function () {
        b=setInterval(fn,1000);
    };
    var flag=true;
    //左右点击事件
    banneryou.onclick=function(){
        if(flag){
            flag=false;
            fn();
        }
    }
    bannerzuo.onclick=function(){
        if(flag){
            flag=false;
            fn("l");
        }
    };
    banners.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })

}

// 小米明星单品
{
    var right=document.querySelector(".box1");
    var left=document.querySelector(".box");
    var nei=document.querySelector(".neirong");
    var big=document.querySelector(".danpin")
    right.onclick=function () {
        right.classList.remove("act");
        left.classList.add("act");
        nei.style.transform="translateX(-1240px)";
    }
    left.onclick=function () {
        right.classList.add("act");
        left.classList.remove("act");
        nei.style.transform="translateX(0px)"
    }
    let m=0;
    function starfn(){
        if (m%2===0){
            nei.style.transform="translateX(-1240px)";
            m++;
        }else{
            nei.style.transform="translateX(0)";
            m++;
        }
    }
    let t=setInterval(starfn,2000);
    big.onmouseover=function(){
        clearInterval(t);
    }
    big.onmouseout=function () {
        t=setInterval(starfn,2000);
    }

}
//内容
let zx=document.querySelectorAll(".baohan");
zx.forEach(function (ele) {
    www(ele)
});
function www(wsq) {
    let big=wsq.querySelector(".zuida");
    let right=wsq.querySelector(".youbian");
    let left=wsq.querySelector(".zuobian");
    let mokuai=wsq.querySelectorAll(".mokuai");
    let yuan=wsq.querySelectorAll(".yidian");
    let mokuais=mokuai.length;
    console.clear();
    console.log(yuan.length);
    console.log(big)
    let n=0;
    right.onclick=function () {
        n++;
        if(n>=mokuais){
            n=mokuais-1;
            return
        }
        big.style.marginLeft = -n * 300 + "px"
        for(let i = 0; i < yuan.length; i++) {
            yuan[i].classList.remove("active")
        }
        yuan[3*n+n].classList.add("active")
    };
    left.onclick=function () {
        n--;
        if(n<0){
            n=0;
            return
        }
        big.style.marginLeft = -n * 300 + "px"
        for(let i = 0; i < yuan.length; i++) {
            yuan[i].classList.remove("active")
        }
        yuan[n].classList.add("active")
    };
    yuan.forEach(function (ele,index) {
        let m=index;
        ele.onclick=function () {
            for(let i=0;i<yuan.length;i++){
                yuan[i].classList.remove("active")
            }
            ele.classList.add("active");
            big.style.marginLeft=-m*300+"px";
            n=index;
        }
    })
}
{
    let ywz=document.querySelectorAll(".youwen");
    let tu=document.querySelectorAll(".zhengyi");
    console.log(ywz);
    console.log(tu);
    ywz.forEach(function(ele,index){
    ele.onclick=function(){
        for(let i=0;i<ywz.length;i++){
            ywz[i].classList.remove("active");
            tu[i].classList.remove("active");
        }
        this.classList.add("active");
        tu[index].classList.add("active");
    }
})
}

