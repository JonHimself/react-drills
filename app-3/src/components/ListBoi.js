import React from "react";

const ListBoi = (props) => {
  return (
    <div>
      {props.data
        .filter((e, i) => {
          return e.includes(props.string);
        })
        .map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
    </div>
  );
};

export default ListBoi;
