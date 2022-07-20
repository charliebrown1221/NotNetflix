import react, { useState } from 'react'

const VideoItem = (props)=>{
    const [showDetails, setShowDetails]= useState(false)

    const handleClick =()=>{
        setShowDetails(!showDetails)
    }

    return(
        <>
        <img src={`https://image.tmdb.org/t/p/w200${props.video.poster_path}` }onClick={()=>handleClick()} />
        {showDetails ?
        <>
           <div >{props.video.name}  </div>
           <div >{props.video.year}</div>
           <div >{props.video.genres}</div>
           <div >{props.video.overview}</div>
           <div><a href={`https://notnetflix2.s3.amazonaws.com/${props.video.fileName}`}> Play Video </a></div>
           </>
            :null}
          </>
    )
}
export default VideoItem;