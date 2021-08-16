let hambMenu = document.querySelector("#hamburguerMenu")
let menu = document.querySelector("#menu")

hambMenu.addEventListener("click", () =>{
    console.log("click")
    hambMenu.classList.toggle("headerMenuActive")
    menu.classList.toggle("menuShow")
})

hambMenu.addEventListener("mouseenter", () =>{
    cursor.classList.add("cursorOnLink")
})

hambMenu.addEventListener("mouseout", () =>{
    cursor.classList.remove("cursorOnLink")
})