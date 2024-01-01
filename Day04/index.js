let tl = gsap.timeline()

tl.from("nav",{
    opacity:0,
    delay:0.1
})
tl.from("nav img , nav ul ,nav  button",{
    y:-80,
    opacity:0,
    delay:0.5,
    stagger:0.2
})

tl.from(".container .left h1",{
    opacity:0,
    x:-600,
    stagger:0.2,
})

tl.from(".right img",{
    scale:2,
    opacity:0,
    duration:1.2
})

tl.from(".box",{
    scale:0,
    opacity:0,
    duartion:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroll:"body",
        markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
})

