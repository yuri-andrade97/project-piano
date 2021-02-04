// pegando as keys
const keys = document.querySelectorAll(".key")

// tocando as notas
function playNotes(event) {

    let audioKeyCode = getKeyCode(event)

    // tecla ditada ou pressionada
    const  key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // se a tecla existe
    const isKeyExists = key

    if(!isKeyExists) {
        return;
    }

    addPlayingClass(key)
    // tocar o audio
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

// click com mouse
keys.forEach( function(key) {
    key.addEventListener("click", playNotes)
    key.addEventListener("transitionend", removePlayingClass)

})

// tecla do teclado
window.addEventListener("keydown", playNotes)