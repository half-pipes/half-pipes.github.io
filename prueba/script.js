const btn = document.querySelector("#btn-1");
let ultimoElemento = null;

function agregarFrase(){
    let frases = ["Hola Jo tqm","Yo creo que deberías depositarme 1000 pesos", "Linda la que lee este mensaje", "Sabías que el maní japonés fue creado en México?", "La pizza hawaiana la hicieron en Canadá", "Préstame un libro de Percy porfavor", "Las láminas repetidas no completan el álbum", "El hombre adecuado en el sitio equivocado puede cambiar el rumbo del mundo", "No se me ocurrió otra frase, aprieta de nuevo porfis", "Que tengas un lindo día amiga mayonesa!"];
    
    if (ultimoElemento){
        ultimoElemento.remove()
    }

    const randomNum = Math.floor(Math.random()*10);
    const newElement = document.createElement("p");
    let frase = frases[randomNum];
    newElement.textContent = frase;
    document.body.appendChild(newElement);
    ultimoElemento = newElement;

}

btn.onclick = agregarFrase;


