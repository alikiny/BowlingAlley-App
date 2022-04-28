export type Frame = {
    roll_1: number,
    roll_2: number,
    frameTotal: number
}

export type InitialState = {
    rolls: Frame[]
}

export type SelectedRoll = {
    type: "SELECTED_ROLL",
    payload: Frame[],
}