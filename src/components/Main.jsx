import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  


  return (
    <div className="main">
      {/* Item List de Artistas */}
      <ItemList title = "Artistas" 
      items = {5}
      itemsArray = { artistArray } 
      path = "/artists" 
      idPath = "/artist" />
      
      {/* Item List de Musicas */}
      <ItemList title ="Musicas" 
      items = {10} 
      itemsArray = { songsArray } 
      path = "/songs" 
      idPath = "/song" />
    </div>
  );
};

export default Main;