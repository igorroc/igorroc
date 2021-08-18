function insertHTML(component) {
	console.log(component)
	fetch(`../components/${component}`)
		.then((response) => response.text())
		.then((responseText) => {
			let parser = new DOMParser()
			let doc = parser.parseFromString(responseText, "text/html")
			let element = doc.body.children[0]

			let link_to = document.querySelector(
				element.getAttribute("link_to")
			)

			if (link_to) {
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
