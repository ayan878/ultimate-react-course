import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 5, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems}  onToggleItems={handleToggleItems}/>
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away ⛱️</h1>;
}
function Form({ items, setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What is you need for your 😍 trip </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="List..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setDescription(description);
          setQuantity(quantity);
        }}
      >
        ADD
      </button>
    </form>
  );
}
function PackingList({ items, onDeleteItems,onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItems={onToggleItems} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItems ,onToggleItems}) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list,and you already packed X (X%)</em>
    </footer>
  );
}
