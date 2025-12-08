import { apiClient } from "./apiClient";

export const executeJwtAuthenticationService = (username, password) =>
  apiClient.post('/authenticate', { username, password });
