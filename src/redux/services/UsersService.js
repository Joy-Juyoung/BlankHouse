import axios from '../api/axios';

const getAllUser = () => {
  return axios.get('/users');
};

const registerUser = (data) => {
  return axios.post('/users', data);
};

const getUser = () => {
  return axios.get('/users/me');
};

const updateUser = (id, data) => {
  return axios.put(`/users/me/${id}`, data);
};

const UsersService = {
  getAllUser,
  registerUser,
  getUser,
  updateUser,
};

export default UsersService;
