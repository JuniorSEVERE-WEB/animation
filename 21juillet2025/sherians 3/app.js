gsap.from("#page2 #box", {
    opacity:0,
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
      trigger:"#page2 #box",
      scroller:"body",
      markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:7,
      pin:true,
    }
 })

gsap.from("#page2 h2", {
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
      trigger:"#page2 h2",
      scroller:"body",
      markers:true,
      start:"top 50%",
      end:"top 30%",
      scrub:7,
      pin:true,
    }
})


