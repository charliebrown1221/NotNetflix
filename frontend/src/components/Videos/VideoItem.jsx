import react, { useState } from 'react'
import "./Video.css"

const VideoItem = (props)=>{
    const [showDetails, setShowDetails]= useState(false)

    const handleClick =()=>{
        setShowDetails(!showDetails)
    }
    const handleClose=()=>{
        setShowDetails(!showDetails)
    }

    return(
        < >
        <div className='movie'>
            
        <img  src={`https://image.tmdb.org/t/p/w200${props.video.poster_path}` }onClick={()=>handleClick()} />
        {showDetails ?
        
           < >
           <div className='info'>
            <div className='name'>{props.video.name}  </div>
           <div className='btn'><button onClick={()=>handleClose()} >X</button></div>
           
           <div className='video' ><a href={`https://notnetflix2.s3.amazonaws.com/${props.video.fileName}`}> Play Video </a></div>
           <div className='year'>{props.video.year}</div>
           <div className='genre'>{props.video.genres}</div>
           <div className='over'>{props.video.overview}</div>
           
           </div>
           </>
            :null}</div>
          </>
    )
}
export default VideoItem;