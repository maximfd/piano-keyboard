const keyboardKeys = document.querySelectorAll('.keyboard__key')

keyboardKeys.forEach(key => {
    key.addEventListener('click', () => playAudio(key))
})

function playAudio(key) {
    const keyAudio = document.getElementById(key.dataset.note)
    keyAudio.currentTime = 0
    keyAudio.play()
    key.classList.add('keyboard__key_pressed')
    keyAudio.addEventListener('ended', () => {
        key.classList.remove('keyboard__key_pressed')
    })
}