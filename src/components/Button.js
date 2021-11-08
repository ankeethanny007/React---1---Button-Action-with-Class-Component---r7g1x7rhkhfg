import React, { useState } from "react";
const Button = (props) => {
//   const [disp, setdisp] = useState(false);

  function showPara() {
    // setdisp(true);

    ReactDOM.render(
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>,
      document.querySelector(".div-container")
    );
  }
  return (
    <div className="div-container">
      <button onClick={showPara} id="click">
        text render
      </button>
    </div>
  );
};
export default Button;
