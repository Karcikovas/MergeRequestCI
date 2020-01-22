import { constants } from '../constants'

export const saveSettings = (data) => ({
    type: constants.form.SAVE,
    payload: {
        data,
    },
})

export const getProjectsPerPage = (perPage) => ({
    type: constants.form.GET_PER_PAGE,
    payload: {
        perPage,
    },
});
