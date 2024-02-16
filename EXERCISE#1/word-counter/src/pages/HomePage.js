import Counter from "../components/Counter.js";
import Header from "../components/Header.js";

function HomePage() {
  return (
    <main>
      <Header
        heading="Word Counter"
        subHeading="Free online character and word counter"
      />
      <Counter />
    </main>
  );
}

export default HomePage;
