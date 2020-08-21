import AxiosWrapper from "./axiosWrapper";
import CONFIG from '../utils/CONFIG';


const CommentAPI = {
  get: async (payload) => {
    try {
      const {id} = payload;
      const res = await AxiosWrapper.get(
        `comment/page/${id}`
        );
      return res;
    } catch (error) {
      // throw error;
      console.error(error);
    }
  },
  post: async (payload) => {
    try {
      const res = await AxiosWrapper.post('comment/write', payload);
      return res;
    } catch (error) {
      // throw error;
      console.error(error);
    }
  },
  event: async (payload) => {
    try {
        const { id, itemGb } = payload
      const res = await AxiosWrapper.post('comment/event/like', payload);
      return res;
    } catch (error) {
      // throw error;
      console.error(error);
    }
  },
//   delete: async (payload) => {
//     try {
//       const res = await AxiosWrapper.post('board/delete', payload);
//       return res;
//     } catch (error) {
//       // throw error;
//       console.error(error);
//     }
//   },
};

export default CommentAPI;