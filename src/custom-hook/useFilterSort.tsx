import React from "react";

import { useAppContext } from "../view-model/app_context";
import { useGameData } from "../queries/useGameData";
import GameCardProps from "../interface/interface";

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
    case "new-to-old":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.release_date < b.release_date ? 1 : -1
      );
      break;
    case "old-to-new":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.release_date > b.release_date ? 1 : -1
      );
      break;
    case "a-z":
      filteredGameCardList = filteredGameCardList.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "z-a":
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
