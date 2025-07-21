/*gsap.to("#box", {
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    
    
    
})

gsap.to("#box2", {
    x:500,
    
    duration:2,
    delay:1,
    backgroundColor: "yellow"
    
})
gsap.to("#box3", {
    x:500,
    
    duration:2,
    delay:2.5,
    scale:0.5,
    borderRadius: "50%",
    
})
    */
   
let tl = gsap.timeline()

tl.to("#box", {
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box2", {
    x:1500,
    duration:1.5
})