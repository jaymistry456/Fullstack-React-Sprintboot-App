import { apiClient } from "./apiClient";

export const retrieveAllTodosForUsernameApi = (username) => apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, body) => apiClient.put(`/users/${username}/todos/${id}`, body);

export const createTodoApi = (username, body) => apiClient.post(`/users/${username}/todos`, body);