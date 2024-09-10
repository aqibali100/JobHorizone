import axiosInstance from './AxiosInstance';
import apiRoutes from '../Constant';

const service = {
  //Users
  createUser: async (userData, config) => await axiosInstance.post(apiRoutes.user + '/register', userData, config),
  loginUser: async (userData, config) => await axiosInstance.post(apiRoutes.user + '/login', userData, config),
  sendResetPasswordEmail: async (email) => await axiosInstance.post(apiRoutes.user + '/password-reset-email', email),
  resetPassword: async (token, password) => {
    const data = { password };
    return await axiosInstance.post(`${apiRoutes.user}/reset-password/${token}`, data);
  },
  updateUserRole: async (userId, role, config) => await axiosInstance.patch(`${apiRoutes.user}/update-role/${userId}`, { role }, config),
  getUserById: async (userId, config) => await axiosInstance.get(`${apiRoutes.user}/user/${userId}`, config),

 // Jobs
 createJob: async (jobData, config) => await axiosInstance.post(apiRoutes.job, jobData, config),
 getAllJobs: async (config) => await axiosInstance.get(apiRoutes.job, config),
 getJobById: async (jobId, config) => await axiosInstance.get(`${apiRoutes.job}/${jobId}`, config),
 updateJobById: async (jobId, jobData, config) => await axiosInstance.put(`${apiRoutes.job}/${jobId}`, jobData, config),
 deleteJobById: async (jobId, config) => await axiosInstance.delete(`${apiRoutes.job}/${jobId}`, config),
};

export default service;