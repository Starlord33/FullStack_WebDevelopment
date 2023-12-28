import React from "react"
import scientist from "./scientistData"

function Profile() {

    const {id,name,img,prof,desc} = scientist
    return(
        <div>
            <img src={img} alt={name} />
            <h2 style = {{color:'blue', backgroundColor:'black'}}>{name}
            </h2>
            <p>{prof}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Profile