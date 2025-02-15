import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { artistArray } from '../assets/database/artists';
import { Link } from 'react-router-dom';

const SingleItem = ({id, name, image, banner, artist,idPath }) => {
  return (

    <Link to={`${idPath}/${id} `} className="single-item">
                    <div className="single-item__div-image-button">
                      <div className="single-item__div-image">
                        <img
                          className="single-item__image"
                          src={image}
                          alt={`Imagem do Artista X ${name}`}
                        />
                      </div>
        
                      <FontAwesomeIcon
                        className="single-item__icon "
                        icon={faCirclePlay}
                      />
                    </div>
        
                    <div className="single-item__texts">
                      <div className="single-item__2lines">
                        <p className="single-item__title">
                          {name}
                        </p>
                      </div>
        
                      <p className="single-item__type">{artist ?? "Artista"}</p>
                      {/* <p className="single-item__type">{artist === undefined ? "Artista": artist }</p> */}
                      {/* if (artist === undefined){
                        return "Artista"
                        }else {return {artist}}
                         */}
                    </div>
                  </Link>
  )
}

export default SingleItem