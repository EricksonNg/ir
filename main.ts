basic.forever(function () {
    if (!(crickit.signal1.digitalRead()) && !(crickit.signal8.digitalRead())) {
        crickit.motor1.run(-50)
        crickit.motor2.run(-50)
        basic.showString("G")
    } else {
        if (crickit.signal1.digitalRead()) {
        	
        }
        if (crickit.signal8.digitalRead()) {
        	
        }
    }
})
