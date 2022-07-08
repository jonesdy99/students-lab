import Score from "./Score"

function Student(props) {
  const scoreList = props.student.scores.map(score => {
    return <Score score={score}/>
  })

  return (
    <>
      <h3 className="red">Name: {props.student.name}</h3>
      <h3 className="red">Bio: {props.student.bio}</h3>
      <h4>{scoreList}</h4>
    </>
  )
}

export default Student