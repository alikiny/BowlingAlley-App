//Import - Files & Functions
import { SelectedRoll, InitialState } from "../Types/types"

const initialState: InitialState = {
    rolls: []
};

export default function rollDetails(state = initialState, action: SelectedRoll): InitialState {
    switch (action.type) {
        case "SELECTED_ROLL": {
            return {
                ...state,
                rolls: action.payload,
            };
        }
        default:
            return state;
    }
}