import React, { useEffect, memo } from "react";
import { useCountDown } from "../hooks/useCountDown";
import styled, { keyframes, css } from "styled-components";

function Progress({
  timeInMilliseconds,
  stopTimer,
  countDownStarted,
  countDownTime,
  animationDuration,
}) {
  const [seconds, minutes] = useCountDown({
    timeInMilliseconds,
    countDownStarted,
    countDownTime,
  });

  /* customizar o tempo */
  const cMin = minutes < 10 ? `0` + minutes : minutes;
  const cSec = seconds < 10 ? `0` + seconds : seconds;

  // parar o timer e resetar
  useEffect(() => {
    if (minutes + seconds <= 0) {
      stopTimer();
      return;
    }
  });

  return (
    <div className="pg-container">
      <PgWidget>

      </PgWidget>
    </div>
  );
}

export default memo(Progress);

const left = keyframes`100% {transform: rotate(180deg)}`;
const right = keyframes`100% {transform: rotate(180deg)}`;

const PgWidget = styled.div`
  height: 194px;
  width: 194px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;
