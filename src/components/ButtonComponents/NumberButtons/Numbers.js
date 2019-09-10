import React, {useState} from "react";
import {numbers, operators, specials} from '../../../data';
import NumberButton  from '../NumberButtons/NumberButton'

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  const { numbers } = props;
  console.log()
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        numbers.map(
          (numberName, index) => (
            <NumberButton 
              key={numberName}
              name={numberName}
            />
          )
        )
      }
    </div>
  );
};
