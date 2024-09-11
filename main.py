def on_received_number(receivedNumber):
    global myid, delaytime, ready
    if ready:
        myid = receivedNumber
        basic.pause(100)
        radio.send_number(myid)
        basic.show_number(myid)
        delaytime = myid * offsettime
        ready = False
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    if ready:
        radio.send_number(77)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global lighton
    if receivedString == "Q":
        basic.pause(delaytime)
        lighton = 1
radio.on_received_string(on_received_string)

offsettime = 0
delaytime = 0
lighton = 0
ready = False
myid = 0
radio.set_group(1)
myid = 0
ready = True
lighton = 0
delaytime = 0
offsettime = 1000

def on_forever():
    global lighton
    if lighton == 1:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P8, 0)
        pins.digital_write_pin(DigitalPin.P12, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P12, 0)
        pins.digital_write_pin(DigitalPin.P16, 1)
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P16, 0)
        lighton = 0
basic.forever(on_forever)
