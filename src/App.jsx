import React from "react";
import Card from "./components/Card.jsx";
import contacts from "./contact.js";
import Avatar from "./components/Avatar.jsx";

//{contact.name}== name here is from contact.js
//tel={contact.telephone} == telephone is from contact.js while tel has been hooked up with props

function createCard(contact) {
   return (
      <Card
         identity={contact.id}
         key={contact.id}
         name={contact.name}
         img={contact.img}
         email={contact.email}
         tel={contact.telephone}
      />
   );
}

function App() {
   return (
      <div>
         <h1 className="heading">My Contacts</h1>
         <Avatar img="https://upload.wikimedia.org/wikipedia/commons/b/be/Chris_Tucker_1996.jpg" />

         {contacts.map(createCard)}

      </div>
   );
}

export default App;
