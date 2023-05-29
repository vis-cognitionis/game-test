import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import GameProps from "../interface/interface";

export const useGameData = () => {
  const {
    data: gameData,
    isLoading,
    refetch,
  } = useQuery<GameProps[]>(
    ["gameData"],
    async () => {
      const response = await axios.get("https://www.freetogame.com/api/games");
      return response.data;
    },
    {
      enabled: true,
      onError: () => {},
    }
  );

  return { gameData, isLoading, refetch };
};
