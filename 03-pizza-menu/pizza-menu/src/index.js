import React from 'react';
import ReactDOM  from 'react-dom/client';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


const App = () => (
  <div>
    <Header />
    <Menu pizzas={pizzaData} />
    <Footer />
  </div>
);

const Header = () => <h1>Fast React Pizza Co.</h1>;

const Menu = ({ pizzas }) => (
  <div>
    <h2>Our menu</h2>
    {pizzas.map((pizza, index) => (
      <Pizza key={index} pizza={pizza} />
    ))}
  </div>
);

const Footer = () => (
  <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
);

const Pizza = ({ pizza }) => (
  <div>
    <img src={pizza.photoName} alt={pizza.name}></img>
    <h2>{pizza.name}</h2>
    <p>{pizza.ingredients}</p>
    <p>{pizza.price}</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);