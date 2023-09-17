import React from "react";

export default function Progress({
  index,
  NumQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className=" progress">
      <progress max={NumQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions <strong>{index + 1}</strong>/ {NumQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}
