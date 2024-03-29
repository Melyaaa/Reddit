import { Reducer } from "react";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./actions";
import { IUserData } from "../../hooks/useUserData";

export type MeState = {
    loading: boolean
    error: string;
    data: IUserData
}

type MeActions = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ME_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };

            case ME_REQUEST_SUCCESS: 
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default:
            return state
    }
}