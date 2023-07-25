import axios from '../api/axios';

const getAllReviews = () => {
  return axios.get('/reviews');
};

const getAllRoomReviews = () => {
  return axios.get('/reviews/rooms');
};

const getReviewById = (id) => {
  return axios.get(`/reviews/${id}`);
};

const ReviewsService = {
  getAllReviews,
  getAllRoomReviews,
  getReviewById,
};

export default ReviewsService;
