// create get request with axios
import axios from "axios";
import type { BackendResponse } from "types/index";
import { getUrlParams } from "utils/index";

// create axios instance with base url
const api = axios.create({
  baseURL: "https://localhost:3001",
});

export const getFromApi = async (endpoint: string, query?: string) => {
  // get url params from object
  const params = getUrlParams(query);
  const response = await api.get(params ? `${endpoint}?${params}` : endpoint);
  return response.data;
};

export const postToApi = async (
  endpoint: string,
  data: BackendResponse,
  query?: string,
) => {
  const params = getUrlParams(query);
  const response = await api.post(
    params ? `${endpoint}?${params}` : endpoint,
    data,
  );
  return response.data;
};
