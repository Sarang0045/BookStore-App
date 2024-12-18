import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom';
import axios from "axios";

function Course() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getbook = async()=>{
      try{
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getbook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center just text-center'>
        <h1 className='text-3xl md:text-4xl'>We delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem minus ad nihil soluta officia fuga consectetur. Amet itaque deserunt incidunt suscipit sed, ab magnam illo voluptatem, molestiae recusandae molestias reiciendis facere veritatis vel non eius, rerum esse. Dolorum recusandae delectus deserunt maxime temporibus nam, autem vitae asperiores laborum excepturi! Expedita.</p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Cards item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course