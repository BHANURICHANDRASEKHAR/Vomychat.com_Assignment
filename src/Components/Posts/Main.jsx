import React,{useState,useEffect} from 'react'
import {FetchData} from '../../data.js'
import Loader from '../../Loader.jsx';
import { useParams } from 'react-router-dom';
import Data from './data.jsx'
export default function Main() {
      const [SubDirects, setSubreddit] = useState([]);
      const [Loading, SetLoading] = useState(false);
      const {selectedtopic,category}=useParams()
  
      
        useEffect(() => {
            if(SubDirects.length==0)
            {
                FetchData(SetLoading,setSubreddit,category,selectedtopic)
            }
            
          }, []);
    if(Loading){
      return <Loader/>
    }
  return (
    <div className='container mt-3'>
     <h1>Welcome to VomyChat!</h1>
     <div className='row'>
     {
      SubDirects.length>0&&SubDirects.map((value,index)=>{
       return( <Data post={value} key={index}/>)
      })
     }
     </div>
    </div>
  )
}
