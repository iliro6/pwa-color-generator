import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0000FF").all(10));

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      const colorPallete = new Values(color).all(10);
      setList(colorPallete);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="color-input"
            className={`${error ? "error" : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#0000FF"
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colors, index) => {
          return <SingleColor {...colors} key={index} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
