import React from "react";

import Chip from "../../../core/components/chip/chip";
import RowItem from "./filter_row_item";
import { useAppContext } from "../../../view-model/app_context";

const SortSection = () => {
  const { chipsSelectedSorts, setChipsSelectedSorts } = useAppContext();

  const sortItems = ["Latest Release", "Oldest Release", "A-Z", "Z-A"];

  const handleSort = (item: string) => {
    const updatedSelectedSorts = chipsSelectedSorts.includes(item)
      ? chipsSelectedSorts.filter((el) => el !== item)
      : [item];

    setChipsSelectedSorts(updatedSelectedSorts);
  };

  return (
    <RowItem
      children={sortItems?.map((sort) => (
        <Chip
          key={sort}
          content={sort}
          selected={chipsSelectedSorts.includes(sort)}
          onPress={() => {
            handleSort(sort);
          }}
        />
      ))}
      title="Sort"
    />
  );
};

export default SortSection;
