import { mergeRequestsEndpoint } from './endpoints/mergeRequest'
import { projectsEndpoint } from './endpoints/projects'

export const baseURL = 'https://gitlab.nfq.lt/api/v4/projects/'
export const GITLABtoken = 'rp2Yzj4hu38kyvnyoSCW'

export const defaultHeaders = {
    'Content-Type': 'application/json',
    'Private-Token': GITLABtoken,
}
export const formHeaders = { 'Content-Type': 'multipart/form-data' }

export const endpoints = {
    ...mergeRequestsEndpoint,
    ...projectsEndpoint,
}
