let tl = gsap.timeline()
tl.from(".nav-logo ,ul , .nav-btn ",{
  y:-100,
  duration:1,
  delay:0.2,
  opacity:0,
  stagger:0.2
})


tl.from(".main h1",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:.5
})

tl.from("#left-img",{
    x:-600,
    duration:0.5 ,
})

tl.from("#right-img",{
    x:600,
    duration:0.5 ,
})

tl.from("h5",{
    
    opacity:0,
    
})
tl.to("h5",{
    y:"13%",
    repeat:-1,
    yoyo:true
})

