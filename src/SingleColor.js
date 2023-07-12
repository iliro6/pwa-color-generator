import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, rgb, index, hex }) => {
  const stringColor = rgb.join(",");
  const hexcolor = rgbToHex(...rgb);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"} `}
      style={{ background: `rgb(${stringColor})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexcolor);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexcolor}</p>
      {alert && <p className={`alert ${alert && "alert-hide"}`}>copied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
