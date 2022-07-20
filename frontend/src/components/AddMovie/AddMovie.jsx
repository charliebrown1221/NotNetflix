import React,{useState} from "react";


const AddMovie = (props) => {

 const [addName,setAddName]=useState('')




  function handelPost(event){
        event.preventDefault();
        props.getData(addName)
        console.log(props.getData)
        {props.getData.map((el)=>{
            return 
            
            })}
        // let newMovie ={
        // "name": 
        // "overview": 
        // "year": 
        // "genres": 
        // "poster_path": 
        // "fileName": 
        // };
        // console.log(newMovie);
        // props.uploadMovie(newMovie)
    }




    return (
         <>
         <form onSubmit={handelPost}>
            <div>
          
              
              <input  type="text" value={addName} onChange={(event)=> setAddName(event.target.value)} />
              <button type="submit">Create</button>
              </div>
            
        </form>
         </> 
    );
}
 
export default AddMovie;