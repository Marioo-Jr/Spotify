import {artistArray} from "../../front-end/src/assets/database/artists.js"
import {songsArray} from "../../front-end/src/assets/database/songs.js"


const newArtistArray = artistArray.map((currentArtistObj)=>{
    const newArtistObj = {...currentArtistObj}
    delete newArtistObj.id

    return newArtistObj

});


const newSongArray = songArray.map((currentSongObj)=>{
    const newSongObj = {...currentSongObj}
    delete newSongObj.id

    return newSongObj

});