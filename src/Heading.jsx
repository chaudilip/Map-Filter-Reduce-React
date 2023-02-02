import React from "react";
function Heading() {
    const customSize = {
        color:"red",
        fontSize:"20px",
        border:"1px solid black"
      }
      
      let customStyle = {
        color:""
      }
      let greeting;
      const hours = new Date().getHours();
      if(hours > 1 && hours <12){
         greeting = "Good Morning";
         customStyle.color="red";
      }else if(hours > 12){
         greeting = "Good AfterNoon";
         customStyle.color="green";
      }else{
         greeting = "Good Night";
         customStyle.color="yellow";
      }
    return(
         <h1 style={customStyle}>{greeting}
    </h1>)

}

export default Heading;