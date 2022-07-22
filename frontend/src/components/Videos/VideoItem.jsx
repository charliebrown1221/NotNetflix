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
           <div className='btn'><button onClick={()=>handleClose()} >X</button></div>
           <div >{props.video.name}  </div>
           <div >{props.video.year}</div>
           <div >{props.video.genres}</div>
           <div >{props.video.overview}</div>
           <div><a href={`https://notnetflix2.s3.amazonaws.com/${props.video.fileName}`}> Play Video </a></div>
           </div>
           </>
            :null}</div>
          </>
    )
}
export default VideoItem;