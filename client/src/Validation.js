import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Validation = () => {

    const [validTitle, setValidTitle] = useState('')


    const checkData = () =>{
        axios.post("http://localhost:5500/checking",{validTitle}) //----------GETTING FOR CHECKING----------------------------------------
       .then(res => {
        if(res.data.message){
            setValidTitle(res.data.message);
        }else{
            setValidTitle(res.data[0].title);
          // setValidEmail(res.data[0].emails);
        }    
       })
       .catch(err => console.log(err));
    }



  return (
    <div>
      <input type='email' placeholder='Title' onChange={event=>setValidTitle(event.target.value)} name='email'/><br/>
      <button onClick={checkData}>Submit</button>     
    </div>
  )
}

export default Validation
