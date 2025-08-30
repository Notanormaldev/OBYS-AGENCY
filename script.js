function locomotiveanime(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loddinganimation(){
    // timeline 
var tl=gsap.timeline()

// batha words lave 
tl.from("#lodder h1",{
    y:150,
    opacity:0,
    stagger:0.5,
    duration:1,
})

//now 
tl.to("#nav-part2 h3",{
    opacity:1,
    animationName:"anime"
})

// counter u
tl.from("#nav-part1",{
    opacity:0,
    onStart:function(){
        // counter u
    var h5text=document.querySelector("#nav-part1 h5")
    var count=0;
    var int=setInterval(function(){
   
    count++;
    h5text.textContent = count
     if(count == 100){
        clearInterval(int)
    }
},37)
    }
})


// waiter 
tl.from("#lodder .waiter h5",{
    opacity:0,
    x:-200,
    stagger:0.2
})


//  lodder hides
tl.to("#lodder",{
    opacity:0,
    duration:0.4,
    delay:3    
    // heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
})
//lodder gone
tl.set("#lodder",{
    display:"none"
})

//  page1 comes
tl.from("#page1", {
  opacity: 0,
   y: 1200,
   duration: 0.7,
   delay:0.4
});
tl.from("#nav",{
    opacity:0,
    y:-100
 
})


tl.from(".hero h1,#hero3 h2",{
    opacity:0,
    y:120,
    stagger:0.2  
})
tl.from("#hero1,#page2", {
        opacity:0

    
    },"-=1.2");
}
function crsranimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})

Shery.makeMagnet("#navpart2 h3", {
});
}
function geeoanime(){
    Shery.imageEffect("#img-div", {
  style: 5, //Select Style
  gooey:true,
  config: 
   {"a":{"value":0.92,"range":[0,30]},"b":{"value":0.3,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8008727461408743},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.68,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.59,"range":[0,1]},"antialias_threshold":{"value":0.05,"range":[0,0.1]},"noise_height":{"value":0.64,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}}
});
}

function playcrsr(){
     var play=document.querySelector("#play");
     var box=document.querySelector("#box-vd")
    box.addEventListener("mouseenter",function(){
        box.addEventListener("mousemove",function(dets){
            gsap.from("#play",{
                left:dets.x - 570,
                top:dets.y - 200
        })
        gsap.to("#crsr",{
            opacity:0
        })
    })   
})

box.addEventListener("mouseleave",function(){
            gsap.to("#play",{
                 top:"13%",
              left: "65%"
        })
        gsap.to("#crsr",{
            opacity:1
        })
    })

var flag = 0;
var video = document.querySelector("#box-vd video");
var play = document.querySelector("#box-vd #play");

document.querySelector("#page2 #box-vd").addEventListener("click", function() {
    if (flag == 0) {
        video.play();
        video.style.opacity = 1;
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        gsap.to("#box-vd img", {
            opacity: 0
        });
        gsap.to("#box-vd #play", {
            scale: 0.5
        });
        flag = 1; // Set flag to 1 when video is playing
    } else {
        video.pause();
        video.style.opacity = 0;
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        gsap.to("#box-vd img", {
            opacity: 1
        });
        gsap.to("#box-vd #play", {
            scale: 1
        });
        flag = 0; // Set flag to 0 when video is paused
    }
});
}

function ornangeplay(){
    document.querySelector("#hero3").addEventListener("mousemove",function(dets){
   gsap.to("#flagu img",{
    x:dets.x - 500,
    y:dets.y - 400,
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(dets){
   gsap.to("#flagu img",{
    opacity:0
  })
})

}



loddinganimation(),
crsranimation(),
locomotiveanime()
geeoanime()
playcrsr()
ornangeplay()  




