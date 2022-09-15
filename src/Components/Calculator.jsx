import { evaluate } from "mathjs";
import React, { useState } from "react";
import "../Components/Calcutator.css";

const Calculator = () => {
  const [Answer, setAnswer] = useState("");
  const clicking = (event) => {
    setAnswer(Answer.concat(event.target.value));
  };
  const clearAll = () => {
    setAnswer("");
  };
  const calculation = () => {
    setAnswer(evaluate(Answer).toString());
  };

  return (
    <div className="box">
      <input type="text" placeholder="0" className="Ans-box" value={Answer} />
      <input type="button" value="9" className="button" onClick={clicking} />
      <input type="button" value="8" className="button" onClick={clicking} />
      <input type="button" value="7" className="button" onClick={clicking} />
      <input type="button" value="6" className="button" onClick={clicking} />
      <input type="button" value="5" className="button" onClick={clicking} />
      <input type="button" value="4" className="button" onClick={clicking} />
      <input type="button" value="3" className="button" onClick={clicking} />
      <input type="button" value="2" className="button" onClick={clicking} />
      <input type="button" value="1" className="button" onClick={clicking} />
      <input type="button" value="0" className="button" onClick={clicking} />
      <input type="button" value="." className="button" onClick={clicking} />
      <input type="button" value="+" className="button" onClick={clicking} />
      <input type="button" value="-" className="button" onClick={clicking} />
      <input type="button" value="*" className="button" onClick={clicking} />
      <input type="button" value="/" className="button" onClick={clicking} />
      <input type="button" value="%" className="button" onClick={clicking} />
      <input
        type="button"
        value=" = "
        className="button-last"
        onClick={calculation}
      />
      <input
        type="button"
        value="Clear"
        className="button-last"
        onClick={clearAll}
      />
    </div>
  );
};

export default Calculator;
