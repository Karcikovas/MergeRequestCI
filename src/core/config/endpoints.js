import { projectEndpoint } from './endpoints/project';

export const baseURL = "https://jsonplaceholder.typicode.com/todos/"

export const defaultHeaders = { 'Content-Type': 'application/json' };
export const formHeaders = { 'Content-Type': 'multipart/form-data' };

export const endpoints = {
    ...projectEndpoint
}
