import React from "react";

function Actions({
  toggleForm,
  onToggle,
  timeInput,
  handleChange,
  countDownStarted,
  startTimer,
  stopTimer,
  usedTimes,
  setUsedTimes,
}) {
  return (
    <div className="ac-container">
      <div className="btn-container">
        {!countDownStarted ? (
          <button onClick={() => startTimer()}>Inciar</button>
        ) : (
          <button onClick={() => stopTimer()}>Parar</button>
        )}
        <button onClick={onToggle}>Tempo</button>
      </div>
      {toggleForm ? (
        <div className="input-form">
          <input
            type="number"
            placeholder="Quanto tempo temos?"
            onChange={handleChange}
            defaultValue={timeInput}
          />
        </div>
      ) : null}

      <div className="used-container">
        <div className="used-timers">
          <h2>Usados recentemente</h2>
          <ul>
            <li>
              <button>1 min</button>
            </li>
            <li>
              <button>5 min</button>
            </li>
            <li>
              <button>10 min</button>
            </li>
            <li>
              <button>15 min</button>
            </li>
          </ul>
        </div>
        <div className="reset">
          <button onClick={() => setUsedTimes() }>Limpar</button>
        </div>
      </div>
    </div>
  );
}

export default Actions;
