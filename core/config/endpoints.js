import { mergeRequestsEndpoint } from './endpoints/mergeRequest'
import { projectsEndpoint, projectSearchEndpoint } from './endpoints/projects'

export const baseURL = 'https://gitlab.nfq.lt/api/v4/projects/'
export const GITLABtoken = 'ycrkB1KsU_1WGrmZxwkT'

export const defaultHeaders = {
    'Content-Type': 'application/json',
    'Private-Token': GITLABtoken,
}
export const formHeaders = { 'Content-Type': 'multipart/form-data' }

export const endpoints = {
    ...mergeRequestsEndpoint,
    ...projectsEndpoint,
    ...projectSearchEndpoint,
}
