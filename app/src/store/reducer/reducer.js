import { FINDING_QUOTES_START, SUCCESSFUL_FIND } from '../actions/actions'

export const initialState = {
    breakingQuotes: [],
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
            console.log('REDUCER', action.payloadtwo)
            return {
                ...state,
                isLoading: false,
                breakingQuotes: action.payloadone,
                ronSwansonQuotes: action.payloadtwo,
                error: ''
            }

        default:
            return {state}
    }
}