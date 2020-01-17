import { projectEndpoint } from './endpoints/project'

export const baseURL = 'https://gitlab.nfq.lt/api/v4/projects/'
export const GITLABtoken = 'rp2Yzj4hu38kyvnyoSCW'

export const defaultHeaders = {
    'Content-Type': 'application/json',
    'Private-Token': GITLABtoken,
}
export const formHeaders = { 'Content-Type': 'multipart/form-data' }

export const endpoints = {
    ...projectEndpoint,
}
