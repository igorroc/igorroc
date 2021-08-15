let cursor = document.querySelector("#cursor")

window.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px"
    cursor.style.top = event.clientY + "px"
})