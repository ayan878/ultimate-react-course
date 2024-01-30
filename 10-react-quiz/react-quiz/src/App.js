import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";

function initialState() {
  return {
    questions: [],
    status: "loading",
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState()); // Initialize with initialState instead of 0

 useEffect(() => {
   fetch("http://localhost:8000/questions")
     .then((res) => res.json())
     .then((data) => {
       dispatch({ type: "dataReceived", payload: data });
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
       dispatch({ type: "dataFailed" });
     });
 }, []);


  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}

export default App;
