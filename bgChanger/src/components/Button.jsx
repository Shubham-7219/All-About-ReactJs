import React from "react";

function Button({color,onClick}){
   
    return(
       <button className={`bg-${color}-400 m-3 rounded-2xl`} onClick={() => onClick(color)}>{color}</button>
    )
}

export default Button