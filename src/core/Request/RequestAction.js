import { constants } from '../constants'

export const requestStarted = name => ({
    type: constants.request.STARTED,
    payload: {
        name,
    },
})

export const requestEnded = (name, error) => ({
    type: constants.request.ENDED,
    payload: {
        name,
        error,
    },
})

export const setRequestError = (name, error) => ({
    type: constants.request.SET_ERROR,
    payload: {
        name,
        error,
    },
})
