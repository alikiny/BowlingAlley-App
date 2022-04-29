import { Dispatch } from "redux"
import axios from 'axios'

import { SelectedRoll, Frame } from "../Types/types"

//For each roll
export function selectedRollValue(frameData: Frame): SelectedRoll {
    console.log("Action:")
    console.log(frameData)
    return {
        type: "SELECTED_ROLL",
        payload: frameData,
    };
}

export function getRollValue(frameData: Frame) {
    return async (dispatch: Dispatch) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000',
            data: { frameData }

        }).then(response => {
            let data = response.data
            console.log("Data from BckEnd")
            console.log(data)
            dispatch(selectedRollValue(data))

        })
    }
}