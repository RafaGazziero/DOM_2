var elemento
elemento = document.getElementById("titulo")
alert(elemento)

function mudartitulo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.innerHTML="Alterando o título via JS"
}

function mudarestilo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.style.color = "darkgreen"
    titulo.style.backgroundColor = "lightgray"
    titulo.style.fontSize = "68px"
}