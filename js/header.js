let hambMenu = document.querySelector("#hamburguerMenu")


hambMenu.addEventListener("click", () =>{
    console.log("click")
    hambMenu.classList.toggle("headerMenuActive")
})

hambMenu.addEventListener("mouseenter", () =>{
    cursor.classList.add("cursorOnLink")
})

hambMenu.addEventListener("mouseout", () =>{
    cursor.classList.remove("cursorOnLink")
})