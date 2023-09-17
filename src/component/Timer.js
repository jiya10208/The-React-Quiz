import React, { useEffect } from "react";

export default function Timer({ dispatch, secondsRemiaing }) {
  const mins = Math.floor(secondsRemiaing / 60);
  const seconds = secondsRemiaing % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"} {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
