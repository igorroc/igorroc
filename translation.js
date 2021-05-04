var isPortuguese = true
var contact = document.getElementById("title-contact")
var topics = document.getElementsByClassName("topico")
var footer = document.getElementsByClassName('rodape')[0]


function translation() {
    fetch("./translation.json")
        .then(Response => Response.json())
        .then(data => {
            let i = 0
            isPortuguese = isPortuguese ? false : true // TOGGLE THE LANGUAGE
            contact.innerHTML = data.contact[`${isPortuguese ? "br" : "us"}`] // CONTACT INFO
            for (const topic of topics) { // EACH TOPIC
                if(data.topics[i].title != undefined){
                    topic.children[0].children[1].innerHTML = data.topics[i].title[`${isPortuguese ? "br" : "us"}`]
                    console.log(topic.children[1])
                }
                i++
            }
            footer.children[0].innerHTML = data.footer[`${isPortuguese ? "br" : "us"}`]
            
        })
    
}