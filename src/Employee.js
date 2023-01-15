import React, { useState } from 'react';
import './style.css';

export default function Employee() {
  const [count, setCount] = useState(0);
  const [employeeId, setEmployeeId] = useState('');

  const increase = () => {
    setCount((state) => state + 1);
  };

  const getEmployeeDetails = () => {};

  return (
    <div>
      <h1>Hello Employee! {count}</h1>
      <button onClick={increase}> Increase</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={employeeId}
        name="id"
        placeholder="enter employee id"
        onChange={(event) => {
          setEmployeeId(event.target.value);
        }}
      />
      <br />

      {employeeId}
      <br />
      <br />
      <button onClick={getEmployeeDetails}> Fetch employee</button>
      <br />
    </div>
  );
}
