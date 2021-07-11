import React from "react";

function Emoji(props) {
   return (
      <span className="emoji" role="img" aria-label="Grinning Face">
         {props.img}
      </span>
   );
}

export default Emoji;
