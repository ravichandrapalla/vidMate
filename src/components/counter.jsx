import React, { useEffect, useState } from "react";

const Counter = (props) => {
  //const [count, setCount] = useState(props.counter.value);
  //console.log(props.counter.id);
  /*const handleCounterClick = (amount) => {
    setCount(count + amount);
  };*/
  //const imgUrl = "https://picsum.photos/200";
  //let classes = getBadgeClasses();
  function getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      props.counter.value <= 0
        ? props.counter.value < 0
          ? "bg-danger"
          : "bg-warning"
        : "bg-success";
    return classes;
  }
  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses()}>{props.counter.value}</span>
      </div>
      <div className="col">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => props.onCounterClick(props.counter, +1)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => props.onCounterClick(props.counter, -1)}
          disabled={props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(props.counter.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
