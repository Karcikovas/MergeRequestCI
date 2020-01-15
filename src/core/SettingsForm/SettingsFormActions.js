import { constants } from '../constants'

export const saveSettings = (data) => ({
    type: constants.form.SAVE,
    payload: {
        data,
    },
});
