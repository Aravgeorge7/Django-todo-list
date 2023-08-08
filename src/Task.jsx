import { useState } from "react"
import React from "react"

export default function Task(props){

    const [comp, setComp] = useState(props.completed)

    React.useEffect(()=>{
        
        setComp(props.completed)

    },[props])

    return(
        <div className="task"> 
            <h3>Completed:</h3>
            <input type="checkbox" onChange={props.tick} />

            <div className="task-name">

                {comp?<strike>{props.title}</strike>:<h1>{props.title}</h1>}

            </div>

            
            <button className="update">Update</button>
            <button className="delete" onClick = {props.deleted}>Delete</button>

                
        </div>
    )

}