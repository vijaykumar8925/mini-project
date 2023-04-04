import React, { useState } from "react";

import './tracker.style.scss';

const Tracker = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalBalArr, setFinalBalArr] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  let obj = {};

//   using useState react hooks access the state and setState properties in functions
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //declearing a varable to access input value in setState property through onChange

  const handleAddClick = () => {
    setTotalBalance((prevVal) => prevVal + Number(inputValue));
    let localDateValue = new Date(Date.now());
    obj.firstValue = localDateValue;
    obj.secondValue = inputValue;
    obj.thirdValue = "Add";
    setFinalBalArr([...finalBalArr, obj]);
    console.log(obj);
    obj = {};
  };
  console.log(finalBalArr);

  // declearing a varable to add expenses to Add button through onClick 

  const handleRemoveClick = () => {
    setTotalBalance((prevVal) => prevVal - Number(inputValue));
    let localDateValue = new Date(Date.now());
    obj.firstValue = localDateValue;
    obj.secondValue = Math.floor(inputValue);
    obj.thirdValue = "Remove";
    setFinalBalArr([...finalBalArr, obj]);
    console.log(obj);
    obj = {};

      // declearing a varable to remove expenses to Remove button through onClick   
  };

  return (
    <div className="overall">
        <h2>Expenses Tracker</h2>
        <div className="box">
      <h3 className="balance">
        Balance : <span>{totalBalance < 0 ? 0 : Math.floor(totalBalance)}</span>
      </h3>
      {/* using math.floor in span to convert decimal numbers to whole number  */}
      <input
         type={'number'}
        name="inputValue"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <div className="btn">
      {inputValue && <button onClick={handleAddClick}>Add</button>}

      {totalBalance > 0 && <button onClick={handleRemoveClick}>Remove</button>}
        </div>
        {/* using validation for buttons to visible */}
      </div>

      <div className="box-2">
        <h3 className="header">Transactions :</h3>
        <ul>
          {finalBalArr.map((data) => {
            console.log("data", data);
            return (
              <li>{`${data.firstValue}-${data.secondValue}-${data.thirdValue}`}</li>
            );
          })}
        </ul>
        {/* recording expenses transaction history with current date and time */}
      </div>
    </div>
  );
};

export default Tracker;
