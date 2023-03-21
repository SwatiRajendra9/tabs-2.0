import React from "react";
import './App.css';


function Tabs(props) {
    return( 
        <div id='job-desc'>
            <p id='title'>{props.title}</p>
            <p id='name'>{props.company}</p>
            <p id='date'>{props.date}</p>
            {props.duties.map((element,index) =>
             <li id='desc'>{element}</li>
             )
            }
        </div> 
    )
   
}

export default Tabs;