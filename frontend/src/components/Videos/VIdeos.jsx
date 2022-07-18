import React,{useEffect,useState} from "react";



const Videos = ({getAllMoviesData})=> {



    return (  
      <div>
        {getAllMoviesData.map((el)=>{
      return<> 
      <div ><img src={`https://image.tmdb.org/t/p/w200${el.poster_path}`} alt="" /></div>
      <div >{el.name}  </div>
      <div >{el.year}</div>
      <div >{el.genres}</div>
      <div >{el.overview}</div>
        <div>
      <a href={`https://notnetflixmovies.s3.amazonaws.com/Movies/${el.fileName}`}> Play Video </a>
       </div>
     
      
      
      </>
    })}

        
      </div>
    );
}
 
export default Videos;