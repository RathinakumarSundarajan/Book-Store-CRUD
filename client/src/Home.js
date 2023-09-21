import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './App.css';



const Home = () => {
    const [books,setBooks]= useState([])

    // useEffect(()=>{
    //     const fetchAllBooks=async()=>{
    //         try{
    //           const res = await axios.get("http://localhost:5000/books_tb")
    //           setBooks(res.data)
    //           console.log(res)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchAllBooks()
    // },[])

    const getAllBooks = async ()=>{
      const res = await axios.get("http://localhost:5500/books_tb"); //----Instead of "book_tb", we can use any name for this-------------------------
      setBooks(res.data)
      console.log(res.data);
    }
    useEffect(()=>{
      getAllBooks();
    },[]);


    const deleteBooks = async (id)=>{
      try{
        await axios.delete("http://localhost:5000/books_tb"+id)
        window.location.reload() /*---------------------------------Reload pages after deletion-----------------------*/
      }catch(err){
        console.log(err)
      }
      alert('books deleted succesfully')
      // getAllBooks()
    }



  return (
    <div className='home1'>
      <h1>WELCOME TO BOOK DEPO</h1>
      {books.map((data)=>(
        <div className='home' key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.cover}</p>
        <p>{data.descri}</p>
        <p>{data.price}</p>
        <button className='button' onClick={()=>deleteBooks(data.id)}>Delete</button>  
        <button className='button'><Link to={`/Update/${data.id}`}>Update</Link></button>   
        </div>
      ))}<br/>
    <button className='button'>
      <a href ="/Add">ADD NEW BOOK</a>
    </button>
       
    </div>
  )
}

export default Home
