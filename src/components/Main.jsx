import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

const Main = () => {
  


  return (
    <div className="main">
      {/* Item List de Artistas */}
      <ItemList title = "Artistas" items = {5} />
      
      {/* Item List de Musicas */}
      <ItemList title ="Musicas" items = {10} />
    </div>
  );
};

export default Main;