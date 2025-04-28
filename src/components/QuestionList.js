
import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions,  onDeleteQuestion, onUpdatedQuestion}) {
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((questions) =>
        <QuestionItem 
        key={questions.id}
        question={questions}
        onDeleteQuestion={onDeleteQuestion}
        onUpdatedQuestion={onUpdatedQuestion}
        />
        )}
        {/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
