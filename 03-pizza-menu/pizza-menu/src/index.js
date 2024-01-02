import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./index.css"
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
  <div class="container">
    <Header/>
    <Menu pizzas={pizzaData} numPizzas={pizzaData.length}/>
    <Footer/>
  </div>
);

const Header = () => (
  <header class="header">
    {" "}
    <h1>Fast React Pizza Co.</h1>
  </header>
);

const Menu = ({ pizzas, numPizzas }) => (
  <div class="menu">
    <h2 class="menu">Our menu</h2>
    {numPizzas > 0 ? (
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
    ) : (
      <p>We're still working on our menu. Please come back later :)</p>
    )}
    {/* {pizzas.map((pizza, index) => (
      <Pizza key={index} pizza={pizza} />
    ))} */}
  </div>
);

const Footer = () => (
  <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
);

const Pizza = ({ pizza }) => (
  <div class="pizza">
    <img src={pizza.photoName} alt={pizza.name}></img>
    <h3>{pizza.name}</h3>
    <p>{pizza.ingredients}</p>
    <span>{pizza.price +3}</span>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);