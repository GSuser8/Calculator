import React, {useState} from "react";
import {evaluate} from "mathjs";

function App(){

  const [exp, setExp] = useState("");

  function handleClick(event){
    const op = event.target.innerHTML;
    const curExp = exp+op;
    //console.log(curExp);
    setExp(curExp);
  }

  function handleCross(){
    const newExp = exp.slice(0,-1);
    setExp(newExp);
  }

  function handleC(){
    setExp("");
  }

  function handleAns(){
    const lOperator = exp[exp.length-1];
    if(lOperator === '+' || lOperator === '-' || lOperator === '*' || lOperator === '/' || lOperator === '.'){
      setExp(exp);
    }else{
      const ans = evaluate(exp);
      setExp(String(ans));
    }
  }

  return (
    <div className ="container">
      <div id="display">{exp}</div>
      <div className="calC">
        <button onClick={handleC} className="mid">C</button>
        <button onClick={handleClick} className="mid">%</button>
        <button onClick={handleClick} className="mid">.</button>
        <button onClick={handleClick} className="light">+</button>
        <button onClick={handleClick} className = "dark">7</button>
        <button onClick={handleClick} className = "dark">8</button>
        <button onClick={handleClick} className = "dark">9</button>
        <button onClick={handleClick} className="light">-</button>
        <button onClick={handleClick} className = "dark">4</button>
        <button onClick={handleClick} className = "dark">5</button>
        <button onClick={handleClick} className = "dark">6</button>
        <button onClick={handleClick} className="light">*</button>
        <button onClick={handleClick} className = "dark">1</button>
        <button onClick={handleClick} className = "dark">2</button>
        <button onClick={handleClick} className = "dark">3</button>
        <button onClick={handleClick} className="light">/</button>
        <button onClick={handleClick} className="dark">0</button>
        <button onClick={handleCross} className="dark">X</button>
        <button onClick={handleAns} style={{gridColumn:"span 2"}}>=</button>
      </div>
    </div>
  );
}

export default App;