import "../massage.css"

import { forwardRef } from "react";
const Massage = forwardRef(({ username, massage }:any, ref:any) => {
  const isName = username === massage.username;
  return (
    <div ref={ref} className='congener__massage'>
      <div className={`massage__container }`}>
       
        <div className={`gary ${isName ? "blue" : ""}`}>
        <p>{massage.username}:</p>
            <h3>{massage.massage}</h3>
        </div>
      </div>
    </div>
  );
});

export default Massage;
