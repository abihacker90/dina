import { useState } from "react";
import numberConverter from '../utils/ConverterFunction';
import '../App.css'

const Form = () => {
  const [number, setNumber] = useState("");
  const [numberStringName, setNumberStringName] = useState();
  
  return (
      <form>
        <h2>Convert your number</h2>
        <input
          type="number"
          required
          placeholder="Type a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button onClick={(e) => setNumberStringName(numberConverter(e, number))}>Convert</button>
        <h3> {numberStringName} </h3>
      </form>
  );
};

export default Form;
