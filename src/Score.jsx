function Score(props) {
  return (
    <>
    <h3 className="red">Score: {props.score.score}</h3>
    <h3 className="red">Date: {props.score.date}</h3>
    </>
  );
}


export default Score;