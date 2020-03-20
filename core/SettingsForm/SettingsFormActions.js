import { constants } from '../constants'

export const saveSettings = data => ({
    type: constants.settings.SAVE,
    payload: {
        data,
    },
})
