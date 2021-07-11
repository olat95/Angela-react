import React from "react";

function Footer() {
   const fullName = "Olatunji OluwaPelumi Samson";
   const now = new Date();
   const todayYear = now.getFullYear();
   return (
      <footer>
         <p>Created By {fullName}</p>
         <p>Copyright © {todayYear}</p>
      </footer>
   );
}

export default Footer;
