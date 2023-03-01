import { homeData, postData, menuData, postsWithCategoryData } from '../services/queries';
import { request } from '../services/api';

export const getHomePage = () => {
  let config = {
    method: 'post',
    data: homeData,
  };

  return request(config);
};

export const getPosts = () => {
  let config = {
    method: 'post',
    data: postData,
  };

  return request(config);
};

export const getMenuItems = () => {
  let config = {
    method: 'post',
    data: menuData,
  };

  return request(config);
};

export const getPostsWithCategoryName = () => {
  let config = {
    method: 'post',
    data: postsWithCategoryData,
  };

  return request(config);
};
