import React, {useState} from "react";
const Button = (props) => {
    const [disp, setdisp] = useState(false);
  
    function showPara() {
      
      setdisp(true);
      
      const para = document.querySelector(".paragraph");
      if(setdisp){
        para.style.display = "block";
      }
    }
    return (
      <div>
        <p style={{display:"none"}} className="paragraph">
          Hello, I've learnt to use the full-stack evaluation tool. This makes me
          so happy
        </p>
        <button onClick={showPara} >Click for pargraph</button>
      </div>
    );
  };
  export default Button;