import React, { useState } from "react";

const ListAnimals = () => {
  let animals = ["dog", "cat", "fish"];
  const [text, setText] = useState("");
  const [array, setArray] = useState(animals);

  const onClickHandler = (event) => {
    console.log(text);
    if(text!=="" && text!==" "){
        console.log(animals);
        setArray((arr) => [...arr, text]);
        setText("");
    }
  };

  
  const handlerOnChange = (event) => {
    const { value} = event.target;
    setText(value);
  };

  return (
    <div>
      <ul>
        {array.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
      <br />
      <input
        type="text"
        placeholder="Value to add"
        name="toAdd"
        value={text}
        onChange={handlerOnChange}
      />
      <input type="button" onClick={onClickHandler} value="Add" />
    </div>
  );
};

export default ListAnimals;
