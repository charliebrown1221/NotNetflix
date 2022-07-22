import React,{useState} from "react"; 
import "./SearchBar.css"
const SearchBar = (props) => {
   const [searchMovie, setSearchMovie]=useState('')
   
   const FilterMovies = (data) =>  {
    let  results = data.filter((item)  => {
        if (item.name === searchMovie||item.year === searchMovie||item.genres === searchMovie) {
            return true;}})
        
        props.setGetAllMoviesData(results)
        return results;
        }
        function handelFilter(event){
            event.preventDefault();
            FilterMovies(props.getAllMoviesData)
        }


   
   return (
     <>
       <form onSubmit={handelFilter}>
        <div className="searchBar"> 
      <input className="box" type='text' value={searchMovie} onChange={(event)=> setSearchMovie(event.target.value)} ></input>
      
      <button className='button' type='submit' placeholder='What song are you looking for'>Search</button>
        </div>
        </form>
     </> 
    );
}
 
export default SearchBar;