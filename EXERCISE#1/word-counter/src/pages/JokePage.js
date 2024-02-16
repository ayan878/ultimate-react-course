import { Header } from "../components/Header.js";
import { Joke } from "../components/Joke.js";

export const JokePage = () => {
  return (
    <main>
      <Header
        heading="ChuckNorris Jokes"
        subHeading="Free JSON API for hand curated Chuck Norris facts."
      />
      <Joke />
    </main>
  );
};
