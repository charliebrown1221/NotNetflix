import React from 'react';
import "./Favorite.css"

const FavoriteMovies = ({favoriteMovieData}) => {
  // const [showDetails, setShowDetails]= useState(false)

  // const handleClick =()=>{
  //     setShowDetails(!showDetails)
  // }
  // const handleClose=()=>{
  //     setShowDetails(!showDetails)
  // }
    return ( 
    <>
    {favoriteMovieData.map((el)=>{
        console.log(favoriteMovieData)
      return( 
      <div className='favoriteInfo'>
      {el.name}
      {el.year}
      {el.genres}
      {el.poster_path}
      {el.fileName}
      {el.overview}
      </div>)
      })}
    </>
     );
}
 
export default FavoriteMovies;