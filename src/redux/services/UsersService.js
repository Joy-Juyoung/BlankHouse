import axios from '../api/axios';

const getAllUser = () => {
  return axios.get('/users');
};

const loginUser = (data) => {
  return axios.post('/users/log-in', data);
};

const logoutUser = (data) => {
  return axios.post('/users/log-out', data);
};

const registerUser = (data) => {
  return axios.post('/users', data);
};

const getUser = () => {
  return axios.get('/users/me');
};

const updateUser = (data) => {
  return axios.put(`/users/me`, data);
};

const UsersService = {
  getAllUser,
  loginUser,
  logoutUser,
  registerUser,
  getUser,
  updateUser,
};

export default UsersService;
