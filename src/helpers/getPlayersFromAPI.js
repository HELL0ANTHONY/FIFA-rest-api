const axios = require("axios");
const { baseURL } = require("../constants/constants");
const mapData = require("./mapData");

const axiosHelper = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getPlayersFromAPI = async () => {
  try {
    const NUMBER_OF_REQUESTS = 30;
    const promisePlayers = [...Array(NUMBER_OF_REQUESTS + 1).keys()]
      .slice(1)
      .map(page => axiosHelper(baseURL(page)));
    const dataFromAPI = await Promise.all(promisePlayers);
    const players = dataFromAPI.map(({ items }) => items).flat();
    return mapData(players);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getPlayersFromAPI;
