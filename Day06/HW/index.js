let tl = gsap.timeline()
function time(){
    var a=0;
    let c=setInterval(()=>{
        a+= Math.floor(Math.random()*15)
        if(a<101){
            document.querySelector(".loader h1").innerHTML= a +"%"
        }
        else{
            a=100
            document.querySelector(".loader h1").innerHTML= a + "%"
            clearInterval(c)
        }
        c()
    },100)
}        
        tl.to(".loader",{
            transform:"translateY(-100vh)",
            duration:2,
            delay:1,
            onStart:time()
        }) 
        tl.from("nav",{
            delay:0
        })
        tl.from("nav img , nav ul ,nav  button",{
            y:-80,
            opacity:0,
            delay:0.2,
            stagger:0.2
        })
        tl.to(".page1 h1",{
            transform:"translateX(-100%)",
            fontWeight:100,
            scrollTrigger:{
                trigger:".page1",
                start:"top top",
                end:"+=200%",
                scrub: 5,
                pin: true,
            }
        })


        