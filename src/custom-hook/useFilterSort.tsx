import React, { useMemo } from "react";

import { useAppContext } from "../view-model/app_context";
import { useGameData } from "../queries/useGameData";
import GameCardProps from "../interface/interface";

export const useFilterSort = () => {
  const { gameData } = useGameData();

  const { selectedFilters, selectedSort } = useAppContext();

  const getFilteredGameCards = (gameCards: GameCardProps[]) => {
    const filters = selectedFilters;
    if (filters.length === 0) {
      return gameCards;
    }
    return gameCards.filter(
      (card) => filters.includes(card.genre) || filters.includes(card.platform)
    );
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
