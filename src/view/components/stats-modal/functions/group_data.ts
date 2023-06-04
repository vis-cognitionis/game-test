const groupData = (data: { [key: string]: any }) => {
  const result = [];

  const groupedData = Object.values(data).reduce((acc, mission) => {
    const { gameId, fails, playTime, wins } = mission;

    if (!acc[gameId]) {
      acc[gameId] = {
        gameId,
        fails,
        playTime,
        wins,
      };
    } else {
      acc[gameId].fails += fails;
      acc[gameId].playTime += playTime;
      acc[gameId].wins += wins;
    }

    return acc;
  }, {});

  for (const gameId in groupedData) {
    result.push(groupedData[gameId]);
  }

  return result;
};

export default groupData;
