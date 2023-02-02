import React from "react";
import Avater from "./Avatar";
import Email from "./Email";
function Card(props) {
   return ( 
   <div className="card">
    <div className="top">
      <p>{props.id}</p>
      <h2 className="name">{props.name}</h2>
        <Avater img={props.img} />
  </div>
  <div className="bottom">
    <Email phone={props.tel} email={props.email}/>
  </div>
  </div>
  );
}

export default Card;