let tl = gsap.timeline()

function time() {
    var a = 0;
    setInterval(() => {
        a = a + Math.floor(Math.random() * 10)
        if (a < 101) {
            document.querySelector(".loader h1").innerHTML = a + "%"
        }
        else {
            a = 100
        }
    }, 100)
}

tl.to(".loader h1", {
    scale: 1.5,
    delay: 0.5,
    duration: 1,
    onstart: time()
})

tl.to(".loader", {
    top: "-100vh",
    delay: 1,
    duration: 1,

})

tl.to(".page1 h1", {
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        // markers:true,
        start: "top 0",
        end: "top -200%",
        scrub: 5,
        pin: true
    }
})