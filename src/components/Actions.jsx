import React from "react";

function Actions() {
  return (
    <div className="ac-container">
      <div className="btn-container">
        <button>Inciar</button>
        <button>Tempo</button>
      </div>
      <form>
        <input type="text" placeholder="Quanto tempo temos?" />
      </form>
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
          <button>Limpar</button>
        </div>
      </div>
    </div>
  );
}

export default Actions;
