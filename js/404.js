let h2 = document.querySelector(".pageActive h2")

let url = document.location

h2.innerHTML = `Page <code>${url.pathname}</code> not found`
console.log(url.pathname)