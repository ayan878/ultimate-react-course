import { useState } from "react";
import { Item } from "./Item";
export function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setsortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by the description</option>
          <option value="packed">Sort by the packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
