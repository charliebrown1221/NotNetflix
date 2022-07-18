import React,{useEffect,useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./VideoPage.css"
import Videos from "../../components/Videos/Videos"
import Upload from "../../components/Upload/Upload"

const VideoPage = (props) => {
    
    const[getMovieData, setGetMovieData]=useState([])
    const[getAllMoviesData, setGetAllMoviesData]=useState([])
    // const[upload , setUpload]=useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        getData()
        getAllMovies()
      }, []);

    async function getData(){
        try {
            let response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=103bc152e61ef0926efa2aed8264d9e3&query=blankman')
            console.log("get DB data: ", response.data.results)
            setGetMovieData(response.data.results)
            
        } catch (error) {
            console.log("getData",error.response.data)
        }
    }
    async function getAllMovies(){
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/movies/all/')
            console.log("get BE Movie data: ", response.data)
            setGetAllMoviesData(response.data)
            
        } catch (error) {
            console.log("getAllMovies",error.response.data)
        }
    }

   async function uploadMovie(){
    try {
        let response = await axios.post('http://127.0.0.1:8000/api/movies/add/', {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
           if (response.status===201){
            getAllMovies()
           }

    } catch (error) {
        console.log("uploadMovie" ,error.response.data)
    }
}

    
    
    
    

    
    return ( 
    <>
    <h1 className="user">Welcome {user.username}</h1>
    <div>
    <Videos getAllMoviesData={getAllMoviesData} />
    </div>
    {/* <Upload uploadMovie={uploadMovie} getMovieData={getMovieData}/> */}
    </> 
    );
}
 
export default VideoPage;