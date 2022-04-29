
export const calculate = async (req, res, next) => {
    try {
        const currentRoll = req.body //Defines the number of pins knocked down in the current roll

        //Logic for row calculation




        var currentFrameBall = 3
        var historicRoll = [] //Array for total calculation
        //historicRoll.length = 0
        // var currentRoll = 2 //value from button
        var previousFrameTotal = 0
        var currentFrameTotal = 0

        //Enter on every 2nd ball
        if (currentFrameBall % 2 != 0) {
            if (currentRoll < 10) {
                //Push the value into array
                historicRoll.push(currentRoll)

                //Calculate frame total and bonus points
                if (historicRoll[historicRoll.length - 2] == 10) {
                    previousFrameTotal = historicRoll[historicRoll.length - 2] + historicRoll[historicRoll.length - 1] + historicRoll[historicRoll.length]
                    currentFrameTotal = historicRoll[historicRoll.length - 1] + historicRoll[historicRoll.length]
                }
                else if (historicRoll[historicRoll.length - 3] + historicRoll[historicRoll.length - 2] == 10) {
                    previousFrameTotal = historicRoll[historicRoll.length - 3] + historicRoll[historicRoll.length - 2] + historicRoll[historicRoll.length - 1]
                    currentFrameTotal = historicRoll[historicRoll.length - 1] + historicRoll[historicRoll.length]
                }
                else {
                    currentFrameTotal = historicRoll[historicRoll.length - 1] + historicRoll[historicRoll.length]
                }
            }
        }
        else if (currentFrameBall == 10) {
            finalTotal = 0
            for (let i = 0; i < historicRoll.length; i++) {
                finalTotal += historicRoll[i];
            }
        }
        else {
            if (currentRoll < 10) {
                //Push the value into array
                historicRoll.push(currentRoll)
            }
            else if (currentRoll == 10) {
                historicRoll.push(0)
                historicRoll.push(10)
                console.log(historicRoll)
            }
        }
        //console.log(previousFrameTotal)
        //console.log(currentFrameTotal)
        //console.log(historicRoll)
        res.json(currentRoll)
    } catch (error) {
        if (error instanceof Error && error.name == 'ValidationError') {
            next(new BadRequestError('Invalid Request', error))
        } else {
            next(error)
        }
    }
}