gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    
    ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content-wrapper',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.header-img', { opacity: 1, x: 50 }, {
		opacity: 0,
        x: 0,
		scrollTrigger: {
			trigger: '.header-img',
			start: 'start',
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
				end: 'top',
				scrub: true
			}
		})
	})
}