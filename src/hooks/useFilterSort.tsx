import React, { useMemo } from "react";

import { useAppContext } from "../state/app_context";
import { useGameData } from "../data/useGameData";
import GameCardProps from "../interface/data_types";

export const useFilterSort = () => {
  const { gameData } = useGameData();

  const { selectedFilters, selectedSort } = useAppContext();

  const getFilteredGameCards = (gameCards: GameCardProps[]) => {
    return gameCards.filter((card) => {
      const filters = selectedFilters;
      return (
        filters.length === 0 ||
        filters.some(
          (filter) => card.genre === filter || card.platform === filter
        )
      );
    });
  };

  let filteredGameCardList = getFilteredGameCards(gameData || []);

  switch (selectedSort) {
    case "Latest Release":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.release_date < b.release_date ? 1 : -1
      );
      break;
    case "Oldest Release":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.release_date > b.release_date ? 1 : -1
      );
      break;
    case "A-Z":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "Z-A":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    default:
      break;
  }

  return {
    filteredGameCardList,
  };
};
