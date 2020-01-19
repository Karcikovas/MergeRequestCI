import { constants } from '../constants'

export const getMergeRequest = id => ({
    type: constants.merge_request.GET,
    payload: {
        id,
    },
})

export const setMergeRequest = requests => ({
    type: constants.merge_request.SET,
    payload: { requests },
})