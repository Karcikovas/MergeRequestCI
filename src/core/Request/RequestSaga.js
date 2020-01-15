import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { baseURL, defaultHeaders, endpoints } from '../config/endpoints';
import { requestEnded, requestStarted } from './RequestAction'

export const coreRequest = (method, url, data, params, customHeaders) => {
    const headers = customHeaders || defaultHeaders
    const options = {
        method,
        baseURL,
        url,
        headers,
        responseType: 'json',
    }

    if (method !== 'GET') {
        options.data = { ...data }
    }

    options.params = { ...params }

    return axios(options)
        .then(response => ({ response }))
        .catch(error => ({ error }))
}

export function* startRequest(name, url, data, params, customHeaders) {
    const method = endpoints[name] ? endpoints[name].url.method : 'GET'

    function* executeRequest() {
        const headers = {
            ...defaultHeaders,
            ...customHeaders,
        }

        yield put(requestStarted(name))

        return yield call(coreRequest, method, url, data, params, headers)
    }

    try {
        let { response, error } = yield executeRequest()

        if (error && error.response && error.response.status === 401) {
            const newResponse = yield executeRequest()
            response = newResponse.response
            error = newResponse.error
        }

        const errorData = error ? error.response.data.errors : undefined

        yield put(requestEnded(name, errorData))

        return { response, error }
    } catch (error) {
        yield put(requestEnded(name, error))

        return { response: null, error }
    }
}
