input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
basic.forever(function () {
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P5, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P5, 1)
})
basic.forever(function () {
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 1)
})
basic.forever(function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    pins.digitalWritePin(DigitalPin.P0, 0)
    music.setVolume(110)
})
