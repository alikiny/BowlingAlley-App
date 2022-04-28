import { Dispatch } from "redux"

import { SelectedRoll, Frame } from "../Types/types"

//For each roll
export function getRollValue(frameValue: Frame[]): SelectedRoll {
    return {
        type: "SELECTED_ROLL",
        payload: frameValue,
    };
}
