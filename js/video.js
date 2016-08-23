define(["jquery","swiper"],function($){
    window.onresize=function(){
        location.reload();
    }
    var W=document.querySelector("#nav").clientWidth;
        document.querySelectorAll(".swiper-container")[0].style.height=W*0.8+"px";
        //需要修改
   var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
   //音乐
   $(".corner").on("click",function(){
    console.log($("#audio")[0].paused)
        if($("#audio")[0].paused){
           $("#audio")[0].play();
           $(".corner img").attr("src","img/stop.png")
        }else{
            $("#audio")[0].pause();
            $(".corner img").attr("src","img/corner.png") 
        }
   })
   var music=["Back.mp3","Love Letter.mp3","Bad.mp3"];
    for(var  i=0;i<music.length;i++){
        if(music[i]==$("#audio").attr("src")){
            p=i;
        }
    }
    //随机播放
    var random=Math.floor(Math.random(music.length-1)*music.length);
        $("#ran").on("click",function(){
            alert(0)
            $("#audio").attr("src",music[random]);
        })
    console.log(random);
    //上一首
   $("#prev").on("click",function(){
        p--;
        if(p<=0){
            p==0;
        }
        $("#audio").attr("src",music[p]);
   }) 
   //下一首
   $("#next").on("click",function(){
        p++;
        if(p>music.length){
            p=music.length;
        }
        $("#audio").attr("src",music[p]);
   }) 
   var alltime="";
        alltime=Number(document.querySelector("#audio").duration),
        minute=Math.floor(alltime/60),
        second=Math.floor((alltime-minute*60));
        console.log(typeof document.querySelector("#audio").duration)
        $(".end").text(minute+":"+second)

    var alllen=$(".black").width();
    console.log($(".audio"));

    $("#audio").on("timeupdate",function(){
        var current=$("#audio")[0].currentTime;
            m=Math.floor(current/60);
            s=Math.floor(current-m)>=10 ? Math.floor(current-m) : "0"+Math.floor(current-m);
           if(s>=59) s=Math.floor(current-m-(60*m))>=10 ? Math.floor(current-m-(60*m)) : "0"+Math.floor(current-m-(60*m));
            W=current/alltime;
             $(".purple").css("width",alllen*W+"px")
            $(".start").text(m+":"+s);
    })

    //获取当前显示的图片的下标；
    var scroll=$('.swiper-container').scrollLeft;
        
})
