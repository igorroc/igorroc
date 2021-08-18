function insertHTML(component, is404) {
	console.log(component, is404);
	let linkFetch = ""

	if (is404) {
		linkFetch = `https://igorroc.github.io/igorroc/components/${component}`
	} else {
		linkFetch = `./components/${component}`
	}

	fetch(linkFetch)
		.then((response) => response.text())
		.then((responseText) => {
			let parser = new DOMParser()
			let doc = parser.parseFromString(responseText, "text/html")
			let element = doc.body.children[0]

			let link_to = document.querySelector(
				element.getAttribute("link_to")
			)

			if (link_to) {
				link_to.classList.forEach((className) => {
					element.classList.add(className)
				})
				link_to.parentNode.insertBefore(element, link_to.nextSibling)
				link_to.remove()
			}
		})
		.catch((error) => {
			console.log(error)
		})
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
