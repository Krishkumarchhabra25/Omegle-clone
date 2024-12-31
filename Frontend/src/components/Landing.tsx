import { useState } from "react"
import { Link } from "react-router-dom";


export const Landing =()=>{
    const [name , setName] =useState('');

    return <div>
        <h1>Landing Page</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <Link to={`/room/?name=${name}`} onClick={()=>{}}>Join</Link>
    </div>
}