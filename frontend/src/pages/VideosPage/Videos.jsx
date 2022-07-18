import React,{useEffect,useState} from "react";
import axios from "axios";


const VideoPage = (props) => {
    
    const[getMovieData, setGetMovieData]=useState([])
    

    useEffect(() => {
        getData()
      }, []);

    async function getData(){
        try {
            let response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=103bc152e61ef0926efa2aed8264d9e3&query=blankman')
            console.log("get data: ", response.data.results)
            setGetMovieData(response.data.results)
            
        } catch (error) {
            console.log(error.response.data)
        }
    }



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return ( 
    <>
    
    </> 
    );
}
 
export default VideoPage;