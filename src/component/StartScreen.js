import React from "react";

export default function StartScreen({ dispatch, NumQuestions = 10 }) {
  return (
    <div>
      <h2>Welcome to The React Quix</h2>

      <h3>{NumQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
