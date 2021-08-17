const min_delay = 0
const max_delay = 10
const min_duration = 5
const max_duration = 10
const min_size = 15
const max_size = 150
const min_position = 0
const max_position = 90

var particles = document.querySelectorAll(".particles")

particles.forEach((particle) => {
	for (const box of particle.children) {
		var size =
			Math.floor(Math.random() * (max_size - min_size) + min_size) + "px"
		var delay =
			Math.floor(Math.random() * (max_delay - min_delay) + min_delay) +
			"s"
		var duration =
			Math.floor(
				Math.random() * (max_duration - min_duration) + min_duration
			) + "s"
		var position =
			Math.floor(
				Math.random() * (max_position - min_position) + min_position
			) + "%"

		box.style.width = size
		box.style.height = size
		box.style.animationDelay = delay
		box.style.animationDuration = duration
		box.style.right = position
	}
})
