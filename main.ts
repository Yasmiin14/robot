let velocidad = 40
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(1000)
    }
})
