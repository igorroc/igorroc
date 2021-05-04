var isPortuguese = true
var contact = document.getElementById("title-contact")
var topics = document.getElementsByClassName("topico")
var rodape = document.getElementsByClassName('rodape')[0]


function translation() {
    if(isPortuguese){
        isPortuguese = false
        fetch("./translation.json")
        .then(Response => Response.json())
        .then(data => {
            let i = 0
            contact.innerHTML = data.contact.us // CONTACT INFO
            for (const topic of topics) { // EACH TOPIC
                if(data.topics[i].title != undefined){
                    console.log(topic)
                    topic.children[0].children[1].innerHTML = data.topics[i].title.us
                }
                i++
            }
        })
    }else{
        isPortuguese = true
        fetch("./translation.json")
        .then(Response => Response.json())
        .then(data => {
            contact.innerHTML = data.contact.br
        })
    }
}