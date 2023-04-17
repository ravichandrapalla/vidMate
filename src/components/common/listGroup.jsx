import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;
  console.log("items from genre are", items);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;

/*const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem } = props;
  console.log("items from genre are", items);

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => props.onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
   textProperty:"name",
  valueProperty:"_id",
};

export default ListGroup;

/*<ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => props.onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>*/

/*const ListGroup = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <li
          onClick={() => props.onItemSelect(item)}
          key={item._id}
          className={
            item === props.selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;*/
