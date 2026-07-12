import API from "./api";

export const addTrain = (data) => {
  return API.post(
    "/train/add",
    data
  );
};

export const searchTrain = (data) => {
  return API.get(
    "/train/search",
    {
      params: data,
    }
  );
};