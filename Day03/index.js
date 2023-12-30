gsap.from(".page1 #box",{
    scale:0,
    opacity:0,
    duration:2,
    rotate:360
})

gsap.from(".page2 #box",{
    scale:0,
    opacity:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page2 #box",
        scroll:"body" ,
        markers: true,
        start:"top 90%",
        end:"top 50%",
        scrub:2
    }
})