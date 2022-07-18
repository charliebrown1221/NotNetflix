import React,{useEffect,useState} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const Favorites = (props) => {
const [favoriteMovies ,setFavoriteMovies]=useState([])
const [user, token] = useAuth();




async function allFavoriteMovies(){
    try {
        let response = await axios.get('http://127.0.0.1:8000/api/favorites/all/', {
            headers: {
              Authorization: "Bearer " + token,
            },
          });

        console.log("get favorite Movies: ", response.data)
        setFavoriteMovies(response.data)
        
    } catch (error) {
        console.log("allFavoriteMovies",error.response.data)
    }
}

async function favoritedMovie(){
    try {
        let response = await axios.post(`http://127.0.0.1:8000/api/favorites/add/${movie_id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
           if (response.status===201){
            allFavoriteMovies()
           }

    } catch (error) {
        console.log("uploadMovie" ,error.response.data)
    }
}

















    return ( 
        <></>
     );
}
 
export default Favorites;