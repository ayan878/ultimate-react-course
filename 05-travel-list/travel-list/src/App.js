// import Item from "../../final/src/components/Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 5, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form/>
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌴Far Away ⛱️</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What is you need for your 😍 trip </h3>
      <select>{Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}</select>
      <input type="text" placeholder="List..."></input>
      <button>ADD</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return <li><span style={item.packed ?{textDecoration:"line-through"} :{}}>{item.quantity} {item.description}</span><button>❌</button></li>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list,and you already packed X (X%)</em>
    </footer>
  );
}
