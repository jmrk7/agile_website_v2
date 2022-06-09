"use strict"

const { getApiClient } = require("./request")

async function sendSlackMessage(message) {
  try {
    const apiClient = await getApiClient(process.env.SLACK_API_BASE_URL);
    await apiClient.request({
      method: "POST",
      data: {
        text: message,
      },
    });

    return Promise.resolve();
  } catch (error) {
    console.log(error);
    throw new ApiError(`> Error while sending slack message`);
  }
}

module.exports = {
  sendSlackMessage,
};
