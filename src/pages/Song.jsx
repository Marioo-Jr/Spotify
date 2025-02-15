import React from 'react'
import Player from '../components/Player'
import { Link } from 'react-router-dom'

const Song = () => {
  return (
    <div className='song' >

      <div className="song__container">
        <div className='song__image-container'>

          <img src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="imagem da musica x" />

        </div>

      </div>

      <div className="song__bar">
        
        
        <Link to="/artist/1"  className='song__artist-image'>
          <img
           width={75}
           height={75}
           src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706" alt="imagem do artista Y" />
        </Link>

        <Player/> 
        <div>
          <p className='song_name' >Última Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>


      </div>


    </div>
  )
}

export default Song