import { constants } from '../../constants'

export const getProjectsPerPage = number => ({
    type: constants.settings.per_page.GET,
    payload: {
        number,
    },
})
