import React from "react";
import Avatar from "./Avatar";
import Details from "./Detailinfo";

function Card(props) {
   return (
      <div>
         <div className="card">
            <div className="top">
               <p className="info">{props.identity}</p>
               <h2 className="name">{props.name}</h2>
               <Avatar img={props.img} />
            </div>
            <div className="bottom">
               <Details detailInfo={props.email} />
               <Details detailInfo={props.tel} />
            </div>
         </div>
      </div>
   );
}

export default Card;
