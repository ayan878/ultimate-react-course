import React from "react"; // Import React
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddfriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddfriend((show) => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friends }) {
  // const Friends = initialFriends;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name}
          {friend.balance}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {/* <button className="button">select</button> */}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function FormAddFriend({ onAddFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");

  function handleSubmit(e) {
    e.preventDefault(); //prevent to reload the entire page
    if (!name || !image) return;
    const id = crypto.randomUUID;
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👤Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🖼️Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      {/* <button className="button">Add friend</button> */}
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💸Bill value</label>
      <input type="text"></input>
      <label>💳Your expense</label>
      <input type="text"></input>
      <label>💳X's expense</label>
      <input type="text" disabled></input>
      <label>🤑Who is paying</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Your Friend</option>
      </select>
      {/* <button className="button">Add friend</button> */}
      <Button>Split bill</Button>
    </form>
  );
}
