const axios = require("axios");
const { baseURL } = require("../constants/constants");

const aux = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getPlayersFromAPI = async () => {
  try {
    const NUMBER_OF_REQUESTS = 11;
    const promisePlayers = [...Array(NUMBER_OF_REQUESTS).keys()]
      .slice(1)
      .map(id => aux(baseURL(id)));
    const players = await Promise.all(promisePlayers);
    console.log(players);
  } catch (error) {
    console.log(error);
  }
};
// NO TE OLVIDES DE BORRAR ESTO
getPlayersFromAPI();

module.exports = getPlayersFromAPI;
