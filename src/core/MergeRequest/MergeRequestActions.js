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

export const deleteMergeRequest = id => ({
    type: constants.merge_request.DELETE,
    payload: { id },
})

export const setMergeRequestStatus = status => ({
    type: constants.merge_request.STATUS,
    payload: { status },
})
