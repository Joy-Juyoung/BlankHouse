import axios from '../api/axios';

const getAllReviews = () => {
  return axios.get('/reviews');
};

const getReviewById = (id) => {
  return axios.get(`/reviews/${id}`);
};

const ReviewsService = {
  getAllReviews,
  getReviewById,
};

export default ReviewsService;
