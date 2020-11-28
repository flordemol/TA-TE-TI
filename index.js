const cuadros = document.getElementsByClassName('grid-item');

let contador = 0;

const limpiarTablero = () => {
    for (let i = 1; i <= cuadros.length; i++) {
        document.getElementById(i).innerText ="";
    }
    document.getElementById('resultado').innerText = "";
}

const validacion = (jugador) => {
    const c1 = cuadros[0].innerText;
    const c2 = cuadros[1].innerText;
    const c3 = cuadros[2].innerText;
    const c4 = cuadros[3].innerText;
    const c5 = cuadros[4].innerText;
    const c6 = cuadros[5].innerText;
    const c7 = cuadros[6].innerText;
    const c8 = cuadros[7].innerText;
    const c9 = cuadros[8].innerText;
    let resultado = document.getElementById('resultado');
    let gano = false;

    // horizontales
    if((c1 === c2 && c2 === c3 && c3 !== "") ||(c4 === c5 && c5 === c6 && c6 !== "" ) || (c7 === c8 && c8 === c9 && c9 !== "" )){
        resultado.innerText = `¡Ganó ${jugador}!`;
        for (let i = 0; i < cuadros.length; i++) {
            if(cuadros[i].innerText === "") {
                 cuadros[i].innerText = "-";
            }       
        }
        contador = 0;
        gano = true;
        setTimeout(() => limpiarTablero(), 3000);
    }

    // vericales
    if((c1 === c4 && c4 === c7 && c7 !== "") ||(c2 === c5 && c5 === c8 && c8 !== "" ) || (c3 === c6 && c6 === c9 && c9 !== "" )){
        resultado.innerText = `¡Ganó ${jugador}!`;
        for (let i = 0; i < cuadros.length; i++) {
            if(cuadros[i].innerText === "") {
                 cuadros[i].innerText = "-";
            }       
        }
        contador = 0;
        gano = true;
        setTimeout(() => limpiarTablero(), 3000);
    }

    // diagonales
    if((c1 === c5 && c5 === c9 && c9 !== "") ||(c3 === c5 && c5 === c7 && c7 !== "" )){
        resultado.innerText = `¡Ganó ${jugador}!`;
        for (let i = 0; i < cuadros.length; i++) {
            if(cuadros[i].innerText === "") {
                 cuadros[i].innerText = "-";
            }       
        }
        contador = 0;
        gano = true;
        setTimeout(() => limpiarTablero(), 3000);
    }

    if(contador === 9 && gano === false) {
        resultado.innerText = "¡Empate!" ;
        contador = 0;
        setTimeout(() => limpiarTablero(), 3000);
    }
}


let ficha = "";
const fichaElegida = (e) => {
    ficha = e.target.innerText; 
    document.getElementById('mensajeInicial').style.display = 'none'; 
    document.getElementById('grid-container').style.display = 'inline-grid'; 
}

const ponerFicha = (id) => {
   if(ficha === "❌"){
        if(document.getElementById(id).innerText === ""){
            contador % 2 === 0 ? document.getElementById(id).innerText ="❌" :  document.getElementById(id).innerText ="🟡";
            contador++;
            validacion(document.getElementById(id).innerText);
        } else {
            null;
        };
   } else {
    if(document.getElementById(id).innerText === ""){
        contador % 2 === 0 ? document.getElementById(id).innerText ="🟡" :  document.getElementById(id).innerText ="❌";
        contador++;
        validacion(document.getElementById(id).innerText);
    } else {
        null;
    };
   }
   
}

function start () {
    
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].addEventListener('click', () => ponerFicha(cuadros[i].id));
    }

    const cruz = document.getElementById("cruz");
    const circulo = document.getElementById("circulo");
    cruz.addEventListener('click', fichaElegida);
    circulo.addEventListener('click', fichaElegida);
}

window.onload = start;