import React from "react";

const ListGroup = ({
  items,
  onListChange,
  selectedItem,
  textProp,
  valueProp,
}) => {
  return (
    <div>
      <ul className="list-group clickable">
        {items.map((genre) => (
          <li
            key={genre._id}
            onClick={() => onListChange(genre)}
            className={
              genre[valueProp] === selectedItem._id
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProp]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id",
};

export default ListGroup;
