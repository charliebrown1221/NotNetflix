import React,{useEffect,useState} from "react";



const Videos = ({getAllMoviesData})=> {

      const handleClick = () =>{
        {getAllMoviesData.map((el)=>{
          return<>
          <div >{el.name}  </div>
          <div >{el.year}</div>
          <div >{el.genres}</div>
          <div >{el.overview}</div>
            <div>
          <a href={`https://notnetflix2.s3.amazonaws.com/${el.fileName}`}> Play Video </a>
           </div>
           </>
          
          
          
          })}
          console.log(handleClick)
      }
    

    return (  
      <div>
       {getAllMoviesData.map((el)=>{
      return<> 
      <div ><img src={`https://image.tmdb.org/t/p/w200${el.poster_path}` }onClick={()=>handleClick()} /></div>
       </>
      
      
      
      })}
        
      </div>
    );
}
 
export default Videos;