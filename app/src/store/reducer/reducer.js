import { FINDING_QUOTES_START, SUCCESSFUL_FIND } from '../actions/actions'

export const initialState = {
    trumpQuotes: [],
    ronSwansonQuotes: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FINDING_QUOTES_START:
            console.log("IN ACTION1")

            return {
                ...state,
                isLoading: true,
                error: ''
            };
        
        case SUCCESSFUL_FIND:
            console.log("IN ACTION2")
            return {
                ...state,
                isLoading: false,
                trumpQuotes: action.payloadone,
                ronSwansonQuotes: action.payloadtwo,
                error: ''
            }

        default:
            return {state}
    }
}