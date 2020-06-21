const body = document.body
const item = document.querySelector(".item")

body.addEventListener("keypress", handleKeyPress)

function handleKeyPress(e) {
  toggleItem()
  playSound(e.keyCode)
}

function toggleItem() {
  const color = randomColor()

  item.style.display = "block"
  item.style.animation = "scale 1500ms ease-in"
  item.style.backgroundColor = color

  setTimeout(() => {
    item.style.display = "none"
  }, 1200)
}

function randomColor() {
  const red = Math.floor(Math.random() * 255 + 1)
  const green = Math.floor(Math.random() * 255 + 1)
  const blue = Math.floor(Math.random() * 255 + 1)

  return `rgba(${red}, ${green}, ${blue}, 0.7)`
}

function playSound(key) {
  let audio
  let path = "../assets/audio";
  switch (key) {
    // Key: Q
    case 113:
      audio = new Audio(`${path}/bubbles.mp3`)
      audio.play()
      break
    // Key: W
    case 119:
      audio = new Audio(`${path}/clay.mp3`)
      audio.play()
      break
    // Key: E
    case 101:
      audio = new Audio(`${path}/confetti.mp3`)
      audio.play()
      break
    // Key: R
    case 114:
      audio = new Audio(`${path}/dotted-spiral.mp3`)
      audio.play()
      break
    // Key: T
    case 116:
      audio = new Audio(`${path}/flash-1.mp3`)
      audio.play()
      break
    // Key: Y
    case 121:
      audio = new Audio(`${path}/flash-2.mp3`)
      audio.play()
      break
    // Key: U
    case 117:
      audio = new Audio(`${path}/flash-3.mp3`)
      audio.play()
      break
    // Key: I
    case 105:
      audio = new Audio(`${path}/moon.mp3`)
      audio.play()
      break
    // Key: O
    case 111:
      audio = new Audio(`${path}/piston-1.mp3`)
      audio.play()
      break
    // Key: P
    case 112:
      audio = new Audio(`${path}/piston-2.mp3`)
      audio.play()
      break
    // Key: A
    case 97:
      audio = new Audio(`${path}/piston-3.mp3`)
      audio.play()
      break
    // Key: S
    case 115:
      audio = new Audio(`${path}/prism-1.mp3`)
      audio.play()
      break
    // Key: D
    case 100:
      audio = new Audio(`${path}/prism-2.mp3`)
      audio.play()
      break
    // Key: F
    case 102:
      audio = new Audio(`${path}/prism-3.mp3`)
      audio.play()
      break
    // Key: G
    case 103:
      audio = new Audio(`${path}/splits.mp3`)
      audio.play()
      break
    // Key: H
    case 104:
      audio = new Audio(`${path}/squiggle.mp3`)
      audio.play()
      break
    // Key: J
    case 106:
      audio = new Audio(`${path}/strike.mp3`)
      audio.play()
      break
    // Key: K
    case 107:
      audio = new Audio(`${path}/suspension.mp3`)
      audio.play()
      break
    // Key: l
    case 108:
      audio = new Audio(`${path}/timer.mp3`)
      audio.play()
      break
    // Key: Z
    case 122:
      audio = new Audio(`${path}/ufo.mp3`)
      audio.play()
      break
    // Key: X
    case 120:
      audio = new Audio(`${path}/veil.mp3`)
      audio.play()
      break
    // Key: C
    case 99:
      audio = new Audio(`${path}/wipe.mp3`)
      audio.play()
      break
    // Key: V
    case 118:
      audio = new Audio(`${path}/zig-zag.mp3`)
      audio.play()
      break
    // Key: B
    case 98:
      audio = new Audio(`${path}/pinwheel.mp3`)
      audio.play()
      break
    // Key: N
    case 110:
      audio = new Audio(`${path}/corona.mp3`)
      audio.play()
      break
    // Key: M
    case 109:
      audio = new Audio(`${path}/bubbles.mp3`)
      audio.play()
      break
  }

}