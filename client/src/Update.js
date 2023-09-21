import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'


const Update = () => {

  const [title,setTitle]=useState('')
  const [cover,setCover]=useState('')
  const [descri,setDescri]=useState('')
  const [price,setPrice]=useState(0)
  // const [dataID,setDataID]=useState('');


  const location = useLocation()
  const navigate=useNavigate();
  console.log(location)
   const bookID = location.pathname.split['/'][2];

  const postData =async()=>{
    await axios.put (`http://localhost:5500/books_tb/${bookID}`,{title,cover,descri,price});
    // await axios.put ('http://localhost:5000/books_tb/'+dataID,{title,cover,descri,price});
    navigate('/Home')
  }

  // useEffect(()=>{
  //   setDataID(localStorage.getItem('dataID'))
  //   setTitle(localStorage.getItem('title'))
  //   setCover(localStorage.getItem('descri'))
  //   setPrice(localStorage.getItem('price'))
  // },[])
   


  return (
    <div>
      <h1>Update the Books</h1>
      <input type='text' placeholder='title' onChange={event=>setTitle(event.target.value)} name='title'/>
      <input type='text' placeholder='cover' onChange={event=>setCover(event.target.value)} name='cover'/>
      <input type='text' placeholder='descri' onChange={event=>setDescri(event.target.value)} name='descri'/>
      <input type='number' placeholder='price' onChange={event=>setPrice(event.target.value)} name='price'/>
      <button onClick={postData}>Submit</button>
    </div>
  )
}

export default Update
