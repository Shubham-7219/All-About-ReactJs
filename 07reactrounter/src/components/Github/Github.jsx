import React, { useState } from 'react'
import { useEffect } from 'react'

function Github(){

    const[data, setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/Shubham-7219')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
                setData(data)
        })
    }, [])
    return (
       <>
       <div>
        Github followers:{data.followers}
        <img src ={data.avatar_url}/>
       </div>
       </> 
    )
}

export default Github