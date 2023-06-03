import React from "react";
import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import GameCardProps from "../interface/data_types";

export const useGameData = () => {
  const {
    data: gameData,
    isLoading,
    refetch,
  } = useQuery<GameCardProps[]>(
    ["gameData"],
    async () => {
      try {
        const response = await axios.get(
          "https://www.freetogame.com/api/games"
        );
        return response.data;
      } catch (error: any) {
        const axiosError = error as AxiosError;

        if (axiosError.code === "ERR_NETWORK") {
          console.log("Network Error");
        } else if (axiosError.response?.status === 404) {
          console.log("404 Error");
        } else if (axiosError.response?.status === 500) {
          console.log("Server Error");
        }
        throw error;
      }
    },
    {
      enabled: true,
    }
  );

  return { gameData, isLoading, refetch };
};
