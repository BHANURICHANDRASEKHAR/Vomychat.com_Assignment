import React, { useEffect, useState,useContext } from 'react'
import Loader from '../../Loader.jsx'
import { useParams } from 'react-router-dom'
import { UserContextApi } from '../Context/UserContext.jsx'
import {fetchTopKeywords} from '../../data.js'
import './index.css'
import { Alert } from 'react-bootstrap'
import UI from './UI.jsx'
export default function Main() {
   
    const [loader,setloader]=useState(false)
    const {Category,SetCategory,Topics,SetTopics}=useContext(UserContextApi)
    const {category}=useParams();
     
    useEffect(()=>{
      SetCategory(category)
      
      if(Topics.length==0)
      {
        fetchTopKeywords(setloader,SetTopics,category)
      }
    },[])
  
    if(loader)
    {
        return <Loader />
    }
  return (
    <div className="container text-light" style={{marginTop:'1.5cm'}}>
    <Alert  variant='warning' className='text-dark alert-msg fs-5'>
          <b>Select any one of the Keyword</b>
    </Alert>
    <div className='row'>
    {
      Topics.length>0 && (
          Topics.map((keyword,index)=>(
              <UI key={keyword.id} cat={keyword} category={category}/>
          ))
      )
    }
    </div>
     </div>

  )
}
