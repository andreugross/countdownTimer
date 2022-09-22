import React from "react";
import { useState, memo } from "react";
import Actions from "./Actions";
import Progress from "./Progress";

function Timer() {
  const [toggleForm, setToggleForm] = useState(false);
  /* store the input min(s)*/
  const [timeInput, setTimeInput] = useState(1);
  /* toggle start and stop */
  const [countDownStarted, setCountDownStarted] = useState(false);
  /* time in milliseconds */
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0);
  /* used timers */
  const [usedTimes, setUsedTimes] = useState([]);
  /* start timer */
  const startTimer = () => {
    setCountDownStarted(true);

    // close form
    if (toggleForm) {
      setToggleForm(false);
    }

    // set new timer minutes (milliseconds)
    setTimeInMilliseconds(timeInput * 60 * 1000);
    // add the time to used times
    setUsedTimes((times) => times.concat(timeInput));
  };
  /* stop timer */
  const stopTimer = () => {
    setCountDownStarted(false);
    setTimeInMilliseconds(0);
  };

  /* toggle form */
  const onToggle = () => {
    setToggleForm((toggle) => (toggle = !toggle));
  };

  /* Get time from input and set time input */
  const handleChange = (e) => {
    const inputData = parseInt(e.target.value);
    setTimeInput(inputData);
  };

  // get time ahead in milliseconds
  const countDownTime = new Date().getTime() + timeInMilliseconds;

  return (
    <div className="timer">
      <Progress
        {...{
          timeInMilliseconds,
          stopTimer,
          countDownStarted,
          countDownTime,
        }}
      />
      <Actions
        {...{
          toggleForm,
          onToggle,
          handleChange,
          timeInput,
          countDownStarted,
          startTimer,
          stopTimer,
          usedTimes,
          setUsedTimes,
        }}
      />
    </div>
  );
}

export default memo(Timer);
