radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (ready) {
        myid = receivedNumber
        basic.pause(100)
        radio.sendNumber(myid)
        basic.showNumber(myid)
        delaytime = myid * offsettime
        ready = false
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (ready) {
        radio.sendNumber(77)
        basic.pause(100)
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == "Q") {
        basic.pause(delaytime)
        lighton = 1
    }
    
})
let offsettime = 0
let delaytime = 0
let lighton = 0
let ready = false
let myid = 0
radio.setGroup(1)
myid = 0
ready = true
lighton = 0
delaytime = 0
offsettime = 1000
basic.forever(function on_forever() {
    
    if (lighton == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P16, 0)
        lighton = 0
    }
    
})
