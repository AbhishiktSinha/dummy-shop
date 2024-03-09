import { useEffect, useState } from "react";
import debouncer from '../debouncer.js'
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../features/HomePage/redux/actions.js";

const {SET_QUERY} = ActionTypes;

let debouncedSearch = null;

export default function SearchBar() {
    
    const dispatch = useDispatch(); 

    // const [value, setValue] = useState();

    
    useEffect( ()=> {        
        
        debouncedSearch = debouncer( (query)=> {
            dispatch({
                type: SET_QUERY,
                payload: query,
            })            
        }, 500);        
        
    }, [])
    

    
    function changeHandler(e){
        const value = e.target.value;
        debouncedSearch(value);
    }
    
    return (
        <div className="search-container">
            <button className="material-symbols-rounded">search</button>
            <input                
                onChange={changeHandler}
                type="text" 
                placeholder="Search..."/>
        </div>
    )
}