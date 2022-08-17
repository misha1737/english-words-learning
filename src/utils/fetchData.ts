import axios from "axios";
import store from "./../redux";
import { setUserData } from "./../redux/modules/user/reducer";
axios.defaults.baseURL = "http://localhost:4999";
export const postAPI = async (url: string, post: object, token?: string) => {
  try {
    let jwt: string | boolean = false;
    if (token) {
      jwt = `Bearer ${token}`;
    }
    const res = await axios.post(`/api/${url}`, post, {
      headers: { Authorization: jwt },
    });
    return res;
  } catch (error: any) {
    return error.response;
  }
};

export const getAPI = async (url: string, token?: string) => {
  try {
    let jwt: string | boolean = false;
    if (token) {
      jwt = `Bearer ${token}`;
    }
    const res = await axios.get(`/api/${url}`, {
      headers: { Authorization: jwt },
    });
    return res;
  } catch (error: any) {
    if (error.response.status == 403) {
      store.dispatch(setUserData(null));
    }
    return error.response;
  }
};

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`/api/${url}`, post, {
    headers: { Authorization: token || false },
  });

  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`/api/${url}`, post, {
    headers: { Authorization: token || false },
  });

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: token || false },
  });

  return res;
};
