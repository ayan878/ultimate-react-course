function FinishScreen({ points, totalPoints }) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints}(
        {Math.ceil(percentage)}%)
      </p>
    </>
  );
}

export default FinishScreen;
