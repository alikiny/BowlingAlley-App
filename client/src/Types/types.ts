export type Frame = {
    currentRoll: Number,
    historicRolls: Number[],
    frameValue: Number,
    frameTotal: Number,
    gameTotal: Number,
    rollIndex: Number,
    strike: Boolean
}

export type InitialState = {
    frameData: Frame,
    currentRoll: Number,
    historicRolls: Number[],
    frameValue: Number,
    frameTotal: Number,
    gameTotal: Number,
    rollIndex: Number,
    strike: Boolean
}

export type SelectedRoll = {
    type: "SELECTED_ROLL",
    payload: Frame,
}