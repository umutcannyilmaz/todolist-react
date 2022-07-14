import { useState } from "react";
import "./List.css";

function List ({liste,filtered,setList}){

    return (
        <>
        <ul>

       {
        filtered.map((item,i)=> (
            <li 
            key={i} 
            onClick={()=>{ setList(()=>liste.map((el)=> el.id === item.id ? {...el, completed: !el.completed}: {...el} ) )     }    }
            className= {item.completed ? "yapildi" : ""}
            > {item.görev} </li>
        ))
       }
    
        </ul>
        
        </>

    )
}

export default List;