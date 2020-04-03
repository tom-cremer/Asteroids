const collisionDetector = {
  detect (ctx, ship, asteroids) {
    ship.bullets.forEach(bullet => {
      asteroids.forEach(asteroid => {
        if (ctx.isPointInPath(asteroid.path,
          bullet.location.x - asteroid.location.x,
          bullet.location.y - asteroid.location.y)) {
          console.log('Collision')
        }
      })
    })
  }
}

export default collisionDetector
