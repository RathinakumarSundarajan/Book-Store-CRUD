import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './App.css'



const Add = () => {

  const [title,setTitle]=useState('')
  const [cover,setCover]=useState('')
  const [descri,setDescri]=useState('')
  const [price,setPrice]=useState(0)

  const navigate=useNavigate();

  const postData =async()=>{
    await axios.post("http://localhost:5500/books_tb",{title,cover,descri,price}) //----Instead of "book_tb", we can use any name for this, but matched with Backend url name------------------------
    navigate('/Home')
  }
   


  return (
    <div className='App'>
      <h1>ADD NEW ARRIVALS</h1>
      <input type='text' placeholder='title' onChange={event=>setTitle(event.target.value)} name='title'/><br/>
      <input type='text' placeholder='cover' onChange={event=>setCover(event.target.value)} name='cover'/><br/>
      <input type='text' placeholder='descri' onChange={event=>setDescri(event.target.value)} name='descri'/><br/>
      <input type='number' placeholder='price' onChange={event=>setPrice(event.target.value)} name='price'/><br/>
      <button onClick={postData}>Submit</button>
    </div>
  )
}

export default Add
