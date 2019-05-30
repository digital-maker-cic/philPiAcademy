let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 15; index++) {
        strip.setPixelColor(index, neopixel.rgb(Math.randomRange(0, 255), Math.randomRange(0, 255), Math.randomRange(0, 255)))
        basic.pause(1000)
        strip.show()
    }
})
