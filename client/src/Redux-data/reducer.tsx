import { SelectedRoll, InitialState } from "../Types/types"

const initialState: InitialState = {
    frameData: {
        currentRoll: 0,
        historicRolls: [],
        frameValue: 0,
        frameTotal: 0,
        gameTotal: 0,
        rollIndex: 0,
        strike: false
    },
    currentRoll: 0,
    historicRolls: [],
    frameValue: 0,
    frameTotal: 0,
    gameTotal: 0,
    rollIndex: 0,
    strike: false
}

export default function rollDetails(state = initialState, action: SelectedRoll): InitialState {
    switch (action.type) {
        case "SELECTED_ROLL": {
            const frameData = action.payload
            console.log("Reducer")
            console.log(frameData)
            const currentRollValue = frameData.currentRoll
            console.log(currentRollValue)
            frameData.historicRolls.push(currentRollValue)
            //console.log("History" + state.historicRolls)
            //console.log("Reducer:" + currentRollValue)
            return {
                ...state,
                frameData: frameData,
            };
        }
        default:
            return state;
    }
}