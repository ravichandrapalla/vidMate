import React, { useState } from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={props.onReset}>
        Reset
      </button>
      {props.counter.map((item) => (
        <Counter
          key={item.id}
          onDelete={props.onDelete}
          counter={item}
          onCounterClick={props.onCounterClick}
        >
          {item.value}
        </Counter>
      ))}
    </>
  );
};

export default Counters;
