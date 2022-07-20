import React,{useEffect,useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./VideoPage.css"
import Videos from "../../components/Videos/Videos"
import Upload from "../../components/Upload/Upload"
import SearchBar from "../../components/SearchBar/SearchBar"
import AddMovie from "../../components/AddMovie/AddMovie";
const VideoPage = (props) => {
    
    const[getMovieData, setGetMovieData]=useState([])
    const[getAllMoviesData, setGetAllMoviesData]=useState([])
    // const[upload , setUpload]=useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        getData()
        getAllMovies()
      }, []);

    async function getData(getInfo){
        try {
            let response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=103bc152e61ef0926efa2aed8264d9e3&query=${getInfo}`)
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

 

    
    
    
    

    
    return ( 
    <>
   <SearchBar getAllMoviesData={getAllMoviesData}  setGetAllMoviesData={setGetAllMoviesData}/> <h1 className="user">Welcome {user.username}</h1>
   <AddMovie movieData={getMovieData} getData={getData} getAllMovies={getAllMovies} />
 
    <div>
    <Videos getAllMoviesData={getAllMoviesData} />
    </div>
    
    </> 
    );
}
 
export default VideoPage;