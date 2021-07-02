import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import lax from 'lax.js'

window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Add animation bindings to elements
  lax.addElements('#hero', {
    scrollY: {
      opacity: [
        [ 0, 300 ], 
        [ 1,  0 ]
      ]
    }
  })
}