import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
//import { useEffect } from "react/cjs/react.production.min";

function App() {
  const [page, setPage] = useState("List");
  const[questions,setquestions] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then(setquestions)
  },[]);

  function handleAddQuestion(newQuestion) {
    setquestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestionId) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestionId
    );
    setquestions(updatedQuestions)
  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    );
    setquestions(updatedQuestions);
  }


  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />

      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateQuestion={handleUpdateQuestion}
        />
      )}
    </main>
  );
}

export default App;
