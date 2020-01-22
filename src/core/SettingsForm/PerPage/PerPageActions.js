import { constants } from '../../constants'

export const getProjectsPerPage = (perPage) => ({
    type: constants.settings.pages_number.GET,
    payload: {
        perPage,
    },
});
