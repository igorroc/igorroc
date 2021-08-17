document.addEventListener("mousemove", (event) => {
	document.querySelectorAll(".parallaxMouse").forEach((element) => {
		element.style.transform = `rotateY(${
			(event.clientX - document.body.clientWidth / 2) / 30
		}deg) rotateX(${
			(event.clientY - document.body.clientHeight / 2) / 30
		}deg)`
	})
	document.querySelectorAll(".parallaxMouse2d").forEach((element) => {
		element.style.transform = `translateX(${
			event.clientX / 30
		}px) translateY(${event.clientY / 30}px)`
	})
})
