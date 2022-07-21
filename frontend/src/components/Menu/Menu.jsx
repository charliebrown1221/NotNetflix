import React,{useState} from "react";
import './Menu.css'
import AddMovie from '../AddMovie/AddMovie'



const Menu = (props) => {


 

    return (  
        <div className="wrapper">

        <input type="checkbox" id="navigation" />
        <label for="navigation">
            +
        </label>
        
        <nav>
            <ul>
                
                <li className="scroll">
                <AddMovie movieData={props.getMovieData} getData={props.getData} getAllMovies={props.getAllMovies} />
                </li>
                
            </ul>
           
        </nav>
        </div>
     );
}
 
export default Menu;