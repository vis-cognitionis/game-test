import React from "react";

import Chip from "../../../core/components/chip/chip";
import RowItem from "./row_item";
import { useAppContext } from "../../../state/app_context";

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
    <RowItem title="Sort">
      {sortItems?.map((sort) => (
        <Chip
          key={sort}
          content={sort}
          selected={chipsSelectedSorts.includes(sort)}
          onPress={() => {
            handleSort(sort);
          }}
        />
      ))}
    </RowItem>
  );
};

export default SortSection;
