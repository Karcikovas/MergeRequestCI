import { constants } from '../../constants'

export const setPageNumber = pageNumber => ({
    type: constants.settings.page.SET,
    payload: {
        pageNumber,
    },
})
