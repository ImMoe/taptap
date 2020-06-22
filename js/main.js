let body, item, input

body = document.body
item = document.querySelector('.item')
input = document.querySelector('.input')

body.addEventListener('keypress', handleKeyPress)

function handleKeyPress(e) {
  toggleItem()
  playSound(e.keyCode)
}

function toggleItem() {
  const color = randomColor()

  item.style.display = 'block'
  item.style.animation = 'scale 1500ms ease-in'
  item.style.backgroundColor = color

  setTimeout(() => {
    item.style.display = 'none'
  }, 1200)
}

function randomColor() {
  const red = Math.floor(Math.random() * 255 + 1)
  const green = Math.floor(Math.random() * 255 + 1)
  const blue = Math.floor(Math.random() * 255 + 1)

  return `rgba(${red}, ${green}, ${blue}, 0.7)`
}

function Sound(name) {
  if (!name) return new Error('There is no name defined')
  let sound = new Audio(`${location.href}assets/audio/${name}.mp3`)
  sound.play()
}

function playSound(key) {
  switch (key) {
    // Key: Q
    case 113:
      Sound('bubbles')
      break
    // Key: W
    case 119:
      Sound('clay')
      break
    // Key: E
    case 101:
      Sound('confetti')
      break
    // Key: R
    case 114:
      Sound('dotted-spiral')
      break
    // Key: T
    case 116:
      Sound('flash-1')
      break
    // Key: Y
    case 121:
      Sound('flash-2')
      break
    // Key: U
    case 117:
      Sound('flash-3')
      break
    // Key: I
    case 105:
      Sound('moon')
      break
    // Key: O
    case 111:
      Sound('piston-1')
      break
    // Key: P
    case 112:
      Sound('piston-2')
      break
    // Key: A
    case 97:
      Sound('piston-3')
      break
    // Key: S
    case 115:
      Sound('prism-1')
      break
    // Key: D
    case 100:
      Sound('prism-2')
      break
    // Key: F
    case 102:
      Sound('prism-3')
      break
    // Key: G
    case 103:
      Sound('splits')
      break
    // Key: H
    case 104:
      Sound('squiggle')
      break
    // Key: J
    case 106:
      Sound('strike')
      break
    // Key: K
    case 107:
      Sound('suspension')
      break
    // Key: l
    case 108:
      Sound('timer')
      break
    // Key: Z
    case 122:
      Sound('ufo')
      break
    // Key: X
    case 120:
      Sound('veil')
      break
    // Key: C
    case 99:
      Sound('wipe')
      break
    // Key: V
    case 118:
      Sound('zig-zag')
      break
    // Key: B
    case 98:
      Sound('pinwheel')
      break
    // Key: N
    case 110:
      Sound('corona')
      break
    // Key: M
    case 109:
      Sound('bubbles')
      break
  }
}
