let h2 = document.querySelector(".pageActive h2")

let url = document.location

let cleanPath = url.pathname.split("/igorroc")[1]

h2.innerHTML = `Page <code>${cleanPath}</code> not found`
