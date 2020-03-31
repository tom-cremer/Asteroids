const main = document.getElementById('asteroids')
document.body.removeChild(main)

const canvas = document.createElement('canvas')
document.body.insertAdjacentElement('afterbegin', canvas)
canvas.width = 640
canvas.height = 480
