import { mergeRequestsEndpoint } from './endpoints/mergeRequest'

export const baseURL = 'https://my-json-server.typicode.com/Karcikovas/MergeRequestCI'
// export const GITLABtoken = 'rp2Yzj4hu38kyvnyoSCW'

export const defaultHeaders = {
    'Content-Type': 'application/json',
    // 'Private-Token': GITLABtoken,
}
export const formHeaders = { 'Content-Type': 'multipart/form-data' }

export const endpoints = {
    ...mergeRequestsEndpoint,
}
