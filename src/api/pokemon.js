import api from "./config";

export const getType = () => {
  return api.get("/type");
};
