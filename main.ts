basic.forever(function () {
    if (!(crickit.signal1.digitalRead()) && !(crickit.signal8.digitalRead())) {
        crickit.motor1.run(-32)
        crickit.motor2.run(-30)
        basic.showString("G")
    } else {
        if (crickit.signal1.digitalRead()) {
            basic.pause(100)
            crickit.motor1.run(20)
            crickit.motor2.run(-20)
            basic.showString("L")
        }
        if (crickit.signal8.digitalRead()) {
            basic.pause(100)
            crickit.motor1.run(-20)
            crickit.motor2.run(20)
            basic.showString("R")
        }
    }
})
