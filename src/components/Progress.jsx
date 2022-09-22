import React from "react";
import { useCountDown } from "../hooks/useCountDown";

function Progress({
  timeInMilliseconds,
  stopTimer,
  countDownStarted,
  countDownTime,
}) {

  const [seconds, minutes] = useCountDown({
    timeInMilliseconds,
    countDownStarted,
    countDownTime,
  })

  /* customizar o tempo */
  const cMin = minutes < 10 ? `0` + minutes : minutes;
  const cSec = minutes < 10 ? `0` + seconds : seconds;

  return <div className="pg-container">{ cMin } : { cSec }</div>;
}

export default Progress;
