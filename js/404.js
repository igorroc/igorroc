let h2 = document.querySelector("#pageNotFound")

let url = document.location

let cleanPath = url.pathname.split("/igorroc")[1] || url.pathname

h2.innerHTML = `Page <code>${cleanPath}</code> not found`
