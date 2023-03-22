let estadoLinterna = "apagado";
let sonidoBatman = document.querySelector("#bati_encendido")
let sonidoBoton = document.querySelector("#bati_click")
let batman = document.querySelector("#batman")
let batmanBoton = document.querySelector("#boton")


batmanBoton.addEventListener("click",controlarLinterna)

function controlarLinterna() {
    if (estadoLinterna == "apagado") {
        estadoLinterna = "Encendido";
        sonidoLinterna();
        batman.classList.add("batman_activo");
    }
        else {
            estadoLinterna = "apagado";
            batman.classList.remove("batman_activo");
        }   
       
}

function sonidoLinterna() {
    if (sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
        } else {
            sonidoBoton.play();
            sonidoBatman.pause();
                    }
    
}