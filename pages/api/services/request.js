const axios = require("axios")

async function getApiClient(baseURL) {
  const apiClient = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return apiClient;
}

module.exports = {
  getApiClient,
};
