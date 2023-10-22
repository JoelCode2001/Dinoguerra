let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("seleccionar-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciar)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-dino")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"    

    let inputMegalodonte = document.getElementById("megalodonte")
    let inputToporrestre = document.getElementById("toporrestre")
    let inputFenix = document.getElementById("fenix")
    let spanMascotaJugador = document.getElementById("nombre-dinomascota")

    if(inputMegalodonte.checked) {
       spanMascotaJugador.innerHTML = " Megalodonte "
    } else if(inputToporrestre.checked) {
        spanMascotaJugador.innerHTML = " Toporrestre "
    } else if(inputFenix.checked) {
        spanMascotaJugador.innerHTML = " Fénix "
    } else{
        alert("No seleccionaste tu Dinomascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = random(1,3)
    let ataqueEnemigo = document.getElementById("nombre-dinoenemigo")
    if (mascotaAleatorio == 1) {
        ataqueEnemigo.innerHTML = "Megalodonte"
    } else if(mascotaAleatorio == 2) {
        ataqueEnemigo.innerHTML = "Toporrestre"
    } else if(mascotaAleatorio == 3) {
        ataqueEnemigo.innerHTML = "Fénix"
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = random(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = dentById("viocument.getElemdas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICIDADES ¡GANASTE!")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("¡PERDISTE! MAS SUERTE LA PRÓXIMA VEZ")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado")
    let ataqueDelJugador = document.getElementById("ataques-del-jugador")
    let ataqueDelEnemigo = document.getElementById("ataques-del-enemigo")
    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    // let parrafo = document.createElement("p")
    // parrafo.innerHTML = 'Tu Dino atacó con ' + ataqueJugador + ' , el dino enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciar() {
    location.reload()
}

function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
window.addEventListener("load" ,iniciarJuego)