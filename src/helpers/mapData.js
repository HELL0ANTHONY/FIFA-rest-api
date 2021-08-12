const removeDuplicate = (array, key) => {
  const check = {};
  const res = [];
  array.forEach(element => {
    if (!check[element[key]]) {
      check[element[key]] = true;
      res.push(element);
    }
  });
  return res;
};

const mapData = array => {
  const players = array.map(player => {
    const name = player?.commonName.length
      ? player?.commonName
      : player?.firstName + " " + player?.lastName;
    return {
      name,
      position: player?.position,
      nation: player?.nation?.name,
      team: player?.club?.name
    };
  });

  return removeDuplicate(players, "name");
};

module.exports = mapData;
