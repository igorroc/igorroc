var isPortuguese = true
var contact = document.getElementById("title-contact")
var topics = document.getElementsByClassName("topico")
var footer = document.getElementsByClassName('rodape')[0]


function translation() {
    fetch("../translation.json")
        .then(Response => Response.json())
        .then(data => {
            let i = 0
            let j = 0
            isPortuguese = isPortuguese ? false : true // TOGGLE THE LANGUAGE
            contact.innerHTML = data.contact[`${isPortuguese ? "br" : "us"}`] // CONTACT INFO
            footer.children[0].innerHTML = data.footer[`${isPortuguese ? "br" : "us"}`] // FOOTER

            for (const topic of topics) { // EACH TOPIC
                if(data.topics[i].title != undefined){
                    topic.children[0].children[1].innerHTML = data.topics[i].title[`${isPortuguese ? "br" : "us"}`]
                    if(topic.children[1].children[0].localName == 'ul'){
                        j = 0
                        for (const list of topic.children[1].children[0].children) {
                            if (list.className == "divisao") {
                                if (list.children[0].children.length > 0) {
                                    if(list.children[0].children[1]){
                                        list.children[0].children[1].innerHTML = data.topics[i].itens[j].key[`${isPortuguese ? "br" : "us"}`]
                                    }else{
                                        list.children[0].children[0].innerHTML = data.topics[i].itens[j].key[`${isPortuguese ? "br" : "us"}`]
                                    }
                                    if(data.topics[i].itens[j].value){
                                        list.children[1].innerHTML = data.topics[i].itens[j].value[`${isPortuguese ? "br" : "us"}`]
                                    }
                                }else{
                                    list.children[0].innerHTML = data.topics[i].itens[j].key[`${isPortuguese ? "br" : "us"}`]
                                    if(data.topics[i].itens[j].value){
                                        list.children[1].innerHTML = data.topics[i].itens[j].value[`${isPortuguese ? "br" : "us"}`]
                                    }
                                }
                            }
                            j++
                        }
                    }else if (topic.children[1].children[0].localName == 'destaque') {
                        topic.children[1].innerHTML = data.topics[i].itens[0].key[`${isPortuguese ? "br" : "us"}`]
                    }
                }
                i++
            }
            
            
        })
}