import React from "react";
import Card from "./components/Card";
import emojilopedia from "./emojilopedia.js";

function App() {
   return (
      <div>
         <h1>
            <span>Emojilopedia</span>
         </h1>

         <dl className="dictionary">
            {emojilopedia.map((lopedia) => {
               return (
                  <Card
                     key={lopedia.id}
                     id={lopedia.id}
                     symbol={lopedia.symbol}
                     name={lopedia.name}
                     desc={lopedia.description}
                  />
               );
            })}
         </dl>
      </div>
   );
}

// function createEmojiCard(lopedia) {
//    return (
//       <Card
//          key={lopedia.id}
//          id={lopedia.id}
//          symbol={lopedia.symbol}
//          name={lopedia.name}
//          desc={lopedia.description}
//       />
//    );
// }

// function App() {
//    return (
//       <div>
//          <h1>
//             <span>Emojilopedia</span>
//          </h1>

//          <dl className="dictionary">{emojilopedia.map(createEmojiCard)}</dl>
//       </div>
//    );
// }

export default App;
