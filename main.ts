let steps = 0
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
basic.forever(function () {
    steps = 0
})
basic.forever(function () {
	
})
