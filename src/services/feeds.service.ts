import { axiosInstance, RequestUrl } from 'utils';

export const fetchFeeds = async () => {
  return axiosInstance.get(RequestUrl.FetchFeeds);
};
