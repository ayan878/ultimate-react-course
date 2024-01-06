export default function App() {
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>
}
function Logo() {
  return <h1>Far Away🎉</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h1>What is you need for your trip </h1>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      <em>You have X items on your lsit,and you already packed X (X%)</em>
    </footer>
  );
}
