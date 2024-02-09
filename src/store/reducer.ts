import { ActionCreator, Reducer } from "redux";
import { ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./me/actions";
import { MeState, meReducer } from "./me/meReducer";

export type RootState = {
    commentText: string,
    token: string,
    me: MeState,
}

type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string
}

type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}

type MyAction = UpdateCommentAction |
    SetTokenAction |
    MeRequestAction |
    MeRequestErrorAction |
    MeRequestSuccessAction;

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

const UPDATE_COMMENT = "UPDATE_COMMENT"
export const updateComment: ActionCreator<MyAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
})

const SET_TOKEN = "SET_TOKEN";
export const setToken: ActionCreator<MyAction> = (token: string) => ({
    type: "SET_TOKEN",
    token,
})

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_COMMENT":
            return {
                ...state,
                commentText: action.text,
            }
        case "SET_TOKEN": {
            return {
                ...state,
                token: action.token
            }
        }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }
        // case "ME_REQUEST_SUCCESS":
        //     return {
        //         ...state,
        //         data: action.data
        //     }

        default:
            return state;
    }
}