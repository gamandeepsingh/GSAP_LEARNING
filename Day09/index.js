
var tl = gsap.timeline()

tl.from("nav .logo , nav .center-nav,nav i", {
    transform: "translateY(-200px)",
    delay: 0.5,
    duration: 1,
    stagger: 0.5
})

tl.to(".one .fanta-img", {
    transform: "translateY(160%) translateX(-100%)",
    duration: 1.5,
    scale: 0.8,
    scrollTrigger: {
        trigger: ".one",
        scroller: ".main",
        start: "top 1%",
        end: "top -85%",
        scrub: 2,
        // markers: true,
    }
}, 'orange')

tl.to(".orange-cut", {
    transform: "translateY(300%) translateX(-100%)",
    duration: 1.5,
    scale: 0.7,
    scrollTrigger: {
        trigger: ".one",
        scroller: ".main",
        start: "top 1%",
        end: "top -85%",
        scrub: 2,
        // markers: true,
    }
}, 'orange')

tl.to(".orange-full", {
    transform: "translateY(300%) translateX(-320%)",
    duration: 1.5,
    scale: 1.2,
    zIndex: 1,
    scrollTrigger: {
        trigger: ".one",
        scroller: ".main",
        start: "top 1%",
        end: "top -85%",
        scrub: 2,
        // markers: true,
    }
}, 'orange')

tl.to(".leaf1", {
    transform: "rotate(120deg) translateY(-350%) translateX(320%)",
    duration: 0.2,
    scale: 0.6,
    zIndex: 1,
    scrollTrigger: {
        trigger: ".one",
        scroller: ".main",
        start: "top 1%",
        end: "top -85%",
        scrub: 2,
        // markers: true,
    }
})

tl.to(".leaf3", {
    transform: " translateY(-110%) translateX(-20%)",
    duration: 0.2,
    scale: 0.6,
    scrollTrigger: {
        trigger: ".one",
        scroller: ".main",
        start: "top 1%",
        end: "top -85%",
        scrub: 2,
        // markers: true,
    }
})

tl.from(".third .lemon", {
    transform: "translateX(-50%) translateY(110%)",
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    }
})

tl.from(".third .sprite", {
    transform: "translateX(-50%) ",
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    }
})

tl.from(".third .fanta-img", {
    transform: "translateY(50%) ",
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    }
})

tl.to(".card2 .orange-cut2", {
    duration: 1,
    scale: 0.6,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    },
    repeat: -1,
    yoyo: true
})


tl.from(".third .raspberry", {
    transform: "translateX(50%) ",
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    }
})
tl.from(".third .coca", {
    transform: "translateX(50%) ",
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: ".third",
        scroller: ".main",
        // markers:true,
        top: "top 0%",
        end: "top 30%",
        scrub: 1
    }
})

