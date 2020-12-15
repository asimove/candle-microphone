let flicker = 0
let candle = images.createImage(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
let noise = false
basic.forever(function () {
    if (envirobit.getNoiseLevel() > 0) {
        candle.showImage(0)
        flicker = randint(1, 3)
        if (flicker != 2) {
            led.unplot(2, 0)
            led.plot(flicker, 0)
        }
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})
control.inBackground(function () {
    if (envirobit.getNoiseLevel() > 0) {
        noise = true
    }
})
