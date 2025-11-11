// Para crear un efecto "Typing", justo como se muestra en el videojuego de Undertale cuando se muestra un dialogo :)
function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    
    if (text && i < text.length) {
        element.textContent += text[i];
    } else {
        return; 
    }

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 70);
}

// Iniciar el c typing SÓLO en elementos VISIBLES 
const elementosParaEscribir = document.querySelectorAll(".efecto-typing");

elementosParaEscribir.forEach(elemento => {
    const estaOculto = elemento.closest('.hide');

    // SI NO ESTÁ OCULTO (la sección de música), entonces inicia la animación.
    if (!estaOculto) {
        const textoOriginal = elemento.textContent;
        textTypingEffect(elemento, textoOriginal);
    }
    // Si está oculto, no hace nada.
});


// Iniciar el efecto typing de los elementos ocultos DESPUÉS de dar play
const reproductor = document.getElementById("musica");
const contenidoOculto = document.querySelectorAll(".hide"); 

reproductor.addEventListener('play', function() {

    contenidoOculto.forEach(function(seccion) {
        seccion.classList.remove('hide');

        const textosEnSeccion = seccion.querySelectorAll('.efecto-typing');
        textosEnSeccion.forEach(function(texto) {
            if (texto) {
                const textoOriginal = texto.textContent;
                textTypingEffect(texto, textoOriginal);
            }
        });
    });

}, { once: true });

//Código para la cuenta regresiva
var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

function countdownTimer(params) {
    const countDownDate = new Date("11/12/2025").getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        daysEl.innerText = formatNumber(Math.floor(distance / day));
        hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour));
        minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute));
        secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second));

        //Cuando se llegue a la fecha
        if (distance < 0) {
            document.getElementById('headline').innerText = 'LA ESPERA';
            document.getElementById('headline2').innerText = 'HA TERMINADO';
            document.getElementById('countdown').style.display = 'none';
            clearInterval(interval);
        }
    }, 1000);
}
    function formatNumber(number) {
        if (number < 10) {
            return '0' + number;
        } 
        return number;
 }

    //Correr la función
    countdownTimer();

//Mostrar modal al dar clic en el botón de suscribirte (y que muestre el confetti)
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('closebtn');
const confettiOverlay = document.getElementById('confetti-overlay'); 

if (open && modal_container && close && confettiOverlay) { 

    open.addEventListener('click', () => {
        modal_container.classList.add('show');
        confettiOverlay.classList.add('show-confetti'); 
    });

    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
        confettiOverlay.classList.remove('show-confetti'); 
    });

    
    modal_container.addEventListener('click', function(event) {
        if (event.target === modal_container) {
            modal_container.classList.remove('show');
            confettiOverlay.classList.remove('show-confetti'); 
        }
    });
}

var efecto = new Audio();
efecto.src = "/Invitacion/music/saved_sound.mp3";