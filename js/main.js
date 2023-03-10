gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content-wrapper',
    smooth: 1.5,
    effects: true
})

gsap.fromTo('.header-img', { opacity: 1, x: 0, y: 0 }, {
    opacity: 0,
    x: 200,
    y: 125,
    scrollTrigger: {
        trigger: '.header-img',
        start: '0',
        end: '800',
        scrub: true
    }
})

let contentLeft = gsap.utils.toArray('.content-left .card')

contentLeft.forEach(item => {
    gsap.fromTo(item, { opacity: 0.1, x: -75 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
        }
    })
})

let contentRight = gsap.utils.toArray('.content-right .card')

contentRight.forEach(item => {
    gsap.fromTo(item, { opacity: 0.1, y: 75 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: item,
            start: '-650',
            end: '-200',
            scrub: true
        }
    })
})