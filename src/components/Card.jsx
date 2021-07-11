import React from "react";
import Emoji from "./Emoji";
import Title from "./Title";
import Details from "./Details";

//props.desc- desc comes from app.js
//img={props.symbol}-img comes from emoji.js and symbol comes from app.js
function Card(props) {
   return (
      <div className="term">
         <p>{props.id}</p>
         <dt>
            <Emoji img={props.symbol} />
            <Title title={props.name} />
         </dt>
         <dd>
            <Details detailsdesc={props.desc} />
         </dd>
      </div>
   );
}

export default Card;
