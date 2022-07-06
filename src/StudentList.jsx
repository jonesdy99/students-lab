const StudentList = (props) => {
  return (
    <>
      <h1>Student List</h1>
      {props.students.map(student =>
          <h2>{student.name}: {student.bio}</h2>
        )}
    </>
  )
}

export default StudentList;