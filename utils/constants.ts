export const SERVER_URL = `http://localhost:8080/api/v3`;
export const API_ENDPOINTS = {
  createUser: `${SERVER_URL}/user`,
  login: `${SERVER_URL}/user/login`,
  logout: `${SERVER_URL}/user/logout`,
  findPetByStatus: `${SERVER_URL}/pet/findByStatus`,
  findPetById: `${SERVER_URL}/pet`,
  updatePet: `${SERVER_URL}/pet`,
};
export const PAGE_URL = {
  home: "/",
  auth: "/auth",
  dashboard: "/dashboard",
};
