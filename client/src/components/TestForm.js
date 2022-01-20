import React, { useState } from "react";

const TestForm = () => {
  const [form, setForm] = useState({
    input: "",
    input2: "",
  });
  const handlerOnChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    
  };

  return (
    <form onSubmit={handlerOnSubmit}>
      <label for="test">Somethimg</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="test"
        type="text"
        value={form.input}
        name="input"
        placeholder="Enter something"
        required={true}
      />
      <br />

      <label for="test2">Somethimg</label>
      <br />
      <input
        onChange={handlerOnChange}
        id="test2"
        type="text"
        value={form.input2}
        name="input2"
        placeholder="Enter something else"
      />

      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default TestForm;
