var body = document.body
var links = document.links
var topicos = document.getElementsByClassName("descricao")
var logo = document.getElementById('logo')
var rodape = document.getElementsByClassName('rodape')[0]


function darkMode() {
    body.classList.toggle("dark-mode-bg")
    body.classList.toggle("dark-mode-txt")
    logo.classList.toggle("svg-white")
    rodape.classList.toggle("white-rodape")

    for (const link of links) {
        link.classList.toggle("dark-mode-txt")
    }
    for (const topico of topicos) {
        var icons = topico.getElementsByTagName('img')
        var bars = topico.getElementsByClassName('barra')

        for (const icon of icons) {
            icon.classList.toggle("svg-white")
        }
        for (const bar of bars) {
            bar.classList.toggle("dark-bar")
        }
    }
}