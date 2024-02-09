import { useState } from "react";

export const useSelected = (item) => {
  const [selectedItem, setSelectedItem] = useState(item);
  const changeItemHandler = (otherItem) => {
    setSelectedItem(otherItem);
  };
  return [selectedItem, changeItemHandler];
};

export default useSelected;
