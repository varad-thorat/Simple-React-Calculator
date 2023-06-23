import './App.css';
import {useState} from 'react';

function App() {
  //declaring the variables
  const [calc,setCalc] = useState("");
  const [result,setResult] = useState("");

  //declaring the operators
  const ops = ['/','+','-','*','.'];

  //this function updates the display on the caculator
  const updateCalc = value =>{
    //checks whether the first element and the last element is operator or not
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString())  //eval function evaluates the string
    }
    setCalc(calc + value);
  }

  const calculate = () =>{
    setCalc(result.toString());
  }

  //this funciton deletes the last entered value
  const del = () =>{
    if(calc==''){
      return;
    }

    const val = calc.slice(0,-1);
    setCalc(val);
    // setResult(eval(val));
  } 

  //this clears the result
  const clr = () =>{
    setCalc("");
    setResult("");
  }

  const percent = () =>{
    const percent = result/100;
    setCalc(percent);
    setResult(percent);
  }

  //this function creates all the digit buttons from 1 to 9
  const createDigits = () =>{
    const digits = [];
    for(let i=1; i<10; i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }
  return (
  <div className='App'>  
    <div className="calculator">

      <div className="display">
        {result? <span>({result})</span> : ''} {calc || '0'}
      </div>

      <div className='ops'>
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('*')}>*</button>
        <button onClick={del}>Del</button>
        <button onClick={clr}>AC</button>
        <button onClick={percent}>%</button>
      </div>

      <div className='digits'>
        {createDigits()}
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={()=>updateCalc('.')}>.</button>
      </div>

    </div>
    </div>
  );
}

export default App;
