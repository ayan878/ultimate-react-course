import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Questions from "./Questions.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import FinishScreen from "./FinishScreen.js";
import Footer from "./Footer.js";
import Timer from "./Timer.js";

const SECS_PER_QEUSTION =30;
function initialState() {
  return {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondRemaining:null,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", secondRemaining:state.questions.length * SECS_PER_QEUSTION, };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status, 
            };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points, highscore ,secondRemaining}, dispatch] =
    useReducer(reducer, initialState());
  const numQuestions = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

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
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              totalPoints={totalPoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondRemaining={secondRemaining}/>
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestion={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
