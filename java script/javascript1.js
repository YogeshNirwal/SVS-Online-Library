var t1 = gsap.timeline();
t1.from("#navbar", {
    // y: -100,
    duration: 1,
    opacity: -4,


})
t1.from(".header_logo ", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,


})
t1.from(".svs , ul .a , .search", {
    y: -100,
    duration: .5,
    opacity: -4,
    stagger: .2


})
t1.from(".header_bottum ul span", {
    // y: -100,
    duration: .5,
    opacity: -4,



})
t1.from(".sign_up .aup , .assistent", {
    x: 100,
    duration: .5,
    opacity: 0,
    stagger: .2

})
t1.from(".left_slider h1", {
    x: -100,
    duration: 1,
    opacity: 0,
    // stagger: .1

})
t1.from(".left_slider span , .right_slider", {
    scale: 0,
    duration: 1,
    opacity: 0,
    // stagger: .1

})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    // effect: "fade",
    centeredSlides: true,
    // cssMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // mousewheel: true,
    keyboard: true,
});


gsap.to(".page1 ", {
    scale: 0,
    // x:"38vw",
    // margin:"auto",
    y: 65 + '%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // scaleX:0,
    // scaley:5,
    // delay: 1,
    // duration:2,
    // borderBottomLeftRadius: 5000 + '%',
    // borderBottomRightRadius: 5000 + '%',
    // borderTopLeftRadius: 2000 + '%',
    // borderTopRightRadius: 2000 + '%',

    backgroundColor: "#ff4320",
    // backgroundImage:"url(bc.jpg)",
    // backgroundRepeat:"no-repeat",
    // objectFit:" contain",
    // backgroundSize: "100% 100%",
    // opacity:0,



    // height:"-99px",
    // width: "0vh",
    borderRadius: "10000%",
    // border:"10px solid red",
    boxShadow: "0 0 1000px 700px #ff4320",
    // borderRadius:"50% 50% 50% 50% / 70% 70% 70% 70%",
    // translateY:560,
    // rotate:360,

    scrollTrigger: {
        trigger: ".page1 ",
        scroller: "body",
        pin: true,
        // markers: true,
        start: "100% 80%",
        end: "100% 25%",

        // scrub:true
        scrub: -1
    }

})

gsap.from(".courses_p21", {
    scale: 0,
    // y:"50%",
    opacity: 0,
    scrollTrigger: {
        trigger: ".courses_p2",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p22", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p22",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p23", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p23",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p24", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p24",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p25", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p25",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p26", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p26",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p27", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p27",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p28", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p28",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p29", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p29",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p30", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p30",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})
gsap.from(".courses_p31", {
    scale: 0,
    // y:"50%",
    opacity: 1,
    scrollTrigger: {
        trigger: ".courses_p31",
        scroller: "body",

        // markers: true,
        start: "100% 91%",
        end: "100% 50%",
        // stagger:80,
        // scrub:true
        scrub: -1
    }
})