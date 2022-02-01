const keysControls = {
    'z' : 'C', 
    's' : 'Db',
    'x' : 'D',
    'd' : 'Eb', 
    'c' : 'E',
    'v' : 'F',
    'g' : 'Gb', 
    'b' : 'G',
    'h' : 'Ab', 
    'n' : 'A', 
    'j' : 'Bb',
    'm' : 'B'
}

const keyboardKeys = document.querySelectorAll('.keyboard__key')

keyboardKeys.forEach(key => {
    key.addEventListener('click', () => playAudio(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    
    const note = keysControls[e.key]
    keyboardKeys.forEach(key => {
        if (key.dataset.note === note) playAudio(key);
    })
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